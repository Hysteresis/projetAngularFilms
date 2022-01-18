import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  title: string = 'hulk';
  filmData: any;
  recherche: any;

  constructor() { }

  ngOnInit(): void {
    
  }

  // recuperer les donnees de l'API
  getFilmData(): void{
    //requete a vide impossible
    if (this.title != ''){

      fetch(`http://www.omdbapi.com/?s=${this.title}&apikey=90eee229`)
      //promesse recuperer la reponse au format Json
        .then(response => response.json())
        // .then(function unNom(response){return response.json})
        .then(data => this.setFilmData(data.Search));
      } else {
              alert('pas vide on a dit');
              
      }
    }



  //method on envoie les data
  setFilmData(data:any):void{
    this.filmData = data;
  
   
  }

  // chercher le film
  searchFilm(): void {
    this.getFilmData();
    
  }


}
