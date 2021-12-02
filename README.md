# Web

## Initiate the Web project

### 0. Angular CLI

Initiate the project using Angular cli

```sh
ng new web --defaults --style=scss --skip-git --directory ./
```

### 1. Material Design

Install material design

```sh
ng g m shared/material --flat
# https://material.angular.io/guide/getting-started#install-angular-material
ng add @angular/material --defaults
```

Import the **MaterialModule** in the `src/app/app.module.ts`

```ts
import { MaterialModule } from './shared/material.module';

@NgModule({
  imports: [
    MaterialModule
  ]
})
```

Add the following code into the `./shared/material.module`

```ts
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [],
  imports: [
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatRadioModule,
    MatSelectModule,
    MatFormFieldModule
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatRadioModule,
    MatSelectModule,
    MatFormFieldModule
  ]
})
export class MaterialModule { }
```

## Add Components

```sh
ng g c components/sidenav
ng g c components/toolbar
ng g c components/home
ng g c components/home/components/course
ng g c components/home/components/teacher
ng g c components/home/components/classroom
ng g c components/home/components/lesson
ng g c components/home/components/book
ng g c components/setting
ng g c components/guide
```

## Add Routing Module

Create a `.ts` file named it `app-routing.module.ts`

```sh
touch src/app/app-routing.module.ts
```

Copy the following codes into the `src/app/app-routing.module.ts`

```ts
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CourseComponent } from './home/course/course.component';
import { TeacherComponent } from './home/teacher/teacher.component';
import { ClassroomComponent } from './home/classroom/classroom.component';
import { LessonComponent } from './home/lesson/lesson.component';
import { SettingComponent } from './setting/setting.component';
import { GuideComponent } from './guide/guide.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {path: 'home', component: HomeComponent, children: [
      { path: 'course', component: CourseComponent},
      { path: 'teacher', component: TeacherComponent},
      { path: 'classroom', component: ClassroomComponent},
      { path: 'lesson', component: LessonComponent},
      { path: 'book', component: BookComponent},
    ]},
  {path: 'setting', component: SettingComponent},
  {path: 'guide', component: GuideComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
```

Import AppRoutingModule into `AppModule`:

`src/app/app.module.ts`

```ts
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [],
  imports: [
    AppRoutingModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule {}
```

## Security

Install `auth0-angular`

```sh
npm install @auth0/auth0-angular
```
