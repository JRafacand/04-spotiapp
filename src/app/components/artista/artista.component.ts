import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent {
artista:any={};//se inicializa como objeto vacio
loadingart:any;    
  constructor (private router:ActivatedRoute,
                private spotify:SpotifyService){
      //aqui recibo el parametro Id
      this.router.params.subscribe(params=>{
        console.log(params['id']);
        this.getartista(params['id']);
      })
    }
  getartista(id:string){
    this.loadingart=true;
    this.spotify.getArtista(id)
    .subscribe(artista=>{
    console.log(artista);
    this.artista=artista;
    this.loadingart=false;
  });
    

  }
}
