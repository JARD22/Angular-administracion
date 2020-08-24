import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { Grafica1Component } from './grafica1/grafica1.component';

const routes: Routes = [
    {
        path: 'dashboard',
        component: PagesComponent,
        children:[  {path: 'dashboard', component: DashboardComponent},
         {path: 'progress', component: ProgressbarComponent},
         {path: 'grafica1', component: Grafica1Component},
         {path: 'dashboard', component: DashboardComponent},
        
      ]
      },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
