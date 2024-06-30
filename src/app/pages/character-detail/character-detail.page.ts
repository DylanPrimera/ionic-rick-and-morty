import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.page.html',
  styleUrls: ['./character-detail.page.scss'],
})
export class CharacterDetailPage  {
  public characterId!: string;
  public character: any;
  public espisodes: any[] = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService
  ) {
    this.characterId = this.activatedRoute.snapshot.paramMap.get(
      'id'
    ) as string;
  }
  ionViewWillEnter() {
    this.getCharacterDetail();
  }
  public getCharacterDetail(){
    const url = 'character/'+ this.characterId;
    this.apiService.get(url).subscribe({
      next: (res: any)=> {
        this.character = res;
        this.getEpisodes();
      },
      error: ()=>{}
    });
  }

  public getEpisodes(){
    for(let url of this.character.episode) {
      this.apiService.getByUrl(url).subscribe({
        next: (res: any)=> {
         this.espisodes.push(res);
        },
        error: ()=>{}
      });
    }
  }
}
