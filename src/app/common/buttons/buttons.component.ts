import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
})
export class ButtonsComponent implements OnInit {
  @Input() f: NgForm;
  @Input() step: number;
  @Input() lastStep: number;
  @Input() cancelLink: string;
  @Output() stepChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
    this.cancelLink = '/' + this.cancelLink;
  }

  setStepValue(step: number) {
    this.step = step;
    this.stepChange.emit(step);
  }
}
