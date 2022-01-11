import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FilmsComponent } from './films/films.component';
import { GuestBookComponent } from './guest-book/guest-book.component';



const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'films', component: FilmsComponent},
  {path: 'guestBook', component: GuestBookComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
