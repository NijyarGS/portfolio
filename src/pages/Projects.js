// import ProjectComponent from "../components/ProjectComponent";
import ProjectsLogic from "../logic/ProjectsCarouselLogic";

export default function Projects() {
  let myProjects = [
    {
      name: "OOP Movie",
      image:
        "https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg",
      description:
        "Worked in group to make a Single Page Movies data website made using The Movie DataBase API ",
      urls: [{ name: "Github", link: "https://github.com/NijyarGS/oop-movie" }],
      technologies: ["Movie DB API", "JavaScript", "Bootstrap"],
    },
    {
      name: "Cardly",
      image:
        "https://cardly-recoded.netlify.app/static/media/flashcardlogoalone.f351f27bc77d70bfdc10.png",
      description:
        "Worked in Group to Make a website that allows users to create Cards for various purposes",
      urls: [
        {
          name: "Github",
          link: "https://github.com/ReCoded-Org/capstone-IQLBPS-flashcard",
        },
        { name: "Live Website", link: "https://cardly-recoded.netlify.app/" },
      ],
      technologies: [
        "React",
        "Redux",
        "Firebase",
        "Tailwind",
        "Airbnb guidelines",
      ],
    },
  ];

  /* be the next */

  return (
    <div id="projects" className="projects-section">
      <h2 className="section-name"> PROJECTS</h2>

      <ProjectsLogic items={myProjects} />
    </div>
  );
}
