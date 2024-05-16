import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  @Output() toggleSideBarForMe:EventEmitter<any> =new EventEmitter()
  constructor(){}

  ngOnInit() {}
  togglesSideBar(){
  this.toggleSideBarForMe.emit();
  }
}
