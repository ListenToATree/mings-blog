import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LearnAngularComponent} from './learn-angular/learn-angular.component';
import {LearnDockerComponent} from './learn-docker/learn-docker.component';

const routes: Routes = [
  {path: 'angular', component: LearnAngularComponent},
  {path: 'docker', component: LearnDockerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
