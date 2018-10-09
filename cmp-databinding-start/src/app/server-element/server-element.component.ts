import {AfterContentInit, Component, ContentChild, ElementRef, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class ServerElementComponent implements OnInit, AfterContentInit {

  // tslint:disable-next-line:no-input-rename
  @Input('srvElement') element: { type: string, name: string, content: string };
  @ContentChild('bateekh') paragraph: ElementRef;

  constructor() {
  }

  ngAfterContentInit() {

    console.log('on Content' + this.paragraph.nativeElement.textContent);

  }

  ngOnInit() {

    console.log('on Init' + this.paragraph.nativeElement.textContent);

  }

}
