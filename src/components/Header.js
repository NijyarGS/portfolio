export default function Header() {
  return (
    <header className="porfolio_header">
      <div className="header_name_container">
        <h1 className="header_name">Nizhyar Saeed</h1>
      </div>
      <ul className="header_items_list">
        <li className="header_item">About me</li>
        <li className="header_item">Projects</li>
        <li className="header_item">Skills</li>
        <li className="header_item">Conatact me</li>
      </ul>

      <ul className="social-links-container">
        <li className="social-link">
          <a
            className="header-anchor"
            href="https://www.linkedin.com/in/nijyar-saeed/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <i class="fa-brands fa-linkedin"></i>
          </a>
        </li>
        <li className="social-link">
          <a
            className="header-anchor"
            href="https://github.com/NijyarGS"
            target="_blank"
            rel="noreferrer noopener"
          >
            <i class="fa-brands fa-github"></i>
          </a>
        </li>
      </ul>
    </header>
  );
}
