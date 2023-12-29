import { Outlet } from "react-router-dom";
import Gnb from "./components/Gnb/Gnb";
import { useDarkModeContext } from "./context/DarkModeContext";

function App() {
  const { _darkMode } = useDarkModeContext();

  return (
    <section className={_darkMode ? "dark" : ""}>
      <div className="text-slate-900 bg-white dark:text-slate-100 dark:bg-slate-800">
        <div className="w-screen mx-auto px-2 lg:max-w-[1200px]">
          <Gnb />

          <Outlet />
        </div>
      </div>
    </section>
  );
}

export default App;
