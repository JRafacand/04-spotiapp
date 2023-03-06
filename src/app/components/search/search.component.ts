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
  
  //forma rafa
  buscarart(termino:string){
  console.log(termino);
  this.spotify.getArtista(termino)
    .subscribe((data:any)=>{
    this.artists=data;
    /* for (let i = 0; i < data.length; i++) {
      console.log('entre',data.length);  
      if ((data[i].images==0) || (data[i].images==null)) {
          data[i].images =[
            {
                "height": 640,
                "url": "assets/img/noimage.png",
                "width": 640
            }]; 
        console.log('entre2');
         }
          this.artists[i]=data[i];
          console.log(this.artists);
     */});
    }
}
