import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../services/api.service';
import { provideHttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [RouterModule],
  providers: [ApiService, provideHttpClient()]
})
export class SharedModule { }
