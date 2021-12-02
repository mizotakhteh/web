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

Import the **MaterialModule** in the `app.module.ts`

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
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  imports: [
    MatButtonModule,
    MatIconModule,
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
