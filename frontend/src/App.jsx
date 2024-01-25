import "./index.css";
import { useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";

function App() {
  const [page, setPage] = useState(0);

  function renderSwitch(param) {
    switch (param) {
      case 0:
        return <Home />;
      case 1:
        return <About />;
      case 2:
        return <Projects />;
    }
  }

  return (
    <div className="font-alata text-slate-200 w-screen h-screen flex flex-col items-center">
      <div className="z-50 font-kanit fixed top-0 text-slate-200 navbar h-8 bg-black w-screen flex flex-row items-start">
        <span
          className="hover:cursor-pointer my-1 mx-3 hover:text-red-400"
          onClick={() => setPage(0)}
        >
          brandon-kaminski.dev
        </span>
        <span
          className="hover:cursor-pointer my-1 mx-3 hover:text-red-400"
          onClick={() => setPage(1)}
        >
          About
        </span>
        <span
          className="hover:cursor-pointer my-1 mx-3 hover:text-red-400"
          onClick={() => setPage(2)}
        >
          Projects
        </span>
      </div>

      <div className="m-6 mt-12 flex flex-col justify-center items-center">
        {renderSwitch(page)}
      </div>
    </div>
  );
}

export default App;
