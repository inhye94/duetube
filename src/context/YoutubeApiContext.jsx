import { createContext, useContext } from "react";
import Youtube from "../apis/Youtube";
import YoutubeClient from "../apis/youtubeClient";

export const YoutubeContext = createContext();

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
