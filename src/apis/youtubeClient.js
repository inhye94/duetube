// NOTE: Videos 컴포넌트에서 많이 노출되는 api 관련 코드 & 가독성 개선

import axios from "axios";

export default class YoutubeClient {
  constructor() {
    this.httpClient = axios.create({
      baseURL: "https://youtube.googleapis.com/youtube/v3/",
      params: {
        key: process.env.REACT_APP_YOUTUBE_API_KEY,
      },
    });
  }

  async search(params) {
    return this.httpClient.get("search", params);
  }

  async videos(params) {
    return this.httpClient.get("videos", params);
  }

  async detail(params) {
    return this.httpClient.get("videos", params);
  }

  async channel(params) {
    return this.httpClient.get("channels", params);
  }
}
