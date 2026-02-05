import { useFilterSkills } from "@/hooks/useFilterSkills";
import Image from "next/image";
import { AboutMeProp } from "@/types";
import { CodeXml, Database, Server, Wallpaper } from "lucide-react";

const Skills = ({data} : {data: AboutMeProp}) => {
   const { codeSkills, graphicSkills, dbSkills, deploySkills } =
    useFilterSkills(data);
  return (
    <div>
        <span className="skills_span">
          <CodeXml />:
          {codeSkills?.map((s, i) => (
            <Image
              key={i}
              title={s.technology}
              src={s.icon}
              alt={s.technology}
              width={24}
              height={24}
            />
          ))}
        </span>
        <span className="skills_span">
          <Wallpaper />:
          {graphicSkills?.map((s, i) => (
            <Image
              key={i}
              title={s.technology}
              src={s.icon}
              alt={s.technology}
              width={24}
              height={24}
            />
          ))}
        </span>
        <span className="skills_span">
          <Database />:
          {dbSkills?.map((s, i) => (
            <Image
              key={i}
              title={s.technology}
              src={s.icon}
              alt={s.technology}
              width={24}
              height={24}
            />
          ))}
        </span>
        <span className="skills_span">
          <Server />:
          {deploySkills?.map((s, i) => (
            <Image
              key={i}
              title={s.technology}
              src={s.icon}
              alt={s.technology}
              width={24}
              height={24}
            />
          ))}
        </span>
      </div>
  )
}

export default Skills;