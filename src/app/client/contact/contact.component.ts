import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
  
export class ContactComponent implements OnInit {
  mail = "";
  text = "";

  checkMail(event:any){
    this.mail = event.target.value;
  }

  checkText(event:any){
    this.mail = event.target.value;
  }

  sendContactMsg(){

  }

  constructor() { }

  ngOnInit(): void {
  }

}
