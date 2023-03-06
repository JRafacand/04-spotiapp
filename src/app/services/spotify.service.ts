import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//decorador, aqui voy a insertar mi api creada en mi postman
@Injectable({
  //esto llama automaticamente mi servicio
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify listo');
   }
  
   getnewreleases(){
    //se declara una constante que tiene como valor la autorizacion del api 
    const headers =new HttpHeaders({
      'Authorization': 'Bearer BQDNXb-SWOXFORDjyfaf7nkp_Z69Op9Ay-UgDtZSMqZl6mSZpKe4l7K6w4jo-j9QXTdgFxGd904O9CpG1ubIklvGdrRWDMLLoLoaUTEfdcr2bZE_PAEL'
    });
      return this.http.get('https://api.spotify.com/v1/browse/new-releases?',{headers});
        /* .subscribe( data=>{
          console.log(data);
        }) */
   }
   getArtista (termino:string){
    const headers =new HttpHeaders({
      'Authorization': 'Bearer BQDNXb-SWOXFORDjyfaf7nkp_Z69Op9Ay-UgDtZSMqZl6mSZpKe4l7K6w4jo-j9QXTdgFxGd904O9CpG1ubIklvGdrRWDMLLoLoaUTEfdcr2bZE_PAEL'
    });
      return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`,{headers});
    

   }
  
}
