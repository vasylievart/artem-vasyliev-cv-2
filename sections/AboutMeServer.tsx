import { AboutMeProp } from "@/types";
import Skills from "@/components/Skills";
import { fetchProjectDataWithoutSignal } from "@/api/fetchProjectDataWithoutSignal";


export default async function AboutMeSection({lang}: {lang: string}) {
  const data = await fetchProjectDataWithoutSignal<AboutMeProp>("skills", lang, "skills");

  return (
    <div className="max-w-2xl">
      <h1 className="text-3xl font-bold mb-6">{data.title}</h1>
      <p className="mb-8 text-lg text-neutral-300">{data.story}</p>
      <h2 className="text-2xl font-semibold mb-4">Skills</h2>
      <Skills data={data}/> 
    </div>
  );
}