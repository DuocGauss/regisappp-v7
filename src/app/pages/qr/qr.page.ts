import {Component} from '@angular/core';

import { AlertController, NavController } from '@ionic/angular';

import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';


@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss']
})
export class QrPage  {

  

  constructor(private alertController:AlertController, private navCtrl:NavController,  private qr:QRScanner) { 
  }
  

  ngOnInit() {

    this.StartScanning();
}


async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Exito!',
      subHeader: 'QR escaneado correctamente',
      message: 'Se le redirigirá a la pagina de asistencia',
      buttons: [
        {
          text: 'Vale',
          role: 'cancel',
          handler: (data) => {
            this.navCtrl.navigateRoot('/asistencia');
          }
        }
      ]
    });

    await alert.present();
  }

  
   
 
  

  StartScanning(){

  
    // Optionally request the permission early
    this.qr.prepare()
    .then((status: QRScannerStatus) => {
       if (status.authorized) {
         // camera permission was granted
         this.qr.show();
         document.getElementsByTagName("body")[0].style.opacity = "0";
         this.qr.scan().subscribe((val)=>{
           alert(val);
           document.getElementsByTagName("body")[0].style.opacity = "0";
         })    
    
       } else if (status.denied) {
         // camera permission was permanently denied
         // you must use QRScanner.openSettings() method to guide the user to the settings page
         // then they can grant the permission from there
       } else {
         // permission was denied, but not permanently. You can ask for permission again at a later time.
       }
    })
    .catch((e: any) => console.log('Error is', e));
    
    } 

}

  


