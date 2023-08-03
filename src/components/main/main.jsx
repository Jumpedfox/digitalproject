import "./main.scss";
import arrow from "../../images/arrow-2-right-long.svg";
import slash from "../../images/Line 3.svg";

const Main = () => {
  return (
    <section className="section-main">
      <div className="section-main_text">
        <span className="project">project</span>
        <span className="home">home</span>
        <div className="section-main_pagination">
          <div>
            <div className="section-main_pagination-buttons-wrapper">
              <button>
                <img alt="arrow" src={arrow} />
              </button>
              <button>
                <img alt="arrow" src={arrow} />
              </button>
            </div>
            <div className="line"></div>
          </div>
          <div className="section-main_pagination-numbers">
            <span>01</span>
            <img alt="slash" src={slash} />
            <span>02</span>
          </div>
        </div>
      </div>
      <div className="section-main_image">
        <button className="section-main_image-button">
          <span>взглянуть</span>
          <img alt="arrow" src={arrow} />
        </button>
      </div>
    </section>
  );
};

export default Main;
