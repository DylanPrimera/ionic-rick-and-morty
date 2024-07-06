import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FavoriteCharactersPage } from './favorite-characters.page';

const routes: Routes = [
  {
    path: '',
    component: FavoriteCharactersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FavoriteCharactersPageRoutingModule {}
