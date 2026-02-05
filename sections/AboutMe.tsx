"use client";

import { AboutMeProp } from "@/types";
import { Ellipsis} from "lucide-react";
import { useProjectData } from "@/hooks/useProjectData";
import { useProjectDataWithoutSignal } from "@/hooks/useProjectDataWithoutSignal";
import Skills from "@/components/Skills";




export default function AboutMe() {

  const { data, loading, error } = useProjectData<AboutMeProp>(
    "skills",
    "skills"
  );
  //const {data, loading, error} = useProjectDataWithoutSignal<AboutMeProp>("skills", "skills");

 
  if (!data) return null;
  if (loading)
    return (
      <p>
        <Ellipsis />
        loaging "About Me" data. Pleas wait ;)
      </p>
    );
  if (error) return <p>Error to fetch About Me data :(</p>;

  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-bold mb-6">{data.title}</h1>
      <p className="mb-8 text-lg text-neutral-300">{data.story}</p>
      <h2 className="text-2xl font-semibold mb-4">Skills</h2>
      <Skills data={data}/> 
    </div>
  );
}
