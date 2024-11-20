// app/page.tsx
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Skills Section */}
      <section id="skills" className="py-16 m-8 bg-gray-200 rounded-xl text-gray-900">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8 ">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="skill-card">
              <h3 className="font-semibold text-xl">HTML</h3>
            </div>
            <div className="skill-card">
              <h3 className="font-semibold text-xl">CSS</h3>
            </div>
            <div className="skill-card">
              <h3 className="font-semibold text-xl">JavaScript</h3>
            </div>
            <div className="skill-card">
              <h3 className="font-semibold text-xl">React</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-8 bg-white text-gray-900">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="project-card bg-gray-100 p-6 rounded-lg shadow-md">
              <Image
                src="/path/to/project-image.jpg"
                alt="Project 1"
                width={400}
                height={250}
                className="rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold">Project 1</h3>
              <p className="text-gray-700">A brief description of this project.</p>
            </div>
            <div className="project-card bg-gray-100 p-6 rounded-lg shadow-md">
              <Image
                src="/path/to/project-image.jpg"
                alt="Project 2"
                width={400}
                height={250}
                className="rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold">Project 2</h3>
              <p className="text-gray-700">A brief description of this project.</p>
            </div>
            <div className="project-card bg-gray-100 p-6 rounded-lg shadow-md">
              <Image
                src="/path/to/project-image.jpg"
                alt="Project 3"
                width={400}
                height={250}
                className="rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold">Project 3</h3>
              <p className="text-gray-700">A brief description of this project.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-8 bg-gray-50 text-gray-900">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">Contact</h2>
          <p className="text-lg mb-4">
            Feel free to reach out if you'd like to connect or collaborate on a project!
          </p>
          <a
            href="mailto:your.email@example.com"
            className="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
