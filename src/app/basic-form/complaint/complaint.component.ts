import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-complaint',
  templateUrl: './complaint.component.html',
  styleUrls: ['./complaint.component.css']
})
export class ComplaintComponent implements OnInit {
    complaintForm = new FormGroup({
        date: new FormControl()
    })

    constructor() { }

    ngOnInit() {
    }

}
