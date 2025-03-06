import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-8">
      <p className="mt-4 text-3xl text-center text-slate-200 tealshadow">
        Contact <span className="text-teal-500">me</span>...
      </p>
      <div className="flex flex-row gap-8">
        <a
          className="mb-8 text-lg underline tealshadow hover:text-teal-600"
          href="mailto:brankam126@gmail.com"
        >
          <FontAwesomeIcon icon={faEnvelope} className="h-20" />
        </a>
        <a
          className="text-lg underline tealshadow hover:text-teal-600"
          href="https://linkedin.com/in/brandon-kaminski"
          rel="noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon icon={faLinkedin} className="h-20" />
        </a>
      </div>
      <p className="text-3xl text-center text-slate-200 tealshadow">
        ...or view my <span className="text-teal-500">resume</span>
      </p>
      <p className="text-lg tealshadow">
        My work, past and present. If it doesn&apos;t load, download it{" "}
        <span className="text-teal-500">
          {" "}
          <a className="underline hover:text-white" rel="noreferrer" target="_blank" href="./RESUME030625.pdf">
            here
          </a>
        </span>
        .
      </p>
      <embed
        className="mb-8 w-full md:w-3/4 lg:w-5/8 h-72 md:h-[500px]"
        src="./RESUME030625.pdf"
        type="application/pdf"
      />
    </div>
  );
}
