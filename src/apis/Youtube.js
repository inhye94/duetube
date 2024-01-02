// NOTE: Videos 컴포넌트에서 많이 노출되는 api 관련 코드 & 가독성 개선

import axios from "axios";

export default class Youtube {
  constructor() {
    this.httpClient = axios.create({
      baseURL: "https://youtube.googleapis.com/youtube/v3/",
      params: {
        key: process.env.REACT_APP_YOUTUBE_API_KEY,
      },
    });
  }

  async search(keyword) {
    // NOTE: 프라이빗 함수로 외부 노출 막음
    console.log(process.env.REACT_APP_YOUTUBE_API_KEY);
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  }

  #searchByKeyword(keyword) {
    // NOTE: 네트워크 통신할 때, 유효한 포맷으로 변경
    return this.httpClient
      .get("search", {
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
    return this.httpClient
      .get("videos", {
        params: {
          part: "snippet",
          chart: "mostPopular",
          regionCode: "KR",
          maxResults: 25,
        },
      })
      .then((res) => res.data.items);
  }
}

export function search(keyword) {
  return axios
    .get(`/datas/${keyword ? "search" : "popular"}.json`)
    .then((res) => res.data.items);
}
