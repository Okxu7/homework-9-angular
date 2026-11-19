// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-products',
//   standalone: false,
//   styleUrl: './products.css',
//   templateUrl: './products.html',
// })
// export class Products {}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

interface PhoneCase {
  id: number;
  name: string;
  color: string;
  colorLabel: string;
  price: number;
  description: string;
}

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products implements OnInit {
  allCases: PhoneCase[] = [
    { id: 1, name: 'Чохол Silicone Black', color: 'black', colorLabel: 'Чорний', price: 450, description: 'Матовий силікон із м’якою мікрофіброю всередині.' },
    { id: 2, name: 'Чохол Armor Black', color: 'black', colorLabel: 'Чорний', price: 620, description: 'Протиударний корпус із посиленими кутами.' },
    { id: 3, name: 'Чохол MagSafe Blue', color: 'blue', colorLabel: 'Синій', price: 790, description: 'Підтримка бездротової зарядки MagSafe.' },
    { id: 4, name: 'Чохол Soft Red', color: 'red', colorLabel: 'Червоний', price: 490, description: 'Яскравий червоний чохол із тонким профілем.' },
    { id: 5, name: 'Чохол Leather Blue', color: 'blue', colorLabel: 'Синій', price: 950, description: 'Преміальна екошкіра з металевими кнопками.' }
  ];

  filteredCases: PhoneCase[] = [];
  selectedColor: string = 'all';

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const colorParam = params.get('color');
      this.selectedColor = colorParam ? colorParam : 'all';

      if (this.selectedColor === 'all') {
        this.filteredCases = this.allCases;
      } else {
        this.filteredCases = this.allCases.filter(item => item.color === this.selectedColor);
      }
    });
  }

  onColorChange(color: string): void {
    if (color === 'all') {
      this.router.navigate(['/products']);
    } else {
      this.router.navigate(['/products', color]);
    }
  }
}
