import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule, RouterLink, Route } from '@angular/router';
@Component({
  selector: 'app-root',
  imports: [HttpClientModule,RouterModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
