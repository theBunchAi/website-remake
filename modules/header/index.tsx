import { navBarContent } from "@common-data";

export default function Header() {
  const { leftText, locationText } = navBarContent;
  return (
    <header>
      <div className="header-container">
        <div className="logo">
          <span>{leftText}</span>
        </div>
        <div className="other-content">
          <div className="location-container">
            <span>{locationText}</span>
            <span>to be decided</span>
          </div>
          <div className="ham-btn">
            <div></div>
            <div></div>
            <div></div>
            <div></div> 
          </div>
        </div>
      </div>
    </header>
  );
}
