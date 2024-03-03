import githubIcon from "../assets/images/github-white.png"
import twitterIcon from "../assets/images/twitter-white.png"
import linkedInIcon from "../assets/images/linkedin-white.png"

function Footer() {
  return (
    <footer className="footer">
      <div>
        <a
          href="https://github.com/Erik-Aku"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={githubIcon}
            alt="Github"
            className="social"
          ></img>
        </a>
      </div>
      <div>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={twitterIcon}
            alt="Twitter"
            className="social"
          ></img>
        </a>
      </div>
      <div>
        <a
          href="https://www.linkedin.com/in/erik-aku"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={linkedInIcon}
            alt="Linkedin"
            className="social"
          ></img>
        </a>
      </div>
    </footer>
  );
}

// export footer
export default Footer;
