import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { StudyField } from 'src/app/data/models/Field';
import { StudyFieldsService } from '../study-fields.service';
import { newStudyField } from './default-field';

@Component({
  selector: 'app-create-field',
  templateUrl: './create-field.component.html',
})
export class CreateFieldComponent {
  step = 1;
  lastStep = 1;
  newStudyField = { ...newStudyField };

  constructor(
    private sfs: StudyFieldsService,
    private router: Router,
    private _snackBar: MatSnackBar,
  ) { }

  createStudyField(): void {
    let error = 0;
    try {
      this.sfs.createStudyField(this.newStudyField);
    } catch {
      error = 1;
    } finally {
      if (!error) {
        this._snackBar.open('Pomyślnie utworzono nowy kierunek ' + this.newStudyField.name, undefined, {
          duration: 3000,
        });
        this.router.navigate(['/fields']);
      }
    }
  }
}
