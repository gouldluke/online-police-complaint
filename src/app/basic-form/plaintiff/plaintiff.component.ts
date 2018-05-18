import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-plaintiff',
  templateUrl: './plaintiff.component.html',
  styleUrls: ['./plaintiff.component.css']
})
export class PlaintiffComponent implements OnInit {
    plaintiffSection: FormGroup;

    constructor(private fb: FormBuilder) {
        this.createPlaintiffSection();
    }

    createPlaintiffSection() {
        this.plaintiffSection = this.fb.group({
            name: '',
            email: '',
            phoneNumber: ''
        })
    }

  ngOnInit() {
  }

}
