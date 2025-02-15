import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

interface Movies{
  title:string;
  director:string;
  release_year:number;
  rating:any;
  listed_in:string;
  description:string;
  type:string

}
@Component({
  selector: 'app-movie-card',
  imports: [CommonModule],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.css'
})
export class MovieCardComponent implements OnInit {
  movies:Movies[]=[]
  currentPage:number=1;
  itemPerPage:number=16;
  totalItem:number=0

  constructor(private http:HttpClient){}

  ngOnInit() {
    this.fetchMovie()
  }
  fetchMovie(){
    this.http.get<Movies[]>("http://127.0.0.1:8000/api/book/list/must_watch_movies/").subscribe(
      response =>{
        this.totalItem= response.length;
        this.movies= response.slice((this.currentPage - 1)*this.itemPerPage, this.currentPage*this.itemPerPage);
      }
    )
  }
  goToPage(page:number){
    this.currentPage=page
    this.fetchMovie()
  }

}
