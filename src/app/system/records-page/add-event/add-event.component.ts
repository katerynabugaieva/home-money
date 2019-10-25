import { Component, OnInit, Input } from '@angular/core';
import { Category } from '../../shared/models/category.model';
import { NgForm } from '@angular/forms';
import { AppEvent } from '../../shared/models/event.model';
import * as moment from 'moment'
@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {
  @Input() categories: Category[] = []
  types = [
    { type: 'income', label: 'Income' },
    { type: 'outcome', label: 'Outcome' }
  ]
  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    let { amout, description, category, type } = form.value;
    if (amout < 0) amout *= -1;

    const event = new AppEvent(type,
      amout,
      +category,
      moment().format('dd.MM.yyyy')
      , description)
  }
}
