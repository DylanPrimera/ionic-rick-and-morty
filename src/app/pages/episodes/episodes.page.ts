import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.page.html',
  styleUrls: ['./episodes.page.scss'],
})
export class EpisodesPage implements OnInit {
  public episodes: any[] = [];
  public params = {} as any;
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.params.page = 0;
    this.getEpisodes();
  }

  public getEpisodes(event?: any) {
    const url = 'episode/';
    this.params.page += 1;
    this.apiService.get(url, this.params).subscribe({
      next: (res: any) => {
        this.episodes.push(...res.results);
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



  public searchEpisode() {
    const url = 'episode/';
    this.params.page = 1;
    this.apiService.get(url, this.params).subscribe({
      next: (res: any) => {
        this.episodes = res.results;
      },
      error: () => {
      },
    });
  }
}
