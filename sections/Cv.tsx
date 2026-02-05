import { fetchProjectData } from "@/api/fetchProjectData";
import { CvProps } from "@/types";
import dynamic from "next/dynamic";

const Competence = dynamic(() => import("@/components/Competence"), {
  loading: () => <div className="h-64 bg-neutral-800 animate-pulse rounded" />,
});
const Education = dynamic(() => import("@/components/Education"), {
  loading: () => <div className="h-64 bg-neutral-800 animate-pulse rounded" />
})
const Languages = dynamic(() => import("@/components/Education"), {
  loading: () => <div className="h-64 bg-neutral-800 animate-pulse rounded" />
})

export default async function Cv({lang}: {lang: string}) {
 const data = await fetchProjectData<CvProps>("cv", lang, "cv" )


  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-bold mb-6">{data.title}</h1>
      <h3 className="text-lg text-white/80 font-bold mb-2">{data.area}</h3>
      <h4 className="text-md text-white/60 mb-6">{data.location}</h4>
      <Competence data={data}/>
      <h2 className="text-2xl font-bold mb-6">Education</h2>
      <Education data={data}/>
      <h2 className="text-2xl mb-6">Languages</h2>
      <Languages data={data}/>
    </div>
  );
}
