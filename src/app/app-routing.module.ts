import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PlaylistAddComponent} from "./components/playlist/add/playlist-add.component";
import {LoginComponent} from "./components/login/login.component";
import {PlaylistListComponent} from "./components/playlist/list/playlist-list.component";


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'logout', redirectTo: 'login' },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'playlist',
    component: PlaylistAddComponent,
  },
  {
    path: 'playlist-all',
    component: PlaylistListComponent,
  }]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
