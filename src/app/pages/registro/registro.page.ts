import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario';
import { Storage } from '@ionic/storage-angular'
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  usuario:Usuario=
  {
    username:'',
    password:'',
    estado:0
  }
  constructor(private storage:Storage, private alertController:AlertController, private navCtrl:NavController) { }

  ngOnInit() {
  }

  onSubmit()
  {
    console.log(this.usuario);
    this.guardar(this.usuario)
  }

  async guardar(user:Usuario)
  {
    await this.storage.set(user.username,user);
  }


  async presentAlert() {
    const alert = await this.alertController.create({
      
      header: 'Correcto',
      message: 'Cuenta creada',
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

