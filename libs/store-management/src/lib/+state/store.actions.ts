import { Action } from '@ngrx/store';
import { CartItems, Item } from '@book-store/util/reusable';
export enum StoreActionTypes {
  LoadStore = '[Store] Load Store',
  StoreLoaded = '[Store] Store Loaded',
  StoreLoadError = '[Store] Store Load Error',
  SelectedItem = '[Store] SelectedItem',
  CartAdd = '[Store] Item Added to cart',
  CollectionsAdd = '[Store] Collections Added',
  UpdateCart = '[Store] Cart updating'
}

export class LoadStore implements Action {
  readonly type = StoreActionTypes.LoadStore;
  constructor(public payload: string) { }
}

export class StoreLoadError implements Action {
  readonly type = StoreActionTypes.StoreLoadError;
  constructor(public payload: any) { }
}

export class StoreLoaded implements Action {
  readonly type = StoreActionTypes.StoreLoaded;
  constructor(public payload: Item[]) { }
}

export class SelectedItem implements Action {
  readonly type = StoreActionTypes.SelectedItem;
  constructor(public payload: Item) { }
}

export class CartAdd implements Action {
  readonly type = StoreActionTypes.CartAdd;
  constructor(public payload: CartItems) { }
}

export class CollectionsAdd implements Action {
  readonly type = StoreActionTypes.CollectionsAdd;
  constructor(public payload: CartItems[]) { }
}

export class UpdateCartList implements Action {
  readonly type = StoreActionTypes.UpdateCart;
  constructor(public payload: { string: CartItems }) { }
}

export type StoreAction = LoadStore | StoreLoaded | StoreLoadError | SelectedItem | CartAdd | CollectionsAdd | UpdateCartList;

export const fromStoreActions = {
  LoadStore,
  StoreLoaded,
  StoreLoadError,
  SelectedItem,
  CartAdd,
  CollectionsAdd,
  UpdateCartList
};
