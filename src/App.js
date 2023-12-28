import { Outlet } from "react-router-dom";
import Gnb from "./components/Gnb/Gnb";

function App() {
  return (
    <>
      <Gnb />

      <Outlet />
    </>
  );
}

export default App;
