import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pag3',
  templateUrl: './pag3.page.html',
  styleUrls: ['./pag3.page.scss'],
})
export class Pag3Page implements OnInit {

  personas= [{
    nombre: "Gustavo",
    apellido: "Bravo",
    imagen:'../assets/images/user.png.png'

  },
  {
    nombre: "Ignacio",
    apellido: "Bravo",
    imagen:'../assets/images/user.png.png'

  },
  {
    nombre: "Gus",
    apellido: "Bravo",
    imagen:'../assets/images/user.png.png'

  },
]

  constructor() { }

  ngOnInit() {
  }

}
