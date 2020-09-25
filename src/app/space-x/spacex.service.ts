import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SpacexService {

  constructor(private http: HttpClient) { }

  getSpaceXData(){
    return this.http.get('https://api.spacexdata.com/v3/launches?limit=100');
  }

  postLaunchPalns(plans){
    return this.http.get(`https://api.spacexdata.com/v3/launches?limit=100&launch_success=${plans}`);
  }
  postLandPlans(plans){
    return this.http.get(`https://api.spacexdata.com/v3/launches?limit=100&launch_success=${plans}`);
  }
  postYearAndPlans(launchplan, landPlan, year){
    debugger;
    return this.http.get(`https://api.spacexdata.com/v3/launches?limit=100&launch_success=${launchplan}&land_success=${landPlan}&launch_year=${year}`); 
  }

  postDatePlans(launchplan, landPlan, year){
    debugger;
    let string ='';
    if(launchplan !== undefined){
      string +=`&launch_success=${launchplan}`
    }
    if(landPlan !== undefined){
      string +=`&land_success=${landPlan}`
    }
    if(year !== undefined){
      string +=`&launch_year=${year}`
    }
      return this.http.get(`https://api.spacexdata.com/v3/launches?limit=100${string}`); 
  }
}
