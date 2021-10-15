import { Component, ElementRef, ViewChild} from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>

  constructor(private gifsService:GifsService){}
  search(){
    const inputText = this.txtBuscar.nativeElement.value 
    if (inputText.trim().length === 0) {
      return;
    }
    
    this.gifsService.searchGifs(inputText)
    this.txtBuscar.nativeElement.value = ''
  }
}
