class cliente{
    nome;
    cpf; 
}

class contaCorrente{
    agencia;
    saldo;

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
    }

    depositae(valor){
        if( valor <= 0){
            return;
        }
        this._saldo += valor;
    }
}

const cliente1 = new cliente();
cliente1.nome = "Paulo";
cliente1.cpf = 10101010188;

const cliente2 = new cliente();
cliente2.nome = "Bruna";
cliente2.cpf = 10101010187;

const contaCorrentePaulo = new contaCorrente();
contaCorrentePaulo.agencia = 1001

contaCorrentePaulo.depositar += 100;
contaCorrentePaulo.depositar += 100;
contaCorrentePaulo.depositar += 100;

const valorSacado = contaCorrentePaulo.sacar(50);
console.log(valorSacado);

console.log(contaCorrentePaulo);


