import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ItemService, Item } from '../item.service';

@Component({
  selector: 'app-item-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  id: number = 0;
  item: Item = { id: 0, name: '' };

  constructor(
    private route: ActivatedRoute,
    private itemService: ItemService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.itemService.getItem(this.id).subscribe((data: Item) => {
      this.item = data;
    });
  }
}
