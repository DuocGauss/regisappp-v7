import { Component } from '@angular/core';
import { Opcionmenu } from './interfaces/opcionmenu';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  

  opciones:Opcionmenu[]=[
    
  {
    destino:'login',
    icono:'power',
    texto:'Salir'

  },
  
  
  

]
constructor(private storage:Storage) {}

async ngOnInit() {
  await this.storage.create();
}
}
