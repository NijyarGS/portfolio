export default function ProjectComponent() {
  return (
    <div className="project-component-container">
      <div className="project-component-header">
        <img
          className="project-component-image"
          src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
          alt="something"
        />
      </div>
      <div className="project-component-main">
        <div className="project-component-desciption-conatiner">
          <h3 className="project-component-name">THING</h3>
          <p className="project-component-desciption">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam rerum
            debitis quisquam culpa, nihil dignissimos dolorem at consequuntur.
            Porro, minus ?
          </p>
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
