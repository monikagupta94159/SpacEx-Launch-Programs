import { Component, OnChanges, OnInit } from '@angular/core';
import { SpacexService } from './spacex.service';
import {Router, NavigationExtras} from '@angular/router'
@Component({
  selector: 'app-space-x',
  templateUrl: './space-x.component.html',
  styleUrls: ['./space-x.component.css']
})
export class SpaceXComponent implements OnInit, OnChanges {
  spaceXData: any;
  dateSelected: any;
  launchValue: any;
  landValue: any;
  selected = false;

  constructor(private spaceXService: SpacexService, private router: Router) { }

  ngOnInit(): void {
    let navigationExtras: NavigationExtras = {
      queryParams : {
        'limit': 100,
      }
    }
    this.router.navigate(['v3/launches'], navigationExtras);
    this.spaceXService.getSpaceXData().subscribe(data => {
      this.spaceXData = data;
      console.log(' this.spaceXData: ',  this.spaceXData[0].launch_success);
    })
  }

  ngOnChanges(){
   // console.log('ngOnChanges: ');
    
  }
  filterDates(date){
    this.selected = !this.selected;
    this.dateSelected = date;
    let navigationExtras: NavigationExtras = {
      queryParams : {
        'limit': 100,
        'launch_success': this.launchValue,
        'land_success': this.landValue,
        'launch_year': this.dateSelected
      }
    }
    this.spaceXService.postDatePlans(this.launchValue, this.landValue, this.dateSelected).subscribe(data => {
      this.spaceXData = data;
      console.log('this.spaceXData: datefilters', this.spaceXData);
      this.router.navigate(['v3/launches'], navigationExtras);
  
    })
    console.log('dateSelected: ', this.dateSelected);
  }

   filterLaunch(boolean){
  this.launchValue = boolean;
  let navigationExtras: NavigationExtras = {
    queryParams : {
      'limit': 100,
      'launch_success': this.launchValue,
      'land_success': this.landValue,
      'launch_year': this.dateSelected
    }
  }
  this.spaceXService.postDatePlans(this.launchValue, this.landValue, this.dateSelected).subscribe(data => {
    this.spaceXData = data;
    console.log('this.spaceXData: launch', this.spaceXData);
    this.router.navigate(['v3/launches'], navigationExtras);

  })
    console.log('launchValue: ', this.launchValue);
   }

   filterLand(boolean) {
    this.landValue = boolean;
    let navigationExtras: NavigationExtras = {
      queryParams : {
        'limit': 100,
        'launch_success': this.launchValue,
        'land_success': this.landValue,
        'launch_year': this.dateSelected
      }
    }
    this.spaceXService.postDatePlans(this.launchValue, this.landValue, this.dateSelected).subscribe(data => {
      this.spaceXData = data;
      console.log('this.spaceXData: land', this.spaceXData);
      this.router.navigate(['v3/launches'], navigationExtras);
    })
    console.log('landValue: ', this.landValue);
   }

}
