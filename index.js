class cliente{
    nome;
    cpf; 
}

class contaCorrente{
    agencia;
    saldo;

    sacar(valor){
        if(this.saldo >= valor){
            this.saldo -= valor;
        }
    }
}

const cliente1 = new cliente();
cliente1.nome = "Paulo";
cliente1.cpf = 10101010188;

const cliente2 = new cliente();
cliente2.nome = "Bruna";
cliente2.cpf = 10101010187;

const contaCorrentePaulo = new contaCorrente();
contaCorrentePaulo.saldo = 0;
contaCorrentePaulo.agencia = 1001

const contaCorrenteBruna = new contaCorrente();
contaCorrenteBruna.saldo = 0;
contaCorrenteBruna.agencia = 1001

console.log(contaCorrentePaulo.saldo);
contaCorrentePaulo.saldo = 100;
console.log(contaCorrentePaulo.saldo);


console.log(cliente1);
console.log(cliente2);

