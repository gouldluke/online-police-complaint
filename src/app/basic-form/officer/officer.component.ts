import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-officer',
  templateUrl: './officer.component.html',
  styleUrls: ['./officer.component.css']
})
export class OfficerComponent {
    @Input() officerSection: FormGroup;
}
