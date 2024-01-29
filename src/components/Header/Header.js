import './Header.css';
import video_header from "./header_video.mp4"
import logo from "./logo.png"

function Header() {

  return (
    <div className="Header" id="header">
      <header className="Header-header">
        <video width="100%" autoPlay loop muted>
            <source src={video_header} type="video/mp4"></source>
            Your browser does not support the video tag.
        </video>
        <div className="splash">
          <img src={logo}></img>
          <p>Your Voice. Your Words. For All. Authentically translate your videos in 60+ languages.</p>
        </div>
      </header>
    </div>
  );
}

export default Header;
