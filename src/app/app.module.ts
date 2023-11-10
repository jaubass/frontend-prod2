import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


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
    Page404Component
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
      {path: '**', component: Page404Component},
    ]),
    provideFirebaseApp(() => initializeApp({"projectId":"code67-prod2","appId":"1:760374712131:web:03638612b91b36f27c41f6","storageBucket":"code67-prod2.appspot.com","apiKey":"AIzaSyAmguoSO3XGG2PRjb_b9_x6YrmV9HF0Qmw","authDomain":"code67-prod2.firebaseapp.com","messagingSenderId":"760374712131"})),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class FilterModule { }
