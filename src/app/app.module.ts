import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import { HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { CardsComponent } from './components/cards/cards.component';
import { LoadingComponent } from './components/shared/loading/loading.component';

// routes
import {ROUTES} from './app.routes';

//pipes
import {SecurePreviewPipe } from './pipes/securepreview.pipe';
import { NoimagePipe } from './pipes/noimage.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistComponent,
    NavbarComponent,
    NoimagePipe,
    SecurePreviewPipe,
    CardsComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, {useHash: true}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
