import { Component, OnChanges, OnInit } from '@angular/core';
import { SpacexService } from './spacex.service';
import {Router, NavigationExtras, ActivatedRoute, Params} from '@angular/router'
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

  constructor(private spaceXService: SpacexService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      if(params){
        this.dateSelected = params['launch_year'];
        this.launchValue = params['launch_success'];
        this.landValue = params['land_success'];
      } 
    })
    let navigationExtras: NavigationExtras = {
      queryParams : {
        'limit': 100,
        'launch_success': this.launchValue,
        'land_success': this.landValue,
        'launch_year': this.dateSelected
      }
    }
    this.router.navigate(['v3/launches'], navigationExtras);
    this.spaceXService.postDatePlans(this.launchValue, this.landValue, this.dateSelected).subscribe(data => {
      this.spaceXData = data;
    })
  }

  ngOnChanges(){

  }
  filterDates(date){
    if(this.dateSelected === date){
      this.dateSelected = undefined;
   } else{
     this.dateSelected = date; 
   }
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
      this.router.navigate(['v3/launches'], navigationExtras);
  
    })
  }

   filterLaunch(boolean){
    if(this.launchValue === boolean){
      this.launchValue = undefined;
   } else{
    this.launchValue = boolean;
   }
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
    this.router.navigate(['v3/launches'], navigationExtras);
  })
   }

   filterLand(boolean) {
    if(this.landValue === boolean){
      this.landValue = undefined;
   } else{
    this.landValue = boolean;
   }
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
      this.router.navigate(['v3/launches'], navigationExtras);
    })
   }

}
