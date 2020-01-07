import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { StorePartialState } from './store.reducer';
import { storeQuery } from './store.selectors';
import { LoadStore, SelectedItem, CartAdd, CollectionsAdd, UpdateCartList } from './store.actions';
import { CartItems, Item } from '@book-store/util/reusable';
@Injectable()
export class StoreFacade {
  loaded$ = this.store.pipe(select(storeQuery.getLoaded));
  allStore$ = this.store.pipe(select(storeQuery.getAllStore));
  selectedStore$ = this.store.pipe(select(storeQuery.getSelectedStore));
  selectedItem$ = this.store.pipe(select(storeQuery.selectedItem));
  cartList$ = this.store.pipe(select(storeQuery.cartList));
  myCollections$ = this.store.pipe(select(storeQuery.myCollectionList));
  constructor(private store: Store<StorePartialState>) { }

  loadAll(value) {
    this.store.dispatch(new LoadStore(value));
  }

  getSelectedItem(item: Item) {
    this.store.dispatch(new SelectedItem(item));
  }

  addItemToCart(item: CartItems) {
    this.store.dispatch(new CartAdd(item));
  }

  addCollections(item: CartItems[]) {
    this.store.dispatch(new CollectionsAdd(item));
  }

  updateCart(item: { string: CartItems }) {
    this.store.dispatch(new UpdateCartList(item));
  }
}
