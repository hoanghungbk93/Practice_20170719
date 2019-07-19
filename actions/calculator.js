import { INCREMENT } from './types';

export const increment = number => {
  return {
    type: INCREMENT,
    payload: number
  }
}