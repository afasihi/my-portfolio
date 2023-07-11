import experienceData from "../../data/experienceData";
import WorkItem from "./WorkItem";
import './work.scss'

const Work = () => {
  return (
    <div id="work">
      <h3>Professional Experiences</h3>
      {experienceData.map((data, i) => (
        <WorkItem key={i} data={data} />
      ))}
    </div>
  );
};

export default Work;
