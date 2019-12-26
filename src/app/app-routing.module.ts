import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { OneMoviePageComponent } from './one-movie-page/one-movie-page.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: ':id', component: OneMoviePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
