import { render, screen } from "@testing-library/react";
import React from "react";
import NotFound from "../NotFound";

test("NotFound 컴포넌트", () => {
  render(<NotFound />);

  expect(screen.getByText(/앗 당신은 길을 잃었어요~!/i)).toBeInTheDocument();
  expect(screen.getByRole("img").alt).toBe("give me money");
  expect(screen.getByText("많이 주세요")).toBeInTheDocument();
});
