import {  MenuController } from '@ionic/angular';

import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

import { Usuario } from '../../interfaces/usuario';
import { Storage } from '@ionic/storage-angular'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario={
    username:'',
    password:'',
    estado:0
  }

  constructor(private router:Router, private alertController:AlertController, public menuCtrl: MenuController, private storage:Storage) { }

  ngOnInit() {
  }
  
  onSubmit(){
    
      this.logear();
     
    

    
  }

  cambiarEstado()
  {
    this.cambiar();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Error al ingresar',
      subHeader: 'Datos no validos',
      message: 'Reingrese usuario y/o contraseña',
      buttons: ['OK']
    });

    await alert.present();
  }

  async logear()
  {
    //const name = await storage.get('name');
    let userok=await this.storage.get(this.usuario.username);
    if(userok!=null)
    {
      console.log("Usuario encontrado" + userok.username);
      await this.storage.remove(userok.username);
      userok.estado=1;
      await this.storage.set(userok.username,userok);
      
      let navextras:NavigationExtras={
        state:{miusuario:this.usuario}
      }

      this.router.navigate(['/tabs/home'], navextras);
      
    }
    else
    {
      console.log("Usuario no encontrado");
      console.log("todo malo")
      this.presentAlert();
    }

  }

   ionViewDidEnter(): void {
    this.menuCtrl.enable(false);
   }

   ionViewDidLeave(): void {
    // enable the root left menu when leaving the tutorial page
    this.menuCtrl.enable(true);
  }


  async cambiar() {
    let user = await this.storage.get('wacoldo');
    if (user.estado === 0) {
      user.estado = 1;
    }
    else {
      user.estado = 0;
    }
    await this.storage.set('wacoldo', user);
  }
}
