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
      'Authorization': 'Bearer BQBBdf1ziHp6UoRF8FoFXSAZ-nbdIctLx7B_3RFNmRYDwCWF5z4AnIahfYItrnBezqaomoSYYVkQ3baDHyZ1pVvGqEnrtaVlI6rkkOd5JnC9AiAoeSOz'
    });
    return this.http.get(url, {headers});  
  }

   getnewreleases(){
    //se declara una constante que tiene como valor la autorizacion del api 
    /* se implementa con getquery
      const headers =new HttpHeaders({
      'Authorization': 'BQA9VELhDntz9q9PjDb7D9NglFX_eecGOu1yBp2833qnjiOW0tFqBl-ZPHIu9UrpQw3D0v5Oc2rxT-kQIksGorC9x-9pBQoeLkiL--xjPm8Pnj6LIgovBearer BQBd2xu7QzWKd9zjnXCDlvgarIWlSZaNBB9Bp76BXdy0-BbR-DFN6awxK2eSQUy9lszPTtoz5wgu39KP9dzKgcKSW9BtQUNHDUoaiDOSVgp0M3nKkYL7'
    }); 
    return this.http.get('https://api.spotify.com/v1/browse/new-releases?',{headers})
        .pipe(map ((data:any)=>{
          console.log(data);
          return data['albums'].items;
        }))*/

      return this.getQuery('browse/new-releases?limit=20') 
                  .pipe(map ((data:any)=>{
                  console.log(data);
                  return data['albums'].items}));
      
      
        /* .subscribe( data=>{
          console.log(data);
        }) */
   }
   getArtista (termino:string){
    /* const headers =new HttpHeaders({
      'Authorization': 'Bearer BQA9VELhDntz9q9PjDb7D9NglFX_eecGOu1yBp2833qnjiOW0tFqBl-ZPHIu9UrpQw3D0v5Oc2rxT-kQIksGorC9x-9pBQoeLkiL--xjPm8Pnj6LIgov'
    }); 
      return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`,{headers})
        .pipe(map ((data:any)=> data['artists'].items));*/
        return this.getQuery(`search?q=${termino}&type=artist&limit=15`) 
        .pipe(map ((data:any)=>{
        console.log(data);
        return data['artists'].items}));
          /* Otra forma.pipe(map ((data:any)=>{
          console.log(data,'pipe');
          return data.artists.items; */
      

   }
  
}
