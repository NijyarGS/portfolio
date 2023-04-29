import ProjectComponent from "../components/ProjectComponent";
// import { useState } from "react";
// import arrowLeft from "../images/arrowLeft.svg";
// import arrowRight from "../images/arrowRight.svg";

export default function ProjectsLogic({ items }) {
  // console.log(items.length);
  // let [current, setCurrent] = useState(0);
  // let second = current + 1;
  // let last = current + 2;
  // let previous = current - 1;

  // function handleArrowClick(direction) {
  //   if (direction) {
  //     if (second < items.length - 1) setCurrent(current + 1);
  //   } else {
  //     if (current > 0) setCurrent(current - 1);
  //   }
  // }

  return (
    <div className="projects-carousel-container">
      {/*<button
        className="projects-carousel-button"
        onClick={() => handleArrowClick(false)}
      >
        <i className="fa-solid fa-angles-left"></i>
      </button>*/}

      <div className="projects-container">
        {items.map((item, index) => {
          // if (index === current || index === second)
          return <ProjectComponent name={item.name} />;
          // else if (index <= previous)
          //   return (
          //     <ProjectComponent name={item.name} itemClasses={"previousItem"} />
          //   );
          // else if (index > second)
          //   return (
          //     <ProjectComponent name={item.name} itemClasses={"nextItem"} />
          //   );
        })}
      </div>

      {/* <button
        className="projects-carousel-button"
        onClick={() => handleArrowClick(true)}
      >
        <i className="fa-solid fa-angles-right"></i>
      </button>*/}
    </div>
  );
}
