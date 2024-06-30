import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public characters: any[] = [];
  public params = {} as any;
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.params.page = 0;
    this.getCharacters();
  }
  public getCharacters(event?: any) {
    const url = 'character/';
    this.params.page += 1;
    this.apiService.get(url, this.params).subscribe({
      next: (res: any) => {
        this.characters.push(...res.results);
        if (event) {
          event.target.complete();
        }
      },
      error: () => {
        if (event) {
          event.target.complete();
        }
      },
    });
  }
  public searchCharacters() {
    const url = 'character/';
    this.params.page = 1;
    this.apiService.get(url, this.params).subscribe({
      next: (res: any) => {
        this.characters = res.results;
      },
      error: () => {
      },
    });
  }
}
