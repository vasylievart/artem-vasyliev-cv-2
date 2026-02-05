import { CvProps } from "@/types";

const Languages = ({data}: {data: CvProps}) => {
  return (
    <div>
      {data.languages.map((l, i) => (
        <div key={i}>
          <h3 className="text-lg mb-2">
            {l.lang} - {l.level}
          </h3>
        </div>
      ))}
    </div>
  )
}

export default Languages;