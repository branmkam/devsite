export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-4">
      <p className="mt-8 text-3xl text-center text-slate-200 tealshadow">
        My <span className="text-teal-500">Resume</span>
      </p>
      <p className="mt-4 mb-8 text-lg tealshadow">
        My work, past and present.
        If it doesn&apos;t load, download it{" "}
        <span className="text-teal-500">
          {" "}
          <a className="underline hover:text-white" href="#">
            here
          </a>
        </span>
        .
      </p>
      <embed
        className="w-full md:w-3/4 lg:w-5/8 h-72 md:h-[500px]"
        src="https://ucmscdn.healthgrades.com/35/ba/7dbbc73c42ea9037e5eb20ab681b/healthgrades-2021-report-to-the-nation.pdf"
        type="application/pdf"
      />
      <p className="mt-8 text-3xl text-center text-slate-200 tealshadow">
        Email <span className="text-teal-500">Me</span>
      </p>
      <p className="mt-4 mb-8 text-lg tealshadow">
        My primary address is{" "}
        <span className="text-teal-500">
          <a
            className="underline hover:text-white"
            href="mailto:brankam126@gmail.com"
          >
            brankam126@gmail.com
          </a>
        </span>
        !
      </p>
    </div>
  );
}
