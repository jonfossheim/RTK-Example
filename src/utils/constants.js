export const URL = 'https://www.dnd5eapi.co/api/';

export const CLASSES = 'classes/';

export const containsObject = (obj, list) => {
  let i;
  for (i = 0; i < list.length; i++) {
    if (list[i] === obj) {
      return true;
    }
  }

  return false;
};
