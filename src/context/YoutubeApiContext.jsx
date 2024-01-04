import { createContext, useContext } from "react";
import Youtube from "../apis/Youtube";
import YoutubeClient from "../apis/youtubeClient";
import QaYoutubeClient from "../apis/qaYoutubeClient";

export const YoutubeContext = createContext();

const qaClient = new QaYoutubeClient();
const client = new YoutubeClient();

const youtube = new Youtube(client);

export function YoutubeApiProvider({ children }) {
  return (
    <YoutubeContext.Provider value={{ youtube }}>
      {children}
    </YoutubeContext.Provider>
  );
}

export function useYoutubeApi() {
  return useContext(YoutubeContext);
}
