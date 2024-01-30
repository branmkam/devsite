import "./index.css";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Contact from "./pages/Contact";

function App() {
  const [page, setPage] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640); //set mobile based on pixel width
      setMenu(window.innerWidth >= 640); //disable menu on back to mobile
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  {
    /* helpers */
  }
  function setAndScroll(p) {
    setPage(p);
    window.scrollTo(0, 0);
  }

  function renderSwitch(param) {
    switch (param) {
      case 0:
        return <Home setPage={setAndScroll} />;
      case 1:
        return <About setPage={setAndScroll} />;
      case 2:
        return <Projects />;
      case 3:
        return <Contact />;
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
    <div className="flex flex-col items-center w-full h-full sm:mt-14 font-alata text-slate-200">
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
      <div className="fixed z-50 p-2 sm:p-4 sm:flex sm:flex-row gap-2 mx-2 sm:m-0 sm:gap-1 bg-[#000000dd] rounded-lg sm:rounded-none sm:w-full top-2 left-2 sm:top-0 sm:left-0">
        <div
          onClick={() => setMenu((m) => !m)}
          className="z-50 flex flex-row items-center text-lg sm:hidden ap-2 md:text-2xl hover:cursor-pointer hover:text-teal-500"
        >
          <FontAwesomeIcon icon={faBars} />
        </div>

        {(!isMobile || menu) && (
          <div className="flex flex-col sm:flex sm:flex-row sm:gap-8">
            <p
              className={
                "hover:text-teal-600 hover:cursor-pointer " +
                (page == 0 && "text-yellow-500")
              }
              onClick={() => {
                setMenu((m) => !m);
                setAndScroll(0);
              }}
            >
              Home
            </p>
            <p
              className={
                "hover:text-teal-600 hover:cursor-pointer " +
                (page == 1 && "text-yellow-500")
              }
              onClick={() => {
                setMenu((m) => !m);
                setAndScroll(1);
              }}
            >
              About Me
            </p>
            <p
              className={
                "hover:text-teal-600 hover:cursor-pointer " +
                (page == 2 && "text-yellow-500")
              }
              onClick={() => {
                setMenu((m) => !m);
                setAndScroll(2);
              }}
            >
              My Projects
            </p>
            <p
              className={
                "hover:text-teal-600 hover:cursor-pointer " +
                (page == 3 && "text-yellow-500")
              }
              onClick={() => {
                setMenu((m) => !m);
                setAndScroll(3);
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
          "flex flex-col w-full justify-center items-center " +
          (page > 0 && "p-6")
        }
      >
        {renderSwitch(page)}
      </div>
    </div>
  );
}

export default App;
