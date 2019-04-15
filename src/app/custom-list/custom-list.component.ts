import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-custom-list',
  templateUrl: './custom-list.component.html',
  styleUrls: ['./custom-list.component.scss'],
})
export class CustomListComponent implements OnInit {

  @Input() users: any;

  constructor() { }

  ngOnInit() {}

}
