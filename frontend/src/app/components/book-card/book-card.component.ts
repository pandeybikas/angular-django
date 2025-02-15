import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

interface Book{
  title:string;
  authors:string;
  small_image_url:string;
  original_publication_year:number;
  average_rating:number;
}
@Component({
  selector: 'app-book-card',
  imports: [CommonModule],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.css'
})
export class BookCardComponent implements OnInit {
  books:Book[]= []
  currentPage:number=1;
  itemsPerPage:number=16;
  totalItem:number=0

  constructor(private http:HttpClient){}

  ngOnInit() {
    this.fetchBooks()
  }
  fetchBooks(){
    this.http.get<Book[]>("http://127.0.0.1:8000/api/book/list/must_read_books/").subscribe(
      response =>{
        this.totalItem= response.length;
        this.books= response.slice((this.currentPage - 1)* this.itemsPerPage, this.currentPage*this.itemsPerPage);
      },
      
    )
  
  }
  goToPage(page:number){
    this.currentPage=page
    this.fetchBooks()
      
  }
  
}
