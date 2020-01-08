import { StoreState } from './store.reducer';
import { storeQuery } from './store.selectors';
import { Item } from '../items-constants';
describe('Store Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getStoreId = it => it['id'];

  let storeState;

  beforeEach(() => {
    const createStore = (id: string, title = '', subTitle = "",
      authors = "",
      image = "",
      mrpAmount = 0,
      discountAmount = 0,
      description = "",
      publisher = "",
      publishdate = "",
      currencyCode = ""): Item => ({
        id,
        title: title || `name-${id}`,
        subTitle,
        authors,
        image,
        mrpAmount,
        discountAmount,
        description,
        publisher,
        publishdate,
        currencyCode
      });
    storeState = {
      store: {
        list: [
          createStore('PRODUCT-AAA'),
          createStore('PRODUCT-BBB'),
          createStore('PRODUCT-CCC')
        ],
        selectedId: 'PRODUCT-BBB',
        error: ERROR_MSG,
        loaded: true
      }
    };
  });

  describe('Store Selectors', () => {
    it('getAllStore() should return the list of Store', () => {
      const results = storeQuery.getAllStore(storeState);
      const selId = getStoreId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelectedStore() should return the selected Entity', () => {
      const result = storeQuery.getSelectedStore(storeState);
      const selId = getStoreId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getLoaded() should return the current 'loaded' status", () => {
      const result = storeQuery.getLoaded(storeState);

      expect(result).toBe(true);
    });

    it("getError() should return the current 'error' storeState", () => {
      const result = storeQuery.getError(storeState);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
