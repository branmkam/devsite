import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faReact, faPython } from "@fortawesome/free-brands-svg-icons";
import tailwind from "../assets/tailwind.svg";
import testvid from "../assets/testvid.mp4";
import { faFlask } from "@fortawesome/free-solid-svg-icons";
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
      <div className="text-center w-full h-[400px] flex flex-col clipped1">
        <div className="relative w-full h-full">
          <video
            className="absolute z-0 object-cover w-full h-full brightness-[30%]"
            autoPlay
            muted
            loop
            id="myVideo"
          >
            <source src={testvid} type="video/mp4" />
          </video>
          <div className="relative z-10 flex flex-col items-center justify-center">
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
                  className="flex flex-col justify-center w-1/6 gap-1 mx-2 md:w-1/5 md:w-24"
                >
                  <FontAwesomeIcon icon={icons[i]} className="h-24" />
                  <p className="text-sm text-yellow-500 md:text-lg">{i}</p>
                </div>
              ))}
              <div className="flex flex-col w-1/6 gap-1 mx-2 md:w-1/5 md:w-24">
                <img className="h-24" src={tailwind} alt="tailwind logo"></img>
                <p className="text-sm text-yellow-500 md:text-lg">Tailwind</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center w-full gap-12 bg-black clipped1">
        <div className="relative w-full h-full">
          <img
            className="absolute z-0 object-cover w-full h-full brightness-[4%]"
            src="computer.jpeg"
          />
          <div className="relative z-10 flex flex-col items-center justify-center gap-12 p-6 py-12">
            <div className="flex flex-row items-center h-16 gap-2">
              <p className="m-4 text-sm text-left md:text-base tealshadow md:mx-12">
                A modern full-stack developer who loves balancing the{" "}
                <span className="text-teal-600">beauty</span> of frontend with
                the <span className="text-teal-600">utility</span> of backend.
              </p>
              <FontAwesomeIcon icon={faCode} className="h-20" />
            </div>

            <div className="flex flex-row items-center h-16 gap-2">
              <FontAwesomeIcon icon={faChartSimple} className="h-20" />
              <p className="m-4 text-sm text-right md:text-base tealshadow md:mx-12">
                A keen data scientist who loves{" "}
                <span className="text-teal-600">reading between the lines</span>
                .
              </p>
            </div>

            <div className="flex flex-row items-center h-16 gap-2">
              <p className="m-4 text-sm text-left md:text-base tealshadow md:mx-12">
                A linguist and polyglot by trade who seeks to{" "}
                <span className="text-teal-600">connect</span> with people all
                over the world.
              </p>
              <FontAwesomeIcon icon={faComment} className="h-20" />
            </div>

            <button
              onClick={() => setPage(1)}
              className="w-1/2 px-4 py-2 text-xl text-blue-900 transition-colors duration-150 bg-yellow-500 rounded-xl hover:text-slate-200 hover:bg-teal-600"
            >
              About Me
            </button>
          </div>
        </div>
      </div>

      <div className="text-center w-full bg-[#000415] flex flex-col items-center gap-4 clipped1 p-6 pb-10">
        <p className="text-xl tealshadow">
          Create stunning projects for a{" "}
          <span className="text-yellow-500">variety</span> of needs.
        </p>
        <div className="flex flex-col items-center justify-center w-full gap-4 my-4 md:flex-row">
          <img
            className="border-2 w-[90%] md:w-[45%] h-[300px] object-cover border-black rounded-xl"
            src="/brankamsite.png"
          />
          <img
            className="border-2 w-[90%] md:w-[45%] h-[300px] object-cover border-black rounded-xl"
            src="/stocktrackersite.png"
          />
        </div>
        <button
          onClick={() => setPage(2)}
          className="w-1/2 px-4 py-2 text-xl text-blue-900 transition-colors duration-150 bg-yellow-500 rounded-xl hover:text-slate-200 hover:bg-teal-600"
        >
          See My Projects
        </button>
      </div>

      <div className="flex flex-col items-center justify-center w-full gap-8 px-6 py-12 bg-black md:flex-row clipped1">
        <p className="text-xl text-center tealshadow">
          Would you like to reach out or learn more?
        </p>
        <div className="flex justify-center gap-4 mx-4 md:flex-row">
          <button className="px-4 py-2 text-xl text-teal-500 transition-colors duration-150 bg-slate-800 rounded-xl hover:text-slate-200 hover:bg-teal-600">
            <a href="mailto:brankam126@gmail.com">Email me!</a>
          </button>
          <button
            onClick={() => setPage(3)}
            className="px-4 py-2 text-xl text-teal-500 transition-colors duration-150 bg-slate-800 rounded-xl hover:text-slate-200 hover:bg-teal-600"
          >
            See My Resume
          </button>
        </div>
      </div>
    </>
  );
}
