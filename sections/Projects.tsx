import { Project } from "@/types";
import ProjectCard from "@/components/ProjectCard";
import { fetchProjectData } from "@/api/fetchProjectData";




export default async function Projects({lang}: {lang: string}) {
  const data = await fetchProjectData<Project[]>("projects", lang, "projects");
  const projects = data;

  return (
    <div className="flex flex-col">
      <h1 className="text-4xl font-bold mb-10">Projects</h1>

      <div className="flex flex-col w-240 gap-10">
        {projects.map((p, i) => (
          <div key={i} className="project_container">
            <span className="m-4 p-4">
              <a
                href={p.url}
                target="_blank"
                className="text-xl font-semibold hover:underline p-4"
              >
                {p.name}
              </a>
            </span>
            <ProjectCard lang={lang} project={p} />
          </div>
        ))}
      </div>
    </div>
  );
}