import {Parcela} from './parcela.js';

const corpoTabela = document.querySelector('#corpoTabela');
const botaoCalcular = document.querySelector('#botaoCalcular');
const textoValor = document.querySelector('#textoValor');
const textoEntrada = document.querySelector('#textoEntrada');
const textoTaxaJuros = document.querySelector('#textoTaxaJuros');
const textoPrazo = document.querySelector('#textoPrazo');



class Financiamento {
    #taxaJuros;
    #prazo;
    #parcelas = [];
    constructor(valor,entrada,taxaJuros,prazo){
        this.#taxaJuros = taxaJuros;
        this.#prazo = prazo;
        this.#parcela.push(new Parcela(0,0,0,0,valor - entrada));
    }

    static calcJuros(valor,taxaJuros) {
        return valor *(taxaJuros / 100);
    }


    calcParcelasMensais(){
        let saldo = this.#parcelas[this.parcela.length-1].getSaldo();
        let prazo = this.#prazo - (this.#parcelas.length - 1)
        let amortizacao = saldo / prazo;
        for(let i=0; i < prazo; i++){
            const numero = this.#parcelas.length;
            const juros = Financiamento.calcJuros(saldo,this.#taxaJuros);
            const valor = juros + amortizacao;
            saldo -= amortizacao;
            if(saldo < 0) {saldo = 0;}
            this.#parcelas.push(new Parcelas(numero,valor,juros,amortizacao,saldo));
        }
    }

    exibeParcelas(){
        const parcelas = this.#parcelas.slice(1);
        for(const parcela of parcelas) {
            const linha = corpoTabela.insertRow(-1);
            for(const dado of parcela.getDadosFormatados()){
                const celula = linha.insertCell(-1);
                celula.textContent = dado;
            }
        }
    }

    
}

    botaoCalcular.addEventListener('click', function() {
        const valor = parseFloat(textoValor.value);
        const entrada = parseFloat(textoEntrada.value);
        const taxaJuros = parseFloat(textoTaxaJuros.value);
        const prazo = parseFloat(textoPrazo.value);
        let simulacao;
        simulacao = new Financiamento(valor,entrada,taxaJuros,prazo);
        simulacao.calcParcelasMensais();
        simulacao.exibeParcelas();
        
    });