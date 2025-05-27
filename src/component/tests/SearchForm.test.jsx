import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { Route } from "react-router-dom";
import { withRouter } from "../../tests/utils";
import SearchBar from "../SearchForm";

// 테스트용 검색어와 이벤트 핸들러
const keyword = "테스트 검색어";
const blurEvent = jest.fn();

// react-router-dom의 useNavigate를 mocking
const mockedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedNavigate,
}));

describe("SearchForm", () => {
  describe("초기 렌더링", () => {
    it("keyword가 없을 때", () => {
      const { asFragment } = render(
        withRouter(
          <Route path="/" element={<SearchBar blurEvent={blurEvent} />} />
        )
      );

      expect(asFragment()).toMatchSnapshot();
    });

    it("keyword가 있을 때, input 값 업데이트", () => {
      render(
        withRouter(
          <Route
            path="/search/:keyword"
            element={<SearchBar blurEvent={blurEvent} />}
          />,
          `/search/${keyword}`
        )
      );

      // getByDisplayValue = input의 value가 특정 값일 때 찾기
      expect(screen.getByDisplayValue(keyword)).toBeInTheDocument();
    });
  });

  describe("Submit이 되지 않는 경우", () => {
    beforeEach(() => {
      mockedNavigate.mockClear();
    });

    it("검색어가 빈 값", () => {
      const { getByRole } = render(
        withRouter(
          <>
            <Route path="/" element={<SearchBar blurEvent={blurEvent} />} />
          </>
        )
      );

      const button = getByRole("button", { name: "검색" });
      fireEvent.submit(button);

      expect(mockedNavigate).toHaveBeenCalledTimes(0);
    });

    it("검색어가 이전 값과 동일", () => {
      const { getByRole } = render(
        withRouter(
          <Route
            path={`/search/${keyword}`}
            element={<SearchBar blurEvent={blurEvent} />}
          />,
          `/search/${keyword}`
        )
      );

      const submitButton = getByRole("button", { name: "검색" });
      fireEvent.click(submitButton);

      expect(mockedNavigate).toHaveBeenCalledTimes(0);
    });
  });

  describe("Submit이 되고, 페이지 이동", () => {
    let searchButton, searchInput, searchForm;

    beforeEach(() => {
      mockedNavigate.mockClear();

      const { getByRole, getByPlaceholderText, container } = render(
        withRouter(
          <>
            <Route path="/" element={<SearchBar blurEvent={blurEvent} />} />
            <Route path={`/search/${keyword}`} element={<p>{keyword}</p>} />
          </>,
          "/"
        )
      );

      searchForm = container.firstChild;
      searchButton = getByRole("button", { name: "검색" });
      searchInput = getByPlaceholderText("검색");
    });

    it("다른 검색어 입력하고 검색 버튼을 클릭", () => {
      // useNavigate가 mocking 되어있어서, navigate가 호출되는지 & navigate의 어떤 인자가 넘어가는지만 검증하면 됨
      fireEvent.change(searchInput, { target: { value: keyword } });
      fireEvent.click(searchButton);

      expect(mockedNavigate).toHaveBeenCalledTimes(1);
      expect(mockedNavigate).toHaveBeenCalledWith(`/search/${keyword}`);
    });

    it("다른 검색어 입력하고 엔터", () => {
      fireEvent.change(searchInput, { target: { value: keyword } });
      fireEvent.submit(searchForm);

      expect(mockedNavigate).toHaveBeenCalledTimes(1);
      expect(mockedNavigate).toHaveBeenCalledWith(`/search/${keyword}`);
    });
  });
});
