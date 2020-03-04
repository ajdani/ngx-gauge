import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'demo';
  thresholdValue: number = 10;
  time = 700;

  defaultExampleValue: number = 10;

  thresholds = {
    '0': {
      color: '#cc0000',
      fallbackColor: '#ff9999'
    },
    '25': {
      color: '#006600',
      fallbackColor: '#ffc966'
    },
    '50': {
      color: '#cc0000',
      fallbackColor: '#ffffe5'
    },
    '75': {
      color: '#006600',
      fallbackColor: '#99cc99'
    }
  };

  changeValue(value: number) {
    this.thresholdValue = value;
  }

  ngOnInit() {
    setInterval(() => {
      this.defaultExampleValue = Math.floor(Math.random() * 100);
    }, this.time);
  }
}
