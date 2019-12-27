import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromStore from './+state/store.reducer';
import { StoreEffects } from './+state/store.effects';
import { StoreFacade } from './+state/store.facade';
import { NxModule } from '@nrwl/angular';

@NgModule({
  imports: [
    CommonModule,
    NxModule.forRoot(),
    StoreModule.forRoot(
      {},
      {
        metaReducers: [],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true
        }
      }
    ),
    EffectsModule.forRoot([StoreEffects]),
    StoreModule.forFeature(fromStore.STORE_FEATURE_KEY, fromStore.reducer)
  ],
  providers: [StoreFacade]
})
export class StoreManagementModule { }
