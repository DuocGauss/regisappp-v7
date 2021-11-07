import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';


@Component({
  selector: 'app-pag2',
  templateUrl: './pag2.page.html',
  styleUrls: ['./pag2.page.scss'],
})
export class Pag2Page implements OnInit {



  constructor(private alertController:AlertController, private navCtrl:NavController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      
      header: 'Correcto',
      message: 'La contraseña ha sido cambiada',
      buttons: [
        {
          text: 'OK',
          role: 'cancel',
          handler: () => {
            this.navCtrl.navigateRoot('/login');
          }
        }
      ]
    });

    await alert.present();

    const { role } = await alert.onWillDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

}
