import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = "Lista";
  nuevoItem = "";         // lo que el usuario escribe
  items: string[] = [];   // lista 

  agregarItem() {
    if (this.nuevoItem.trim() !== "") {
      this.items.push(this.nuevoItem);
      this.nuevoItem = ""; // limpiar input
    }
  }

  eliminarItem(index: number) {
    this.items.splice(index, 1);
  }
}
