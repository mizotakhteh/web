import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CourseComponent } from './components/home/components/course/course.component';
import { TeacherComponent } from './components/home/components/teacher/teacher.component';
import { ClassroomComponent } from './components/home/components/classroom/classroom.component';
import { LessonComponent } from './components/home/components/lesson/lesson.component';
import { SettingComponent } from './components/setting/setting.component';
import { GuideComponent } from './components/guide/guide.component';
import { NgModule } from '@angular/core';
import { BookComponent } from "./components/home/components/book/book.component";

const routes: Routes = [
  {
    path: 'home', component: HomeComponent, children: [
      {path: 'course', component: CourseComponent},
      {path: 'teacher', component: TeacherComponent},
      {path: 'classroom', component: ClassroomComponent},
      {path: 'lesson', component: LessonComponent},
      {path: 'book', component: BookComponent},
    ]
  },
  {path: 'setting', component: SettingComponent},
  {path: 'guide', component: GuideComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
