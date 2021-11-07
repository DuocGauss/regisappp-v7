import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sumapage',
  templateUrl: './sumapage.page.html',
  styleUrls: ['./sumapage.page.scss'],
})
export class SumapagePage implements OnInit {
  nombreusuario='';

  n1:number;
  n2:number;

  a:number;
  b:number;

  constructor(private alertController:AlertController, private activeroute:ActivatedRoute, private router:Router) {
    this.activeroute.queryParams.subscribe(params => {

      if (this.router.getCurrentNavigation().extras.state) {
 
        this.nombreusuario = this.router.getCurrentNavigation().extras.state.miusuario.username;
 
        console.log(this.nombreusuario);
 
     }
 
   });
  }
   

  ngOnInit() {
  }

  async Sumar() {
    let res=this.n1+this.n2;

    const alert = await this.alertController.create({

      

      header: 'Resultado',

      message:res.toString(),

      buttons: ['OK']

    });



    await alert.present();



    const { role } = await alert.onDidDismiss();

    console.log('onDidDismiss resolved with role', role);

  }

  async onSubmit() {
    let res2=this.a+this.b;

    const alert = await this.alertController.create({

      

      header: 'Resultado',

      message:res2.toString(),

      buttons: ['OK']

    });



    await alert.present();



    const { role } = await alert.onDidDismiss();

    console.log('onDidDismiss resolved with role', role);

  }

}
