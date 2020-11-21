import {Component, OnInit, ViewChild} from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;
  panelOpenState = false;

  constructor() {
  }

  ngOnInit(): void {
  }

}
