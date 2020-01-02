import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { StorePartialState } from './store.reducer';
import { storeQuery } from './store.selectors';
import { LoadStore, SelectedItem, CartAdd } from './store.actions';

@Injectable()
export class StoreFacade {
  loaded$ = this.store.pipe(select(storeQuery.getLoaded));
  allStore$ = this.store.pipe(select(storeQuery.getAllStore));
  selectedStore$ = this.store.pipe(select(storeQuery.getSelectedStore));
  selectedItem$ = this.store.pipe(select(storeQuery.selectedItem));
  cartList$ = this.store.pipe(select(storeQuery.cartList));

  constructor(private store: Store<StorePartialState>) { }

  loadAll(value) {
    this.store.dispatch(new LoadStore(value));
  }

  getSelectedItem(item) {
    this.store.dispatch(new SelectedItem(item));
  }

  addItemToCart(item) {
    this.store.dispatch(new CartAdd(item));
  }
}
