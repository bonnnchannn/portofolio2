// app/layout.tsx
import "./globals.css";
import About from "./about/page";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white">
        {/* Header (Global) */}
        <header className="bg-gray-600 text-white font-semibold py-6">
          <div className="container mx-auto px-6 flex justify-between items-center">
            <h1 className="text-3xl font-semibold">opanG</h1>
            <nav>
              <ul className="flex gap-8">
                <li><a href="#about" className="hover:underline">About</a></li>
                <li><a href="#skills" className="hover:underline">Skills</a></li>
                <li><a href="#projects" className="hover:underline">Projects</a></li>
                <li><a href="#contact" className="hover:underline">Contact</a></li>
              </ul>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <About/>
        <main>{children}</main>

        {/* Footer */}
        <footer className="bg-gray-600 text-white py-6">
          <div className="container mx-auto text-center">
            <p>&copy; 2024 Your Name. All rights reserved.</p>
            <div className="flex justify-center gap-6 mt-4">
              <a href="#" className="hover:underline">LinkedIn</a>
              <a href="#" className="hover:underline">GitHub</a>
              <a href="#" className="hover:underline">Twitter</a>
              <a href="#" className="hover:underline">Instagram</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
