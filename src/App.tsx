import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ReverseTitle } from "./components/reverseTitle";
import { TracingBeam } from "./components/ui/tracingBean/tracing-beam";
import {
  Experiences,
  Languages,
  Projects,
  Services,
} from "./services/data/datas";
import { Item } from "./components/item";
import { ServiceItem } from "./components/serviceItem";
import { ProjectItem } from "./components/projectItem";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faSkype } from "@fortawesome/free-brands-svg-icons/faSkype";
import ScrollReveal from "scrollreveal";
import {
  RevealImgConfig,
  RevealLineConfig,
  TitleRevealConfig,
  contentsReveal,
  fromLeftReveal2,
  fromLeftReveal3,
  fromLeftReveal4,
  fromRightReveal3,
  fromRightReveal4,
} from "./utils/scrollReveal.config";
import myPic from "./assets/images/me2.jpg";
import myPic_2 from "./assets/images/3 working.png";
import "./services/plugins/index";
import "react-vertical-timeline-component/style.min.css";
import "./App.scss";
import { Preloader } from "./components/ui/preloader/preloader";

function App() {
  gsap.registerPlugin(useGSAP);
  const mainRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const contentsRef = useRef<HTMLParagraphElement>(null);
  const VerticalTimelineRef = useRef<HTMLDivElement>(null);
  const projectLinkRef = useRef<HTMLDivElement>(null);
  const leftSideFooterRef = useRef<HTMLDivElement>(null);
  const infosRef = useRef<HTMLDivElement>(null);
  const rightSideFooterRef = useRef<HTMLDivElement>(null);
  const footerEndingRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ".loading-Page",
      { display: 1 },
      {
        opacity: 0,
        zIndex: -1,
        duration: 1.5,
        delay: 3.5,
      }
    );
  });

  useGSAP(() => {
    gsap.fromTo(
      ".slogan",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        delay: 0.5,
      }
    );
  });

  useGSAP(() => {
    gsap.fromTo(
      ".App",
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1.5,
        delay: 3.5,
      }
    );
  });

  useGSAP(() => {
    gsap.fromTo(
      ".App",
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1.5,
        delay: 3.5,
      }
    );
  });
  useGSAP(() => {
    gsap.fromTo(
      "body",
      { overflow: "hidden" },
      {
        overflow: "scroll",
        duration: 2.5,
        delay: 3.5,
      }
    );
  });

  useEffect(() => {
    mainRef.current
      ?.querySelectorAll<HTMLElement>(".content-header")
      .forEach((item) => {
        ScrollReveal().reveal(item, TitleRevealConfig);
      });
    ScrollReveal().reveal(contentsRef.current as HTMLElement, contentsReveal);
    ScrollReveal().reveal(
      projectLinkRef.current as HTMLElement,
      fromRightReveal3
    );
    ScrollReveal().reveal(
      leftSideFooterRef.current?.querySelector(".text") as HTMLElement,
      fromLeftReveal2
    );
    ScrollReveal().reveal(
      infosRef.current?.querySelector(".contact") as HTMLElement,
      fromLeftReveal3
    );
    ScrollReveal().reveal(
      infosRef.current?.querySelector(".networks") as HTMLElement,
      fromRightReveal3
    );
    ScrollReveal().reveal(
      leftSideFooterRef.current?.querySelector(".spacer_layer") as HTMLElement,
      RevealLineConfig
    );
    ScrollReveal().reveal(
      rightSideFooterRef.current?.querySelector(".my-pic") as HTMLElement,
      RevealImgConfig
    );
    ScrollReveal().reveal(
      footerEndingRef.current?.querySelector("#copyright") as HTMLElement,
      fromLeftReveal4
    );
    ScrollReveal().reveal(
      footerEndingRef.current?.querySelector("#madewith") as HTMLElement,
      fromRightReveal4
    );
  }, []);
  return (
    <div className="mainContainer">
      <div className="loading-Page">
        <Preloader />
      </div>
      <div className="App" id="App" ref={mainRef}>
        <div className="App-block-page">
          <TracingBeam>
            <div className="block-page-fixed-section">
              <div className="textline">
                <span>Elie Imario Portfolio</span>
              </div>
            </div>
            {/* Hero-Section */}
            <div className="Hero-section section f-height" ref={heroRef}>
              <div className="hero-container">
                <div className="hero-container-title">
                  <span className="text3">Bonjour👋, je suis</span>
                  <span className="text1">Elie Imario</span>
                  <span className="text2">Développeur Full-Stack </span>
                  <div className="intro">
                    <span>
                      Développeur full-stack, spécialisé dans la création d'
                      <span className="colored">applications web</span> et
                      <span className="colored"> mobiles</span>
                      <span className="colored"> intuitives </span> et
                      <span className="colored"> performantes.</span> . Mon
                      objectif : transformer vos besoins en solutions numériques
                      optimales.
                    </span>
                  </div>
                </div>
                <div className="hero-container-image">
                  <img src={myPic_2} />
                </div>
              </div>
            </div>
            {/* About me-Section */}
            <div className="About-me-section section mt" id="">
              <div className="bloc-limiter">
                <div className="bloc-container">
                  <ReverseTitle ico="👀" titleLead="Qui suis-je?" />
                  <div className="bloc-contents">
                    <div className="content-header">
                      <span>Me concernant</span>
                    </div>
                    <p className="px-8 mt-12" ref={contentsRef}>
                      Bonjour ! Je suis Imario, passionné par la création
                      d'applications web et mobiles innovantes. J'ai découvert
                      ma passion pour la programmation il y a quelques années
                      et, depuis, j'ai eu l'opportunité de concevoir et de
                      réaliser des produits numériques conviviaux et novateurs.
                      Mon parcours m'a conduit à travailler dans divers
                      environnements, tant dans le secteur privé, au sein de
                      grandes entreprises, que dans le secteur public.
                      Aujourd'hui, je me concentre principalement sur le
                      développement Full Stack, avec un profil davantage orienté
                      frontend que backend. Je suis déterminé à continuer de
                      perfectionner mes compétences et à contribuer à
                      l'évolution de l'univers numérique.
                    </p>
                  </div>
                </div>
                <div className="bloc-container">
                  <ReverseTitle ico="🧑‍💻" titleLead="Skills" />
                  <div className="bloc-contents">
                    <div className="content-header">
                      <span>
                        Les technologies avec lesquelles j'ai acquis de
                        l'expérience
                      </span>
                    </div>
                    <div className="content-items px-8 mt-12">
                      {Languages.map((item, index) => (
                        <Item
                          language={item.language}
                          languageIcon={item.languageIcon}
                          key={index}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Experience-Section */}
            <div className="Experience-section section mt" id="">
              <div className="bloc-limiter">
                <div className="bloc-container">
                  <ReverseTitle ico="✅" titleLead="Mes experiences" />
                  <div className="bloc-contents">
                    <div className="content-header">
                      <span>
                        Où ai-je acquis mes expériences professionnelles ?
                      </span>
                    </div>
                    <div
                      className="content-body mt-12"
                      ref={VerticalTimelineRef}
                    >
                      <VerticalTimeline lineColor="transparent">
                        {Experiences.map((item, index) => {
                          return (
                            <VerticalTimelineElement
                              key={index}
                              className="vertical-timeline-element--work"
                              contentStyle={{
                                background: "#002644",
                                color: "#fff",
                                boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                              }}
                              contentArrowStyle={{
                                borderRight: "7px solid #002644",
                              }}
                              date={`${item.from} - ${item.to}`}
                              iconStyle={{
                                background: item.logobg,
                                zIndex: 4,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                              icon={
                                <img
                                  src={item.entrepriseLogo}
                                  alt={item.entreprise}
                                />
                              }
                              iconClassName="entreprise-Logo"
                            >
                              <h3 className="vertical-timeline-element-title">
                                <span className="post">{item.poste} </span>
                                <span className="entrepise_name">
                                  @ {item.entreprise}
                                </span>
                              </h3>
                              <h4 className="vertical-timeline-element-subtitle">
                                {item.location}
                              </h4>
                              <div className="vertical-timeline-work-description">
                                <ul>
                                  {item.projectDetails.projectDescription.map(
                                    (item, index) => (
                                      <li className="item" key={index}>
                                        <span className="li-type">🎯</span>
                                        {item}
                                      </li>
                                    )
                                  )}
                                </ul>
                              </div>
                            </VerticalTimelineElement>
                          );
                        })}
                      </VerticalTimeline>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Services-Section */}
            <div className="Services-section section mt" id="">
              <div className="bloc-limiter">
                <div className="bloc-container">
                  <ReverseTitle ico="🔨" titleLead="Services" />
                  <div className="bloc-contents">
                    <div className="content-header">
                      <span>Ce que je pourrais faire</span>
                    </div>
                    <div className="content-body px-8 mt-12">
                      <div className="service-items">
                        {Services.map((item, index) => (
                          <ServiceItem
                            serviceName={item.serviceName}
                            serviceImg={item.serviceImg}
                            serviceKey={index}
                            key={index}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Project-Section */}
            <div className="Project-Section section mt">
              <div className="bloc-limiter">
                <div className="bloc-container">
                  <ReverseTitle ico="🚀" titleLead="Mes travaux" />
                  <div className="bloc-contents">
                    <div className="content-header">
                      <span>Quelques-uns des projets que j'ai réalisé</span>
                    </div>
                    <div className="content-body px-8 mt-12">
                      <div className="grid-container">
                        {Projects.map((item, index) => (
                          <ProjectItem
                            projectName={item.projectName}
                            projectDescription={item.projectDescription}
                            projectScreen={item.projectScreen}
                            linktoGitHub={item.linktoGitHub}
                            languages={item.languages}
                            key={index}
                            projectKey={index}
                          />
                        ))}
                      </div>
                      <div className="project-link" ref={projectLinkRef}>
                        <a href="https://github.com/Elie-Imario">Voir plus</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Footer-Section */}
            <div className="Footer-Section section f-height" id="">
              <div className="bloc-limiter">
                <div className="bloc-container">
                  <div className="bloc-contents">
                    <div className="content-header">
                      <span>
                        Commençons dès aujourd'hui à créer quelque chose
                        d'exceptionnel ensemble.
                      </span>
                    </div>
                    <div className="footer-body">
                      <div className="left-side" ref={leftSideFooterRef}>
                        <div className="text">
                          <span>
                            N'hésitez pas à me contacter pour discuter de mes
                            compétences ou de toute opportunité de
                            collaboration. Je suis ouvert à explorer de
                            nouvelles perspectives professionnelles et prêt à
                            contribuer à des projets innovants.
                          </span>
                        </div>
                        <div className="spacer_layer"></div>
                        <div className="infos" ref={infosRef}>
                          <div className="contact">
                            <div className="ico">
                              <FontAwesomeIcon icon={faPhone} />
                              <span>+261 32 67 904 60</span>
                            </div>
                            <div className="ico">
                              <FontAwesomeIcon icon={faEnvelope} />
                              <span>elieimario1@gmail.com</span>
                            </div>
                            <div className="ico">
                              <FontAwesomeIcon icon={faSkype} />
                              <span>imario ANDRINIRAINY</span>
                            </div>
                          </div>
                          <div className="networks">
                            <div className="ico">
                              <a href="https://github.com/Elie-Imario">
                                <FontAwesomeIcon icon={faGithub} />
                              </a>
                            </div>
                            <div className="ico">
                              <a href="https://www.linkedin.com/in/elie-imario-8844782b5">
                                <FontAwesomeIcon icon={faLinkedin} />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="right-side" ref={rightSideFooterRef}>
                        <div className="my-pic">
                          <img src={myPic} />
                        </div>
                      </div>
                    </div>
                    <div className="footer-ending" ref={footerEndingRef}>
                      <span id="copyright">© elieimario</span>
                      <span id="madewith">
                        Made with
                        <div className="ico">
                          <img src="/icons/react_ts.svg" />
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TracingBeam>
        </div>
      </div>
    </div>
  );
}

export default App;
