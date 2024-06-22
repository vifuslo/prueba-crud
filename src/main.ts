import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ItemListComponent } from './app/item-list/item-list.component';
import { ItemDetailComponent } from './app/item-detail/item-detail.component';
import { ItemAddComponent } from './app/item-add/item-add.component';
import { ItemEditComponent } from './app/item-edit/item-edit.component';


// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));

const routes: Routes = [
  { path: '', component: ItemListComponent },
  { path: 'item/add', component: ItemAddComponent },
  { path: 'item/:id', component: ItemDetailComponent },
  { path: 'item/edit/:id', component: ItemEditComponent }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom(FormsModule)
  ]
}).catch(err => console.error(err));
