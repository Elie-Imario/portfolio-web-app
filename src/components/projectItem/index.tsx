import { FC, useEffect, useRef } from "react";
import { Language } from "../../services/types/dataTypes";
import { createMedia } from "@artsy/fresnel";
import { Meteors } from "../ui/meteor";
import ScrollReveal from "scrollreveal";
import {
  fromLeftReveal,
  fromLeftReveal1,
  fromLeftReveal2,
  fromLeftReveal3,
  fromRightReveal,
  fromRightReveal1,
  fromRightReveal2,
  fromRightReveal3,
  fromRightRevealImg,
} from "../../utils/scrollReveal.config";
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
  projectKey: number;
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
  projectKey,
}) => {
  const projectSmRef = useRef<HTMLDivElement>(null);
  const projectXlRef = useRef<HTMLDivElement>(null);
  const projectXlImgRef = useRef<HTMLDivElement>(null);

  //Media at 768px and down
  useEffect(() => {
    if (
      projectSmRef.current?.className.indexOf(" project-sm-0") !== -1 ||
      projectSmRef.current?.className.indexOf(" project-sm-2") !== -1
    ) {
      ScrollReveal().reveal(
        projectSmRef.current as HTMLElement,
        fromLeftReveal
      );
    } else {
      ScrollReveal().reveal(
        projectSmRef.current as HTMLElement,
        fromRightReveal
      );
    }
  }, []);

  //Media at 768px and up
  useEffect(() => {
    if (
      projectXlRef.current?.className.indexOf("project-xl-0") !== -1 ||
      projectXlRef.current?.className.indexOf("project-xl-2") !== -1
    ) {
      ScrollReveal().reveal(
        projectXlRef.current?.querySelector(".project-name") as HTMLElement,
        fromLeftReveal1
      );
      ScrollReveal().reveal(
        projectXlRef.current?.querySelector(
          ".project-description"
        ) as HTMLElement,
        fromLeftReveal2
      );
      ScrollReveal().reveal(
        projectXlRef.current?.querySelector(".project-language") as HTMLElement,
        fromLeftReveal3
      );
      ScrollReveal().reveal(
        projectXlRef.current?.querySelector(".project-links") as HTMLElement,
        fromLeftReveal3
      );
    } else {
      ScrollReveal().reveal(
        projectXlRef.current?.querySelector(".project-name") as HTMLElement,
        fromRightReveal1
      );
      ScrollReveal().reveal(
        projectXlRef.current?.querySelector(
          ".project-description"
        ) as HTMLElement,
        fromRightReveal2
      );
      ScrollReveal().reveal(
        projectXlRef.current?.querySelector(".project-language") as HTMLElement,
        fromRightReveal3
      );
      ScrollReveal().reveal(
        projectXlRef.current?.querySelector(".project-links") as HTMLElement,
        fromRightReveal3
      );
    }
  }, []);
  //Media at 768px and up for Img
  useEffect(() => {
    if (
      projectXlImgRef.current?.className.indexOf("project-xl-0") !== -1 ||
      projectXlImgRef.current?.className.indexOf("project-xl-2") !== -1
    ) {
      ScrollReveal().reveal(
        projectXlImgRef.current as HTMLElement,
        fromRightRevealImg
      );
    } else {
      ScrollReveal().reveal(
        projectXlImgRef.current as HTMLElement,
        fromLeftReveal2
      );
    }
  }, []);
  return (
    <div className="project-item">
      <MediaContextProvider>
        <Media at="sm">
          <div
            className={`w-full relative project-sm-${projectKey}`}
            ref={projectSmRef}
          >
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
          <div
            className={`project-details project-xl-${projectKey}`}
            ref={projectXlRef}
          >
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
          <div
            className={`project-img project-xl-${projectKey}`}
            ref={projectXlImgRef}
          >
            <img src={projectScreen} alt={projectName} />
          </div>
        </Media>
      </MediaContextProvider>
    </div>
  );
};
