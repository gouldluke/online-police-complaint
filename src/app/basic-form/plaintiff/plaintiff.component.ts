import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-plaintiff',
  templateUrl: './plaintiff.component.html',
  styleUrls: ['./plaintiff.component.css']
})
export class PlaintiffComponent {
    @Input() plaintiffSection: FormGroup;
}
