import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select-form',
  templateUrl: './select-form.component.html',
  styleUrls: ['./select-form.component.css']
})
export class SelectFormComponent {
    @Output() showForm = new EventEmitter<boolean>();

    onShowForm()
    {
        this.showForm.emit(true);
    }
}
