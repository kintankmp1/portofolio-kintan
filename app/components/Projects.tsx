import Image from "next/image";
import { Star } from "lucide-react";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-slate-900 py-24 px-6 text-white"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold mb-4">
          Featured Projects
        </h2>

        <p className="text-gray-400 mb-12">
          Some academic and personal projects that demonstrate my skills.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project) => (
            <div
              key={project.title}
              className="overflow-hidden rounded-2xl bg-slate-800 border border-slate-700 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500"
            >

              {/* Screenshot Project */}
              <div className="overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={700}
                  height={450}
                  className="h-52 w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6">

                <div className="flex items-center justify-between">

                  <h3 className="text-xl font-bold">
                    {project.title}
                  </h3>

                  {project.featured && (
                    <Star
                      size={18}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  )}

                </div>

                <p className="mt-4 text-gray-400 leading-7">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-slate-700 px-3 py-1 text-sm text-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}