// app/page.tsx
export default function Home() {
  return (
    <main className="bg-gray-950 text-white font-sans">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-indigo-400">
          Build the Future with Us
        </h1>
        <p className="text-lg md:text-2xl mb-6 max-w-xl text-gray-300">
          We specialize in app development, web development, UI/UX, AI chatbots, and more.
        </p>
        <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-xl shadow-lg transition-all">
          Get a Free Quote
        </button>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-gray-900">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            'Web Development',
            'App Development',
            'UI/UX Design',
            'Mobile Design',
            'App Design',
            'AI Chatbot',
          ].map((service) => (
            <div
              key={service}
              className="bg-gray-800 p-6 rounded-2xl shadow-xl hover:shadow-indigo-500/30 transition-all"
            >
              <h3 className="text-xl font-semibold text-indigo-400 mb-2">{service}</h3>
              <p className="text-gray-300">
                We create modern, scalable, and user-friendly solutions tailored to your needs.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-indigo-500 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
          Let’s build something amazing together!
        </h2>
        <button className="bg-white text-indigo-600 font-bold px-8 py-3 rounded-full mt-4 hover:bg-gray-100 transition">
          Contact Us
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 text-center py-6">
        © 2025 Your Company. All rights reserved.
      </footer>
    </main>
  );
}
