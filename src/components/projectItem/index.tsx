import { FC } from "react";
import { Language } from "../../services/types/dataTypes";
import { createMedia } from "@artsy/fresnel";
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
          <div className="project-details">
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
          </div>
        </Media>
        <Media greaterThan="sm">
          <div className="project-details">
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
          </div>
          <div className="project-img">
            <img src={projectScreen} alt={projectName} />
          </div>
        </Media>
      </MediaContextProvider>
    </div>
  );
};
