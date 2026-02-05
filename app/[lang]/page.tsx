import { Sidebar } from "@/components/Sidebar";
import AboutMeSection from "@/sections/AboutMeServer";
import Contact from "@/sections/Contacts";
import CvServer from "@/sections/CvSection";
import ProjectsServer from "@/sections/ProjectServe";


export default async function Home({params}: {params: Promise<{lang: string}>}) {
  const {lang} = await params;
  return (
      <div className="main_page">
      <Sidebar  lang={lang}/>
      <main className="ml-64 w-full px-10 py-20 space-y-40">
        <section id="about">
          <AboutMeSection lang={lang}/>
        </section>
        <section id="cv">
          <CvServer lang={lang}/>
        </section>
        <section id="projects">
          <ProjectsServer lang={lang}/>
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </div> 
  );
}