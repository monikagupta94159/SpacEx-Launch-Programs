import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpaceXComponent } from './space-x/space-x.component';

const routes: Routes = [
  { path: '', redirectTo: '/v3/launches', pathMatch: 'full' },
    {path: 'v3/launches', component: SpaceXComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
