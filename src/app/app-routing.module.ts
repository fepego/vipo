import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Step20TakePhotoComponent } from './step20-take-photo/step20-take-photo.component';
import { Step10HomeComponent } from './step10-home/step10-home.component';


const routes: Routes = [
  {
    path: '',
    component: Step10HomeComponent
  },
  {
    path: 'home',
    component: Step10HomeComponent
  },
  {
    path: 'take-photo',
    component: Step20TakePhotoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
