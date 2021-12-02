import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { HomeComponent } from './components/home/home.component';
import { SettingComponent } from './components/setting/setting.component';
import { GuideComponent } from './components/guide/guide.component';
import { CourseComponent } from './components/home/components/course/course.component';
import { TeacherComponent } from './components/home/components/teacher/teacher.component';
import { ClassroomComponent } from './components/home/components/classroom/classroom.component';
import { LessonComponent } from './components/home/components/lesson/lesson.component';
import { BookComponent } from './components/home/components/book/book.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    ToolbarComponent,
    HomeComponent,
    SettingComponent,
    GuideComponent,
    CourseComponent,
    TeacherComponent,
    ClassroomComponent,
    LessonComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
