import {Component} from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { AlertController, NavController } from '@ionic/angular';
import { Platform } from '@ionic/angular'
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Storage } from '@ionic/storage-angular'

@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss']
})
export class QrPage  {

  scanSub: any;
  


  constructor(
    public platform: Platform,
    private qr: QRScanner,
    private alertController:AlertController, 
    private navCtrl:NavController,
    public actionSheetController: ActionSheetController,
    private socialSharing:SocialSharing,
    private storage:Storage
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

  
   
  public qrText: string[] = [];
  

  startScanning() {
    // Optionally request the permission early
    this.qr.prepare().
      then((status: QRScannerStatus) => {
        if (status.authorized) {
          this.qr.show();
          this.scanSub = document.getElementsByTagName('body')[0].style.opacity = '0';
          debugger
          this.scanSub = this.qr.scan()
            .subscribe((textFound) => {
              document.getElementsByTagName('body')[0].style.opacity = '1';
              this.qr.hide();
              this.scanSub.unsubscribe();
              this.qrText.push(textFound);
            });
            this.guardar(); 
            this.presentAlert();
        } else if (status.denied) {
        } else {

        }
      })
      .catch((e: any) => console.log('Error is', e));
  }

  compartir()
  {
    this.socialSharing.share('Asistencia: ' + this.qrText);
  }

  async abrirMenu()
  {
    const actionSheet = await this.actionSheetController.create({
      header: 'Acciones',
      //cssClass: 'my-custom-class',
      buttons: [
        {
        text: 'Compartir',
        icon: 'share-social',
        handler: () => {
          this.compartir();
        }
      },
      {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();

    const { role } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);

  }


  async guardar()
  {

    //coleccion temporal y vaciar datos encima
    //agrgar nuevo escaneo a la coleccion temporal
    await this.storage.set('Datos QR', this.qrText);
    
  } 

}



  


