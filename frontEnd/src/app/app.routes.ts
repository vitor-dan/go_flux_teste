import { Routes } from "@angular/router";
import { EmbarcadoresComponent } from "./embarcadores/embarcadores.component";
import { LancesComponent } from "./lances/lances.component";
import { HomeComponent } from "./navegacao/home/home.component";
import { OfertasComponent } from "./ofertas/ofertas.component";
import { TransportadoresComponent } from "./transportadores/transportadores.component";

export const  rootRouterConfig: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'embarcador', component: EmbarcadoresComponent},
    {path: 'transportador', component: TransportadoresComponent},
    {path: 'oferta', component: OfertasComponent},
    {path: 'lance', component: LancesComponent}
];