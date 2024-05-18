import Header from "@/components/header/Header";
import Profile from "./_components/profile/Profile";
import About from "./_components/about/About";

export default function Home() {
  return (
    <div className="min-h-screen w-screen bg-light max-w-full">
      <Header />
      <main className="flex md:pt-3 items-center gap-3 flex-col">
        <Profile />
        <About />
      </main>
    </div>
  );
}
