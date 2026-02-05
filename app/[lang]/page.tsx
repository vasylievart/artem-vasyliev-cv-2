import { Sidebar } from "@/components/Sidebar";
import AboutMe from "@/sections/AboutMe";
import Contact from "@/sections/Contacts";
import Cv from "@/sections/Cv";
import Projects from "@/sections/Projects";


export default async function Home({params}: {params: Promise<{lang: string}>}) {
  const {lang} = await params;
  return (
      <div className="main_page">
      <Sidebar/>
      <main className="ml-64 w-full px-10 py-20 space-y-40">
        <section id="about">
          <AboutMe lang={lang}/>
        </section>
        <section id="cv">
          <Cv lang={lang}/>
        </section>
        <section id="projects">
          <Projects lang={lang}/>
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </div> 
  );
}