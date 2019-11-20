import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import {DomSanitizer} from '@angular/platform-browser';
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';
@Component({
  selector: 'app-file-list',
  templateUrl: './file-list.component.html',
  styleUrls: ['./file-list.component.css']
})
export class FileListComponent implements OnInit {
  files: any;
  key: string = 'name'; //set default
  reverse: boolean = false;
  it: any;
  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }

  //initializing p to one
  p: number = 1;
  constructor(private userService:UserService,private sanitizer:DomSanitizer) {
    let sanitizedUrl = this.sanitizer.bypassSecurityTrustUrl('http://localhost:8080/api/file');
   }
  ngOnInit() {
    this.userService.getFiles().subscribe(res=>{
      this.files=res['data'];
      this.it=this.files.filter(item=>item.source=='it').length;
     })
  }

  // Pie
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };

  public pieChartLabels: Label[] = ['Sales','It' , 'Hr'];
  public pieChartData: SingleDataSet = [300, 500, 100];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  getHref(name){
    return this.sanitizer.bypassSecurityTrustUrl("http://localhost:8080/api/file?keyname="+name); 
  }
}
