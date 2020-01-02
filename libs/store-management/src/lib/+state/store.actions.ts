import { Action } from '@ngrx/store';
import { Entity } from './store.reducer';

export enum StoreActionTypes {
  LoadStore = '[Store] Load Store',
  StoreLoaded = '[Store] Store Loaded',
  StoreLoadError = '[Store] Store Load Error',
  SelectedItem = '[Store] SelectedItem'
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

export type StoreAction = LoadStore | StoreLoaded | StoreLoadError | SelectedItem;

export const fromStoreActions = {
  LoadStore,
  StoreLoaded,
  StoreLoadError,
  SelectedItem
};
