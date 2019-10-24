import { Component, OnInit } from '@angular/core';
import { Category } from '../shared/models/category.model';
import { CategoriesService } from '../shared/services/categories.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-records-page',
  templateUrl: './records-page.component.html',
  styleUrls: ['./records-page.component.css']
})
export class RecordsPageComponent implements OnInit {
  categories: Category[] = [];
  isLoaded: boolean = false;
  constructor(private categoriesService: CategoriesService) { }

  ngOnInit() {
    this.categoriesService.getCategories()
      .subscribe((categories: Category[]) => {
        this.categories = categories;
        this.isLoaded = true
      })
  }
  newCategoryAdded(category: Category) {
    this.categories.push(category)
  }
  categoryWasEdit(category: Category) {
    const idx = this.categories
      .findIndex(c => c.id === category.id);
    this.categories[idx] = category;
  }

}
