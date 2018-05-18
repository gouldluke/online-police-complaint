import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-complaint',
  templateUrl: './complaint.component.html',
  styleUrls: ['./complaint.component.css']
})
export class ComplaintComponent implements OnInit {
    complaintSection: FormGroup;

    constructor(private fb: FormBuilder) {
        this.createComplaintSection();
    }

    createComplaintSection() {
        this.complaintSection = this.fb.group({
            date: '',
            location: '',
            description: ''
        })
    }

    ngOnInit() {
    }

}
