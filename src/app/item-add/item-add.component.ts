import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item-add',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './item-add.component.html',
  styleUrls: ['./item-add.component.css']
})
export class ItemAddComponent {
  name: string = '';

  constructor(private itemService: ItemService, private router: Router) { }

  addItem(): void {

    this.itemService.getItems().subscribe(items => {

      if(items && items.length > 0) {
        const maxId = items.reduce((max, item) => item.id > max ? item.id : max, 0);
        const newId = Number(maxId) + 1;
      
        this.itemService.addItem({ id: newId, name: this.name }).subscribe(() => {
          this.router.navigate(['/']);
        });
      }else{
        this.itemService.addItem({ id: 1, name: this.name }).subscribe(() => {
          this.router.navigate(['/']);
        });
      }
    });

  }
}

