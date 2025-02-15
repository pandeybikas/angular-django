import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BookCardComponent } from './components/book-card/book-card.component';
@Component({
  selector: 'app-root',
  imports: [BookCardComponent,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
