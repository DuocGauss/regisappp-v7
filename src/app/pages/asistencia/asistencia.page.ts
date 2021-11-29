import { Component, OnInit } from '@angular/core';
import { DataLocalService } from '../../services/data-local.service';
import { AlertController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular'

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.page.html',
  styleUrls: ['./asistencia.page.scss'],
})
export class AsistenciaPage implements OnInit {

  

  constructor(private storage:Storage, private alertController:AlertController, private navCtrl:NavController, public datalocalservice:DataLocalService) { }

  ngOnInit() {
  }



  
 


  

}
