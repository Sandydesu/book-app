import { StoreLoaded } from './store.actions';
import { StoreState, Entity, initialState, reducer } from './store.reducer';

describe('Store Reducer', () => {
  const getStoreId = it => it['id'];
  let createStore;

  beforeEach(() => {
    createStore = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
  });

  describe('valid Store actions ', () => {
    it('should return set the list of known Store', () => {
      const stores = [createStore('PRODUCT-AAA'), createStore('PRODUCT-zzz')];
      const action = new StoreLoaded(stores);
      const result: StoreState = reducer(initialState, action);
      const selId: string = getStoreId(result.list[1]);

      expect(result.loaded).toBe(true);
      expect(result.list.length).toBe(2);
      expect(selId).toBe('PRODUCT-zzz');
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;
      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
