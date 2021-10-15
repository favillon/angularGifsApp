import { Component} from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent{

  get respuesta(){
    return this.gifsService.respuesta
  }
  constructor(private gifsService:GifsService) { }
}
