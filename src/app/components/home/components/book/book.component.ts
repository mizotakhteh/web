import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  constructor(private http: HttpClient) {
    this.http.get("https://api.mizotakhteh.ml/books").subscribe(value => console.log(value),error => console.error(error));
  }

  ngOnInit(): void {
  }

}
