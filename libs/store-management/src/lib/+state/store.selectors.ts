import { createFeatureSelector, createSelector } from '@ngrx/store';
import { STORE_FEATURE_KEY, StoreState } from './store.reducer';

// Lookup the 'Store' feature state managed by NgRx
const getStoreState = createFeatureSelector<StoreState>(STORE_FEATURE_KEY);

const getLoaded = createSelector(
  getStoreState,
  (state: StoreState) => state.loaded
);
const getError = createSelector(
  getStoreState,
  (state: StoreState) => state.error
);

const getAllStore = createSelector(
  getStoreState,
  getLoaded,
  (state: StoreState, isLoaded) => {
    return isLoaded ? state.list : [];
  }
);
const getSelectedId = createSelector(
  getStoreState,
  (state: StoreState) => state.selectedId
);
const getSelectedStore = createSelector(
  getAllStore,
  getSelectedId,
  (store, id) => {
    const result = store.find(it => it['id'] === id);
    return result ? Object.assign({}, result) : undefined;
  }
);

const selectedItem = createSelector(getStoreState, (state: StoreState) => state.selectedItem);

const cartList = createSelector(getStoreState, (state: StoreState) => state.cartList);

export const storeQuery = {
  getLoaded,
  getError,
  getAllStore,
  getSelectedStore,
  selectedItem,
  cartList
};
