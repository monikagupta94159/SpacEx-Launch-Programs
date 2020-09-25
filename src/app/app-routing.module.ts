import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpaceXComponent } from './space-x/space-x.component';

const routes: Routes = [
    {path: '', component: SpaceXComponent },
    {path: 'v3/launches', component: SpaceXComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
