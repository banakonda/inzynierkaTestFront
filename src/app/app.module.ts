import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StudyFieldsComponent } from './study-fields/study-fields.component';
import { SidePanelComponent } from './common/side-panel/side-panel.component';
import { MatButtonModule } from '@angular/material/button';
import { SelectedTypeButtonsComponent } from './common/selected-type-buttons/selected-type-buttons.component';
import { TeachersComponent } from './teachers/teachers.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { TimeTablesComponent } from './time-tables/time-tables.component';
import { ClassRoomsComponent } from './class-rooms/class-rooms.component';
import { CreateTeacherStepOneComponent } from './teachers/create-teacher/step1/create-teacher-step-one.component';

import { CreateTeacherStepTwoComponent } from './teachers/create-teacher/step2/create-teacher-step-two.component';
import { CreateTeacherComponent } from './teachers/create-teacher/create-teacher.component';
import { ButtonsComponent } from './common/buttons/buttons.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateFieldComponent } from './study-fields/create-field/create-field.component';
import { CreateFieldStepOneComponent } from './study-fields/create-field/step1/create-field-step-one.component';
import { CreateSubjectComponent } from './subjects/create-subject/create-subject.component';
import { CreateSubjectStepOneComponent } from './subjects/create-subject/step1/create-subject-step-one.component';
import { CreateSubjectStepTwoComponent } from './subjects/create-subject/step2/create-subject-step-two.component';
import { CreateSubjectStepThreeComponent } from './subjects/create-subject/step3/create-subject-step-three.component';
import { CreateSubjectStepFourComponent } from './subjects/create-subject/step4/create-subject-step-four.component';
import { CreateSubjectStepFiveComponent } from './subjects/create-subject/step5/create-subject-step-five.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { AvailabilityComponent } from './common/availability/availability.component';
import { InfoTooltipComponent } from './common/info-tooltip/info-tooltip.component';
import { CreateClassRoomComponent } from './class-rooms/create-class-room/create-class-room.component';
import { GenerateClassRoomStepOneComponent } from './class-rooms/create-class-room/step1/generate-class-room-step-one.component';
import { CreateClassRoomStepTwoComponent } from './class-rooms/create-class-room/step2/create-class-room-step-two.component';
@NgModule({
  declarations: [
    AppComponent,
    StudyFieldsComponent,
    SidePanelComponent,
    SelectedTypeButtonsComponent,
    TeachersComponent,
    SubjectsComponent,
    TimeTablesComponent,
    ClassRoomsComponent,
    CreateTeacherStepOneComponent,
    CreateTeacherStepTwoComponent,
    CreateTeacherComponent,
    ButtonsComponent,
    CreateFieldComponent,
    CreateFieldStepOneComponent,
    CreateSubjectComponent,
    CreateSubjectStepOneComponent,
    CreateSubjectStepTwoComponent,
    CreateSubjectStepThreeComponent,
    CreateSubjectStepFourComponent,
    CreateSubjectStepFiveComponent,
    AvailabilityComponent,
    InfoTooltipComponent,
    CreateClassRoomComponent,
    GenerateClassRoomStepOneComponent,
    CreateClassRoomStepTwoComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatRadioModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
