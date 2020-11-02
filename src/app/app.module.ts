import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MainNavComponent} from './main-nav/main-nav.component';
import {MaterialSharedModule} from './material-shared.module';
import { LearnAngularComponent } from './learn-angular/learn-angular.component';
import { LearnDockerComponent } from './learn-docker/learn-docker.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    LearnAngularComponent,
    LearnDockerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialSharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
