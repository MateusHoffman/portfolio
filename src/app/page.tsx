import Header from "@/components/header/Header";
import Profile from "./_components/profile/Profile";
import About from "./_components/about/About";
import Experience from "./_components/experience/Experience";
import Recommendation from "./_components/recommendation/Recommendation";
import Academic from "./_components/academic/Academic";

export default function Home() {
  return (
    <div className="bg-light">
      <Header />
      <main className="flex md:pt-3 items-center gap-2 flex-col pb-6">
        <Profile />
        <About />
        <Experience />
        <Academic />
        <Recommendation />
      </main>
    </div>
  );
}
