import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.css']
})
export class BasicFormComponent implements OnInit {
    complaintSection: FormGroup;
    plaintiffSection: FormGroup;
    officerSection: FormGroup
    submitSection: FormGroup;

    constructor(private fb: FormBuilder) {
        this.createAllSections();
    }

    createAllSections()
    {
        this.complaintSection = this.fb.group({
            date: '',
            location: '',
            description: ''
        });

        this.officerSection = this.fb.group({
            name: '',
            badgeNumber: '',
            rank: '',
            description: ''
        });

        this.plaintiffSection = this.fb.group({
            name: '',
            email: '',
            phoneNumber: ''
        });

        this.submitSection = this.fb.group({
            shareComplaint: '',
        });
    }

    submitForm()
    {
        console.log(this.complaintSection.value);
        console.log(this.officerSection.value);
        console.log(this.plaintiffSection.value);
        console.log(this.submitSection.value);
    }

  ngOnInit() {
  }

}
