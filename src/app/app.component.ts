import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements OnInit {
  private searchText$ = new BehaviorSubject<string>('');
  currentSearchText = this.searchText$.asObservable();

  searchText = '';
  items = [
    'Apple',
    'Banana',
    'Cherry',
    'Durian',
    'Elderberry',
  ];
  filteredItems: string[] = [];

  ngOnInit(): void {
    this.currentSearchText.subscribe((text) => {
      this.searchText = text;
      this.filteredItems = this.items.filter((item) =>
        item.toLowerCase().includes(text.toLowerCase())
      );
    });
  }

  onSearch(value: string) {
    this.searchText$.next(value);
  }
}
