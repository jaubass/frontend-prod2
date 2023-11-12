import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { NavbarComponent } from './commons/navbar/navbar.component';
import { FooterComponent } from './commons/footer/footer.component';
import { DaysComponent } from './days/days/days.component';
import { DetailComponent } from './detail/detail/detail.component';
import { PlayerComponent } from './player/player/player.component';
import { HeroComponent } from './commons/hero/hero.component';
import { DayPipe } from '../app/days/days/day.pipe';
import { CityPipe } from './days/days/city.pipe';
import { SafePipe } from './safe.pipe';
import { SafeUrlDirective } from '../app/directives/safe.directive';
import { AboutComponent } from './about/about.component';
import { Page404Component } from './page404/page404.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { AddDestinoComponent } from './add-destino/add-destino.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    DaysComponent,
    DetailComponent,
    PlayerComponent,
    HeroComponent,
    DayPipe,
    CityPipe,
    SafePipe,
    SafeUrlDirective,
    AboutComponent,
    Page404Component,
    AddDestinoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: DaysComponent},
      {path: 'day/:dayNum/video', component: PlayerComponent},
      {path: 'day/:dayNum', component: DetailComponent},
      {path: 'about', component: AboutComponent},
      {path: 'addDestino', component: AddDestinoComponent},
      {path: '**', component: Page404Component},
    ]),
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp({"projectId":"frontend-5088a","appId":"1:417204717894:web:2c5f8e35bdc24eb13f3d47","storageBucket":"frontend-5088a.appspot.com","apiKey":"AIzaSyCnToeV7j7Z8PQoJcY0NNBpG6hiB8GboIY","authDomain":"frontend-5088a.firebaseapp.com","messagingSenderId":"417204717894"})),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class FilterModule { }
