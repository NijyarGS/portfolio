export default function ProjectComponent({
  name,
  image = "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
  description,
  urls,
  technologies,
}) {
  // Add technologies
  // make it sideways

  return (
    <div className={"project-component-container "}>
      <div className="project-component-header">
        <img className="project-component-image" src={image} alt={name} />
      </div>
      <div className="project-component-main">
        <h3 className="project-component-name">{name}</h3>
        <div className="project-component-desciption-conatiner">
          <p className="project-component-desciption">{description}</p>
        </div>
        <div className="technologies-top-container">
          <p className="technologies-head"> Technologies</p>
          <div className="technologies-container">
            {technologies.map((item) => {
              return <span className="technologies-type">{item} </span>;
            })}
          </div>
        </div>

        <div className="porject-component-links-container">
          {urls.map((item) => {
            return (
              <a
                className="porject-component-link"
                href={item.link}
                target="_blank"
                rel="noreferrer noopener"
              >
                {item.name}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
