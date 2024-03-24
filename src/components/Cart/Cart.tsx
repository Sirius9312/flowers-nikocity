import { useContext, useState } from "react";
import { CartType } from "../../type/Cart";
import { FlowersContext } from "../../stores/FlowersContext";
import './Cart.scss';

export const Cart = () => {
  const [surname, setSurame] = useState('');
  const [errorSurname, setErrorSurname] = useState(false);
  const [name, setName] = useState('');
  const [errorName, setErrorName] = useState(false);
  const [region, setRegion] = useState('');
  const [errorRegion, setErrorRegion] = useState(false);
  const [area, setArea] = useState('');
  const [errorArea, setErrorArea] = useState(false);
  const [locality, setLocality] = useState('');
  const [errorLocality, setErrorLocality] = useState(false);
  const [departmentNovaPay, setDepartmentNovaPay] = useState('');
  const [errorDepartmentNovaPay, setErrorDepartmentNovaPay] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [errorPhoneNumber, setErrorPhoneNumber] = useState(false);
  const [moreInfo, setMoreInfo] = useState('');

  const {
    cart,
    deleteFromCart,
    updateCountCartItem,
    addNewOrder,
    setCart
  } = useContext(FlowersContext);

  const countTallChrysantems = cart.filter(item => item.flower === 'Хризантема' && (item.category === 'Голова' || item.category === 'Дрібноквітка')).map(item => item.count).reduce((a, b) => a + b, 0);
  const countMultifloraChrysantems = cart.filter(item => item.flower === 'Хризантема' && item.category === 'Мультифлора').map(item => item.count).reduce((a, b) => a + b, 0);

  const getTotalTallChrysantemMoney = (countTallChrysantems: number) => {
    let totalSumTallChrysantem = cart.filter(item => item.flower === 'Хризантема' && (item.category === 'Голова' || item.category === 'Дрібноквітка'))
    .map(item => item.price * item.count).reduce((a, b) => a + b, 0);

    if (countTallChrysantems < 300) {
      totalSumTallChrysantem = cart.filter(item => item.flower === 'Хризантема' && (item.category === 'Голова' || item.category === 'Дрібноквітка'))
        .map(item => item.price * item.count).reduce((a, b) => a + b, 0);
    } else if (countTallChrysantems >= 300 && countTallChrysantems < 500) {
      totalSumTallChrysantem = cart.filter(item => item.flower === 'Хризантема' && (item.category === 'Голова' || item.category === 'Дрібноквітка'))
        .map(item => (item.price - 2) * item.count).reduce((a, b) => a + b, 0);
    } else if (countTallChrysantems >= 500) {
      totalSumTallChrysantem = cart.filter(item => item.flower === 'Хризантема' && (item.category === 'Голова' || item.category === 'Дрібноквітка'))
        .map(item => (item.price - 3) * item.count).reduce((a, b) => a + b, 0);
    }

    return totalSumTallChrysantem;
  }

  const getTotalChrysantemMultifloraMoney = (countMultifloraChrysantems: number) => {
    let totalSumMultifloraChrysantem = cart.filter(item => item.flower === 'Хризантема' && item.category === 'Мультифлора')
    .map(item => item.price * item.count).reduce((a, b) => a + b, 0);

    if (countMultifloraChrysantems < 100) {
      totalSumMultifloraChrysantem = cart.filter(item => item.flower === 'Хризантема' && item.category === 'Мультифлора')
        .map(item => item.price * item.count).reduce((a, b) => a + b, 0);
    } else if (countMultifloraChrysantems >= 100 && countMultifloraChrysantems < 300) {
      totalSumMultifloraChrysantem = cart.filter(item => item.flower === 'Хризантема' && item.category === 'Мультифлора')
        .map(item => (item.price - 0.5) * item.count).reduce((a, b) => a + b, 0);
    } else if (countMultifloraChrysantems >= 300 && countMultifloraChrysantems < 500) {
      totalSumMultifloraChrysantem = cart.filter(item => item.flower === 'Хризантема' && item.category === 'Мультифлора')
        .map(item => (item.price - 1) * item.count).reduce((a, b) => a + b, 0);
    } else if (countMultifloraChrysantems >= 500) {
      totalSumMultifloraChrysantem = cart.filter(item => item.flower === 'Хризантема' && item.category === 'Мультифлора')
        .map(item => (item.price - 2) * item.count).reduce((a, b) => a + b, 0);
    }

    return totalSumMultifloraChrysantem;
  }

  const getTotalAlstromeriaMoney = () => {
    let totalSumAlstromeria = cart.filter(item => item.flower === 'Альстромерія')
      .map(item => item.price * item.count).reduce((a, b) => a + b, 0);

    return totalSumAlstromeria;
  }

  const handleCartDecrement = (fl: CartType) => {
    const { count, flower, category } = fl;

    if (flower === 'Хризантема' && (category === 'Голова' || category === 'Дрібноквітка') && count <= 25) {
      return;
    }

    if ((flower === 'Хризантема' && category === 'Мультифлора') && count <= 10) {
      return;
    }

    if ((flower === 'Альстромерія') && count <= 1) {
      return;
    }

    if (flower === 'Альстромерія') {
      updateCountCartItem({ ...fl, count: count - 1});
    } else {
      updateCountCartItem({ ...fl, count: count - 5});
    }
  };


  const handleCartIncrement = (fl: CartType) => {
    const { count, flower } = fl;

    if (flower === 'Альстромерія') {
      updateCountCartItem({ ...fl, count: count + 1});
    } else {
      updateCountCartItem({ ...fl, count: count + 5});
    }
  };

  const handleSubmitSendOrder = (e: React.FormEvent) => {
    e.preventDefault();

    if (!surname.trim()) {
      setErrorSurname(true);
    }

    if (!name.trim()) {
      setErrorName(true);
    }

    if (!region.trim()) {
      setErrorRegion(true);
    }

    if (!area.trim()) {
      setErrorArea(true);
    }

    if (!locality.trim()) {
      setErrorLocality(true);
    }

    if (!departmentNovaPay) {
      setErrorDepartmentNovaPay(true);
    }

    if (!phoneNumber.trim()) {
      setErrorPhoneNumber(true);
    }

    if (surname.trim()
      && name.trim()
      && region.trim()
      && area.trim()
      && locality.trim()
      && departmentNovaPay.trim()
      && phoneNumber.trim()
      && (moreInfo.trim() || !moreInfo.trim())
      && (/[0-9]{10}/g).test(phoneNumber)) {
      addNewOrder({
        stringListFlowers: cart.map(item => item.name + '-' + item.count).join(' * '),
        totalMoneyTallChrysantem: getTotalTallChrysantemMoney(countTallChrysantems),
        totalMoneyMultifloraChrysantem: getTotalChrysantemMultifloraMoney(countMultifloraChrysantems),
        totalMoneyAlstromeria: getTotalAlstromeriaMoney(),
        surname,
        name,
        region,
        area,
        locality,
        departmentNovaPay,
        phoneNumber,
        moreInfo
      })
      setCart([]);
    } else {
      setErrorPhoneNumber(true);
    }
  }

  const handleReset = (e: React.FormEvent) => {
    e.preventDefault();

    setSurame('');
    setName('');
    setRegion('');
    setArea('');
    setLocality('');
    setDepartmentNovaPay('1');
    setPhoneNumber('');
    setMoreInfo('');
  }
  

  return (
    <div className="cart">
      <div className="cart__products-container">
        {
          cart.map((fl) => {
            const {
              flowerId,
              flower,
              category,
              name,
              url,
              count,
              price
            } = fl;

            return (
              <div key={flowerId} className="cart__product">
                <h3 className="cart__name-product">
                  {name}
                </h3>

                <div
                  className="cart__photo-container"
                  onContextMenu={(e) => e.preventDefault()}
                >
                  <img
                    alt="cartimg"
                    src={url}
                    className="cart__image"
                  />
                </div>

                <h3 className="cart__price">
                  {
                      flower === 'Хризантема' && (category === 'Голова' || category === 'Дрібноквітка') && countTallChrysantems < 300
                        ? (
                        `${price} грн`
                      ) : flower === 'Хризантема' && (category === 'Голова' || category === 'Дрібноквітка') && countTallChrysantems >= 300 && countTallChrysantems < 500
                      ? (
                        `${price - 2} грн`
                      ) : flower === 'Хризантема' && (category === 'Голова' || category === 'Дрібноквітка') && countTallChrysantems >= 500
                      && (
                        `${price - 3} грн`
                      )
                  }

                  {
                    flower === 'Хризантема' && category === 'Мультифлора' && countMultifloraChrysantems < 100
                      ? (
                      `${price} грн`
                    ) : flower === 'Хризантема' && category === 'Мультифлора' && countMultifloraChrysantems >= 100 && countMultifloraChrysantems < 300
                    ? (
                      `${price - 0.5} грн`
                    ) : flower === 'Хризантема' && category === 'Мультифлора' && countMultifloraChrysantems >= 300 && countMultifloraChrysantems < 500
                    ? (
                      `${price - 1} грн`
                    ) : flower === 'Хризантема' && category === 'Мультифлора' && countMultifloraChrysantems >= 500
                    && (
                      `${price - 2} грн`
                    )
                  }

                  {
                    flower === 'Альстромерія' && (
                      `${price} грн`
                    )
                  }

                </h3>

                <div className="cart__incDecCount-container">
                  <button
                    type="button"
                    className="cart__incDecButton"
                    onClick={() => handleCartDecrement(fl)}
                  >
                    <div className="icon icon--minus" />
                  </button>

                  <h3 className="cart__count">
                    {count}
                  </h3>

                  <button
                    type="button"
                    className="cart__incDecButton"
                    onClick={() => handleCartIncrement(fl)}
                  >
                    <div className="icon icon--plus" />
                  </button>
                </div>

                <div className="cart__total-money-product">
                  {
                      flower === 'Хризантема' && (category === 'Голова' || category === 'Дрібноквітка') && countTallChrysantems < 300
                        ? (
                        `${price * count} грн`
                      ) : flower === 'Хризантема' && (category === 'Голова' || category === 'Дрібноквітка') && countTallChrysantems >= 300 && countTallChrysantems < 500
                      ? (
                        `${(price - 2) * count} грн`
                      ) : flower === 'Хризантема' && (category === 'Голова' || category === 'Дрібноквітка') && countTallChrysantems >= 500
                      && (
                        `${(price - 3) * count} грн`
                      )
                  }
                  
                  {
                    flower === 'Хризантема' && category === 'Мультифлора' && countMultifloraChrysantems < 100
                      ? (
                      `${price * count} грн`
                    ) : flower === 'Хризантема' && category === 'Мультифлора' && countMultifloraChrysantems >= 100 && countMultifloraChrysantems < 300
                    ? (
                      `${(price - 0.5) * count} грн`
                    ) : flower === 'Хризантема' && category === 'Мультифлора' && countMultifloraChrysantems >= 300 && countMultifloraChrysantems < 500
                    ? (
                      `${(price - 1) * count} грн`
                    ) : flower === 'Хризантема' && category === 'Мультифлора' && countMultifloraChrysantems >= 500
                    && (
                      `${(price - 2) * count} грн`
                    )
                  }

                  {
                    flower === 'Альстромерія' && (
                      `${price * count} грн`
                    )
                  }
                </div>

                <button
                  className="cart__delete-button"
                  type="button"
                  onClick={() => deleteFromCart(flowerId)}
                >
                  Видалити з кошика
                </button>
              </div>
            );
          })
        }
      </div>

      <div className="cart__price-form-container">
        <div className="cart__products-total-prices-container">
          <h2 className="cart__total-title">Загальні суми по товарам: </h2>

          <h3 className="cart__total-count-money">
            {`Хризантема висока: на ${getTotalTallChrysantemMoney(countTallChrysantems)} грн`}
          </h3>

          <h3 className="cart__total-count-money">
            {`Хризантема мультифлора: на ${getTotalChrysantemMultifloraMoney(countMultifloraChrysantems)} грн`}
          </h3>

          <h3 className="cart__total-count-money">
            {`Альстромерія: на ${getTotalAlstromeriaMoney()} грн`}
          </h3>
        </div>

        <h2 className="cart__total-title">Усього: </h2>

        <h3 className="cart__total-count-money">
          {`${getTotalTallChrysantemMoney(countTallChrysantems) + getTotalChrysantemMultifloraMoney(countMultifloraChrysantems) + getTotalAlstromeriaMoney()} грн`}
        </h3>

        <div className="cart__form-container">
          <form
            onReset={handleReset}
            onSubmit={handleSubmitSendOrder}
          >
            <input
              className={
                errorSurname ? "form-field form-field--error cart__form-field" : "form-field cart__form-field"
              }
              type="text"
              placeholder="Прізвище"
              value={surname}
              onChange={(e) => {
                setErrorSurname(false);
                setSurame(e.target.value);
              }}
              autoComplete="off"
            />

            <input
              className={
                errorName ? "form-field form-field--error cart__form-field" : "form-field cart__form-field"
              }
              type="text"
              placeholder="Ім'я"
              value={name}
              onChange={(e) => {
                setErrorName(false);
                setName(e.target.value);
              }}
              autoComplete="off"
            />

            <input
              className={
                errorRegion ? "form-field form-field--error cart__form-field" : "form-field cart__form-field"
              }
              type="text"
              placeholder="Область"
              value={region}
              onChange={(e) => {
                setErrorRegion(false);
                setRegion(e.target.value);
              }}
              autoComplete="off"
            />

            <input
              type="text"
              className={
                errorArea ? "form-field form-field--error cart__form-field" : "form-field cart__form-field"
              }
              placeholder="Район"
              value={area}
              onChange={(e) => {
                setErrorArea(false);
                setArea(e.target.value);
              }}
              autoComplete="off"
            />

            <input
              type="text"
              className={
                errorLocality ? "form-field form-field--error cart__form-field" : "form-field cart__form-field"
              }
              placeholder="Населений пункт"
              value={locality}
              onChange={(e) => {
                setErrorLocality(false);
                setLocality(e.target.value);
              }}
              autoComplete="off"
            />

            <input
              className={
                errorDepartmentNovaPay ? "form-field form-field--error cart__form-field" : "form-field cart__form-field"
              }
              type="number"
              placeholder="Відділення нової пошти"
              min="1"
              value={departmentNovaPay}
              onChange={(e) => {
                setErrorDepartmentNovaPay(false);
                setDepartmentNovaPay(e.target.value);
              }}
              autoComplete="off"
            />

            <input
              className={
                errorPhoneNumber ? "form-field form-field--error cart__form-field" : "form-field cart__form-field"
              }
              type="tel"
              placeholder="Номер телефону (0501112233)"
              value={phoneNumber}
              onChange={(e) => {
                setErrorPhoneNumber(false);
                setPhoneNumber(e.target.value);
              }}
              autoComplete="off"
            />

            <textarea
              className="form-field form-field--textarea cart__form-field"
              placeholder="Додаткове повідомлення до замовлення (не обов'язково)"
              value={moreInfo}
              onChange={(e) => {
                setMoreInfo(e.target.value);
              }}
           ></textarea>

            <div className="cart__send-button-container">
              <button
                type="submit"
                className="cart__send-order"
              >
                Оформити
              </button>

              <button
                type="reset"
                className="cart__send-order"
              >
                Скинути
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}