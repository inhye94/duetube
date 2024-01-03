import { Outlet } from "react-router-dom";
import Gnb from "./components/Gnb/Gnb";
import { useDarkModeContext } from "./context/DarkModeContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { YoutubeApiProvider } from "./context/YoutubeApiContext";

const queryClient = new QueryClient();

function App() {
  const { _darkMode } = useDarkModeContext();

  return (
    <section className={`duetube ${_darkMode ? "dark" : ""}`}>
      <div className="duetube-box text-slate-900 bg-white dark:text-slate-100 dark:bg-slate-800 transition-colors duration-300">
        <div className="w-screen mx-auto px-2 lg:max-w-[1200px]">
          <Gnb />

          <YoutubeApiProvider>
            <QueryClientProvider client={queryClient}>
              <Outlet />
            </QueryClientProvider>
          </YoutubeApiProvider>
        </div>
      </div>
    </section>
  );
}

export default App;
