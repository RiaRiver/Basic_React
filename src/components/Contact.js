import React from 'react';
import Button from "./Button";

const Contact = () => (
  <section className="contact">
    <div className="wrapper">
      <div className="contact-wrapper">
        <h2 className="contact-title">Остались вопросы?</h2>
        <div className="contact-description">Оставьте номер телефона, и мы перезвоним вам</div>
        <form action="../mailer.smart.php" className="contact-form">
          <input type="text" placeholder="Ваше имя"/>
          <input type="tel" placeholder="Телефон"/>
          <input type="email" placeholder="E-mail"/>
          <Button text='Позвоните мне' sectionName='contact'/>
        </form>
        <div className="contact-personal">Я даю своё <a href="/">согласие</a> на обработку моих персональных данных.
        </div>
      </div>
    </div>
  </section>
)

export default Contact;