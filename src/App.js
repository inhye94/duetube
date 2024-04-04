import { Outlet } from "react-router-dom";
import { useDarkModeContext } from "./context/DarkModeContext";
import classNames from "classnames";
import Gnb from "./component/Gnb";
import { YoutubeApiContextProvider } from "./context/YoutubeApiContext";

function App() {
  const { darkMode } = useDarkModeContext();

  return (
    <section className={classNames(darkMode && "dark", "duetube")}>
      <div className="duetube-box text-slate-900 bg-white dark:text-slate-100 dark:bg-slate-800 transition-colors duration-300">
        <div className="w-screen mx-auto px-2 lg:max-w-[1200px]">
          <Gnb />

          <YoutubeApiContextProvider>
            <Outlet />
          </YoutubeApiContextProvider>
        </div>
      </div>
    </section>
  );
}

export default App;
