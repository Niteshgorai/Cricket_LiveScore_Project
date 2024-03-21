import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LivescoreComponent } from './pages/livescore/livescore.component';
import { HistoryComponent } from './pages/history/history.component';
import { PointTableComponent } from './pages/point-table/point-table.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'live',
        pathMatch:'full'
    },
    {
        path:"home",
        component:HomeComponent,
        title:"Home | CricketInformer"
    },
    {
        path:"livescore",
        component:LivescoreComponent,
        title:"LiveScore | CricetInformer"
    },
    {
        path:"history",
        component:HistoryComponent,
        title:"History | CricketInformer"
    },
    {
        path:"point-table",
        component:PointTableComponent,
        title:"PointTable | CrickrtInformer"
    }
];
