import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes} from '@angular/router'; 

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
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    component: DaysComponent,
    // children: [
    //   {
    //     path: '/day/:detail',
    //     component: DetailComponent
    //   }
    // ]
  },
  {
    path: 'home',
    redirectTo:'',
    pathMatch: 'full'
  },
  // {
  //   path: '/day/:detail',
  //   component: DetailComponent
  // },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];


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
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
