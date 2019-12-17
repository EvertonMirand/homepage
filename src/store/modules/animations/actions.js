import { SELECT_ANIMATION } from './types';

export function selectAnimation(index) {
  return {
    type: SELECT_ANIMATION,
    payload: {
      index,
    },
  };
}
