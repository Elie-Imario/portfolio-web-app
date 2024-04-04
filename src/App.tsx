import { BurgerMenu } from "./components/burgerMenu";
import { ReverseTitle } from "./components/reverseTitle";
import { TracingBeam } from "./components/ui/tracing-beam";
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
import myPic from "./assets/images/me2.jpg";
import myPic_2 from "./assets/images/ondry2.png";
import "./services/plugins/index";
import "react-vertical-timeline-component/style.min.css";
import "./App.scss";

function App() {
  return (
    <div className="App" id="App">
      {/* Header-Section */}
      <div className="Header-section">
        <div className="NavBar-app-header">
          <div className="row">
            <div className="col">
              <div className="navBar-brand"></div>
            </div>
            <div className="col">
              <BurgerMenu />
            </div>
          </div>
        </div>
      </div>
      <div className="App-block-page">
        <TracingBeam>
          <div className="block-page-fixed-section">
            <div className="textline">
              <span>Elie Imario Portfolio</span>
            </div>
          </div>
          {/* Hero-Section */}
          <div className="Hero-section section f-height" id="">
            <div className="hero-container">
              <div className="hero-container-title">
                <span className="text3">Bonjour👋, je suis</span>
                <span className="text1">Elie Imario</span>
                <span className="text2">Full Stack Développeur</span>
                <div className="intro">
                  <span>
                    Jeune étudiant de 22 ans en dernière année de Master 👨‍🎓. Un
                    passionné de la programmation qui aime construire des
                    <span className="colored"> applications</span> et des
                    <span className="colored"> sites web </span>
                    <span className="colored">conviviale </span> et
                    <span className="colored"> innovante.</span>
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
                  <p className="px-8 mt-12">
                    Salut ! Je suis Imario, un passionné de création
                    d'applications et de sites web innovants. Actuellement
                    étudiant en dernière année de Master, j'ai découvert ma
                    passion pour la programmation il y a quelques années. Depuis
                    lors, j'ai eu l'opportunité de concevoir des applications et
                    des sites web conviviaux et novateurs. Mon parcours m'a
                    conduit à travailler dans divers environnements, aussi bien
                    dans le secteur privé au sein de grandes entreprises que
                    dans le secteur public. Aujourd'hui, je me concentre
                    principalement sur le développement Full Stack, avec une
                    préférence pour le frontend plutôt que le backend. Je suis
                    déterminé à continuer à perfectionner mes compétences et à
                    contribuer à l'évolution de l'univers numérique.
                  </p>
                </div>
              </div>
              <div className="bloc-container">
                <ReverseTitle ico="🧑‍💻" titleLead="Skills" />
                <div className="bloc-contents">
                  <div className="content-header">
                    <span>
                      Les technologies avec lesquelles j'ai acquis de
                      l'expérience :
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
                      Où ai-je acquis mon expérience professionnelle ?
                    </span>
                  </div>
                  <div className="content-body mt-12">
                    <VerticalTimeline>
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
                    <span>Quelques-uns des projets que j'ai réalisés:</span>
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
                        />
                      ))}
                    </div>
                    <div className="project-link">
                      <a className="#" href="">
                        Voir plus
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Footer-Section */}
          <div className="Footer-Section section mt" id="">
            <div className="bloc-limiter">
              <div className="bloc-container">
                <div className="bloc-contents">
                  <div className="footer-intro">
                    <span>
                      Commençons dès aujourd'hui à créer quelque chose
                      d'exceptionnel ensemble.
                    </span>
                  </div>
                  <div className="footer-body">
                    <div className="left-side">
                      <div>
                        <span>
                          N'hésitez pas à me contacter pour discuter de mes
                          compétences ou de toute opportunité de collaboration.
                          Je suis ouvert à explorer de nouvelles perspectives
                          professionnelles et prêt à contribuer à des projets
                          innovants.
                        </span>
                      </div>
                      <div className="spacer_layer"></div>
                      <div className="btn_gropups">
                        <button type="button">Contact me</button>
                      </div>
                    </div>
                    <div className="right-side">
                      <div className="my-pic">
                        <img src={myPic} />
                      </div>
                    </div>
                  </div>
                  <div className="footer-ending">
                    <span>© elieimario</span>
                    <span>
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
  );
}

export default App;