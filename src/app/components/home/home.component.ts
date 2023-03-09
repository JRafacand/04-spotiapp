import { Component } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
import { SpotifyService } from '../../services/spotify.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  /* paises:any[]=[];  
  constructor (private http: HttpClient ){
  this.http.get('https://restcountries.com/v2/lang/es')
    .subscribe((resp:any)=>{
      this.paises=resp;
      console.log(resp);
    }
  })
     */
    //aqui invoco mi servicio
    nuevascanciones: any[]=[];
    loading:boolean;

    error:boolean;

    constructor(private spotify:SpotifyService) {
     this.loading=true;
     this.error=false;
      this.spotify.getnewreleases()
      .subscribe( (data: any)=>{//subscribe
        //console.log(data.albums.items);
        this.nuevascanciones=data;
        this.loading=false;
      },(errorServicio)=>{
        this.error=errorServicio.error.error.message;
        console.log(errorServicio,'error service',this.error);
      });
     }
      
    }

