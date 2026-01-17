import { projects } from "../data/CaseStudy";
import { useParams } from "react-router-dom";

export default function CaseStudy() {
   const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <p className="text-center mt-20">Project tidak ditemukan</p>;
  }

  return (
    <section className="max-w-5xl mx-auto px-6 py-20 text-zinc-200">
      {/* HERO */}
      <header className="mb-16 animate__animated animate__fadeInUp animate__delay-1s" data-aos="fade-up">
        <p className="text-sm text-violet-400 mb-2">Case Study</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          {project.title}
        </h1>
        <p className="text-zinc-400">{project.period}</p>
      </header>

      {/* HERO IMAGE */}
      {project.images?.length > 0 && (
        <div
          className="mb-20 animate__animated animate__fadeInUp animate__delay-2s"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <img
            src={project.images[0]}
            alt={`${project.title} preview`}
            className="rounded-2xl w-full border border-zinc-700 shadow-lg"
          />
        </div>
      )}

      {/* OVERVIEW */}
      <section className="mb-16 grid md:grid-cols-3 gap-8">
        <div data-aos="fade-right">
          <h2 className="text-2xl font-semibold sticky top-24">
            Overview
          </h2>
        </div>
        <p
          className="md:col-span-2 text-zinc-300 leading-relaxed"
          data-aos="fade-left"
        >
          {project.overview}
        </p>
      </section>

      {/* ROLE */}
      <section className="mb-16 grid md:grid-cols-3 gap-8">
        <div data-aos="fade-right">
          <h2 className="text-2xl font-semibold">Role & Contribution</h2>
        </div>
        <p
          className="md:col-span-2 text-zinc-300"
          data-aos="fade-left"
        >
          {project.role}
        </p>
      </section>

      {/* PROBLEM */}
      <section className="mb-16 grid md:grid-cols-3 gap-8">
        <div data-aos="fade-right">
          <h2 className="text-2xl font-semibold">Problem</h2>
        </div>
        <ul className="md:col-span-2 space-y-3">
          {project.problems.map((item, index) => (
            <li
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="p-4 bg-zinc-800 rounded-lg border border-zinc-700"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* SOLUTION */}
      <section className="mb-20 grid md:grid-cols-3 gap-8">
        <div data-aos="fade-right">
          <h2 className="text-2xl font-semibold">Solution</h2>
        </div>
        <ul className="md:col-span-2 space-y-3">
          {project.solutions.map((item, index) => (
            <li
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="p-4 bg-zinc-800 rounded-lg border border-zinc-700"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* IMAGE GALLERY */}
      {project.images?.length > 1 && (
        <section className="mb-20">
          <h2
            className="text-2xl font-semibold mb-6"
            data-aos="fade-up"
          >
            Interface Preview
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {project.images.slice(1).map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Preview ${index + 1}`}
                data-aos="zoom-in"
                data-aos-delay={index * 150}
                className="rounded-xl border border-zinc-700 hover:scale-[1.02] transition"
              />
            ))}
          </div>
        </section>
      )}

      {/* TECH STACK */}
      <section className="mb-16">
        <h2
          className="text-2xl font-semibold mb-4"
          data-aos="fade-up"
        >
          Tech Stack
        </h2>
        <div className="flex flex-wrap gap-3">
          {project.tech.map((tech, index) => (
            <span
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 80}
              className="px-4 py-2 text-sm rounded-full bg-zinc-800 border border-zinc-700"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="flex gap-4" data-aos="fade-up">
        {project.website ? (
          <a
            href={project.website}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-violet-700 px-6 py-3 rounded-lg hover:bg-violet-600 transition"
          >
            Lihat Pyoyek
          </a>
        ) : (
          <span className="bg-zinc-700 px-6 py-3 rounded-lg text-zinc-400 cursor-not-allowed">
            Website belum tersedia
          </span>
        )}
      </section>
    </section>
  );
}
