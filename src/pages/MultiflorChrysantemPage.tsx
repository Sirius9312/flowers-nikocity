import { useContext, useEffect, useMemo } from "react";
import { FlowersContext } from "../stores/FlowersContext";
import { Loader } from "../components/Loader";
import { ProductsList } from "../components/ProductsList/ProductsList";

export const MultiflorChrysantemPage = () => {
  const {
    loader,
    notProductsMessage,
    errorMessage,
    multiflorChrysantems,
    getMultiflorChrysantems,
    query,
  } = useContext(FlowersContext)

  useEffect(() => {
    getMultiflorChrysantems();
    // eslint-disable-next-line
  }, [])

  const queryMultiflorChrysantems = useMemo(() => {
    const filterMultiflorChrys = query
      ? multiflorChrysantems.filter(item => item.name.trim().toLowerCase().includes(query.trim().toLowerCase()))
      : multiflorChrysantems;

      return filterMultiflorChrys;
  }, [query, multiflorChrysantems]);

  console.log(queryMultiflorChrysantems);

  return (
    <section className="flowers-page">
      <div className="container">
        <div className="flowers-page__content">
          <h2 className="flowers-page__title App__title">
            Хризантема мультифлора
          </h2>

          <h3 className="flowers-page__count-sorts">
            {`${multiflorChrysantems.length} сортів`}
          </h3>

          {
            loader && (
              <Loader />
            )
          }

          {
            !loader && errorMessage && (
              <h1>{errorMessage}</h1>
            )
          }

          {
            notProductsMessage && (
              <h1>{notProductsMessage}</h1>
            )
          }

          {
            !queryMultiflorChrysantems.length && (
              <h1>Нічого не знайдено</h1>
            )
          }

          {
            !errorMessage && !loader && !!queryMultiflorChrysantems.length && (
              <ProductsList products={queryMultiflorChrysantems} />
            )
          }
        </div>
      </div>
    </section>
  );
};
