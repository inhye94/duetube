import axios from "axios";

export default class QaYoutubeClient {
  async search() {
    return axios.get("/data/search.json");
  }

  async popular() {
    return axios.get("/data/popular.json");
  }

  async detail() {
    return axios.get("/data/detail.json");
  }

  async channel() {
    return axios.get("/data/channel.json");
  }
}
