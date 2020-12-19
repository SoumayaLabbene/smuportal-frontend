import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'report-call-card',
  templateUrl: './call-card.component.html',
  styleUrls: ['./call-card.component.css']
})
export class CallCardComponent implements OnInit {
  @Input() Title: string;
  @Input() Details: string;
  @Input() Image: string;
  constructor() { }

  ngOnInit() {

  }

}
