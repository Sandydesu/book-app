import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { readFirst } from '@nrwl/angular/testing';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';

import { NxModule } from '@nrwl/angular';

import { StoreEffects } from './store.effects';
import { StoreFacade } from './store.facade';

import { storeQuery } from './store.selectors';
import { LoadStore, StoreLoaded } from './store.actions';
import { StoreState, Entity, initialState, reducer } from './store.reducer';

interface TestSchema {
  store: StoreState;
}

describe('StoreFacade', () => {
  let facade: StoreFacade;
  let store: Store<TestSchema>;
  let createStore;

  beforeEach(() => {
    createStore = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature('store', reducer, { initialState }),
          EffectsModule.forFeature([StoreEffects])
        ],
        providers: [StoreFacade]
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          NxModule.forRoot(),
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule
        ]
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.get(Store);
      facade = TestBed.get(StoreFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async done => {
      try {
        let list = await readFirst(facade.allStore$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.loadAll();

        list = await readFirst(facade.allStore$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    /**
     * Use `StoreLoaded` to manually submit list for state management
     */
    it('allStore$ should return the loaded list; and loaded flag == true', async done => {
      try {
        let list = await readFirst(facade.allStore$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        store.dispatch(
          new StoreLoaded([createStore('AAA'), createStore('BBB')])
        );

        list = await readFirst(facade.allStore$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(2);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
