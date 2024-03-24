import { useContext, useEffect, useMemo } from "react";
import { FlowersContext } from "../stores/FlowersContext";
import { Loader } from "../components/Loader";
import { ProductsList } from "../components/ProductsList/ProductsList";

export const BranchChrysantemPage = () => {
  const {
    loader,
    notProductsMessage,
    errorMessage,
    branchChrysantems,
    getBranchChrysantems,
    query,
  } = useContext(FlowersContext)

  useEffect(() => {
    getBranchChrysantems();
    // eslint-disable-next-line
  }, [])

  const queryBranchChrysantems = useMemo(() => {
    const filterHeadChrys = query
      ? branchChrysantems.filter(item => item.name.trim().toLowerCase().includes(query.trim().toLowerCase()))
      : branchChrysantems;

      return filterHeadChrys;
  }, [query, branchChrysantems]);

  return (
    <section className="flowers-page">
      <div className="container">
        <div className="flowers-page__content">
          <h2 className="flowers-page__title App__title">
            Хризантема дрібноквіткова
          </h2>

          <h3 className="flowers-page__count-sorts">
            {`${branchChrysantems.length} сортів`}
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
            !queryBranchChrysantems.length && (
              <h1>Нічого не знайдено</h1>
            )
          }

          {
            !errorMessage && !loader && !!queryBranchChrysantems.length && (
              <ProductsList products={queryBranchChrysantems} />
            )
          }
        </div>
      </div>
    </section>
  );
};
