import { useContext, useEffect, useMemo } from "react";
import { FlowersContext } from "../stores/FlowersContext";
import { Loader } from "../components/Loader";
import { ProductsList } from "../components/ProductsList/ProductsList";

export const HeadChrysantemPage = () => {
  const {
    loader,
    notProductsMessage,
    errorMessage,
    headChrysantems,
    getHeadChrysantems,
    query,
  } = useContext(FlowersContext)

  useEffect(() => {
    getHeadChrysantems();
    // eslint-disable-next-line
  }, [])

  const queryHeadChrysantems = useMemo(() => {
    const filterHeadChrys = query
      ? headChrysantems.filter(item => item.name.trim().toLowerCase().includes(query.trim().toLowerCase()))
      : headChrysantems;

      return filterHeadChrys;
  }, [query, headChrysantems]);

  return (
    <section className="flowers-page">
      <div className="container">
        <div className="flowers-page__content">
          <h2 className="flowers-page__title App__title">
            Хризантема одноголова
          </h2>

          <h3 className="flowers-page__count-sorts">
            {`${headChrysantems.length} сортів`}
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
            !queryHeadChrysantems.length && (
              <h1>Нічого не знайдено</h1>
            )
          }

          {
            !errorMessage && !loader && !!queryHeadChrysantems.length && (
              <ProductsList products={queryHeadChrysantems} />
            )
          }
        </div>
      </div>
    </section>
  );
};