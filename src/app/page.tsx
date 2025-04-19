// app/page.tsx
import { Header } from "./components/Header";
import Contact from "./components/Contact"; // 👈 Add this

export default function Home() {
  return (
    <div>
      <Header />
      <main className="bg-gray-950 text-white font-sans">
        {/* Hero Section */}

        {/* Contact Section */}
        <Contact />

        {/* Footer */}
        <footer className="bg-gray-950 text-gray-400 text-center py-6">
          © 2025 Your Company. All rights reserved.
        </footer>
      </main>
    </div>
  );
}
