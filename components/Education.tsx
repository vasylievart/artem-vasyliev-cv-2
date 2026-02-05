import { CvProps } from "@/types"

const Education = ({data}: {data: CvProps}) => {
  return (
    <div>
       {data.education.map((e, i) => (
        <div key={i} className="mb-6 gap-2">
          <h3 className="text-lg font-bold mb-2">{e.institution}</h3>
          <h4 className="text-md text-white/80 mb-2">{e.formation}</h4>
          <h5 className="text-base text-white/60 mb-2">{e.degree}</h5>
        </div>
      ))}
    </div>
  )
}

export default Education;