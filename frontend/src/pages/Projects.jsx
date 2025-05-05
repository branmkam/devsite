import Card from "../components/Card";
import HTMLReactParser from "html-react-parser";

const sites = [
  {
    title: "brankam artist website",
    description:
      "A website I made for my musician alter ego. To reach a wider audience, the site is translated and maintained in English, Spanish and Italian. <br/><br/> Built in React and Tailwind.",
    img: "https://brankam.com/brankambubbleonlyvector.png",
    url: "https://www.brankam.com",
  },
  {
    title: "GeoKanji",
    description:
      "Learn Japanese through geography! By internally implementing the Jisho dictionary, mouse over any prefecture or city in the country to see what its component kanji characters mean! <br/><br/> Built using React, Tailwind, Leaflet, and <a className='text-teal-500 hover:text-teal-200' href='https://jisho.org' target='_blank'>Jisho</a>.",
    img: "./geokanji.png",
    url: "https://geokanji.netlify.app/",
  },
  {
    title: "LingBreak",
    description:
      "Breaking down language for all! Leveraging the power of ChatGPT, users can enter in a sentence in any language, and AI will not only translate it but also break it down into its component parts and explain what each part does. A glossary is embedded into the breakdown to familiarize non-linguists with a diverse array of linguistic terms. On desktop, you can even save breakdowns as CSVs to view in detail later! <br/><br/> Built using React, Tailwind, and ChatGPT.",
      img: './lingbreak.png',
      url: "https://lingbreak.netlify.app/",
  },
  {
    title: "US cities quiz",
    description:
      "A map-centric redesign of Ian Fisher's geography quizzes at <a className='text-teal-500 hover:text-teal-200' href='https://cityquiz.io' rel='noreferrer' target='blank'>cityquiz.io</a>. Name as many US cities as you can, and view your stats such as smallest/largest cities named, percentage of total population, and more! <br/><br/> Built using React, Leaflet, and Tailwind.",
    img: "./uscities.png",
    url: "https://uscitiesquiz.netlify.app/",
  },
  {
    title: "Guess the City",
    description:
      "GeoGuessr, but in the air. Only provided with a satellite overhead view of a target city, guess cities one at a time to get a score based on number of guesses, proximity to the target, and identification of continent, country, etc. <br/><br/> This project includes my <b>FIRST</b> hand-built autocomplete and animated score tracker. <br/> <br/> Built with React, Leaflet, and Tailwind.",
    img: "./guessthecity.png",
    url: "https://guessthecity.brandonkaminski.dev/",
  },
];

export default function Projects() {
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="mt-4 text-3xl text-slate-200 tealshadow">
        See my <span className="text-teal-500">projects</span>
      </p>
      <p className="mt-4 mb-8 text-lg tealshadow">
        My projects utilize various technologies: most notably{" "}
        <span className="text-teal-500">
          {" "}
          React.js, Tailwind CSS, and Python.{" "}
        </span>
      </p>
      <div className="grid items-center justify-center w-full grid-cols-1 gap-2 mb-8 md:grid-cols-3">
        {sites.map((s) => (
          <Card key={"card " + s.title}>
            <a
              className="font-bold hover:text-red-500"
              href={s.url}
              rel="noreferrer"
              target="_blank"
            >
              <img
                src={s.img}
                className="hover:brightness-75 bg-[#ffffff66] h-[200px] object-cover w-full rounded-lg"
              />
            </a>
            <div className="text-slate-200 p-4 h-[350px] overflow-y-auto overflow-x-hidden rounded-lg">
              <p className="my-2 text-xl font-bold hover:text-white">
                {s.title}
              </p>
              <p>{HTMLReactParser(s.description)}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
