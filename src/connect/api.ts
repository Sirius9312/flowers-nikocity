import { Flower } from "../type/Flower";
import { FlowerByIdFlower } from "../type/FlowerByIdFlower";

// eslint-disable-next-line max-len
const BASE_URL = 'http://localhost:3000/api';
//const BASE_URL = 'http://www.flowers-nikocity.ho.ua/api';

// This function creates a promise
// that is resolved after a given delay
function wait(delay: number): Promise<void> {
  return new Promise(resolve => {
    setTimeout(resolve, delay);
  });
}

function get<T>(url: string): Promise<T> {
  // eslint-disable-next-line prefer-template
  const fullURL = BASE_URL + url + '.json';

  return wait(100)
    .then(() => fetch(fullURL))
    .then(res => res.json());
}

export const getFlowers = () => get<Flower[]>('/flowers');
export const getFlowerByIdFlower = (id: string) => get<FlowerByIdFlower>(`/flowers/${id}`);
