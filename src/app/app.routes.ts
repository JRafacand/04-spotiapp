import {Routes} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';


export const ROUTES: Routes=[
    {path: 'home', component: HomeComponent },
    {path: 'search', component: SearchComponent },
    {path: 'artist/:id', component: ArtistaComponent },// con esto obligo a la pagina mandar la pagina del artista

    {path: '', pathMatch: 'full', redirectTo:'home' },//redirecciona path vacios al home
    {path: '**', pathMatch: 'full', redirectTo:'home' },
]