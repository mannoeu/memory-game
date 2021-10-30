import Armin from "../database/armin.webp";
import Eren from "../database/eren.webp";
import Mikasa from "../database/mikasa.webp";
import Levi from "../database/levi.webp";
import Sasha from "../database/sasha.webp";
import Connie from "../database/connie.webp";
import Historia from "../database/historia.webp";
import Gabi from "../database/gabi.webp";
import Falco from "../database/falco.webp";
import Zeke from "../database/zeke.webp";
import Yelena from "../database/yelena.webp";
import Hange from "../database/hange.webp";

export function shuffleArray(array = []) {
  var actual = array.length,
    temp,
    random;

  while (0 !== actual) {
    random = Math.floor(Math.random() * actual);
    actual -= 1;

    temp = array[actual];
    array[actual] = array[random];
    array[random] = temp;
  }

  return array;
}

const match_1 = [
  {
    id: 2,
    match_id: 21,
    image_url: Eren,
  },
  {
    id: 1,
    match_id: 11,
    image_url: Armin,
  },
  {
    id: 3,
    match_id: 31,
    image_url: Mikasa,
  },
  {
    id: 5,
    match_id: 51,
    image_url: Sasha,
  },
  {
    id: 6,
    match_id: 61,
    image_url: Connie,
  },
  {
    id: 4,
    match_id: 41,
    image_url: Levi,
  },
  {
    id: 8,
    match_id: 81,
    image_url: Gabi,
  },
  {
    id: 9,
    match_id: 91,
    image_url: Falco,
  },
  {
    id: 10,
    match_id: 101,
    image_url: Zeke,
  },
  {
    id: 12,
    match_id: 112,
    image_url: Hange,
  },
  {
    id: 7,
    match_id: 71,
    image_url: Historia,
  },
  {
    id: 11,
    match_id: 111,
    image_url: Yelena,
  },
];

const match_2 = [
  {
    id: 21,
    match_id: 2,
    image_url: Eren,
  },
  {
    id: 11,
    match_id: 1,
    image_url: Armin,
  },
  {
    id: 31,
    match_id: 3,
    image_url: Mikasa,
  },
  {
    id: 101,
    match_id: 10,
    image_url: Zeke,
  },
  {
    id: 41,
    match_id: 4,
    image_url: Levi,
  },
  {
    id: 51,
    match_id: 5,
    image_url: Sasha,
  },
  {
    id: 61,
    match_id: 6,
    image_url: Connie,
  },
  {
    id: 71,
    match_id: 7,
    image_url: Historia,
  },
  {
    id: 111,
    match_id: 11,
    image_url: Yelena,
  },
  {
    id: 81,
    match_id: 8,
    image_url: Gabi,
  },
  {
    id: 91,
    match_id: 9,
    image_url: Falco,
  },
  {
    id: 112,
    match_id: 12,
    image_url: Hange,
  },
];

export const cards = [...match_1, ...match_2];
