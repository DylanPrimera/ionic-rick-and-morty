import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.page.html',
  styleUrls: ['./layout.page.scss'],
})
export class LayoutPage {
  public pages = [
    {
      title: 'Characters',
      icon: 'people-circle-outline',
      routerLink: '/layout/characters',
    },
    {
      title: 'Episodes',
      icon: 'list-outline',
      routerLink: '/layout/episodes',
    },
    {
      title: 'Favorite Characters',
      icon: 'star-outline',
      routerLink: '/layout/favorites',
    },
  ];
}
