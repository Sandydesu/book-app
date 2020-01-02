import { StoreAction, StoreActionTypes } from './store.actions';

export const STORE_FEATURE_KEY = 'store';

/**
 * Interface for the 'Store' data used in
 *  - StoreState, and the reducer function
 *
 *  Note: replace if already defined in another module
 */

/* tslint:disable:no-empty-interface */
export interface Entity { }

export interface StoreState {
  list: Entity[]; // list of Store; analogous to a sql normalized table
  selectedItem?: Entity;
  selectedId?: string | number; // which Store record has been selected
  loaded: boolean; // has the Store list been loaded
  error?: any; // last none error (if any)
  cartList: Entity[]
}

export interface StorePartialState {
  readonly [STORE_FEATURE_KEY]: StoreState;
}

export const initialState: StoreState = {
  list: [],
  cartList: [],
  loaded: false
};

export function reducer(
  state: StoreState = initialState,
  action: StoreAction
): StoreState {
  switch (action.type) {
    case StoreActionTypes.StoreLoaded: {
      state = {
        ...state,
        list: action.payload,
        loaded: true
      };
      break;
    }
    case StoreActionTypes.SelectedItem: {
      state = {
        ...state,
        selectedItem: action.payload
      }
      break;
    }
    case StoreActionTypes.CartAdd: {
      state = {
        ...state,
        cartList: [...state.cartList, action.payload]
      }
      break;
    }
  }
  return state;
}
