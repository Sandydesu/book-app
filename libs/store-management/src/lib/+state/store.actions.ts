import { Action } from '@ngrx/store';
import { Entity } from './store.reducer';

export enum StoreActionTypes {
  LoadStore = '[Store] Load Store',
  StoreLoaded = '[Store] Store Loaded',
  StoreLoadError = '[Store] Store Load Error',
  SelectedItem = '[Store] SelectedItem',
  CartAdd = '[Store] Item Added to cart'
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
  constructor(public payload: Entity[]) { }
}

export class SelectedItem implements Action {
  readonly type = StoreActionTypes.SelectedItem;
  constructor(public payload: Entity) { }
}

export class CartAdd implements Action {
  readonly type = StoreActionTypes.CartAdd;
  constructor(public payload: Entity) { }
}

export type StoreAction = LoadStore | StoreLoaded | StoreLoadError | SelectedItem | CartAdd;

export const fromStoreActions = {
  LoadStore,
  StoreLoaded,
  StoreLoadError,
  SelectedItem,
  CartAdd
};
