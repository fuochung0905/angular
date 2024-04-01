import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserStorageService } from 'src/app/storage/user-storage.service';

@Component({
  selector: 'app-layout-app',
  templateUrl: './layout-app.component.html',
  styleUrls: ['./layout-app.component.css']
})
export class LayoutAppComponent {
  products: any[] = [];
  constructor(private userStorage: UserStorageService,
    private router:Router) { };

  ngOnInit(): void {
    this.getAllProduct();
  };
  getAllProduct(): void {
    this.products = [];
    this.userStorage.getAllProducts().subscribe(res => {
      res.forEach((element: any) => {
        element.processImage = 'data:image/jpeg;base64,' + element.byteImage;
        this.products.push(element);
      });
    });
  };
}
