import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AlphaComponent } from './alpha/alpha.component';
// import { NotesPrivateComponent } from './notes-private/notes-private.component';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/sanjose' },         //pathMatch: ‘full'
  { path: ':loc', component: AlphaComponent },
  // {path:'**', redirectTo: '/sanjose'},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 