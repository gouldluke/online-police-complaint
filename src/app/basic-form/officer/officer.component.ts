import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-officer',
  templateUrl: './officer.component.html',
  styleUrls: ['./officer.component.css']
})
export class OfficerComponent implements OnInit {
    officerSection: FormGroup;

    constructor(private fb: FormBuilder) {
        this.createOfficerSection();
    }

    createOfficerSection() {
        this.officerSection = this.fb.group({
            name: '',
            badgeNumber: '',
            rank: '',
            description: ''
        })
    }

  ngOnInit() {
  }

}
