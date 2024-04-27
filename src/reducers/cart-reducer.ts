import { db } from '../data/db';
import { CartItem, Guitar } from '../types';

export type CartActions =
  | {
      type: 'add-to-cart';
      payload: { Item: Guitar };
    }
  | { type: 'remove-from-cart'; payload: { Id: Guitar['id'] } }
  | { type: 'decrease-quantity'; payload: { Id: Guitar['id'] } }
  | { type: 'increase-quantity'; payload: { Id: Guitar['id'] } }
  | { type: 'clear-cart' };

export interface CartState {
  data: Guitar[];
  cart: CartItem[];
}

export const initialState: CartState = {
  data: db,
  cart: []
};

export const cartReducer = (
  state: CartState = initialState,
  action: CartActions
) => {
  if (action.type === 'add-to-cart') {
    return {
      ...state,
      cart: [...state.cart, action.payload.Item]
    };
  }

  if (action.type === 'remove-from-cart') {
    return {
      ...state
    };
  }

  if (action.type === 'decrease-quantity') {
    return {
      ...state
    };
  }
  if (action.type === 'increase-quantity') {
    return {
      ...state
    };
  }

  if (action.type === 'clear-cart') {
    return {
      ...state
    };
  }
};
