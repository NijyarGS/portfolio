import SkillComp from "../components/SkillComp";

let Myskills = [
  {
    name: "HTML",
    img: "https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg",
  },
  {
    name: "CSS",
    img: "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg",
  },
  {
    name: "JavaScript",
    img: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
  },
  {
    name: "React",
    img: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  },
  {
    name: "Firebase",
    img: "https://cdn.dribbble.com/users/528264/screenshots/3140440/media/5f34fd1aa2ebfaf2cd548bafeb021c8f.png?compress=1&resize=800x600&vertical=top",
  },
  {
    name: "Tailwind CSS",
    img: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
  },
  {
    name: "git",
    img: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
  },
  {
    name: "GitHub",
    img: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
  },
  {
    name: "Photoshop",
    img: "https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg",
  },
];
export default function Skills() {
  return (
    <div className="skills-section-container">
      <h2 className="section-name">SKILLS</h2>
      <div className="skills-container">
        {Myskills.map((item) => {
          return <SkillComp name={item.name} img={item.img} />;
        })}
      </div>
    </div>
  );
}
