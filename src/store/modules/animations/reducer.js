import produce from 'immer';

import car from '~/assets/lottie/car.json';

import radar from '~/assets/lottie/radar.json';

import states from '~/assets/lottie/states.json';
import swordsshield from '~/assets/lottie/swordsshield.json';

import { SELECT_ANIMATION } from './types';

const animations = [car, radar, states, swordsshield];

const INITIAL_STATE = {
  selectedAnimation: animations[0],
  selectedIndex: 0,
  animations,
};

export default function animation(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    const { type, payload } = action;
    switch (type) {
      case SELECT_ANIMATION:
        draft.selectedAnimation = animations[payload.index];
        draft.selectedIndex = payload.index;
        break;
      default:
    }
  });
}
