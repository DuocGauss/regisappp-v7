import { Component, OnInit } from '@angular/core';
import { DataLocalService } from '../../services/data-local.service';



@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.page.html',
  styleUrls: ['./asistencia.page.scss'],
})
export class AsistenciaPage implements OnInit {

  

  constructor(public datalocalservice:DataLocalService) { }

  ngOnInit() {
  }



  
 


  

}
