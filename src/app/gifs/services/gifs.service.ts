import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gifs, SearchGifsResponse } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _history :string[] = []
  private _apiKey:string = 'OnJNLj87mDXNl2pntcf9jwohXgDAlC1c'
  private _limit:number = 10
  private _url:string = 'https://api.giphy.com/v1/gifs'

  public respuesta:Gifs[] = []

  get history() {
    return [...this._history]
  }

  constructor(private httpClient:HttpClient){
    this._history = JSON.parse(localStorage.getItem('history')!) || []
    this.respuesta = JSON.parse(localStorage.getItem('response')!) || []
  }

  searchGifs(query:string){
    query = query.trim().toLocaleLowerCase()

    if( !this._history.includes(query) ){
      this._history.unshift(query)
      this._history= this._history.splice(0,10)

      localStorage.setItem('history', JSON.stringify(this._history))
    }

    const params = new HttpParams()
      .set('q', query)  
      .set('api_key', this._apiKey)
      .set('limit', this._limit)

    this.httpClient.get<SearchGifsResponse>(`${this._url}/search`, {params})
      .subscribe( (resp) => {        
        this.respuesta = resp.data
        localStorage.setItem('response', JSON.stringify(this.respuesta))
      })
  }  
}
