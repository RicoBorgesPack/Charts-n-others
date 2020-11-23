import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  adv$ = this.http.get('http://localhost:3000/Advisor');
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

}
