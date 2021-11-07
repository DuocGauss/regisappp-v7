import { Component, OnInit } from '@angular/core';
import { Register } from 'src/app/interfaces/register';
import { AlertController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular'

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.page.html',
  styleUrls: ['./asistencia.page.scss'],
})
export class AsistenciaPage implements OnInit {

  register:Register=
  {
    nombre:'',
    seccion:'',
    fecha:'',
  }

  constructor(private storage:Storage, private alertController:AlertController, private navCtrl:NavController) { }

  ngOnInit() {
  }



  async guardar(registr:Register)
  {
    await this.storage.set(registr.nombre,registr);
  } 

  onSubmit()
  {
    console.log(this.register);
    this.guardar(this.register)
  } 


  async presentAlert() {
    const alert = await this.alertController.create({
      
      header: 'Correcto',
      message: 'Asistencia enviada',
      buttons: [
        {
          text: 'OK',
          role: 'cancel',
          handler: () => {
            this.navCtrl.navigateRoot('tabs/home');
          }
        }
      ]
    }); 

    await alert.present();

    const { role } = await alert.onWillDismiss();
    console.log('onDidDismiss resolved with role', role);
  }  

}
