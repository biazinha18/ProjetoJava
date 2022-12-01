export class Parcela {
    #numero;
    #valor;
    #juros;
    #amortizacao;
    #saldo;
    constructor(numero,valor,juros,amortizacao,saldo){
        this.#numero = numero;
        this.#valor = valor;
        this.#juros = juros;
        this.#amortizacao = amortizacao;
        this.#saldo = saldo;

    }

    getSaldo() {
        return this.#saldo;
    }
    getDadosFormatados (){
        const dados = [];
        dados.push(this.#numero);
        /*METODO PASSANDO PARA VALOR EM REAL */
        dados.push(this.#valor.toLocalString('pt-BR',{style:'currency', currancy:'BRL'}));
        dados.push(this.#amortizacao.toLocalString('pt-BR',{style:'currency', currancy:'BRL'}));
        dados.push(this.#juros.toLocalString('pt-BR',{style:'currency', currancy:'BRL'}));
        dados.push(this.#saldo.toLocalString('pt-BR',{style:'currency', currancy:'BRL'}));
        return dados;
    }
}