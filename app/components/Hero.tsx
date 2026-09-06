import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen bg-slate-950 text-white flex items-center">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Left */}
        <div>

          <p className="text-blue-400 font-semibold text-lg">
            Hello, I'm 👋
          </p>

          <h1 className="mt-4 text-5xl md:text-7xl font-bold">
            Kintan
            <span className="text-blue-500"> Kinasih Mahaputri</span>
          </h1>

          <h2 className="mt-6 text-2xl text-gray-300">
            Fresh Graduate
          </h2>

          <p className="mt-2 text-blue-400">
            Data Analytics • IT Administration • Information Systems
          </p>

          <p className="mt-8 text-gray-400 leading-8">
            Informatics graduate from Jenderal Soedirman University with strong expertise in Data Analytics, IT Administration, and Information Systems. Experienced in supporting digital operations, managing end-to-end data workflows, and developing web-based management applications. Detail-oriented and committed to ensuring data validity, system reliability, and operational excellence.
          </p>

          <div className="mt-10 flex gap-4">

            <a
              href="/cv/Kintan Kinasih Mahaputri-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-blue-600 px-6 py-3 hover:bg-blue-700 transition"
            >
              View CV
            </a>

            <a
              href="#contact"
              className="rounded-xl border border-gray-600 px-6 py-3 hover:bg-white hover:text-black transition"
            >
              Contact
            </a>

          </div>

        </div>

        {/* Right */}
        <div className="flex justify-center">

          <div className="relative">

            <div className="absolute inset-0 rounded-full bg-blue-500 blur-3xl opacity-20"></div>

            <Image
              src="/images/profil.png"
              alt="Profil"
              width={350}
              height={350}
              className="relative rounded-full border-4 border-slate-700 object-cover"
            />

          </div>

        </div>

      </div>
    </section>
  );
}