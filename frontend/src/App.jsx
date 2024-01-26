import "./index.css";
import { useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import { faArrowLeft, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  const [page, setPage] = useState(0);
  const [menu, setMenu] = useState(false);

  function renderSwitch(param) {
    switch (param) {
      case 0:
        return <Home setPage={setPage} />;
      case 1:
        return <About />;
      case 2:
        return <Projects />;
      default:
        return (
          <>
            <p className="m-2 text-3xl tealshadow">Page not found!</p>
            <p className="text-xl tealshadow">
              Go back{" "}
              <span
                className="text-teal-600 hover:cursor-pointer hover:text-teal-300"
                onClick={() => setPage(0)}
              >
                home
              </span>
              .
            </p>
          </>
        );
    }
  }

  return (
    <div className="flex flex-col items-center w-full h-full font-alata text-slate-200">
      {/* header
      <div className="fixed top-0 z-50 flex flex-row items-start w-screen h-8 bg-black font-kanit text-slate-200 navbar">
        <span
          className="mx-3 my-1 hover:cursor-pointer hover:text-red-400"
          onClick={() => setPage(0)}
        >
          Home
        </span>
        <span
          className="mx-3 my-1 hover:cursor-pointer hover:text-red-400"
          onClick={() => setPage(1)}
        >
          About
        </span>
        <span
          className="mx-3 my-1 hover:cursor-pointer hover:text-red-400"
          onClick={() => setPage(2)}
        >
          Projects
        </span>
        <span
          className="mx-3 my-1 hover:cursor-pointer hover:text-red-400"
          onClick={() => setPage(3)}
        >
          Contact/Resume
        </span>
      </div> */}

      {/* menu div */}
      <div className="fixed z-50 p-2 bg-[#000000dd] rounded-lg top-2 left-2">
        <div
          onClick={() => setMenu((m) => !m)}
          className="z-50 flex flex-row items-center gap-2 hover:cursor-pointer hover:text-teal-500"
        >
          <FontAwesomeIcon icon={faBars} />
          <p>Menu</p>
        </div>

        {menu && (
          <div className="flex flex-col gap-1 mt-1">
            <p
              className="hover:text-teal-600 hover:cursor-pointer"
              onClick={() => {
                setMenu((m) => !m);
                setPage(0);
              }}
            >
              Home
            </p>
            <p
              className="hover:text-teal-600 hover:cursor-pointer"
              onClick={() => {
                setMenu((m) => !m);
                setPage(1);
              }}
            >
              About Me
            </p>
            <p
              className="hover:text-teal-600 hover:cursor-pointer"
              onClick={() => {
                setMenu((m) => !m);
                setPage(2);
              }}
            >
              My Projects
            </p>
            <p
              className="hover:text-teal-600 hover:cursor-pointer"
              onClick={() => {
                setMenu((m) => !m);
                setPage(3);
              }}
            >
              Contact/Resume
            </p>
          </div>
        )}
      </div>

      {/* footer */}
      <div className="z-50 bg-[#00000088] rounded-lg p-2 fixed bottom-0 right-0">
        <p className="text-[12px]">Brandon Kaminski | 2024</p>
      </div>

      {/* switch page */}
      <div
        className={
          "w-full flex flex-col justify-center items-center " +
          (page > 0 && "p-6")
        }
      >
        {renderSwitch(page)}
      </div>
    </div>
  );
}

export default App;
