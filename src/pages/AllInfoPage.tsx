import { useContext, useEffect } from "react";
import { FlowersContext } from "../stores/FlowersContext";

export const AllInfoPage = () => {
  const {
    alstromeria,
    getAlstromeria,
  } = useContext(FlowersContext);
  console.log(alstromeria.length);

  useEffect(() => {
    getAlstromeria();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="all-info-page">
      <div className="container">
        <div className="all-info-page__content">
          <h2 className="all-info-page__title App__title">
            Додаткова інформація
          </h2>

          <div className="all-info-page__texts-container">
            <div className="all-info-page__info-block">
              <p className="all-info-page__text">
                Ласкаво просимо на сайт по продажу рослин хризантеми та альстромерії.
              </p>
            </div>

            <div className="all-info-page__info-block">
              <h3 className="all-info-page__text-title">
                Як зробити замовлення
              </h3>

              <p className="all-info-page__text">
                Замовлення можете зробити за допомогою кошика на самому сайті.
                Якщо не знаете, як користуватися кошиком, то можете фіксувати дані товари натиснув на знак сердця.
                Дані товари будуть зберігатися, як товари, які Вам сподобались.
                Щоб подивитися та замовити, можете натиснути на горі сайта 'Товари, які сподобались', та написати список у Вайбері, або сказати по телефону.
              </p>
            </div>

            <div className="all-info-page__info-block">
              <h3 className="all-info-page__text-title">
                Альстромерія
              </h3>

              <p className="all-info-page__text all-info-page__text--before-menu">
                Альстромерія продається вже зараз. Якщо побачите кнопку "Додати у кошик", то у наявності ще є. Інакше товару нема і вже не буде.
                По кількостям на даний момент є:
              </p>

              <ul className="all-info-page__count-alstr-list">
                {
                  alstromeria.map(alst => {
                    const {
                      id,
                      name,
                      counts,
                    } = alst;
                    return (
                      <li
                        className="all-info-page__count-alstr-item"
                        key={id}
                      >
                        <p className="all-info-page__text all-info-page__text--menu-items">
                          {`${name} - ${counts} шт`}
                        </p>
                      </li>
                    )
                  })
                }
              </ul>
            </div>

            <div className="all-info-page__info-block">
              <h3 className="all-info-page__text-title">
                Хризантема Мультифлора
              </h3>

              <p className="all-info-page__text">
                Мультифлора йде як на бронювання на травень, червень місяць. Якщо бачите кнопку "Додати у кошик", то можете бронювати за допомогою кошика, якщо "Не у наявності" то даного товару на бронь немає. Якщо товар буде, то буде активна кнопка "Додати у кошик". Теж саме якщо замовлення робиться по телефону або по Вайберу.
              </p>
            </div>

            <div className="all-info-page__info-block">
              <h3 className="all-info-page__text-title">
                Хризантема (голова, дрібноквітка)
              </h3>

              <p className="all-info-page__text">
                Хризантема на зріз (голова, дрібноквітка) йде як на вільну продаж. Як товар буде у продажу, то буде активна кнопка "Додати у кошик", якщо товару немає, то "Не у наявності". Але якщо товар не у наявності, то можете подзвонити та дізнатися про наявність, та забронювати.
              </p>
            </div>


            <div className="all-info-page__info-block">
              <h3 className="all-info-page__text-title">
                Наше господарство
              </h3>

              <div className="grid-cover">
                <div className="all-info-page__photo">
                  <img
                    src="img/farming/1.jpg"
                    alt="farmingimage"
                    className="all-info-page__image"
                  />
                </div>

                <div className="all-info-page__photo">
                  <img
                    src="img/farming/2.jpg"
                    alt="farmingimage"
                    className="all-info-page__image"
                  />
                </div>

                <div className="all-info-page__photo">
                  <img
                    src="img/farming/3.jpg"
                    alt="farmingimage"
                    className="all-info-page__image"
                  />
                </div>

                <div className="all-info-page__photo">
                  <img
                    src="img/farming/4.jpg"
                    alt="farmingimage"
                    className="all-info-page__image"
                  />
                </div>

                <div className="all-info-page__photo">
                  <img
                    src="img/farming/5.jpg"
                    alt="farmingimage"
                    className="all-info-page__image"
                  />
                </div>

                <div className="all-info-page__photo">
                  <img
                    src="img/farming/6.jpg"
                    alt="farmingimage"
                    className="all-info-page__image"
                  />
                </div>

                <div className="all-info-page__photo">
                  <img
                    src="img/farming/7.jpg"
                    alt="farmingimage"
                    className="all-info-page__image"
                  />
                </div>

                <div className="all-info-page__photo">
                  <img
                    src="img/farming/8.jpg"
                    alt="farmingimage"
                    className="all-info-page__image"
                  />
                </div>

                <div className="all-info-page__photo">
                  <img
                    src="img/farming/9.jpg"
                    alt="farmingimage"
                    className="all-info-page__image"
                  />
                </div>

                <div className="all-info-page__photo">
                  <img
                    src="img/farming/10.jpg"
                    alt="farmingimage"
                    className="all-info-page__image"
                  />
                </div>

                <div className="all-info-page__photo">
                  <img
                    src="img/farming/11.jpg"
                    alt="farmingimage"
                    className="all-info-page__image"
                  />
                </div>

                <div className="all-info-page__photo">
                  <img
                    src="img/farming/12.jpg"
                    alt="farmingimage"
                    className="all-info-page__image"
                  />
                </div>

                <div className="all-info-page__photo">
                  <img
                    src="img/farming/13.jpg"
                    alt="farmingimage"
                    className="all-info-page__image"
                  />
                </div>

                <div className="all-info-page__photo">
                  <img
                    src="img/farming/14.jpg"
                    alt="farmingimage"
                    className="all-info-page__image"
                  />
                </div>

                <div className="all-info-page__photo">
                  <img
                    src="img/farming/15.jpg"
                    alt="farmingimage"
                    className="all-info-page__image"
                  />
                </div>

                <div className="all-info-page__photo">
                  <img
                    src="img/farming/16.jpg"
                    alt="farmingimage"
                    className="all-info-page__image"
                  />
                </div>

                <div className="all-info-page__photo">
                  <img
                    src="img/farming/17.jpg"
                    alt="farmingimage"
                    className="all-info-page__image"
                  />
                </div>

                <div className="all-info-page__photo">
                  <img
                    src="img/farming/18.jpg"
                    alt="farmingimage"
                    className="all-info-page__image"
                  />
                </div>

                <div className="all-info-page__photo">
                  <img
                    src="img/farming/19.jpg"
                    alt="farmingimage"
                    className="all-info-page__image"
                  />
                </div>

                <div className="all-info-page__photo">
                  <img
                    src="img/farming/20.jpg"
                    alt="farmingimage"
                    className="all-info-page__image"
                  />
                </div>

                <div className="all-info-page__photo">
                  <img
                    src="img/farming/21.jpg"
                    alt="farmingimage"
                    className="all-info-page__image"
                  />
                </div>

                <div className="all-info-page__photo">
                  <img
                    src="img/farming/22.jpg"
                    alt="farmingimage"
                    className="all-info-page__image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}