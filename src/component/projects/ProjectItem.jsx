/* eslint-disable react/prop-types */

const ProjectItem = ({ project }) => {
  const { name, stack, image } = project;

  return (
    <div className="item">
      <div className="item-image">
      <img src={image} alt='/' className="item-image" />
      </div>
      <div className="item-text">
        <div className="item-header">{name}</div>
        <div className="item-stack">{stack}</div>
        <button className="item-btn">More Info</button>
      </div>
    </div>
  );
};

export default ProjectItem;
