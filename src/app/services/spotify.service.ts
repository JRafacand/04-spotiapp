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
      'Authorization': 'Bearer BQBmcFSWskgav-esmXpzOpWRiMGePKItMRldeiJMObd0YgEj5ek1l_R12UbCaKr2lodOcorZEIIfBnHGu7NmGtc9aiOnE9vHf8JH3Nd9fy8wo1VwIklf'
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
  

}
