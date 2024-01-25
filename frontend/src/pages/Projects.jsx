import Card from "../components/Card";

const sites = [
  {
    title: "brankam",
    description: "test testkghkjdh. dkjfgnkfdj n",
    img: "https://media.istockphoto.com/id/1130161854/photo/aerial-of-downtown-charlotte-north-carolina-usa.jpg?s=612x612&w=0&k=20&c=z86XcQ_Dg39hoXZvUxAahRlyEgpcW5S4LPZ2gTlGKiM=",
    url: "https://www.brankam.com",
  },
  {
    title: "brankam",
    description:
      "test test my websitedfgk jd klhfdjk hjkjhlsjkjgkghsgjkh jkhgkjsdfhlgsd ggldkdjfhgkjlhlkjdfhldsgkjhdddd ddddddddddddddfkjhsfdlsljgfhkljd lhgjdlhgj hdjkghdjglsdhjf ksjd hfjh kdfh kjs hkfhhf sjhkdfsdf aosflskhslkjsfhjksflfhl f kf j sfkslaf hksljf lslkdghj kgjdgklghljdhgl jkdhgdkljghldkghkjdh. dkjfgnkfdj n",
    img: "https://media.istockphoto.com/id/1130161854/photo/aerial-of-downtown-charlotte-north-carolina-usa.jpg?s=612x612&w=0&k=20&c=z86XcQ_Dg39hoXZvUxAahRlyEgpcW5S4LPZ2gTlGKiM=",
    url: "https://www.brankam.com",
  },
  {
    title: "brankam",
    description:
      "test test my websitedfgk jd klhfdjk hjkjhlsjkjgkghsgjkh jkhgkjsdfhlgsd ggldkdjfhgkjlhlkjdfhldsgkjhdddd ddddddddddddddfkjhsfdlsljgfhkljd lhgjdlhgj hdjkghdjglsdhjf ksjd hfjh kdfh kjs hkfhhf sjhkdfsdf aosflskhslkjsfhjksflfhl f kf j sfkslaf hksljf lslkdghj kgjdgklghljdhgl jkdhgdkljghldkghkjdh. dkjfgnkfdj n",
    img: "vite.svg",
    url: "https://www.brankam.com",
  },
];

export default function Projects() {
  return (
    <>
      <p className="mt-8 text-slate-200 text-3xl tealshadow">
        See my <span className="text-teal-500">projects</span>
      </p>
      <p className="tealshadow mt-4 mb-8 text-lg">
        My projects utilize various technologies: most notably{" "}
        <span className="text-teal-500"> React.js, Tailwind CSS, and Python. </span>
      </p>
      <div className="w-full grid grid-cols-1 justify-center gap-2 md:grid-cols-3">
        {sites.map((s) => (
          <Card key={"card" + s.title}>
            <a
              className="font-bold hover:text-red-500"
              href={s.url}
              rel="noreferrer"
              target="_blank"
            >
              <img
                src={s.img}
                className="hover:brightness-125 h-[200px] object-cover w-full rounded-lg"
              />
            </a>
            <div className="text-slate-200 p-4 h-[350px] overflow-y-auto overflow-x-hidden rounded-lg">
              <a
                className="font-bold hover:text-red-500"
                href={s.url}
                rel="noreferrer"
                target="_blank"
              >
                {s.title}
              </a>
              <p>{s.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}
