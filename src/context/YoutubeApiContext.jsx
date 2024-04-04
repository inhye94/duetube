import { createContext, useContext } from "react";
import QaYoutubeClient from "../apis/Youtube/qaYoutubeClient";
import YoutubeClient from "../apis/Youtube/youtubeClient";
import YoutubeApi from "../apis/Youtube/youtubeApi";

const isTest = false; // NOTE: qa/실서비스 전환 (true > qa, false > 실서비스)

const qaYoutubeClient = new QaYoutubeClient();
const youtubeClient = new YoutubeClient();

const youtube = new YoutubeApi(isTest ? qaYoutubeClient : youtubeClient);

const YoutubeApiContext = createContext();

export function YoutubeApiContextProvider({ children }) {
  return (
    <YoutubeApiContext.Provider value={{ youtube }}>
      {children}
    </YoutubeApiContext.Provider>
  );
}

export const useYoutubeApi = () => useContext(YoutubeApiContext);
