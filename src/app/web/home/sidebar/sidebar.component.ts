import { Component, OnInit, Input } from '@angular/core';

import { Collections } from './../../home/collections/collections.model';

@Component({
  selector: 'jup-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() collectionList: Collections[];

  constructor() { }

  ngOnInit() {
  }

}
