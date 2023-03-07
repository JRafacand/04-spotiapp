import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//importar observabe de reactive extention
import {map} from 'rxjs/operators';
import { query } from '@angular/animations';

//decorador, aqui voy a insertar mi api creada en mi postman
@Injectable({
  //esto llama automaticamente mi servicio
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify listo');
   }
  getQuery(query:string){
    const url=`https://api.spotify.com/v1/${query}`;
    
    const headers =new HttpHeaders({
      'Authorization': 'Bearer BQAo7BMCWdMXWBxK8onwTmU1KB_GIB6VJNRPqMikFfjr8WLM7v-O8n0p4tj6EgJp8ofgL1QdEbuZXfWidpmjTYi0lX0VwdSG3GwI8OyRf012pyq2gX2p'
    });
    return this.http.get(url, {headers});  
  }

   getnewreleases(){
        return this.getQuery('browse/new-releases?limit=20') 
                   .pipe(map ((data:any)=>{return data['albums'].items}));
      
    }
   getArtista (termino:string){
        return this.getQuery(`search?q=${termino}&type=artist&limit=15`) 
        .pipe(map ((data:any)=>{return data['artists'].items}));
        }
  
}
