import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoPageFoundComponent } from './pages/noPageFound/noPageFound.component';
import { PrincipalComponent } from './pages/principal/principal.component';


const routes: Routes = [
  { path: '', component: PrincipalComponent, data: { titulo: 'Principal ' } },
  { path: '**', component: NoPageFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
