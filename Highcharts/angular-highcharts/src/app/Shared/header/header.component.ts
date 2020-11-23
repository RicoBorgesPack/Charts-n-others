import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  warning() {
    alert("Nosso sistema de login está em manutenção, aguarde os proximos updates");
  }

}
