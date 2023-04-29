export default function SkillComp({
  name,
  img = "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
}) {
  return (
    <div className="skill">
      <img className="skill-img" src={img} alt={name + "'s image"} />
      <p className="skill-name">{name.toUpperCase()}</p>
    </div>
  );
}
