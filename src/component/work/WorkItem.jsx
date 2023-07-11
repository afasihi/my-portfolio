/* eslint-disable react/prop-types */
const WorkItem = ({ data }) => {
  const { companyName, title, startDate, endDate, duration, description } =
    data;
    console.log({data});

  return (
    <ul className="content">
      <li className="list">
        <div className="space" />
        <div className="dot" />
        <div className="experience">
          <span className="title">{title}</span>
          <span className="company">{companyName}</span>
          <span className="duration">{`${startDate} - ${endDate} · ${duration}`}</span>
        </div>
        <p>{description}</p>
      </li>
    </ul>
  );
};

export default WorkItem;
