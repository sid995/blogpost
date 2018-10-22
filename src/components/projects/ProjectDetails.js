import React from "react";

const ProjectDetails = props => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            provident ducimus recusandae dicta iusto dolores, quidem harum
            voluptatem rerum et eligendi consequatur ab ea ex, ipsam
            reprehenderit beatae, molestias ad.
          </p>
        </div>
        <div className="card-action grey-text">
          <div>Posted by Siddharth Kundu</div>
          <div>20h October, 2018</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
