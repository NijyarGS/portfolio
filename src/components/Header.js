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
      <div className="social-links-container">
        <ul>
          <li>Email</li>
          <li>LikedIn</li>
          <li>Github</li>
        </ul>
      </div>
    </header>
  );
}
