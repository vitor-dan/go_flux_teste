import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmbarcadoresComponent } from './embarcadores/embarcadores.component';

import { HttpClientModule } from '@angular/common/http';

import { EmbarcadoresService } from './embarcadores.service';
import { MenuComponent } from './navegacao/menu/menu.component';
import { HomeComponent } from './navegacao/home/home.component';
import { FooterComponent } from './navegacao/footer/footer.component';
import { rootRouterConfig } from './app.routes';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { TransportadoresComponent } from './transportadores/transportadores.component';
import { OfertasComponent } from './ofertas/ofertas.component';
import { LancesComponent } from './lances/lances.component';
import { NgBrazil } from 'ng-brazil';
@NgModule({
  declarations: [
    AppComponent,
    EmbarcadoresComponent,
    MenuComponent,
    HomeComponent,
    FooterComponent,
    TransportadoresComponent,
    OfertasComponent,
    LancesComponent
  ],
  imports: [
    [RouterModule.forRoot(rootRouterConfig, {useHash: false})],
    FormsModule,
    HttpClientModule,
    BrowserModule,
    NgBrazil
  ],
  providers: [
    HttpClientModule,
    EmbarcadoresService,
    {provide: APP_BASE_HREF, useValue: '/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
