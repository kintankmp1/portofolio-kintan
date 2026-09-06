export default function About() {
  return (
    <section id="about" className="bg-slate-900 py-24 px-6 text-white">
      <div className="max-w-6xl mx-auto">
        
        <h2 className="text-4xl font-bold mb-10">
          About Me
        </h2>

        {/* Menggunakan grid-cols-5 untuk membuat rasio kolom Kiri (60%) dan Kanan (40%) */}
        <div className="grid md:grid-cols-5 gap-10 items-start">

          {/* KOLOM KIRI: Teks Deskripsi (Mengambil porsi 3 dari 5 kolom) */}
          <div className="md:col-span-3 space-y-5">
            <p className="text-gray-300 leading-8">
              Hi, I'm Kintan Kinasih Mahaputri, an Informatics graduate from Jenderal Soedirman University (GPA 3.75/4.00) with solid foundations in Data Analytics, IT Administration, and Information Systems.
              I have practical capabilities in supporting IT data administration, operational workflows, and record keeping. My technical skills include data processing, cleaning, analysis, and visualization using Python, SQL, Microsoft Excel, and Google Sheets, alongside database management with MySQL.
              I also have hands-on experience building interactive web applications using Python and Streamlit such as Spotify user behavior analysis and data driven agricultural productivity clustering as well as preparing periodic reports and technical documentation.
              Actively engaged in organizations to sharpen my communication and teamwork, I am a detail-oriented, adaptable, and quick-learning professional ready to contribute effectively to administrative governance, data processing, and technical support roles across dynamic environments.
            </p>
            <p className="text-gray-300 leading-8">
              Driven by a commitment to continuous learning, I am eager to support IT operations, manage databases and documentation, and streamline administrative workflows through technology. Highly motivated to ensure efficient information management and grow as a versatile professional while advancing organizational goals.
            </p>
          </div>

          {/* KOLOM KANAN: Foto & Kotak Statistik (Mengambil porsi 2 dari 5 kolom) */}
          <div className="md:col-span-2 flex flex-col gap-6">
            
            {/* Foto Profile */}
            <div className="w-full">
              <img 
                src="/images/kintann.jpeg"/* PENTING: Ganti dengan nama file foto Anda yang ada di folder public */
                alt="Kintan Kinasih Mahaputri" 
                className="w-full h-[400px] object-cover object-center rounded-2xl shadow-lg border border-slate-700"
              />
            </div>

            {/* Kotak Statistik (Diperkecil: padding p-4, text-2xl, gap-3) */}
            <div className="grid grid-cols-2 gap-3">

              <div className="bg-slate-800 rounded-xl p-4 shadow-sm border border-slate-700/50">
                <h3 className="text-2xl font-bold text-blue-400">2026</h3>
                <p className="mt-1 text-sm text-gray-400">Graduate</p>
              </div>

              <div className="bg-slate-800 rounded-xl p-4 shadow-sm border border-slate-700/50">
                <h3 className="text-2xl font-bold text-blue-400">Ready</h3>
                <p className="mt-1 text-sm text-gray-400">To Work</p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}