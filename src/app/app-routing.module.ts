import { NgModule } from '@angular/core';
import {RouterModule, ROUTES, Routes} from '@angular/router';
import {HomeComponent} from "../home/home.component";
import {UploadComponent} from "../upload/upload.component";
import {DownloadComponent} from "../download/download.component";


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'uploads',
    component:UploadComponent,
  },
  {
    path: 'downloads',
    component:DownloadComponent,
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


