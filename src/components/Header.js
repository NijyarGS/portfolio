export default function Header() {
  return (
    <header className="porfolio_header">
      <div className="header_name_container">
        <h1 className="header_name">Nizhyar Saeed</h1>
      </div>
      <ul className="header_items_list">
        <a href="#aboutme" className="header-anchor header_item">
          About me
        </a>
        <a href="#skills" className="header-anchor header_item">
          Skills
        </a>
        <a href="#projects" className="header-anchor header_item">
          Projects
        </a>
        <a href="#contactme" className="header-anchor header_item">
          Conatact me
        </a>
      </ul>

      <ul className="social-links-container">
        <li>
          <a
            className="header-anchor social-link"
            href="https://www.linkedin.com/in/nijyar-saeed/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a
            className="header-anchor social-link"
            href="https://github.com/NijyarGS"
            target="_blank"
            rel="noreferrer noopener"
          >
            <i className="fa-brands fa-github"></i>
          </a>
        </li>
      </ul>
    </header>
  );
}
