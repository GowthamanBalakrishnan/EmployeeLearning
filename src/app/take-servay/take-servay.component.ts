import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-take-servay',
  templateUrl: './take-servay.component.html',
  styleUrls: ['./take-servay.component.css']
})
export class TakeServayComponent implements OnInit {

  constructor() { }

    name : string = 'Gowthaman'
    showDetail : boolean = false;
  ngOnInit() {
    
  }
  public toggle() : void
  {
    this.showDetail = !this.showDetail;
  }
  public CalculateItem() 
  {
    return name;
  }

}
