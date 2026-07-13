import { Users } from "lucide-react";

const organizations = [
  {
    organization: "Pekalongan-Batang Student Association",
    position: "Event Division",
    period: "2022 - 2023",
    description: [
      "Planned, organized, and executed various events to strengthen the bond among members and promote cultural identity.",
      "Organized event rundown, activity concepts, logistics, and technical execution to ensure the events ran smoothly and achieved their objectives.",
      "Collaborated with other teams to ensure active participation of 100+ attendees and created an engaging and lively event atmosphere."
    ],
  },
  {
    organization: "Informatics Student Association",
    position: "Treasurer - Interest and Talent Division",
    period: "2023 - 2024",
    description: [
      "Managed and monitored the divisions finances to support interests and talents activities through transparent budgeting and reporting.",
      "Project Leader - Design Training Workshop. Led the organization of a graphic design workshop attended by 50+ participants.",
      "First Aid Coordinator - Informatics Championship. Led the First Aid Team to ensure emergency readiness for 200+ participants and committee."
    ],
  },
  {
    organization: "Informatics Student Association",
    position: "Staff - Student Resources Development Division",
    period: "2024 - 2025",
    description: [
      "Vice Project Manager - Maskrab Makrab Informatika Coordinated an orientation event for 200+ new students, managing a team of 80+ committee members",
      "Event Division - Informatics Championship. Assisted in managing 200+ participants in an annual competition",
      "Event Division - Diesnatalis Informatika. Contributed to organizing the Informatics Anniversary event with 300+ attendees"
    ],
  },
];

export default function Organization() {
  return (
    <section
      id="organization"
      className="bg-slate-950 py-24 px-6 text-white"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="mb-12 text-4xl font-bold">
          Organizational Experience
        </h2>

        <div className="space-y-6">
          {organizations.map((org, index) => (
            <div
              key={index}
              className="rounded-2xl border border-slate-700 bg-slate-800 p-8"
            >
              <div className="flex items-start gap-4">
                <Users
                  className="mt-1 text-blue-500"
                  size={30}
                />

                <div>
                  <h3 className="text-2xl font-bold">
                    {org.position}
                  </h3>

                  <p className="text-blue-400">
                    {org.organization}
                  </p>

                  <p className="mt-1 text-gray-400">
                    {org.period}
                  </p>

                  <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-300">
                    {org.description.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}