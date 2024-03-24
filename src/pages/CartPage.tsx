import { useContext } from "react";
import { FlowersContext } from "../stores/FlowersContext";
import { Cart } from "../components/Cart/Cart";

export const CartPage = () => {
  const {
    cart
  } = useContext(FlowersContext)

  return (
    <section className="cart-page">
      <div className="container">
        <div className="cart-page-content">
          <h2 className="cart-page__title App__title">
            Кошик
          </h2>

          {
            !cart.length && <h1>Кошик порожній</h1>
          }

          {
            !!cart.length &&
              <Cart />
          }
        </div>
      </div>
    </section>
  );
};