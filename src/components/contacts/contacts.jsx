import "./contacts.scss";
import arrow from "../../images/arrow-2-right-long2.svg";

const Contacts = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formDataObject = {};
    formData.forEach((value, key) => {
      formDataObject[key] = value;
    });
    console.log(formDataObject);
  };

  return (
    <section className="section-contacts">
      <span className="section-contacts-title">Связаться с нами</span>
      <div className="section-contacts-content">
        <form className="section-contacts-content-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Имя" name="name" />
          <label>
            <input
              type="number" //или tel, но при этом для валидации только цифр надо писать отдельный валидатор
              placeholder="Номер телефона"
              required
              name="phone"
            />
            <span style={{ left: "132px", top: "15px" }}>*</span>
          </label>
          <label>
            <input type="email" placeholder="E-mail" required name="email" />
            <span style={{ left: "64px", top: "15px" }}>*</span>
          </label>
          <input
            type="text"
            placeholder="Интересующий товар/услуга"
            name="product"
          />
          <label>
            <textarea
              type="text"
              placeholder="Сообщение"
              required
              name="message"
            />
            <span style={{ left: "100px", top: "14px" }}>*</span>
          </label>
          <span className="policy">
            Отправляя заявку Вы соглашаетесь с политикой конфиденциальности
          </span>
          <button
            className="section-contacts-content-form-button button-black"
            type="submit"
          >
            <span>Отправить</span>
            <img alt="arrow" src={arrow} />
          </button>
        </form>
        <div className="section-contacts-content-picture" />
      </div>
    </section>
  );
};

export default Contacts;
