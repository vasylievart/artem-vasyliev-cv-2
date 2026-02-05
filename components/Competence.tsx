import { CvProps } from "@/types";
import { BrainCircuit } from "lucide-react";

const Competence = ({data}: {data: CvProps}) => {
  return (
    <div>
      <ul className="text-white/80 mb-12">
        <li className="flex gap-2 mb-2">
          <BrainCircuit />
          {data.skills.competence_1}
        </li>
        <li className="flex gap-2 mb-2">
          <BrainCircuit />
          {data.skills.competence_2}
        </li>
        <li className="flex gap-2 mb-2">
          <BrainCircuit />
          {data.skills.competence_3}
        </li>
        <li className="flex gap-2 mb-2">
          <BrainCircuit />
          {data.skills.competence_4}
        </li>
        <li className="flex gap-2 mb-2">
          <BrainCircuit />
          {data.skills.competence_5}
        </li>
      </ul>

    </div>
  )
}

export default Competence;