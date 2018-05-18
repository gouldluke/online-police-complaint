import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.css']
})
export class BasicFormComponent implements OnInit {
    submitSection: FormGroup;

    constructor(private fb: FormBuilder) {
        this.createSubmitSection();
    }

    createSubmitSection() {
        this.submitSection = this.fb.group({
            shareComplaint: '',
        })
    }

  ngOnInit() {
  }

}
