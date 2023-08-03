import "./projects.scss";
import arrow from "../../images/arrow-2-right-long2.svg";

const Projects = () => {
  return (
    <section className="section-projects">
      <span className="section-projects-title">Наши проеткы</span>
      <div className="section-projects-firstblock">
        <div className="section-projects-firstblock-firstproject">
          <div className="section-projects-firstblock-firstproject-wrapper wrapper">
            <span>досуговый центр</span>
            <button className="section-projects-button">
              <span>подробнее</span>
              <img alt="arrow" src={arrow} class="custom-svg" />
            </button>
          </div>
        </div>
        <div className="qwe"></div>
      </div>
      <div className="section-projects-secondblock">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <button className="section-projects-button button-black">
        <span>все проекты</span>
        <img alt="arrow" src={arrow} />
      </button>
    </section>
  );
};

export default Projects;
