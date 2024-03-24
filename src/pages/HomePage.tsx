import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { FlowersContext } from "../stores/FlowersContext";

export const HomePage = () => {
  const {
  headChrysantems,
  branchChrysantems,
  multiflorChrysantems,
  alstromeria,
  getHeadChrysantems,
  getBranchChrysantems,
  getMultiflorChrysantems,
  getAlstromeria,

} = useContext(FlowersContext);

  useEffect(() => {
    getHeadChrysantems();
    getBranchChrysantems();
    getMultiflorChrysantems();
    getAlstromeria();
    // eslint-disable-next-line
  }, [])

  return (
    <section className="flower-menu App__flower-menu">
      <div className="container">
        <div className="flower-menu__content">
          <div className="flower-menu__image-text-container">
            <h1 className="flower-menu__homeimage-title">
              Ласкаво просимо3
            </h1>

            <div className="grid-cover">
              <div className="flower-menu__image-container">
                <img
                  src="img/headerImage.jpg"
                  alt="headerimg"
                  className="flower-menu__home-image"
                />
              </div>
            </div>
          </div>

          <h2 className="flower-menu__title">
            Квіти
          </h2>

          <div className="grid-cover">
            <div className="flower-menu__photo-text-container flower-menu__photo-text-container--1">
              <div className="flower-menu__photo-wrapper">
                <Link to="/chrysantema_golova">
                  <img
                    src="img/headChrisMenuImg.jpg"
                    alt="chrysimg"
                    className="flower-menu__image"
                  />
                </Link>
              </div>

              <h3 className="flower-menu__flower-name">Хризантема одноголова</h3>
              <h4 className="flower-menu__count-sorts">{`${headChrysantems.length} сортів`}</h4>
            </div>

            <div className="flower-menu__photo-text-container flower-menu__photo-text-container--2">
              <div className="flower-menu__photo-wrapper">
                <Link to="/chrysantema_melkotsvetka">
                  <img
                    src="img/branchChrisMenuImg.jpg"
                    alt="chrysimg"
                    className="flower-menu__image"
                  />
                </Link>
              </div>

              <h3 className="flower-menu__flower-name">Хризантема дрібноквіткова</h3>
              <h4 className="flower-menu__count-sorts">{`${branchChrysantems.length} сортів`}</h4>
            </div>

            <div className="flower-menu__photo-text-container flower-menu__photo-text-container--3">
              <div className="flower-menu__photo-wrapper">
                <Link to="/chrysantema_multiflora">
                  <img
                    src="img/multiflorChrisMenuImg.jpg"
                    alt="chrysimg"
                    className="flower-menu__image"
                  />
                </Link>
              </div>

              <h3 className="flower-menu__flower-name">Хризантема мультифлора</h3>
              <h4 className="flower-menu__count-sorts">{`${multiflorChrysantems.length} сортів`}</h4>
            </div>

            <div className="flower-menu__photo-text-container flower-menu__photo-text-container--4">
              <div className="flower-menu__photo-wrapper">
                <Link to="/alstromeria">
                  <img
                    src="img/alstHomeImage.jpg"
                    alt="alstromeriaimg"
                    className="flower-menu__image"
                  />
                </Link>
              </div>

              <h3 className="flower-menu__flower-name">Альстромерія</h3>
              <h4 className="flower-menu__count-sorts">{`${alstromeria.length} сортів`}</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};