import { Component } from '@angular/core';
// import { EnvService } from 'env.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AgriTradeMax';

  defineToken: string ='';

  constructor() {
  }

  // loadEnv() {
  //   this.envService
  //     .getEnv().subscribe(res => {
  //       this.defineToken = res;
  //     })
  // }

  // ngOnInit() {
  //   this.loadEnv();
  // }

}