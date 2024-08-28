import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-largest-object',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="object">
      <h2>{{ object.name | uppercase }}</h2>
      <p>{{ object.description | titlecase }}</p>
      <img [src]="object.image" alt="{{ object.name | titlecase }}" width="300">
    </div>
  `,
  styleUrls: ['./largest-object.component.css']
})
export class LargestObjectComponent {
  @Input() object: { name: string, description: string, image: string } | null = null;
}

