export default function About() {
  return (
    <section
      id="about"
      className="bg-slate-900 py-24 px-6 text-white"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold mb-10">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          <div>
            <p className="text-gray-300 leading-8">
              Hi, I'm Kintan Kinasih Mahaputri, a fresh graduate in Informatics from Jenderal Soedirman University. 
              I am passionate about software development, data analytics, and software quality assurance. 
              Through internships and academic projects, I have gained practical experience in building web applications using Laravel, PHP, JavaScript, Python, and MySQL. 

              <br /><br />
              I enjoy turning ideas into functional digital solutions, solving real-world problems, and continuously learning new technologies. My goal is to grow as an IT professional while creating impactful and reliable software that delivers value to users.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-5">

            <div className="bg-slate-800 rounded-xl p-6">
              <h3 className="text-3xl font-bold text-blue-400">
                6+
              </h3>

              <p className="mt-2 text-gray-400">
                Projects
              </p>
            </div>

            <div className="bg-slate-800 rounded-xl p-6">
              <h3 className="text-3xl font-bold text-blue-400">
                10+
              </h3>

              <p className="mt-2 text-gray-400">
                Technologies
              </p>
            </div>

            <div className="bg-slate-800 rounded-xl p-6">
              <h3 className="text-3xl font-bold text-blue-400">
                2026
              </h3>

              <p className="mt-2 text-gray-400">
                Graduate
              </p>
            </div>

            <div className="bg-slate-800 rounded-xl p-6">
              <h3 className="text-3xl font-bold text-blue-400">
                Ready
              </h3>

              <p className="mt-2 text-gray-400">
                To Work
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}