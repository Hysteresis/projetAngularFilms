import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FilmsComponent } from './films/films.component';
import { GuestBookComponent } from './guest-book/guest-book.component';
import { FormsModule } from '@angular/forms';
import { FilmsInfoComponent } from './films-info/films-info.component';
import { FilmsListComponent } from './films-list/films-list.component';
import { GuestBookListComponent } from './guest-book-list/guest-book-list.component';
import { GuestBookInfoComponent } from './guest-book-info/guest-book-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FilmsComponent,
    GuestBookComponent,
    FilmsInfoComponent,
    FilmsListComponent,
    GuestBookListComponent,
    GuestBookInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
