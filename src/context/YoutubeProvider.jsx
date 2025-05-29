import React from "react";
import QaYoutubeClient from "../apis/Youtube/qaYoutubeClient";
import YoutubeApi from "../apis/Youtube/youtubeApi";
import YoutubeClient from "../apis/Youtube/youtubeClient";
import { YoutubeApiContext } from "./YoutubeApiContext";

const isTest = false; // NOTE: qa/실서비스 전환 (true > qa, false > 실서비스)

const qaYoutubeClient = new QaYoutubeClient();
const youtubeClient = new YoutubeClient();

const youtube = new YoutubeApi(isTest ? qaYoutubeClient : youtubeClient);

export function YoutubeApiContextProvider({ children }) {
  return (
    <YoutubeApiContext.Provider value={{ youtube }}>
      {children}
    </YoutubeApiContext.Provider>
  );
}
