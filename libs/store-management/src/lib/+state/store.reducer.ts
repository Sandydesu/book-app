import { StoreAction, StoreActionTypes } from './store.actions';
import { CartItems, Item } from '../items-constants';
export const STORE_FEATURE_KEY = 'store';

/**
 * Interface for the 'Store' data used in
 *  - StoreState, and the reducer function
 *
 *  Note: replace if already defined in another module
 */

/* tslint:disable:no-empty-interface */


export interface StoreState {
  list: Item[]; // list of Store; analogous to a sql normalized table
  selectedItem?: Item;
  selectedId?: string | number; // which Store record has been selected
  loaded: boolean; // has the Store list been loaded
  error?: any; // last none error (if any)
  cartList: {
    string: CartItems
  },
  myCollections: CartItems[]
}

export interface StorePartialState {
  readonly [STORE_FEATURE_KEY]: StoreState;
}

export const initialState: StoreState = {
  list: [],
  loaded: false,
  myCollections: [],
  cartList: null
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
      const listItems = { ...state.cartList };
      if (listItems[action.payload.id]) {
        const obj = { ...listItems[action.payload.id] };
        obj.count++;
        listItems[action.payload.id] = obj;
      } else {
        listItems[action.payload.id] = action.payload;
      }
      state = {
        ...state,
        cartList: listItems
      }
      break;
    }
    case StoreActionTypes.CollectionsAdd: {
      state = {
        ...state,
        myCollections: [...state.myCollections, ...action.payload]
      }
      break;
    }
    case StoreActionTypes.UpdateCart: {
      state = {
        ...state,
        cartList: action.payload
      }
      break;
    }
  }
  return state;
}
