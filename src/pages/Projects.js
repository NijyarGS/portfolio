// import ProjectComponent from "../components/ProjectComponent";
import ProjectsLogic from "../logic/ProjectsCarouselLogic";

export default function Projects() {
  let myProjects = [
    {
      name: "i am first",
      image:
        "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, necessitatibus reprehenderit. Unde porro quidem",
      urls: [
        { name: "Github", link: "" },
        { name: "Live Website", link: "" },
      ],
      technologies: ["html", "csss", "react"],
    },
    {
      name: "i am second",
      image:
        "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, necessitatibus reprehenderit. Unde porro quidem",
      urls: [
        { name: "Github", link: "" },
        { name: "Live Website", link: "" },
      ],
      technologies: ["html", "csss", "react"],
    },
    {
      name: "i am third",
      image:
        "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, necessitatibus reprehenderit. Unde porro quidem",
      urls: [
        { name: "Github", link: "" },
        { name: "Live Website", link: "" },
      ],
      technologies: ["html", "csss", "react"],
    },
    {
      name: "Be the Next",
      image:
        "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, necessitatibus reprehenderit. Unde porro quidem",
      urls: [
        { name: "Github", link: "" },
        { name: "Live Website", link: "" },
      ],
      technologies: ["html", "csss", "react"],
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
