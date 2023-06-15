import React from "react";
import gitHubIcon from "../image-icons/navGitHub.png";
import { Fade, Slide } from "react-awesome-reveal";
function GithubLogo() {
  return (
    <div>
      <Fade triggerOnce="true" duration={2500}>
        <a href="https://github.com/alexcruz097/portfolio-2.0" target="_blank">
          {" "}
          <img className="portfolio-gitHub-logo" src={gitHubIcon} />
        </a>
      </Fade>
    </div>
  );
}

export default GithubLogo;
