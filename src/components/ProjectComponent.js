export default function ProjectComponent({
  name,
  image,
  description,
  itemPos,
}) {
  // Add technologies
  // make it sideways

  return (
    <div
      className={"project-component-container "}
      style={{ transform: `translateX(${itemPos}rem)` }}
    >
      <div className="project-component-header">
        <img
          className="project-component-image"
          src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
          alt="something"
        />
      </div>
      <div className="project-component-main">
        <div className="project-component-desciption-conatiner">
          <h3 className="project-component-name">{name}</h3>
          <p className="project-component-desciption">{description}</p>
        </div>
        <div className="porject-component-links-container">
          <a
            className="porject-component-link"
            href="place"
            target="_blank"
            rel="noreferrer noopener"
          >
            Github
          </a>
          <a
            className="porject-component-link"
            href="place"
            target="_blank"
            rel="noreferrer noopener"
          >
            Live website
          </a>
        </div>
      </div>
    </div>
  );
}
