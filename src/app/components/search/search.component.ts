import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  
  artists:any[]=[];
  constructor (private spotify:SpotifyService){}
  
  buscarart(termino:string){
  console.log(termino);
  this.spotify.getArtista(termino)
    .subscribe((data:any)=>{
      console.log(data)
      if (data.images=!null){
      console.log(data.name);
      this.artists=data
      }
    });
  }
}
