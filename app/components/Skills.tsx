import {
  Code2,
  Database,
  Wrench,
  Users,
} from "lucide-react";

const programming = [
  "HTML",
  "CSS",
  "JavaScript",
  "PHP",
  "Python",
  "Laravel",
  "REST API",
  "Tailwind CSS",
];

const database = [
  "MySQL",
  "SQL",
];

const tools = [
  "GitHub",
  "VS Code",
  "XAMPP",
  "Google Colab",
  "Figma",
];

const productivity = [
  "Microsoft Excel",
  "Microsoft Word",
  "Microsoft PowerPoint",
  "Google Sheets",
  "Google Docs",
];

const softSkills = [
  "Leadership",
  "Teamwork",
  "Communication",
  "Problem Solving",
  "Time Management",
  "Adaptability",
];

function Badge({ text }: { text: string }) {
  return (
    <span className="rounded-full border border-slate-700 bg-slate-800 px-4 py-2 text-sm text-gray-200 transition hover:border-blue-500 hover:text-blue-400">
      {text}
    </span>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-slate-950 py-24 px-6 text-white"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="mb-12 text-4xl font-bold">
          Skills
        </h2>

        <div className="grid gap-8 md:grid-cols-2">

          {/* Programming */}
          <div className="rounded-2xl bg-slate-900 p-8">
            <div className="mb-6 flex items-center gap-3">
              <Code2 className="text-blue-500" />
              <h3 className="text-xl font-semibold">
                Programming
              </h3>
            </div>

            <div className="flex flex-wrap gap-3">
              {programming.map((item) => (
                <Badge key={item} text={item} />
              ))}
            </div>
          </div>

          {/* Database */}
          <div className="rounded-2xl bg-slate-900 p-8">
            <div className="mb-6 flex items-center gap-3">
              <Database className="text-blue-500" />
              <h3 className="text-xl font-semibold">
                Database
              </h3>
            </div>

            <div className="flex flex-wrap gap-3">
              {database.map((item) => (
                <Badge key={item} text={item} />
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="rounded-2xl bg-slate-900 p-8">
            <div className="mb-6 flex items-center gap-3">
              <Wrench className="text-blue-500" />
              <h3 className="text-xl font-semibold">
                Tools
              </h3>
            </div>

            <div className="flex flex-wrap gap-3">
              {tools.map((item) => (
                <Badge key={item} text={item} />
              ))}
            </div>
          </div>

          {/* Productivity Tools */}
          <div className="rounded-2xl bg-slate-900 p-8">
            <div className="mb-6 flex items-center gap-3">
              <Users className="text-blue-500" />
              <h3 className="text-xl font-semibold">
                Productivity Tools
              </h3>
            </div>

            <div className="flex flex-wrap gap-3">
              {productivity.map((item) => (
                <Badge key={item} text={item} />
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="rounded-2xl bg-slate-900 p-8">
            <div className="mb-6 flex items-center gap-3">
              <Users className="text-blue-500" />
              <h3 className="text-xl font-semibold">
                Soft Skills
              </h3>
            </div>

            <div className="flex flex-wrap gap-3">
              {softSkills.map((item) => (
                <Badge key={item} text={item} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}