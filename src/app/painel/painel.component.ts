import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit, EventEmitter,Output, OnDestroy } from '@angular/core';

import{Frase} from '../shared/frase.model';
import {FRASES} from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.scss']
})
export class PainelComponent implements OnInit, OnDestroy {

  public frases: Frase[] = FRASES
  public instrucao: string = 'Traduza a frase:'
  public resposta: string = "";

  public rodada: number = 0;
  public rodadaFrase!: Frase;

  public progresso: number = 0

  public tentativas: number = 3

  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter()

  constructor() {
    this.atualizaRodada()

  }
  ngOnInit() {
  }

  ngOnDestroy() {
      
  }

  public atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value
    //console.log(this.resposta)
  }

  public verificarResposta(): void {

    if(this.rodadaFrase.frasePtBr == this.resposta){
      //Trocar pergunt da rodada
      this.rodada++

      //Progresso
      this.progresso = this.progresso + (100 / this.frases.length)

      //
      if(this.rodada === 4){
        this.encerrarJogo.emit('vitoria')
      }

      //Atualiza o objeto rodadaFrase
      this.atualizaRodada()

    }else{
      //Diminuir a variável tentativas.
      this.tentativas--

      if (this.tentativas === -1){
        this.encerrarJogo.emit('derrota')
      }  
    }

  }

  public atualizaRodada(): void{

    //Definir a frase da rodada com basse
    this.rodadaFrase = this.frases[this.rodada]

     //Limpar a resposta
     this.resposta = ''
  }
}

