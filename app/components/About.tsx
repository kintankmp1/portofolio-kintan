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
              Fresh graduate in Informatics from Jenderal Soedirman University with strong interests in IT Administration, Information Systems, and Data Management. 
              Experienced in supporting administrative and operational data, preparing reports, and developing information systems through internships and academic projects. 
              Proficient in Microsoft Office, Google Workspace, SQL, and documentation, with strong analytical, organizational, and communication skills. 
              Detail-oriented and committed to supporting administrative processes.

              <br /><br />
              I enjoy supporting IT operations, managing data and documentation, and improving administrative processes through technology. I am motivated to continuously learn, contribute to efficient information management, and grow as an IT professional while supporting organizational goals.
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