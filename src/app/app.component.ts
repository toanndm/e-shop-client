import { Component, OnInit } from '@angular/core';
import { IProduct } from './models/product';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  products: IProduct[] = [];

  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.http.get('https://e-shop-dpxc.onrender.com/api/products').subscribe(
      {
        next: (response: any) => {
          this.products = response.data;
          console.log(this.products);
        },
        error: (e: any) => {
          console.error(e);
        },
        complete: () => {} 
      }
    );
  }
  title = 'e-shop-client';
}
