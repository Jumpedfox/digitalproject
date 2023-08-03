import "./footer.scss";
import logo from "../../images/Group 111.svg";
import pin from "../../images/maps-pin-line-icon.svg";
import phone from "../../images/Group.svg";
import mail from "../../images/Group1.svg";
import facebook from "../../images/Shape.svg";
import twitter from "../../images/Shape (1).svg";
import linkedin from "../../images/Shape (2).svg";
import pinterest from "../../images/Shape (3).svg";

const Footer = () => {
  return (
    <footer>
      <div className="content">
        <img className="logo" alt="logo" src={logo} />
        <div className="content-information">
          <span className="content-information-name">Информация</span>
          <button>
            <span>главная</span>
          </button>
          <button>
            <span>галерея</span>
          </button>
          <button>
            <span>проекты</span>
          </button>
          <button>
            <span>сертификаты</span>
          </button>
          <button>
            <span>контакты</span>
          </button>
        </div>
        <div className="content-contacts">
          <span className="content-contacts-name">Контакты</span>
          <div>
            <img alt="pin" src={pin} />
            <a href="https://goo.gl/maps/bdxLniLCo4SSMYiF6">
              <span>
                100000, Республика Казахстан,
                <br />
                г. Караганда, ул. Телевизионная 10
              </span>
            </a>
          </div>
          <div>
            <img alt="pin" src={phone} />
            <a href="tel:+380000000000">
              <span>+38 (000) 000 00 00</span>
            </a>
          </div>
          <div>
            <img alt="pin" src={mail} />
            <a href="mailto:mail@gmail.com">
              <span>mail@gmail.com</span>
            </a>
          </div>
        </div>
        <div className="content-socials">
          <span className="content-socials-name">Социальные сети</span>
          <div className="content-socials-icons">
            <a href="https://smarto.agency/">
              <img alt="pin" src={facebook} />
            </a>
            <a href="https://smarto.agency/">
              <img alt="pin" src={twitter} />
            </a>
            <a href="https://smarto.agency/">
              <img alt="pin" src={linkedin} />
            </a>
            <a href="https://smarto.agency/">
              <img alt="pin" src={pinterest} />
            </a>
          </div>
        </div>
      </div>
      <div className="rights">
        <span>© 2019 Digital Project. Все права защищены.</span>
      </div>
    </footer>
  );
};

export default Footer;
