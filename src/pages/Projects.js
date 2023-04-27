import ProjectComponent from "../components/ProjectComponent";
import ProjectsLogic from "../logic/ProjectsCarouselLogic";

export default function Projects() {
  let myProjects = [
    {
      name: "i am first",
      image:
        "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      desciption:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, necessitatibus reprehenderit. Unde porro quidem",
      Porjecturl: "",
      SiteURL: "",
    },
    {
      name: "i am second",
      image:
        "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      desciption:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, necessitatibus reprehenderit. Unde porro quidem",
      Porjecturl: "",
      SiteURL: "",
    },
    {
      name: "i am third",
      image:
        "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      desciption:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, necessitatibus reprehenderit. Unde porro quidem",
      Porjecturl: "",
      SiteURL: "",
    },
    {
      name: "Be the Next",
      image:
        "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
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

      <ProjectsLogic items={myProjects} />
    </div>
  );
}
