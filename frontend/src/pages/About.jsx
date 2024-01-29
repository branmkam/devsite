import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faCommentAlt,
  faMusic,
} from "@fortawesome/free-solid-svg-icons";

export default function About(props) {
  const { setPage } = props;
  return (
    <div className="flex flex-col items-center">
      <p className="mt-4 text-3xl text-center text-slate-200 tealshadow">
        About <span className="text-teal-500">me</span>
      </p>
      <p className="mt-4 text-lg tealshadow">
        Computer scientist, linguist, musician.{" "}
        <span className="text-teal-500"> My passions and goals. </span>
      </p>
      <div className="flex flex-row items-center justify-center w-full gap-2 my-4 text-center">
        <img className="w-1/2 sm:w-64 sm:h-64 rounded-xl" src="./headshot.jpg" />
        <img className="w-1/2 sm:w-64 sm:h-64 rounded-xl" src="./headshot.jpg" />
      </div>

      <p className="my-4 text-3xl font-bold text-center text-teal-500 tealshadow">
        Hi! My name is Brandon Kaminski...
      </p>
      <div className="flex flex-col gap-6 mx-6 mt-2 mb-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <FontAwesomeIcon icon={faCode} className="w-20 h-20 text-teal-500" />
          <p>
            and I'm a software developer currently living in Charlotte. My alma
            mater is UNC Chapel Hill, class of 2023 (so go Heels). I graduated
            with degrees in Computer Science, BS and Linguistics, BA. I chose
            this career path because to me, software engineering is a perfect
            intersection of creativity and logic. I am fortunate to be able to
            help millions of people with the features I've built in my current
            role - and I hope to continue to use my skills for good throughout
            my career.
          </p>
        </div>

        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <FontAwesomeIcon icon={faCommentAlt} className="w-20 h-20 text-teal-500" />
          <p>
            Besides practicing programming languages, I absolutely love to learn
            spoken languages as well. I grew up monolingual in English, but due
            to my Mediterranean heritage I started learning Spanish and Italian,
            now having reached fluency in both languages! I have dabbled in
            quite a few others, and can hold a conversation in French,
            Portuguese, Turkish, Catalan, and German. I am currently focusing on
            Greek and Japanese. My favorite subfields of linguistics are syntax
            and morphology, but I adore traveling and learning about cultures
            all around the globe through the lens of their language.
          </p>
        </div>

        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <FontAwesomeIcon icon={faMusic} className="w-20 h-20 text-teal-500" />
          <p>
            Lastly, I am a musician by trade, having played piano since I was
            five. I started producing around fourteen, and I currently release
            funky electro-acoustic music (think Chromeo, Kaytranada, Daft Punk)
            under the name{" "}
            <a
              className="underline hover:text-teal-500"
              href="https://brankam.com"
              rel="noreferrer"
              target="_blank"
            >
              brankam
            </a>
            . In fact, you can read about the website I built for my music on
            the{" "}
            <span
              onClick={() => setPage(2)}
              className="underline hover:cursor-pointer hover:text-teal-500"
            >
              Projects
            </span>{" "}
            page.
          </p>
        </div>
      </div>
    </div>
  );
}
