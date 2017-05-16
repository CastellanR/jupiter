import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jup-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('Título | ' + this.titleService.getTitle());
  }
}
