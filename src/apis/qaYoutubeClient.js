// NOTE: Videos 컴포넌트에서 많이 노출되는 api 관련 코드 & 가독성 개선

import axios from "axios";

export default class QaYoutubeClient {
  async search() {
    return axios.get("/datas/search.json");
  }

  async videos() {
    return axios.get("/datas/popular.json");
  }

  async detail() {
    return axios.get("/datas/detail.json");
  }

  async channel() {
    return axios.get("/datas/channel.json");
  }
}
