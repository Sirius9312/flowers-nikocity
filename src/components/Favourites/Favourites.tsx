import { Link } from "react-router-dom";
import { useContext } from "react";
import { FlowersContext } from "../../stores/FlowersContext";

export const Favourites = () => {
  const {
    favourites,
    getDislike,
    cart,
    addToCart,
  } = useContext(FlowersContext);

  return (
    <div className="favourites">
      <div className="flex-container">
      {
        favourites.map(fav => {
          const {
            flowerId,
            flower,
            category,
            url,
            name,
            price,
            color,
            isHas,
          } = fav;

          return (
            <div
              className="product"
              key={flowerId}
            >
              <div className="product__image-container">
                <Link
                  to={`/selectedFlower/${flowerId}`}
                  onContextMenu={(e) => e.preventDefault()}
                >
                  <img
                    src={url}
                    alt="productimg"
                    className="product__image"
                  />
                </Link>
              </div>

              <h2 className="product__name-sort">
                <Link to={`/selectedFlower/${flowerId}`} className="product__link-name">
                  {name}
                </Link>
              </h2>

              <h2 className="product__about-product-container">
                <p className="product__about-product-title">
                  {flower === 'Хризантема' && category === 'Мультифлора' ? 'Ціна до 100 шт' : 'Ціна'}
                </p>

                <p className="product__about-product">
                  {price + ' грн'}
                </p>
              </h2>

              

              <h2 className="product__about-product-container">
                <p className="product__about-product-title">
                  Колір:
                </p>

                <p className="product__about-product">
                  {color}
                </p>
              </h2>

              <h2 className="product__about-product-container">
                <p className="product__about-product-title">
                  Наявність
                </p>

                <p className="product__about-product">
                  <span className= {isHas === 'Y' ? "product__have-on-shop" : "product__have-on-shop--not"}>
                    {
                      isHas === 'Y' ? 'У наявності' : 'Немає у наявності'
                    } 
                  </span>
                </p>
              </h2>

              <div className="product__button-add-to-cart-container">
                {
                  isHas === 'Y' ? (
                    <button
                      type="button"
                      className={cart.map(a => a.flowerId).includes(flowerId) ? "product__button-add-to-cart product__button-add-to-cart--added" : "product__button-add-to-cart"}
                      onClick={() => flower === 'Альстромерія'
                        ? addToCart({ flowerId, flower, category, name, url, count: 1, price })
                        : addToCart({ flowerId, flower, category, name, url, count: 25, price })}
                      disabled={cart.map(a => a.flowerId).includes(flowerId)}
                    >
                      {
                        cart.map(a => a.flowerId).includes(flowerId) ? 'Додано у кошик' : 'Додати у кошик'
                      }
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="product__button-add-to-cart product__button-add-to-cart--disable"
                      disabled
                    >
                      Не у наявності
                    </button>
                  )
                }

                <button
                  type="button"
                  className="product__button-like"
                  onClick={() => getDislike(flowerId)}
                >
                  <div className="icon icon--favourite-active" />
                </button>
              </div>
            </div>
          );
        })
      }
      </div>
    </div>
  );
};