import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-complaint',
  templateUrl: './complaint.component.html',
  styleUrls: ['./complaint.component.css']
})
export class ComplaintComponent implements OnInit {
    complaintForm: FormGroup

    constructor(private fb: FormBuilder) {
        this.createForm();
    }

    createForm() {
        this.complaintForm = this.fb.group({
            date: '',
            location: '',
            description: ''
        })
    }

    ngOnInit() {
    }

}
