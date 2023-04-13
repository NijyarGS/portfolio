import ProjectComponent from "../components/ProjectComponent";

export default function Projects() {
  let myProjects = [
    {
      name: "OOP Movie",
      image: "MisingNo",
      desciption:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, necessitatibus reprehenderit. Unde porro quidem",
      Porjecturl: "",
      SiteURL: "",
    },
  ];

  /* be the next */

  return (
    <div className="projects-section">
      <h2 className="section-name"> PROJECTS</h2>
      <div className="projects-container">
        <ProjectComponent />
        <ProjectComponent />
        <ProjectComponent />
      </div>
    </div>
  );
}
