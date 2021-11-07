
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';




@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nombreusuario='';

  constructor(private activeroute:ActivatedRoute, private router:Router, private alertController:AlertController) {
    this.activeroute.queryParams.subscribe(params => {

      if (this.router.getCurrentNavigation().extras.state) {
 
        this.nombreusuario = this.router.getCurrentNavigation().extras.state.miusuario.username;
 
        console.log(this.nombreusuario);
 
     }
 
   });
  }
  

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'En proceso',
      message: 'Funcionalidad actualmente en desarrollo, disculpe las molestias',
      buttons: ['Vale']
    });

    await alert.present();

    const { role } = await alert.onWillDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

ngOnInit(){
  
}

  
  
}
