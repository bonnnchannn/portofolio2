import { Metadata } from "next";


export const metadata: Metadata = {
  title: "About Me",
  description: "Learn more about me",
};

export default function About() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-6">About Me</h1>
      <section className="flex flex-col md:flex-row items-center gap-8">
        <div className="flex justify-center md:w-1/3">
          <img
            src="/assets/ospek.jpg"
            alt="Profile"
            className="w-48 h-48 rounded-full object-cover shadow-lg"
          />
        </div>
        <div className="md:w-2/3">
          <p className="text-lg text-gray-700 mb-4">
            Hello! My name is [Your Name]. I am a passionate web developer with
            experience in building responsive, interactive, and user-friendly
            web applications. I specialize in front-end development using
            technologies like JavaScript, React, and Next.js.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            I enjoy working on challenging projects and learning new skills. In
            my free time, I love contributing to open-source projects, reading
            tech blogs, and exploring new web development tools and frameworks.
          </p>
          <p className="text-lg text-gray-700">
            If you'd like to connect or discuss potential collaborations, feel
            free to{" "}
            <a href="/contact" className="text-blue-500 hover:underline">
              reach out
            </a>
            !
          </p>
        </div>
      </section>
    </div>
  );
}
