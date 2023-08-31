import { Component, OnInit } from '@angular/core';

import { HttpClient, HttpClientModule } from '@angular/common/http';
// import { EquiposI } from 'src/app/interface/equipos.interface';
import { EquiposService } from 'src/app/service/equipos.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  
  myData: any;

  constructor(private equiposService: EquiposService, private http: HttpClient ) {

  }

  ngOnInit(): void{
    this.equiposService.getData().subscribe((data) => {
      this.myData = data;
    })
  }

}

