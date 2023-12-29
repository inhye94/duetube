import { Outlet } from "react-router-dom";
import Gnb from "./components/Gnb/Gnb";

function App() {
  return (
    <section className="">
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
