import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow-md p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-semibold text-blue-600">Next.js App</h1>
          <ul className="flex space-x-4 text-gray-700">
            <li><a href="#" className="hover:text-blue-500">Home</a></li>
            <li><a href="#" className="hover:text-blue-500">About</a></li>
            <li><a href="#" className="hover:text-blue-500">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Content */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-4">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Welcome to My Next.js App</h2>
        <p className="text-lg text-gray-600 mb-6">
          This base page is styled using Tailwind CSS and includes a simple layout with a navbar.
        </p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
          Get Started
        </button>
      </section>
    </main>
  );
}
