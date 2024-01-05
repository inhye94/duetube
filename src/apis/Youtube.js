// NOTE: Videos 컴포넌트에서 많이 노출되는 api 관련 코드 & 가독성 개선

export default class Youtube {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  }

  async detail(videoId) {
    return this.#detailByVedioId(videoId);
  }

  async channel(channelId) {
    return this.#channelById(channelId);
  }

  #searchByKeyword(keyword) {
    // NOTE: 네트워크 통신할 때, 유효한 포맷으로 변경
    return this.apiClient
      .search({
        params: {
          part: "snippet",
          maxResults: 25,
          q: keyword,
          type: "video",
        },
      })
      .then((res) => res.data.items)
      .then((items) => items.map((item) => ({ ...item, id: item.id.videoId })));
  }

  #mostPopular() {
    return this.apiClient
      .videos({
        params: {
          part: "snippet,statistics",
          chart: "mostPopular",
          regionCode: "KR",
          maxResults: 25,
        },
      })
      .then((res) => res.data.items);
  }

  #detailByVedioId(videoId) {
    return this.apiClient
      .detail({
        params: {
          part: "snippet,contentDetails,statistics",
          id: videoId,
        },
      })
      .then((res) => res.data.items[0]);
  }

  #channelById(channelId) {
    return this.apiClient
      .channel({
        params: {
          part: "snippet,contentDetails,statistics,brandingSettings",
          id: channelId,
        },
      })
      .then((res) => res.data.items[0]);
  }
}
