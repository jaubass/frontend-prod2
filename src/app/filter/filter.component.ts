import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  selectedDay: string = '';
  selectedCity: string = '';

  @Output() filterChanged = new EventEmitter<{ day: string, city: string }>();

  applyFilter() {
    this.filterChanged.emit({ day: this.selectedDay, city: this.selectedCity });
  }
}


