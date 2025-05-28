import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import SearchBox from "../SearchBox";

const SHOW_ELEMENT = "translate-y-[0]";
const ORIGINAL_INNER_WIDTH = window.innerWidth;

// 윈도우 크기를 조정하는 함수
function resizeWindow(width) {
  Object.defineProperty(window, "innerWidth", {
    writable: true,
    configurable: true,
    value: width,
  });
  window.dispatchEvent(new Event("resize"));
}

// SearchForm mocking
jest.mock("../SearchForm", () => {
  return (props) => (
    <form data-testid="search-form" onBlur={() => props.blurEvent?.()}>
      <input type="text" data-testid="search-input" />
    </form>
  );
});

describe("SearchBox", () => {
  it("초기 렌더 - PC", () => {
    resizeWindow(1200);
    const { asFragment } = render(<SearchBox />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("초기 렌더 - 모바일", () => {
    resizeWindow(300);
    const { asFragment } = render(<SearchBox />);

    expect(asFragment()).toMatchSnapshot();
  });

  describe("모바일 동작", () => {
    let openButton, wrapper, closeButton;

    beforeEach(() => {
      resizeWindow(300);
      render(<SearchBox />);

      openButton = screen.getByLabelText("검색창 열기");
      wrapper = screen.getByTestId("search-form").parentElement;
      closeButton = screen.getByLabelText("검색창 닫기");
    });

    it("검색 버튼을 클릭하면 wrapper가 열림", () => {
      fireEvent.click(openButton);
      expect(wrapper?.className.includes(SHOW_ELEMENT)).toBe(true);
    });

    it("닫기 버튼을 클릭하면 wrapper가 닫힘", () => {
      fireEvent.click(openButton);
      fireEvent.click(closeButton);
      expect(wrapper?.className.includes(SHOW_ELEMENT)).toBe(false);
    });

    it("SearchForm에서 blur 이벤트 발생하면 wrapper가 닫힘", () => {
      const searchInput = screen.getByTestId("search-input");
      fireEvent.click(openButton);
      fireEvent.blur(searchInput);

      expect(wrapper?.className.includes(SHOW_ELEMENT)).toBe(false);
    });

    it("윈도우 리사이즈(모바일 > 데스크탑)되면, wrapper가 닫힘", () => {
      resizeWindow(1200);
      expect(wrapper?.className.includes(SHOW_ELEMENT)).toBe(false);
    });
  });

  afterEach(() => {
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: ORIGINAL_INNER_WIDTH,
    });
  });
});
