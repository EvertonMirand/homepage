import { SELECT_IMAGE } from './types';

export function selectImage(index) {
  return {
    type: SELECT_IMAGE,
    payload: {
      index,
    },
  };
}
