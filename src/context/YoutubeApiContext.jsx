import { createContext, useContext } from "react";

// instance 제공
export const YoutubeApiContext = createContext();

// instance를 호출
export const useYoutubeApi = () => useContext(YoutubeApiContext);
