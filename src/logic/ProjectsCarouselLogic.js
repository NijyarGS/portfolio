import ProjectComponent from "../components/ProjectComponent";
import { useState } from "react";
import arrowLeft from "../images/arrowLeft.svg";
import arrowRight from "../images/arrowRight.svg";

export default function ProjectsLogic({ items }) {
  let [itemPos, setItemPost] = useState(0);
  let numb = 42;
  console.log(itemPos);

  function handleArrowClick(direction) {
    if (direction) {
      if (itemPos > -42 * (items.length - 2)) setItemPost(itemPos - numb);
    } else {
      if (itemPos < 0) setItemPost(itemPos + numb);
    }
    console.log(itemPos);
  }

  return (
    <div className="projects-carousel-container">
      <button
        className="projects-carousel-button"
        onClick={() => handleArrowClick(false)}
      >
        <i className="fa-solid fa-angles-left"></i>
      </button>

      <div className="projects-container">
        {items.map((item) => {
          return <ProjectComponent name={item.name} itemPos={itemPos} />;
        })}
      </div>

      <button
        className="projects-carousel-button"
        onClick={() => handleArrowClick(true)}
      >
        <i className="fa-solid fa-angles-right"></i>
      </button>
    </div>
  );
}
