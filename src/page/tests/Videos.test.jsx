import { render, screen, waitFor } from "@testing-library/react";
import React from "react";
import { Route } from "react-router-dom";
import { withAllContexts, withRouter } from "../../tests/utils";
import { mockVideos } from "../../tests/videos";
import Videos from "../Videos";

describe("Videos", () => {
  const fakeYoutube = {
    search: jest.fn(),
  };

  afterEach(() => fakeYoutube.search.mockClear());

  it("초기 렌더링", async () => {
    fakeYoutube.search.mockImplementation(() => mockVideos);

    render(
      withAllContexts(
        withRouter(<Route path="/" element={<Videos />} />),
        fakeYoutube
      )
    );

    await waitFor(() => screen.getByText("요즘 인기있는 비디오🔥"));
  });
});
