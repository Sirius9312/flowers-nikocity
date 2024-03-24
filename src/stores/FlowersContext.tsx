import React, { useState } from "react";
//import flowers from '../api/flowers.json';
import { Flower } from "../type/Flower";
//import { getFlowers } from "../connect/api";
import { Favourite } from "../type/Favourite";
import { CartType } from "../type/Cart";
import { useLocaleStorage } from "../useLocaleStorage/useLocaleStorage";
import { Order } from "../type/Order";
import { useSearchParams } from "react-router-dom";
import { getSearchWith } from "../getSearch/searchHelpers";
import $ from 'jquery';

type Context = {
  headChrysantems: Flower[],
  branchChrysantems: Flower[],
  multiflorChrysantems: Flower[],
  alstromeria: Flower[],
  getHeadChrysantems: () => void,
  getBranchChrysantems: () => void,
  getMultiflorChrysantems: () => void,
  getAlstromeria: () => void,
  loader: boolean,
  notProductsMessage: string,
  errorMessage: string,
  favourites: Favourite[],
  getLike: (flower: Favourite) => void,
  getDislike: (flId: string) => void,
  cart: CartType[],
  addToCart: (item: CartType) => void,
  deleteFromCart: (id: string) => void,
  updateCountCartItem: (Item: CartType) => void,
  addNewOrder: (newOrder: Order) => void,
  setCart: (cart: CartType[]) => void,
  query: string,
  perPage: string,
  currPage: string,
  sortProducts: string,
  setSearchWith: (params: any) => void,
};

export const FlowersContext = React.createContext<Context>({
  headChrysantems: [],
  branchChrysantems: [],
  multiflorChrysantems: [],
  alstromeria: [],
  getHeadChrysantems: async () => {},
  getBranchChrysantems: async () => {},
  getMultiflorChrysantems: async () => {},
  getAlstromeria: async () => {},
  loader: false,
  notProductsMessage: '',
  errorMessage: '',
  favourites: [],
  getLike: () => {},
  getDislike: () => {},
  cart: [],
  addToCart: () => {},
  deleteFromCart: () => {},
  updateCountCartItem: () => {},
  addNewOrder: () => {},
  setCart: () => {},
  query: '',
  perPage: '',
  currPage: '',
  sortProducts: '',
  setSearchWith: () => {},
});

type Props = {
  children: React.ReactNode,
};

export const FlowersProvider: React.FC<Props> = ({ children }) => {
  const [headChrysantems, setHeadChrysantems] = useState<Flower[]>([]);
  const [branchChrysantems, setBranchChrysantems] = useState<Flower[]>([]);
  const [multiflorChrysantems, setMultiflorChrysantems] = useState<Flower[]>([]);
  const [alstromeria, setAlstromeria] = useState<Flower[]>([]);
  const [loader, setLoader] = useState(false);
  const [notProductsMessage, setNotProductMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [favourites, setFavourites] = useLocaleStorage<Favourite[]>('favourites', []);
  const [cart, setCart] = useLocaleStorage<CartType[]>('cart', []);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query') || '';
  const perPage = searchParams.get('perPage') || 'Усі';
  const currPage = searchParams.get('currPage') || '1';
  const sortProducts = searchParams.get('sortProducts') || 'Без сортування';

  const getHeadChrysantems = () => {
    setErrorMessage('');
    setNotProductMessage('');
    setLoader(true);

    $.get("http://www.flowers-nikocity.ho.ua/api/flowers.php")
      .then((resp) => {
        const parsingFlowers: Flower[] = JSON.parse(resp);
        const chrysantemsList = parsingFlowers.filter(flower => flower.category === 'Голова');

        if (chrysantemsList.length === 0) {
          setNotProductMessage('Хризантеми немає у наявності');
          setLoader(false);
        } else {
          setHeadChrysantems(chrysantemsList)
          setLoader(false);
        }
      })
      .catch(() => setErrorMessage('Помилка завантаження. Мабуть відсутній інтернет'));
  };

  const getBranchChrysantems = () => {
    setErrorMessage('');
    setNotProductMessage('');
    setLoader(true);

    $.get("http://www.flowers-nikocity.ho.ua/api/flowers.php")
      .then((resp) => {
        const parsingFlowers: Flower[] = JSON.parse(resp);
        const chrysantemsList = parsingFlowers.filter(flower => flower.flower === 'Хризантема' && flower.category === 'Дрібноквітка');

        if (chrysantemsList.length === 0) {
          setNotProductMessage('Хризантеми немає у наявності');
          setLoader(false);
        } else {
          setBranchChrysantems(chrysantemsList)
          setLoader(false);
        }
      })
      .catch(() => setErrorMessage('Помилка завантаження. Мабуть відсутній інтернет'));
  };

  const getMultiflorChrysantems = () => {
    setErrorMessage('');
    setNotProductMessage('');
    setLoader(true);

    $.get("http://www.flowers-nikocity.ho.ua/api/flowers.php")
      .then((resp) => {
        const parsingFlowers: Flower[] = JSON.parse(resp);
        const chrysantemsList = parsingFlowers.filter(flower => flower.category === 'Мультифлора');

        if (chrysantemsList.length === 0) {
          setNotProductMessage('Хризантеми немає у наявності');
          setLoader(false);
        } else {
          setMultiflorChrysantems(chrysantemsList)
          setLoader(false);
        }
      })
      .catch(() => setErrorMessage('Помилка завантаження. Мабуть відсутній інтернет'));
  };

  const getAlstromeria = () => {
    setErrorMessage('');
    setNotProductMessage('');
    setLoader(true);

    $.get("http://www.flowers-nikocity.ho.ua/api/flowers.php")
      .then((resp) => {
        const parsingFlowers: Flower[] = JSON.parse(resp);
        const alstromeriaList = parsingFlowers.filter(flower => flower.flower === 'Альстромерія');

        if (alstromeriaList.length === 0) {
          setNotProductMessage('Альстромерії немає у наявності');
          setLoader(false);
        } else {
          setAlstromeria(alstromeriaList)
          setLoader(false);
        }
      })
      .catch(() => setErrorMessage('Помилка завантаження. Мабуть відсутній інтернет'));
  };

  const getLike = (flower: Favourite) => {
    setFavourites([...favourites, flower]);
  }

  const getDislike = (flowerId: string) => {
    setFavourites(favourites.filter(item => item.flowerId !== flowerId));
  }

  const addToCart = (item: CartType) => {
    setCart([...cart, item])
  }

   const deleteFromCart = (id: string) => {
    setCart(cart.filter(item => item.flowerId !== id));
   }

  const updateCountCartItem = (Item: CartType) => {
    setCart(cart.map(item => item.flowerId === Item.flowerId ? Item : item));
  }

  const addNewOrder = (order: Order) => {
    const d = {
      stringListFlowers: order.stringListFlowers,
      totalMoneyTallChrysantem: order.totalMoneyTallChrysantem,
      totalMoneyMultifloraChrysantem: order.totalMoneyMultifloraChrysantem,
      totalMoneyAlstromeria: order.totalMoneyAlstromeria,
      surname: order.surname,
      name: order.name,
      region: order.region,
      area: order.area,
      locality: order.locality,
      departmentNovaPost: order.departmentNovaPay,
      phoneNumber: order.phoneNumber,
      moreInfo: order.moreInfo,
    };

    $.ajax({
      type: "POST",
      url: "http://www.flowers-nikocity.ho.ua",
      data: d,
      success: function (data){
        alert(data);
      },
      error:function (xhr, ajaxOptions, thrownError){
        alert("Error: "+thrownError);
      }
    });
  };

  function setSearchWith(params: any) {
    const search = getSearchWith(searchParams, params);

    setSearchParams(search);
  }

  const value = {
    headChrysantems,
    branchChrysantems,
    multiflorChrysantems,
    alstromeria,
    getHeadChrysantems,
    getBranchChrysantems,
    getMultiflorChrysantems,
    getAlstromeria,
    loader,
    notProductsMessage,
    errorMessage,
    favourites,
    getLike,
    getDislike,
    cart,
    addToCart,
    deleteFromCart,
    updateCountCartItem,
    addNewOrder,
    setCart,
    query,
    perPage,
    currPage,
    sortProducts,
    setSearchWith
  };

  return (
    <FlowersContext.Provider value={value}>
      {children}
    </FlowersContext.Provider>
  );
};
