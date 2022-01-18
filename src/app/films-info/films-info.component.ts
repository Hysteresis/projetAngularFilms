import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-films-info',
  templateUrl: './films-info.component.html',
  styleUrls: ['./films-info.component.css']
})
export class FilmsInfoComponent implements OnInit {
  @Input() public movie: any;
  filmDetail: any;
  constructor() { }

  ngOnInit(): void {
    
  }
  
   // recuperer les donnees de l'API
   getFilmDetail(imdbID:string): void{

    fetch(`http://www.omdbapi.com/?apikey=90eee229&i=${imdbID}`)
    //promesse recuperer la reponse au format Json
      .then(response => response.json())
      // .then(function unNom(response){return response.json})

      .then(data => this.setFilmDetail(data));
  }

  setFilmDetail(data:any):void{
    this.filmDetail = data;
    console.log(this.filmDetail);

   


  }
  

  

}
