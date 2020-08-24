import { NgModule } from '@angular/core';

import {RouterModule, Routes} from '@angular/router';
import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';


import { NopagefoundComponent } from './nopagefound/nopagefound.component';

//Configuramos las rutas
const routes: Routes =[

//path: '/dashboard' pagesRouting
//path: '/auth' authRouting


{path: '', redirectTo:'/dashboard', pathMatch:'full'},
{path: '**', component: NopagefoundComponent},

];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports:[
    RouterModule
  ]

})
export class AppRoutingModule { }
