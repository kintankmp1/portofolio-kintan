import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <section
      id="education"
      className="bg-slate-900 text-white py-24 px-6"
    >
      <div className="max-w-5xl mx-auto">

        <h2 className="text-4xl font-bold mb-12">
          Education
        </h2>

        {/* Education List */}
        <div className="space-y-6">

          {/* SMK */}
          <div className="rounded-2xl bg-slate-800 p-8 border border-slate-700">
            <div className="flex items-center gap-4">
              <GraduationCap
                className="text-blue-500"
                size={40}
              />

              <div>
                <h3 className="text-2xl font-bold">
                  SMK Negeri 1 Batang
                </h3>

                <p className="text-gray-400">
                  Computer and Network Engineering
                </p>

                <p className="mt-2 text-blue-400">
                  2019 - 2022
                </p>
              </div>
            </div>
          </div>

          {/* University */}
          <div className="rounded-2xl bg-slate-800 p-8 border border-slate-700">
            <div className="flex items-center gap-4">
              <GraduationCap
                className="text-blue-500"
                size={40}
              />

              <div>
                <h3 className="text-2xl font-bold">
                  Universitas Jenderal Soedirman
                </h3>

                <p className="text-gray-400">
                  Informatics
                </p>

                <p className="mt-2 text-blue-400">
                  2022 - 2026
                </p>

                 <p className="mt-2 text-gray-300">
                  GPA: <span className="font-semibold text-white">3.75 / 4.00</span>
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}