// NOTE: Videos 컴포넌트에서 많이 노출되는 api 관련 코드 & 가독성 개선

import axios from "axios";

export default class QaYoutube {
  constructor() {}

  async search(keyword) {
    // NOTE: 프라이빗 함수로 외부 노출 막음
    return keyword ? this.#searchByKeyword() : this.#mostPopular();
  }

  #searchByKeyword() {
    // NOTE: 네트워크 통신할 때, 유효한 포맷으로 변경
    return axios
      .get(`/datas/search.json`)
      .then((res) => res.data.items)
      .then((items) => items.map((item) => ({ ...item, id: item.id.videoId })));
  }

  #mostPopular() {
    return axios.get(`/datas/popular.json`).then((res) => res.data.items);
  }
}
