import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  filmData: any;

  constructor() { }

  ngOnInit(): void {
    this.getFilmData();
  }


  // recuperer les donnees de l'API
  getFilmData(): void{

    fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=90eee229`)
    //promesse recuperer la reponse au format Json
      .then(response =>response.json())

      .then(data=>this.setFilmData(data));
  }

//method on envoie les data
setFilmData(data:any):void{
  this.filmData = data;

  //
 console.log(this.filmData.Title);
 console.log(this.filmData.Year);


}




}
