import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
//  templateUrl: './hello.component.html',
  template: `    
  <button (click)="toggle()">toggle</button>
  <span [ngClass]="{'active': isActive}">{{name}}</span>
  `,

  styleUrls: ['./hello.component.css']
})

export class HelloComponent implements OnInit {
name=' abhishek';
isActive = true;
  toggle(){
    this.isActive = !this.isActive;
    console.log(this.isActive);
  }
  ngOnInit() {
  }

}
