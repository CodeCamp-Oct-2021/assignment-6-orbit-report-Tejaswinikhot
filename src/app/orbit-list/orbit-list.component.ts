import { Component, OnInit, Input } from '@angular/core';
import { AppComponent } from '../app.component';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-list',
  templateUrl: './orbit-list.component.html',
  styleUrls: ['./orbit-list.component.css']
})

export class OrbitListComponent implements OnInit {

	headers =["Name", "Type", "Operational", "Orbit Type", "Launch Date"];
	headers1 =["name", "type", "operational", "orbitType", "launchDate"];


	@Input() satellites: Satellite[];
    
	constructor() { 
	}

    ngOnInit() {
    }

	sort(column: string): void {
		// array.sort modifies the array, sorting the items based on the given compare function
		this.satellites.sort(function (a: Satellite, b: Satellite): number {
			if (a[column] < b[column]) {
				return -1;
			} else if (a[column] > b[column]) {
				return 1;
			}
			return 0;
		});
	}

}
