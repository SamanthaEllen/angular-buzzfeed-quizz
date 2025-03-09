import { Component, OnInit } from '@angular/core';
import { QuizzComponent } from '../../components/quizz/quizz.component';

@Component({
  selector: 'app-home',
  imports:[
    QuizzComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}