import { FC } from "react";
import { Language } from "../../services/types/dataTypes";
import { createMedia } from "@artsy/fresnel";
import { Meteors } from "../ui/meteor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder } from "@fortawesome/free-regular-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "./projectItem.scss";

type Props = {
  projectName: string;
  projectScreen: string;
  projectDescription: string;
  linktoGitHub: string;
  languages: Language[];
};

const { MediaContextProvider, Media } = createMedia({
  // breakpoints values can be either strings or integers
  breakpoints: {
    sm: 0,
    md: 768,
  },
});

export const ProjectItem: FC<Props> = ({
  projectName,
  projectScreen,
  projectDescription,
  linktoGitHub,
  languages,
}) => {
  return (
    <div className="project-item">
      <MediaContextProvider>
        <Media at="sm">
          <div className="w-full relative">
            <div className="project-details relative overflow-hidden">
              <div className="project-links">
                <div className="ico">
                  <FontAwesomeIcon icon={faFolder} className="colored" />
                </div>
                <div className="ico">
                  <a href={linktoGitHub}>
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </div>
              </div>
              <div className="project-name">
                <span>{projectName}</span>
              </div>
              <div className="project-description">
                <p>{projectDescription}</p>
              </div>
              <div className="project-language">
                {languages.map((item, index) => {
                  return (
                    <div className="item" key={index}>
                      <div className="item-img">
                        <img src={item.languageIcon} alt={item.language} />
                      </div>
                      <span>{item.language}</span>
                    </div>
                  );
                })}
              </div>
              <Meteors number={20} />
            </div>
          </div>
        </Media>
        <Media greaterThan="sm">
          <div className="project-details">
            <div className="project-name">
              <span>{projectName}</span>
            </div>
            <div className="w-full relative">
              <div className="project-description relative overflow-hidden">
                <p>{projectDescription}</p>
                <Meteors number={20} />
              </div>
            </div>
            <div className="project-language">
              {languages.map((item, index) => {
                return (
                  <div className="item" key={index}>
                    <div className="item-img">
                      <img src={item.languageIcon} alt={item.language} />
                    </div>
                    <span>{item.language}</span>
                  </div>
                );
              })}
            </div>
            <div className="project-links">
              <div className="ico">
                <a href={linktoGitHub}>
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>
            </div>
          </div>
          <div className="project-img">
            <img src={projectScreen} alt={projectName} />
          </div>
        </Media>
      </MediaContextProvider>
    </div>
  );
};
