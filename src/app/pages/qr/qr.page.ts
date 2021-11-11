import {Component} from '@angular/core';

import { AlertController, NavController } from '@ionic/angular';
import { Platform } from '@ionic/angular'
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';


@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss']
})
export class QrPage  {

  scanSub: any;
  qrText: string;


  constructor(
    public platform: Platform,
    private qr: QRScanner,
    private alertController:AlertController, 
    private navCtrl:NavController
  ) {
    this.platform.backButton.subscribeWithPriority(0, () => {
      document.getElementsByTagName('body')[0].style.opacity = '1';
      this.scanSub.unsubscribe();
    });
  }
  

  


async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Exito!',
      subHeader: 'QR escaneado correctamente',
      message: 'Gracias por usar nuestra app',
      buttons: [
        {
          text: 'Vale',
          role: 'cancel',
          handler: (data) => {
            this.navCtrl.navigateRoot('tabs/qr');
          }
        }
      ]
    });

    await alert.present();
  }

  
   
 
  

  startScanning() {
    // Optionally request the permission early
    this.qr.prepare().
      then((status: QRScannerStatus) => {
        if (status.authorized) {
          this.qr.show();
          this.scanSub = document.getElementsByTagName('body')[0].style.opacity = '0';
          debugger
          this.scanSub = this.qr.scan()
            .subscribe((textFound: string) => {
              document.getElementsByTagName('body')[0].style.opacity = '1';
              this.qr.hide();
              this.scanSub.unsubscribe();

              this.qrText = textFound;
            }, (err) => {
              alert(JSON.stringify(err));
            });
            this.presentAlert();
        } else if (status.denied) {
        } else {

        }
      })
      .catch((e: any) => console.log('Error is', e));
  }

}



  


