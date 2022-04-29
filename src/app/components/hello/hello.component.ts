import { Component, OnInit } from '@angular/core';
import { PortfileService } from 'src/app/services/portfile.service';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  constructor(private data: PortfileService) { }

  myPortfile:any;

  ngOnInit(): void {
    this.data.getData().subscribe(data =>{
      console.log(data);
      this.myPortfile=data;
    });
  }

}
