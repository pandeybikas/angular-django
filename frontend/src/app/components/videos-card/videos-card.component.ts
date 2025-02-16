import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';


interface Videos{
  title:string;
  channel_title:string; 
  publish_time:string;
  views:number; 
  likes:number;
  thumbnail_link:string;
}
@Component({
  selector: 'app-videos-card',
  imports: [CommonModule],
  templateUrl: './videos-card.component.html',
  styleUrl: './videos-card.component.css'
})
export class VideosCardComponent implements OnInit{
  videos:Videos[]=[]
  currentPage:number=1
  itemPerPage:number=16;
  totalItem:number=0

  constructor(private http:HttpClient){}

  ngOnInit() {
    this.fetchVideos()
  }
  fetchVideos(){
    this.http.get<Videos[]>("http://127.0.0.1:8000/api/book/list/top_youtube_videos/").subscribe(
      response =>{
        this.totalItem=response.length;
        this.videos=response.slice((this.currentPage -1)*this.itemPerPage, this.currentPage*this.itemPerPage);
      }
    )
  }
  getNextPage(page:number){
    this.currentPage=page;
    this.fetchVideos()
  }

}
