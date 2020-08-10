import { Component } from '@angular/core';
import { HttpService } from './shared/services/http.service';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'xt';
  start_launch_year = 2006;
  end_launch_year = (new Date()).getFullYear();
  launch_years = [];
  payload = { limit: 100 };
  dataSource:any = [];
  
  constructor (private _HttpService: HttpService) {
	  for (let i = this.start_launch_year; i <= this.end_launch_year; ++i) {
		  this.launch_years.push(i)
	  }
	  
	  this.index();
  }
  
  index (filter = {}) {
	  this._index(filter)
	  .then(data => { this.dataSource = data;
		console.log(data)
	  })
	  .catch(err => { console.log(err) })
  }
  
  private _index (filter) {
	return new Promise((resolve, reject) => {
		this.payload = {...this.payload, ...filter};
	  this._HttpService.get('launches', this.payload).subscribe(res => { resolve(res) }, err => { reject(err) })
	})	  
  }
}
