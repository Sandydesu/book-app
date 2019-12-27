import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';
import { StorePartialState } from './store.reducer';
import {
  LoadStore,
  StoreLoaded,
  StoreLoadError,
  StoreActionTypes
} from './store.actions';
import { BooksApiService } from '@book-store/services';
import { map } from 'rxjs/operators'
@Injectable()
export class StoreEffects {
  @Effect() loadStore$ = this.dataPersistence.fetch(
    StoreActionTypes.LoadStore,
    {
      run: (action: LoadStore, state: StorePartialState) => {
        return this.booksApiService.getBooks().pipe(
          map(res => new StoreLoaded(res))
        )
      },
      onError: (action: LoadStore, error) => {
        console.error('Error', error);
        return new StoreLoadError(error);
      }
    }
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<StorePartialState>,
    private booksApiService: BooksApiService
  ) { }
}
