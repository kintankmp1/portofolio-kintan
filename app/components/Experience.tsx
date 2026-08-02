import { Briefcase } from "lucide-react";

const experiences = [
  {
    year: "Jul 2024 - Aug 2024",
    title: "Internship",
    company: "PT. Boga Indonesia Talenta",
    description: [
      "Managed and processed daily orders from 9 outlets, ensuring timely order fulfillment and smooth operational workflows.",
      "Maintained more than 300 daily transaction records using Microsoft Excel and Google Sheets, improving data accuracy and operational efficiency.",
      "Prepared over 20 weekly reports and order summaries to support performance monitoring and management decision-making.",
      "Designed UI/UX solutions for the Sales Admin application, enhancing usability and supporting business process efficiency.",
    ],
  },
  {
    year: "Aug 2025 - Sep 2025",
    title: "Internship",
    company: "PT. Sharp Semiconductor Indonesia",
    description: [
      "Developed a web-based employee management system used to manage employee records and administrative processes for 100+ employees, reducing manual data handling and improving operational efficiency.",
      "Built and enhanced an inventory management application to improve inventory tracking and reporting efficiency.",
      "Prepared technical documentation and supported IT administrative activities.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-slate-950 py-24 px-6 text-white"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="mb-12 text-4xl font-bold">
          Experience
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative border-l-4 border-blue-500 pl-6"
            >
              <div className="absolute -left-3 top-1">
                <Briefcase
                  className="bg-slate-950 text-blue-500"
                  size={24}
                />
              </div>

              <p className="font-semibold text-blue-400">
                {exp.year}
              </p>

              <h3 className="mt-2 text-2xl font-bold">
                {exp.company}
              </h3>

              <p className="text-gray-400">
                {exp.title}
              </p>

              <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-300">
                {exp.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}