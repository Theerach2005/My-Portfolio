import Navbar from "@/components/navbar";
import Profile from "@/components/profile";
import Projects from "@/components/projects";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 selection:bg-cyan-500 selection:text-white">
      <Navbar />
      <Profile />
      <div className="max-w-7xl mx-auto space-y-20">
        <Projects />
      </div>
      <Footer />
    </main>
  );
}