import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ItemService, Item } from '../item.service';

@Component({
  selector: 'app-item-edit',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.css']
})
export class ItemEditComponent implements OnInit {
  id: number = 0;
  name: string = '';

  constructor(
    private route: ActivatedRoute,
    private itemService: ItemService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.itemService.getItem(this.id).subscribe((data: Item) => {
      this.name = data.name;
    });
  }

  updateItem(): void {
    this.itemService.updateItem(this.id, { id: this.id, name: this.name }).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
