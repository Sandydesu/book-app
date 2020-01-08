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
        return this.booksApiService.getBooks(action.payload).pipe(
          map(res => {
            const booksList = res.items.map(item => {
              return {
                id: item.id,
                title: item.volumeInfo.title,
                subTitle: item.volumeInfo.subtitle,
                authors: item.volumeInfo.authors ? item.volumeInfo.authors.join(', ') : null,
                image: item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.thumbnail : null,
                mrpAmount: item.saleInfo.listPrice ? item.saleInfo.listPrice.amount : 0,
                discountAmount: item.saleInfo.retailPrice ? item.saleInfo.retailPrice.amount : 0,
                currencyCode: item.saleInfo.retailPrice ? item.saleInfo.retailPrice.currencyCode : 'INR',
                description: item.volumeInfo.description,
                publisher: item.volumeInfo.publisher,
                publishdate: item.volumeInfo.publishedDate,
              }
            })

            return new StoreLoaded(booksList);
          })
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
