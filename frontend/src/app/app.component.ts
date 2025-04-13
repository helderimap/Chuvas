import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  template: '<h1>{{ message }}</h1>',
})
export class AppComponent implements OnInit {
  message = 'Carregando...';

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.getHello().subscribe((res: any) => {
      this.message = res.message;
    });
  }
}