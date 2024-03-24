export const ContactsPage = () => {
  return (
    <section className="contacts">
      <div className="container">
        <div className="contacts__content">
          <h2 className="contacts__title App__title">
            Контакти
          </h2>

          <div className="grid-cover">
            <div className="contacts__block">
              <h3 className="contacts__flower">
                Хризантема Мультифлора
              </h3>

              <div className="contacts__contacts-block">
                <h3 className="contacts__contacts-title">
                  Продавець
                </h3>

                <p className="contacts__contacts-contact">
                  Сергій
                </p>
              </div>

              <div className="contacts__contacts-block">
                <h3 className="contacts__contacts-title">
                  Телефон
                </h3>

                <p className="contacts__contacts-contact">
                  <a className="contacts__links" href="tel:+380958049425">0958049425</a>
                </p>
              </div>

              <div className="contacts__contacts-block">
                <h3 className="contacts__contacts-title">
                  Viber
                </h3>

                <p className="contacts__contacts-contact">
                  0958049425
                </p>
              </div>

              <div className="contacts__contacts-block">
                <h3 className="contacts__contacts-title">
                  Facebook
                </h3>

                <p className="contacts__contacts-contact">
                  <a
                    rel="noreferrer"
                    target="_blank"
                    className="contacts__links"
                    href="https://www.facebook.com/profile.php?id=100033935209919"
                  >
                    Заходити сюди
                  </a>
                </p>
              </div>

              <div className="contacts__contacts-block">
                <h3 className="contacts__contacts-title">
                  E-mail
                </h3>

                <p className="contacts__contacts-contact">
                  <a className="contacts__links" href="mailto:sirius9312@ukr.net">sirius9312@ukr.net</a>
                </p>
              </div>
            </div>


            <div className="contacts__block">
              <h3 className="contacts__flower">
                Хризантема високоросла, Альстромерія
              </h3>

              <div className="contacts__contacts-block">
                <h3 className="contacts__contacts-title">
                  Продавець
                </h3>

                <p className="contacts__contacts-contact">
                  Василь
                </p>
              </div>

              <div className="contacts__contacts-block">
                <h3 className="contacts__contacts-title">
                  Телефон
                </h3>

                <p className="contacts__contacts-contact">
                  <a className="contacts__links" href="tel:+380506546560">0506546560</a>
                  <a className="contacts__links" href="tel:+380637523375">0637523375</a>
                </p>
              </div>

              <div className="contacts__contacts-block">
                <h3 className="contacts__contacts-title">
                  Viber
                </h3>

                <p className="contacts__contacts-contact">
                  0506546560
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}