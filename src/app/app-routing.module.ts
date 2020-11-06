import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LearnAngularComponent} from './learn-angular/learn-angular.component';
import {LearnDockerComponent} from './learn-docker/learn-docker.component';
import {LearnLinuxComponent} from './learn-linux/learn-linux.component';
import {LearnSpringbootComponent} from './learn-springboot/learn-springboot.component';

const routes: Routes = [
  {path: 'angular', component: LearnAngularComponent},
  {path: 'docker', component: LearnDockerComponent},
  {path: 'linux', component: LearnLinuxComponent},
  {path: 'springboot', component: LearnSpringbootComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
