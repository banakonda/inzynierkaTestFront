import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-selected-type-buttons',
  templateUrl: './selected-type-buttons.component.html',
  styleUrls: ['./selected-type-buttons.component.scss']
})
export class SelectedTypeButtonsComponent {
  @Input() buttons: any[] = [];
  @Input() selected: any;
  @Output() selectedChange = new EventEmitter<string>();

  constructor() { }

  change(button: string) {
    this.selected = button;
    this.selectedChange.emit(this.selected);
  }

}
