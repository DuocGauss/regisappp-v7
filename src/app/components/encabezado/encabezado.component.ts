import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.scss'],
})
export class EncabezadoComponent implements OnInit {
  
  @Input() titulo:string='';
  @Input() icono:string='';

  constructor() { }

  ngOnInit() {}

}
