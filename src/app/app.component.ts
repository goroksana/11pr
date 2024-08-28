import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LargestObjectComponent } from './largest-object/largest-object.component'; // Імпорт компонента

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, LargestObjectComponent], // Додаємо компонент в імпорт
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Largest Objects on Earth';
  currentObject: 'car' | 'plane' | 'ship' | null = null;

  largestCar = {
    name: 'BelAZ 75710',
    description: 'Найбільший вантажний автомобіль у світі з вантажопідйомністю 450 тонн.',
    image: 'https://tse2.mm.bing.net/th?id=OIP.tEMQO7O74gM_VN5InEbMnAHaEx&pid=Api&P=0&h=180'
  };

  largestPlane = {
    name: 'Antonov An-225 Mriya',
    description: 'Найбільший транспортний літак у світі, який може перевозити важкі вантажі.',
    image: 'https://tse4.mm.bing.net/th?id=OIP.vQ-3zEbRgwS1yHrcABkagQHaFA&pid=Api&P=0&h=180'
  };

  largestShip = {
    name: 'Seawise Giant',
    description: 'Найбільший корабель у світі, який колись плавав на океанах.',
    image: 'https://tse2.mm.bing.net/th?id=OIP.zlQyCXi4dYdhe-qdTbAyqgHaEy&pid=Api&P=0&h=180'
  };

  showObject(object: 'car' | 'plane' | 'ship') {
    this.currentObject = object;
  }
}
