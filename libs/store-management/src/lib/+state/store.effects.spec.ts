import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { StoreEffects } from './store.effects';
import { LoadStore, StoreLoaded } from './store.actions';

describe('StoreEffects', () => {
  let actions: Observable<any>;
  let effects: StoreEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NxModule.forRoot(),
        StoreModule.forRoot({}),
        EffectsModule.forRoot([])
      ],
      providers: [
        StoreEffects,
        DataPersistence,
        provideMockActions(() => actions)
      ]
    });

    effects = TestBed.get(StoreEffects);
  });

  describe('loadStore$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: new LoadStore() });
      expect(effects.loadStore$).toBeObservable(
        hot('-a-|', { a: new StoreLoaded([]) })
      );
    });
  });
});
