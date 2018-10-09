import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-od',
  templateUrl: './od.component.html',
  styleUrls: ['./od.component.css']
})
export class OdComponent implements OnInit {

  @Input() number: number;

  constructor() {
  }

  ngOnInit() {
  }

}
