import { Link } from "react-router-dom";
import { Flower } from "../../type/Flower";
import { useContext } from "react";
import { FlowersContext } from "../../stores/FlowersContext";
import './ProductCard.scss';

type Props = {
  product: Flower,
};

export const ProductCard: React.FC<Props> = ({ product }) => {
  const {
    favourites,
    getLike,
    getDislike,
    cart,
    addToCart,
  } = useContext(FlowersContext);
  const {
    flowerId,
    flower,
    url,
    name,
    price,
    price100_300,
    price300_500,
    price_500,
    category,
    flowerPeriod,
    color,
    diametr,
    isHas,
  } = product;

  return (
    <div className="product">
      <div className="product__image-container">
        <Link
          to={`/selectedFlower/${flowerId}`}
          onContextMenu={(e) => e.preventDefault()}
        >
          <img
            src={url}
            alt="productimage"
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

      {
        flower === 'Хризантема' && category === 'Мультифлора' && (
          <h2 className="product__about-product-container">
            <p className="product__about-product-title">
              Ціна від 100 до 300 шт
            </p>

            <p className="product__about-product">
              {price100_300 + ' грн'}
            </p>
          </h2>
        )
      }

      {
        flower === 'Хризантема' && (
          <h2 className="product__about-product-container">
            <p className="product__about-product-title">
              {category === 'Мультифлора' ? 'Ціна від 300 до 500 шт' : 'Ціна від 300 шт'}
            </p>

            <p className="product__about-product">
              {price300_500 + ' грн'}
            </p>
          </h2>
        )
      }

      {
        flower === 'Хризантема' && (
          <h2 className="product__about-product-container">
            <p className="product__about-product-title">
              Ціна від 500 шт
            </p>

            <p className="product__about-product">
              {price_500 + ' грн'}
            </p>
          </h2>
        )
      }

      {
        flower === 'Хризантема' && (
          <h2 className="product__about-product-container">
            <p className="product__about-product-title">
              Категорія:
            </p>

            <p className="product__about-product">
              {category}
            </p>
          </h2>
        )
      }

      {
        flower === 'Хризантема' && (
          <h2 className="product__about-product-container">
            <p className="product__about-product-title">
              Період цвітіння:
            </p>

            <p className="product__about-product">
              {flowerPeriod}
            </p>
          </h2>
        )
      }

      <h2 className="product__about-product-container">
        <p className="product__about-product-title">
          Колір:
        </p>

        <p className="product__about-product">
          {color}
        </p>
      </h2>

      {
        flower === 'Хризантема' && (
          <h2 className="product__about-product-container">
            <p className="product__about-product-title">
              Діаметр:
            </p>

            <p className="product__about-product">
              {diametr + ' см'}
            </p>
          </h2>
        )
      }

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
          onClick={() => favourites.map(item => item.flowerId).includes(flowerId)
            ? getDislike(flowerId)
            : getLike({ flowerId, flower, category, url, name, price, price100_300, price300_500, price_500, flowerPeriod, color, isHas })}
        >
          <div className={
            favourites.map(item => item.flowerId).includes(flowerId)
              ? "icon icon--favourite-active"
              : "icon icon--favourite"
          } />
        </button>
      </div>
    </div>
  );
};