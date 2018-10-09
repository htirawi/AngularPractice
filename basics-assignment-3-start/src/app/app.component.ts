import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showParagraph = false;
  log = [];

  logClicks() {
    this.showParagraph = !this.showParagraph;
    // this.log.push(this.log.length + 1);
    this.log.push(new Date());

  }
}
