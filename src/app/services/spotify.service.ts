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
      'Authorization': 'Bearer BQAhv3W5T7SZQU-66277v7E1YYWrWSAcScktRWKdiF5h1e9gerLoakbUEicXTrjFOqKVPif38s2jIxMXGi-GwQKCtzMDo6i_lBPV4SE8bXb_-_EvHxFj'
    });
    return this.http.get(url, {headers});  
  }

   getnewreleases(){
        return this.getQuery('browse/new-releases?limit=25') 
                   .pipe(map ((data:any)=>{return data['albums'].items}));
      
    }
   getArtistas (termino:string){
        return this.getQuery(`search?q=${termino}&type=artist&limit=15`) 
        .pipe(map ((data:any)=>{return data['artists'].items}));
        }
  getArtista (id:string){
    return this.getQuery(`artists/${id}`) 
    //.pipe(map ((data:any)=>{return data['artists'].items}));
      
  }

  getTopTracks (id:string){
   return this.getQuery(`artists/${id}/top-tracks?market=us`)
    .pipe(map ((data:any)=>data['tracks']));
    //console.log(data);
    
  }
}
