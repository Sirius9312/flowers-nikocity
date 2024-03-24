import { useContext } from "react";
import { FlowersContext } from "../stores/FlowersContext";
import { Favourites } from "../components/Favourites/Favourites";

export const FavouritesPage = () => {
  const { favourites } = useContext(FlowersContext)
  return (
    <section className="favourites-page">
      <div className="container">
        <div className="favourites-page__content">
          <h2 className="favourites-page__title App__title">
            Усі квіти, які Вам сподобались
          </h2>

          {
            !favourites.length && <h1>Нічого немає</h1>
          }

          {
            !!favourites.length &&
              <Favourites />
          }
        </div>
      </div>
    </section>
  );
};