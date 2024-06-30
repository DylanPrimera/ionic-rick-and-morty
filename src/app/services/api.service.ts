import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public get(url: string, params?:any) {
    return this.http.get(environment.apiUrl.concat(url), {params})
  }

  public getByUrl(url: string){
    return this.http.get(url);
  }
}
