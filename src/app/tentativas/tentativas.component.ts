import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.scss']
})
export class TentativasComponent implements OnInit {

  public coracaoVazio: string = '/assets/coracaoVazio.png'
  public coracaoCheio: string = '/assets/coracaoCheio.png'

  constructor() { }

  ngOnInit(): void {
  }

}
