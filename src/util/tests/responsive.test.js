import { checkMobile } from "../responsive";

test("checkMobile는 화면 크기가 768px 미만일 때 true 반환", () => {
  // Mocking window.innerWidth to simulate a mobile screen
  Object.defineProperty(window, "innerWidth", {
    writable: true,
    configurable: true,
    value: 500,
  });

  expect(checkMobile()).toBe(true);
});
