import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavoriteCharactersPageRoutingModule } from './favorite-characters-routing.module';

import { FavoriteCharactersPage } from './favorite-characters.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavoriteCharactersPageRoutingModule
  ],
  declarations: [FavoriteCharactersPage]
})
export class FavoriteCharactersPageModule {}
