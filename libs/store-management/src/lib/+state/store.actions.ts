import { Action } from '@ngrx/store';
import { Entity } from './store.reducer';

export enum StoreActionTypes {
  LoadStore = '[Store] Load Store',
  StoreLoaded = '[Store] Store Loaded',
  StoreLoadError = '[Store] Store Load Error'
}

export class LoadStore implements Action {
  readonly type = StoreActionTypes.LoadStore;
}

export class StoreLoadError implements Action {
  readonly type = StoreActionTypes.StoreLoadError;
  constructor(public payload: any) {}
}

export class StoreLoaded implements Action {
  readonly type = StoreActionTypes.StoreLoaded;
  constructor(public payload: Entity[]) {}
}

export type StoreAction = LoadStore | StoreLoaded | StoreLoadError;

export const fromStoreActions = {
  LoadStore,
  StoreLoaded,
  StoreLoadError
};
