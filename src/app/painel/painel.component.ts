import { Component, OnInit } from '@angular/core';

import{Frase} from '../shared/frase.model';
import {FRASES} from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.scss']
})
export class PainelComponent implements OnInit {

  public frases: Frase[] = FRASES
  public instrucao: string = 'Traduza a frase:'
  public resposta: string = "";

  public rodada: number = 0;
  public rodadaFrase!: Frase;

  public progresso: number = 0

  public tentativas: number = 3

  constructor() {
    this.atualizaRodada()

  }
  ngOnInit(): void {
  }

  public atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value
    //console.log(this.resposta)
  }

  public verificarResposta(): void {

    if(this.rodadaFrase.frasePtBr == this.resposta){
      alert('A tradução está correta!!')

      //Trocar pergunt da rodada
      this.rodada++

      //Progresso
      this.progresso = this.progresso + (100 / this.frases.length)

      //Atualiza o objeto rodadaFrase
      this.atualizaRodada()

    }else{
      alert('A tradução está incorreta!!\nTente novamente!!')

      //Diminuir a variável tentativas.
      this.tentativas--

      if (this.tentativas === -1){
        alert("GAME OVER :~/")
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

