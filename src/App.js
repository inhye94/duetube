import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <header> 헤더</header>
      <Outlet />
    </>
  );
}

export default App;
