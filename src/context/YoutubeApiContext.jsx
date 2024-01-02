import { createContext, useContext } from "react";
// import QaYoutube from "../apis/QaYoutube";
import Youtube from "../apis/Youtube";

export const YoutubeContext = createContext();

// const youtube = new QaYoutube();
const youtube = new Youtube();

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
