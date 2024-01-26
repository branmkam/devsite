import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faReact, faPython } from "@fortawesome/free-brands-svg-icons";
import tailwind from "../assets/tailwind.svg";
import {
  faChartSimple,
  faCode,
  faComment,
} from "@fortawesome/free-solid-svg-icons";

const icons = {
  HTML5: faHtml5,
  React: faReact,
  Python: faPython,
};

export default function Home(props) {
  const { setPage } = props;
  return (
    <>
      <div className="text-center w-full bg-[#001133] clipped1">
        <div className="z-0 w-full">
          {/* <video
            className="absolute object-cover brightness-50"
            autoPlay
            muted
            loop
            id="myVideo"
          >
            <source src={testvid} type="video/mp4" />
          </video> */}
          <p className="mt-8 text-3xl text-slate-200 tealshadow">
            <span className="text-teal-500"> Brandon Kaminski</span>
          </p>
          <p className="mt-4 mb-8 text-lg text-center tealshadow">
            Software Developer in Charlotte, NC
          </p>

          <div className="flex flex-row justify-center m-4">
            {Object.keys(icons).map((i) => (
              <div
                key={"icon" + i}
                className="flex flex-col justify-center w-1/5 gap-1 mx-2 md:w-24"
              >
                <FontAwesomeIcon icon={icons[i]} className="h-24" />
                <p className="text-sm text-yellow-500 md:text-lg">{i}</p>
              </div>
            ))}
            <div className="flex flex-col w-1/5 gap-1 mx-2 md:w-24">
              <img className="h-24" src={tailwind} alt="tailwind logo"></img>
              <p className="text-sm text-yellow-500 md:text-lg">Tailwind</p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 my-12 md:w-auto md:flex-row">
           
            <button
              onClick={() => setPage(2)}
              className="px-4 py-2 text-blue-900 transition-colors duration-150 bg-yellow-500 rounded-xl hover:text-slate-200 hover:bg-teal-600"
            >
              View My Projects
            </button>
            <button
              onClick={() => setPage(3)}
              className="px-4 py-2 text-blue-900 transition-colors duration-150 bg-yellow-500 rounded-xl hover:text-slate-200 hover:bg-teal-600"
            >
              Contact/Resume
            </button>{" "}
            {/* switch buttons to be placed after each div. Have menu in top left to replace home button. */}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center w-full gap-12 px-6 py-12 bg-black">
        <div className="flex flex-row items-center h-16 gap-2">
          <p className="m-4 text-left tealshadow md:mx-12">
            A modern full-stack developer who loves balancing the{" "}
            <span className="text-teal-600">beauty</span> of front-end
            development with the <span className="text-teal-600">utility</span>{" "}
            of back-end development.
          </p>
          <FontAwesomeIcon icon={faCode} className="h-20" />
        </div>

        <div className="flex flex-row items-center h-16 gap-2">
          <FontAwesomeIcon icon={faChartSimple} className="h-20" />
          <p className="m-4 text-right tealshadow md:mx-12">
            A keen data scientist who loves{" "}
            <span className="text-teal-600">reading between the lines</span>.
          </p>
        </div>

        <div className="flex flex-row items-center h-16 gap-2">
          <p className="m-4 text-left tealshadow md:mx-12">
            A linguist and polyglot by trade who seeks to{" "}
            <span className="text-teal-600">connect</span> with people all over
            the world.
          </p>
          <FontAwesomeIcon icon={faComment} className="h-20" />
        </div>

        <button
              onClick={() => setPage(1)}
              className="px-4 py-2 text-blue-900 transition-colors duration-150 bg-yellow-500 rounded-xl hover:text-slate-200 hover:bg-teal-600"
            >
              About Me
            </button>
      </div>
    </>
  );
}
