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
import { getStorage, provideStorage} from '@angular/fire/storage';
import { AddDestinoComponent } from './add-destino/add-destino.component';
import { environment } from '../environments/environment';
import { EditDayComponent } from './edit-day/edit-day.component';

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
    AddDestinoComponent,
    EditDayComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: DaysComponent},
      {path: 'day/:dayNum/video', component: PlayerComponent},
      {path: 'day/:dayNum/edit', component: EditDayComponent},
      {path: 'day/:dayNum', component: DetailComponent},
      {path: 'about', component: AboutComponent},
      {path: 'add-day', component: AddDestinoComponent},
      {path: '**', component: Page404Component},
    ]),
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideStorage(()=> getStorage()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class FilterModule { }
