class Cliente{
    nome;
    cpf;
    agencia;
    saldo;
 
}

const cliente1 = new Cliente();
const cliente2 = new Cliente();

cliente1.nome = "Paulo";
cliente1.cpf = 10101010188;
cliente1.agencia = 1001;
cliente1.saldo = 0;


cliente2.nome = "Alice";
cliente2.cpf = 10101010187;
cliente2.agencia = 1001;
cliente2.saldo = 0;

console.log(cliente1, cliente2);
