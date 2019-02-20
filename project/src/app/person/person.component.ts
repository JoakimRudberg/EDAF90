import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { MEMBERS } from '../members';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  
  members = MEMBERS;
  selectedMember: Person;

  constructor() {
  }

  ngOnInit() {
  }

  onSelect(person: Person): void{
    this.selectedMember = person;
  }

}
