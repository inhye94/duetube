import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { MemoryRouter, Routes } from "react-router-dom";
import { YoutubeApiContext } from "../context/YoutubeApiContext";

export function withRouter(routes, initialEntry = "/") {
  return (
    <MemoryRouter initialEntries={[initialEntry]}>
      <Routes>{routes}</Routes>
    </MemoryRouter>
  );
}

export function withAllContexts(children, youtube) {
  const testClient = createTestQueryClient();
  return (
    <YoutubeApiContext.Provider value={{ youtube }}>
      <QueryClientProvider client={testClient}>{children}</QueryClientProvider>
    </YoutubeApiContext.Provider>
  );
}

function createTestQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        refetchOnWindowFocus: false,
        staleTime: 1000 * 60 * 1, // 1분
      },
    },
  });
}
