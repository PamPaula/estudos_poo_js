import { Cliente } from "./Cliente.js";
import { Conta } from "./Conta/Conta.js";
import { ContaCorrente } from "./Conta/ContaCorrente.js";
import { ContaPoupança } from "./Conta/ContaPoupança.js";
import { ContaSalario } from "./Conta/ContaSalario.js";
import { Diretor } from "./Funcionario/Diretor.js";
import { Gerente } from "./Funcionario/Gerente.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const cliente1 = new Cliente("Pamela", 11122233344, "456");

//const cliente2 = new Cliente("Lucas", 55566677788);
//cliente2.nome = "Lucas";
//cliente2.cpf = 55566677788;

//const contaCorrentePamela = new ContaCorrente(0, cliente1, 1001);
//contaCorrentePamela.agencia = 1001;
//contaCorrentePamela.cliente = cliente1;
//contaCorrentePamela.depositar(500);
//contaCorrentePamela.sacar(100);

//const contaCorrenteLucas = new ContaCorrente(cliente2, 1002);
//contaCorrenteLucas.cliente = new  Cliente();
//contaCorrenteLucas.cliente.nome = "Lucas";
//contaCorrenteLucas.cliente.cpf = 55566677788;


//let valor = 200;
//contaCorrentePamela.transferir(valor, contaCorrenteLucas);

//console.log(contaCorrentePamela);
//console.log(contaCorrenteLucas);
//console.log("valor: ", valor);
//console.log(ContaCorrente.numeroDeContas);

//const contaPoupança = new ContaPoupança(50, cliente1, 1001);
//contaPoupança.sacar(10);

//console.log(contaCorrentePamela);
//console.log(contaPoupança);

//const conta = new Conta(0, cliente1, 1001);
//console.log(conta);

//const contaSalario = new ContaSalario(cliente1, 1001);
//contaSalario.depositar(100);
//contaSalario.sacar(10);

//console.log(contaSalario);

const diretor = new Diretor("Olivia", 10000, 12345678900);
diretor.cadastrarSenha("123456");
const gerente = new Gerente("Leandro", 5000, 12345678901);
gerente.cadastrarSenha("123");

const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123");
const clienteEstaLogado = SistemaAutenticacao.login(cliente1, "456");
console.log(diretorEstaLogado, gerenteEstaLogado, clienteEstaLogado);