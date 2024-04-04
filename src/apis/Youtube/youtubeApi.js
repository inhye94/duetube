export default class YoutubeApi {
  constructor(httpClient) {
    this.httpClient = httpClient;
  }

  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  }

  async detail(videoId) {
    return this.httpClient
      .detail({
        params: {
          part: "snippet,contentDetails,statistics",
          id: videoId,
        },
      })
      .then((res) => res.data.items[0])
      .catch(() => alert("비디오 상세 정보에서 에러났서요!"));
  }

  async channel(channelId) {
    return this.httpClient
      .channel({
        params: {
          part: "snippet,contentDetails,statistics",
          id: channelId,
        },
      })
      .then((res) => res.data.items[0])
      .catch(() => alert("채널 상세 정보에서 에러났서요!"));
  }

  async detailAndChannel(videoId) {
    const detail = await this.detail(videoId);
    const channel = await this.channel(detail.snippet.channelId);

    return { detail, channel };
  }

  async #searchByKeyword(keyword) {
    return this.httpClient
      .search({
        params: {
          part: "snippet",
          maxResults: 25,
          q: keyword,
        },
      })
      .then((res) =>
        res.data.items
          .filter((v) => v.id.videoId)
          .map((v) => ({ ...v, id: v.id.videoId }))
      )
      .catch(() => alert("검색에서 에러났서요!"));
  }

  async #mostPopular() {
    return this.httpClient
      .popular({
        params: {
          part: "snippet,statistics",
          chart: "mostPopular",
          regionCode: "KR",
          maxResults: 25,
        },
      })
      .then((res) => res.data.items)
      .catch(() => alert("인기 추천에서 에러났서요!"));
  }
}
