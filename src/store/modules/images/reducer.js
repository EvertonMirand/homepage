import produce from 'immer';

import { SELECT_IMAGE } from './types';

const images = [
  'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Swift_logo.svg/1138px-Swift_logo.svg.png',
];

const INITIAL_STATE = {
  selectedImage: images[0],
  selectedIndex: 0,
  images,
};

export default function image(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    const { type, payload } = action;
    switch (type) {
      case SELECT_IMAGE:
        draft.selectedImage = images[payload.index];
        draft.selectedIndex = payload.index;
        break;
      default:
    }
  });
}
