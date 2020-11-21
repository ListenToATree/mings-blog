import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';

const share = [
  MatSidenavModule,
  MatListModule,
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatDividerModule,
  MatTabsModule,
  MatCardModule,
  MatExpansionModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    share
  ],
  exports: [
    share
  ]
})
export class MaterialSharedModule {
}
