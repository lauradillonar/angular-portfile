import { Component, OnInit } from '@angular/core';
import { PortfileService } from 'src/app/services/portfile.service';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {

  constructor(private data: PortfileService) { }
  
  myPortfile:any;
  skills:any = [];
  values: number[] = [10,20,30,40,50,60,70,80,90,100];

  ngOnInit(): void {
    this.data.getData().subscribe(data =>{
      console.log(data);
      this.myPortfile=data;
      this.skills= this.myPortfile.en.about.skills;
  
    });
  }

}
