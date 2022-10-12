export class Coracao {
    constructor(
        public cheio: boolean,
        public urlCoracaoCheio: string = '/assets/coracaoCheio.png',
        public urlCoracaoVazio: string = '/assets/coracaoVazio.png'
    ){}

    public exibeCoracao(): string {

        if (this.cheio){
            return this.urlCoracaoCheio
        }else{
            return this.urlCoracaoVazio
        }
    }
}