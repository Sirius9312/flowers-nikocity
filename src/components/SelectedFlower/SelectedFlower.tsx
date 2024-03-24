import { useContext, useState } from "react";
import { FlowerByIdFlower } from "../../type/FlowerByIdFlower";
import { NavLink } from "react-router-dom";
import { FlowersContext } from "../../stores/FlowersContext";
import './SelectedFlower.scss';

type Props = {
  selectFlower: FlowerByIdFlower,
};

export const SelectedFlower: React.FC<Props> = ({ selectFlower }) => {
  const {
    id,
    name,
    urls,
    colors,
    namespace,
    flower,
    category,
    color,
    price,
    price100_300,
    price300_500,
    price_500,
    flowerPeriod,
    diametr,
    isHas,
  } = selectFlower;
  const [bigImage, setBigImage] = useState(urls.split(' * ')[0]);

  const {
    favourites,
    getLike,
    getDislike,
    cart,
    addToCart,
  } = useContext(FlowersContext);

  const getActiveColor = ({ isActive }: {isActive: boolean}) => {
    return (isActive)
      ? "selected-flower__color-link selected-flower__color-link--active"
      : "selected-flower__color-link"
  };

  const [moveMobileCarousel, setMoveMobileCarousel] = useState(0);

  const prevMobileProductImage = () => {
    if (moveMobileCarousel - 1 > 0) {
      setMoveMobileCarousel(
        Math.max(moveMobileCarousel - 1, 0),
      );
    } else {
      setMoveMobileCarousel(0);
    }
  };

  const nextMobileProductImage = () => {
    if (moveMobileCarousel + 1 <= urls.length - 1) {
      setMoveMobileCarousel(
        Math.min(moveMobileCarousel + 1, urls.length - 1),
      );
    } else {
      setMoveMobileCarousel(urls.length - 1);
    }
  };

  return (
    <div className="selected-flower">
      <h2 className="selected-flower__title-name">
        {name}
      </h2>

      <div className="grid-cover">
        <div className="selected-flower__all-photos-container">
          <div className="selected-flower__images-container">
            <div className="selected-flower__mobile-carousel-container">
              <button
                type="button"
                className="selected-flower__carousel-buttons"
                onClick={() => prevMobileProductImage()}
                disabled={moveMobileCarousel <= 0}
              >
                <div className={moveMobileCarousel <= 0 ? "icon icon--disabled-left-arrow" : "icon icon--left-arrow"} />
              </button>

              <div className="selected-flower__carousel">
                <ul className="selected-flower__carousel-list">
                  {
                    urls.split(' * ').map((image) => (
                      <li
                        key={image}
                        style={
                          {
                            transition: '500ms',
                            transform: `translateX(-${moveMobileCarousel * (250 + 16)}px)`,
                          }
                        }
                        className="selected-flower__item"
                      >
                        <img
                          src={image}
                          className="selected-flower__carousel-image"
                          alt="images"
                        />
                      </li>
                    ))
                  }
                </ul>
              </div>

              <button
                type="button"
                className="selected-flower__carousel-buttons"
                onClick={() => nextMobileProductImage()}
                disabled={moveMobileCarousel >= urls.length - 1}
              >
                <div className={moveMobileCarousel >= urls.length - 1 ? "icon icon--disabled-right-arrow" : "icon icon--right-arrow"} />
              </button>
            </div>

            <div className="selected-flower__small-images-container">
              {
                urls.split(' * ').map((url) => (
                  <button
                    type="button"
                    key={url}
                    className={
                      url === bigImage
                        ? "selected-flower__small-image-button selected-flower__small-image-button--active"
                        : "selected-flower__small-image-button"
                    }
                    onClick={() => setBigImage(url)}
                    onContextMenu={(e) => e.preventDefault()}
                  >
                    <img
                      alt="flowersmallimage"
                      src={url}
                      className="selected-flower__small-image"
                    />
                  </button>
                ))
              }
            </div>

            <div
              className="selected-flower__big-image-container"
              onContextMenu={(e) => e.preventDefault()}
            >
              <img
                alt="flowerbigimage"
                src={bigImage}
                className="selected-flower__big-image"
              />
            </div>
          </div>

          <div className="selected-flower__info-container">
            {
              (flower === 'Хризантема' && colors.split(' * ').length > 1) && (
                <>
                  <h3 className="selected-flower__colors-title">
                    Кольори:
                  </h3>

                  <ul className="selected-flower__colors-container">
                    {
                      colors.split(' * ').map(col => (
                        <li key={col} className="selected-flower__color-item">
                          <NavLink
                            to={`/selectedFlower/${namespace}-${col}`}
                            className={getActiveColor}
                          >
                            <div
                              className="selected-flower__color"
                              style={{backgroundColor: col}}
                            />
                          </NavLink>
                        </li>
                      ))
                    }
                  </ul>
                </>
              )
            }
            
            <div className="selected-flower__more-info-container">
              <h3 className="selected-flower__more-info-title">
                Квітка
              </h3>

              <h3 className="selected-flower__more-info-text">
                {flower}
              </h3>
            </div>

            {
              flower === 'Хризантема' && (
                <div className="selected-flower__more-info-container">
                  <h3 className="selected-flower__more-info-title">
                    Категорія
                  </h3>

                  <h3 className="selected-flower__more-info-text">
                    {category}
                  </h3>
                </div>
              )
            }

            <div className="selected-flower__more-info-container">
              <h3 className="selected-flower__more-info-title">
                Колір
              </h3>

              <h3 className="selected-flower__more-info-text">
                {color}
              </h3>
            </div>

            {
              flower === 'Хризантема' && (
                <div className="selected-flower__more-info-container">
                  <h3 className="selected-flower__more-info-title">
                    Період цвітіння
                  </h3>

                  <h3 className="selected-flower__more-info-text">
                    {flowerPeriod}
                  </h3>
                </div>
              )
            }
            
            {
              flower === 'Хризантема' && (
                <div className="selected-flower__more-info-container">
                  <h3 className="selected-flower__more-info-title">
                    Середній діаметр самої квітки
                  </h3>

                  <h3 className="selected-flower__more-info-text">
                    {`${diametr} см`}
                  </h3>
                </div>
              )
            }

            <div className="selected-flower__more-info-container">
              <h3 className="selected-flower__more-info-title">
                {flower === 'Хризантема' && category === 'Мультифлора' ? 'Ціна до 100 шт' : 'Ціна'}
              </h3>

              <h3 className="selected-flower__more-info-text">
                {`${price} грн`}
              </h3>
            </div>

            {
              flower === 'Хризантема' && category === 'Мультифлора' && (
                <div className="selected-flower__more-info-container">
                  <h3 className="selected-flower__more-info-title">
                    Ціна від 100 до 300 шт
                  </h3>

                  <h3 className="selected-flower__more-info-text">
                    {`${price100_300} грн`}
                  </h3>
                </div>
              )
            }

            {
              flower === 'Хризантема' && (
                <div className="selected-flower__more-info-container">
                  <h3 className="selected-flower__more-info-title">
                    {category === 'Мультифлора' ? 'Ціна від 300 до 500 шт' : 'Ціна від 300 шт'}
                  </h3>

                  <h3 className="selected-flower__more-info-text">
                    {`${price300_500} грн`}
                  </h3>
                </div>
              )
            }

            {
              flower === 'Хризантема' && (
                <div className="selected-flower__more-info-container">
                  <h3 className="selected-flower__more-info-title">
                    Ціна від 500 шт
                  </h3>

                  <h3 className="selected-flower__more-info-text">
                    {`${price_500} грн`}
                  </h3>
                </div>
              )
            }

            <div className="selected-flower__more-info-container selected-flower__more-info-container--last">
              <h3 className="selected-flower__more-info-title">
                Наявність
              </h3>

              <h3
                className={
                  isHas === 'Y'
                    ? "selected-flower__more-info-text"
                    : "selected-flower__more-info-text selected-flower__more-info-text--not"
                  }
              >
                {isHas === 'Y' ? 'У наявності' : 'Немає у наявності'}
              </h3>
            </div>

            <div className="selected-flower__buttons-container">
              {
                isHas === 'Y' ? (
                  <button
                    type="button"
                    className={cart.map(a => a.flowerId).includes(id) ? "selected-flower__add-to-cart selected-flower__add-to-cart--added" : "selected-flower__add-to-cart"}
                    onClick={() => flower === 'Альстромерія'
                      ? addToCart({ flowerId: id, flower, category, name, url: urls[0], count: 1, price })
                      : addToCart({ flowerId: id, flower, category, name, url: urls[0], count: 25, price })}
                    disabled={cart.map(a => a.flowerId).includes(id)}
                  >
                    {
                      cart.map(a => a.flowerId).includes(id) ? 'Додано у кошик' : 'Додати у кошик'
                    }
                  </button>
                ) : (
                  <button
                    type="button"
                    className="selected-flower__add-to-cart selected-flower__add-to-cart--disable" disabled
                  >
                    Не у наявності
                  </button>
                )
              }

              <button
                type="button"
                className="selected-flower__button-like"
                onClick={() => {
                  favourites.map(item => item.flowerId).includes(id)
                    ? getDislike(id)
                    : getLike({ flowerId: id, flower, category, url: urls[0], name, price, price100_300, price300_500, price_500, flowerPeriod, color, isHas })
                }}
              >
                <div
                  className={
                    favourites.map(item => item.flowerId).includes(id)
                      ? "icon icon--favourite-active"
                      : "icon icon--favourite"
                  }
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
