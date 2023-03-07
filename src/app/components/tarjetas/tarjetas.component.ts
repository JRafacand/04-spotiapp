import { Component, Input } from '@angular/core';
import {ActivatedRoute, Router} from'@angular/router'
@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent {
    
  @Input() items:any []=[];
  
  constructor(private router:Router){}

  verArtista(item:any){
    console.log(item,'verartista');
    let artistaId;

    if(item.type==='artist'){
    artistaId= item.id;
    }else{
      artistaId=item.artists[0].id;
    }
    //con esto envi el parametro Id a la pagina artista
    this.router.navigate(['/artist',artistaId]);
    

  }

}
