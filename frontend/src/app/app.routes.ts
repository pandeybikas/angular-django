import { Routes } from '@angular/router';
import { BookCardComponent } from './components/book-card/book-card.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { VideosCardComponent } from './components/videos-card/videos-card.component';

export const routes: Routes = [
    {
        path: 'book',
        component: BookCardComponent
    },
    {
        path:'movie',
        component:MovieCardComponent
    },
    {
        path:'video',
        component:VideosCardComponent
    }
];
