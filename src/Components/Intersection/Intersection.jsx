import React from "react";
import Button from "../Button";

const Intersection = ({ title, subtitle, imageUrl, hrefUrl }) => {
  const image = {
    "backgroundImage": `url(${imageUrl})`,
  };

  return (
    <section
      className="intersection-background"
      id="intersection"
      style={image}
    >
      <div className="intersection-overlay text-center text-white d-flex justify-content-center align-items-center">
        <div className="w-75 p-3">
          <h1 className="display-2 fw-bold my-3">{title}</h1>
          <h4 className="fs-2 my-3">{subtitle}</h4>
          <a href={hrefUrl}>
            <Button cls="btn-outline-light my-3" text="Conocer más" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intersection;
