import {
  FaGithub,
  FaLinkedin,
  FaEnvelopeOpen,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-900 py-24 px-6 text-white"
    >
      <div className="max-w-5xl mx-auto">

        <h2 className="text-4xl font-bold mb-12">
          Contact
        </h2>

        <div className="space-y-6">

          <div className="flex items-center gap-4">
            <FaEnvelopeOpen className="text-blue-500 text-xl" />

            <a href="mailto:kintankinasihmahaputri111@gmail.com">
              kintankinasihmahaputri111@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-4">
            <FaGithub className="text-blue-500 text-xl" />

            <a
              href="https://github.com/kintankmp"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/kintankmp
            </a>
          </div>

          <div className="flex items-center gap-4">
            <FaLinkedin className="text-blue-500 text-xl" />

            <a
              href="https://linkedin.com/in/kintankmp"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/kintankmp
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}