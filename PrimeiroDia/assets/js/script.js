/*
JS é Case Sensitive

formas de pegar tag, id e etc definidos no html:
Acessar o DOM por
por Tag: getElementByTagName()
por ID: getElementByID() 
por Nome: getElementsByName()
por Classe: getElementsByClassName()
por Seletor: querySelector() <-- mais usado "pode selecionar tanto só a tag, id ou classe"
*/ 
let nome = window.document.getElementById('nome');
let email = document.querySelector('#email'); /*o id é #email,se fosse classe .email */
let assunto = document.querySelector('#assunto');
let nomeOk = false;
let emailOk = false;
let assuntoOk = false;
let mapa = document.querySelector('#mapa')

/*Aumentar o tamanho do input pelo dom*/
/* deixa 100% o tamanho da largura da caixinha pra digitar o nome*/
nome.style.width = '100%';
email.style.width = '100%';

/* # porque é id*/
/*inner html é colocar um valor dentro do texto */
/* Se não colocar o else, o erro não para de acontecer, só depois que colocar que para de dar a mensagem errada. */
function validaNome(){
    let txtNome = document.querySelector('#txtNome')
    if(nome.value.length < 3){
        txtNome.innerHTML = 'Nome Inválido'
        txtNome.style.color = 'red'
    } else {
        txtNome.innerHTML = 'Nome Válido'
        txtNome.style.color = 'green'
        nomeOk = true;
    }
}

function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')/*quer não puxar o email e sim a div, txtemail criada */

    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){ /* -1 é o valor negativo*/ 
        txtEmail.innerHTML = 'E-mail Inválido'
        txtEmail.style.color = 'red'
    }
    else{
        txtEmail.innerHTML = 'E-mail Válido'
        txtEmail.style.color = 'green'
        emailOk = true
    }
}

function validaAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')

    if(assunto.value.length >=  100){
        txtAssunto.innerHTML =  'Texto é muito grande, digite no máximo 100 caracteres'   /* txtAssunto.innerHTML = <h1> Teste h1</h1> Posso até colocar  um h1 aqui, que vai mostrar algo maior */
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
        assuntoOk = false
        /*bloqueia o display até chegar nesse if, é necessário para o none ali embaixo funcionar */
        /*Posso até colocar background, puxar outros métodos de html e css aqui nessa caixa em específico na situação do if*/
    }
    else{
            txtAssunto.style.display = 'none' /*quero que nada apareça caso esteja tudo correto */
            assuntoOk = true
        }
}

function enviar() {
    if(nomeOk == true && emailOk == true && assuntoOk == true){
        alert ('Formulário enviado.')
    } else {
        alert ('Preencha o formulário corretamente antes de enviar.')
    }
}
 /*Cria o tamanho do mapa do zoom e o normal com os parâmetros padrão para voltar depois que sair do zoom. */
function mapaZoom(){
    mapa.style.width = '800px'
    mapa.style.height = '600px'
}

function mapaNormal(){
    mapa.style.width = '400px'
    mapa.style.height = '250px'
}