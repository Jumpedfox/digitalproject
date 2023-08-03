import "./header.scss";
import logo from "../../images/Group11.svg";

const Header = () => {
  return (
    <header>
      <img className="logo" alt="logo" src={logo} />
      <div className="navigation">
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
    </header>
  );
};

export default Header;
