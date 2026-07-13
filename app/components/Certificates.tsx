import { Award } from "lucide-react";
import Image from "next/image";

const certificates = [
  {
    title: "PT. Boga Indonesia Talenta",
    issuer: "Internship Program",
    image: "/certificates/Boga.jpg",
  },
  {
    title: "TSA - Digitalent Scholarship",
    issuer: "Pelatihan",
    image: "/certificates/TSA.jpg",
  },
  {
    title: "Informatics Student Association",
    issuer: " Staf - Student Resources Development Division",
    image: "/certificates/psdm.jpg",
  },
  {
    title: "Informatics Student Association",
    issuer: "Treasurer - Interest and Talent Division",
    image: "/certificates/mikat.png",
  },
  {
    title: "Informatics Student Association",
    issuer: "Vice Project Manager",
    image: "/certificates/mm.png",
  },
  {
    title: "Informatics Student Association",
    issuer: "First Aid Coordinator",
    image: "/certificates/p3k.png",
  },
  {
    title: "Informatics Student Association",
    issuer: "Event Division",
    image: "/certificates/acaramm.png",
  },
  {
    title: "Informatics Student Association",
    issuer: "Event Division",
    image: "/certificates/upgrading.png",
  },
  {
    title: "Informatics Student Association",
    issuer: "Event Division",
    image: "/certificates/acara diesnat.png",
  },
  {
    title: "Pekalongan-Batang Student Association",
    issuer: "Event Division",
    image: "/certificates/imakaba.png",
  },
  
];

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="bg-slate-950 py-24 px-6 text-white"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold mb-12">
          Certificates
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {certificates.map((certificate) => (

            <div
              key={certificate.title}
              className="rounded-xl bg-slate-900 border border-slate-700 p-6"
            >
              <Award
                size={40}
                className="text-blue-500 mb-5"
              />

              <h3 className="font-semibold text-xl">
                {certificate.title}
              </h3>

              <p className="text-gray-400 mt-2">
                {certificate.issuer}
              </p>

              <Image
                src={certificate.image}
                alt={certificate.title}
                width={400}
                height={250}
                className="rounded-lg object-cover mt-4"
              />

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}