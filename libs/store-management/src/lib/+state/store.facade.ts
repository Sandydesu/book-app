import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { StorePartialState } from './store.reducer';
import { storeQuery } from './store.selectors';
import { LoadStore } from './store.actions';

@Injectable()
export class StoreFacade {
  loaded$ = this.store.pipe(select(storeQuery.getLoaded));
  allStore$ = this.store.pipe(select(storeQuery.getAllStore));
  selectedStore$ = this.store.pipe(select(storeQuery.getSelectedStore));

  constructor(private store: Store<StorePartialState>) {}

  loadAll() {
    this.store.dispatch(new LoadStore());
  }
}
