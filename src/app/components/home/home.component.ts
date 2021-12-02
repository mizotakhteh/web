import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  links = [
    {component: 'course', icon: 'pending_actions'},
    {component: 'teacher', icon: 'co_present'},
    {component: 'classroom', icon: 'meeting_room'},
    {component: 'lesson', icon: 'school'},
    {component: 'book', icon: 'auto_stories'}
  ]

  activeLink = '';

}
