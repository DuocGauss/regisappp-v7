import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { Register } from '../interfaces/register';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  comidas: Register[] = [];

  private _storage: Storage | null = null;

  constructor(private storage: Storage, private toastController:ToastController) {
    this.Init();
    this.cargarFavoritos();
  }

  async Init() {
    // If using a custom driver:
    // await this.storage.defineDriver(MyCustomDriver)
    const storage = await this.storage.create();
    this._storage = storage;

  }

  guardarComida(comida: Register) {
    
    const existe = this.comidas.find(c => c.idregis === comida.idregis);

    if (!existe) {
      comida.fav=true;
      this.comidas.unshift(comida);
      this._storage.set('favoritos', this.comidas);
      this.presentToast("Agregado a favoritos!!")
    }
  }

  async cargarFavoritos() {
    const favoritos= await this.storage.get('favoritos');
    if(favoritos)
    {
      this.comidas=favoritos; 
    }
    
  }

  quitarFavoritos(meal:Register)
  {
    
    this.comidas=this.comidas.filter(c=>c.idregis!==meal.idregis);
    this._storage.set('favoritos', this.comidas);
    this.presentToast("Se ha eliminado de favoritos");
  }

  async presentToast(mensaje:string) {
    const toast = await this.toastController.create({
      message: mensaje,
      translucent:true,
      color:'medium',
      position: 'top',
      duration: 2000
    });
    toast.present();
  }
}
