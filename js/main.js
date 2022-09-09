var CHAVE_PUBLICA = ''
var CHAVE_SERVICOS = 'service_t35ja89'
var CHAVE_TEMPLATE = 'template_o4a702g'

emailjs.init(CHAVE_PUBLICA);

 var formulario = document.querySelector('form#form_contato');

console.log(document);

// document.querySelector('nav'). style.backgroundColor = ('red'); //

var formulario = document.querySelector('form#form_contato');

formulario.addEventListener ('submit', function(evento){
    evento.preventDefault();

    var dados = new FormData(formulario)
    var nome = dados.get('nome')
    var email = dados.get('email')
    var turma = dados.get('turma')
    var motivo = dados.get('motivo')
    var mensagem = dados.get('mensagem')
    
    console.log(nome, email, turma, motivo, mensagem);

    //enviar esses dados por e-mail

    var resultado = document.createElement('p')
    resultado.innerHTML = `
    ${nome}, sua mensagem foi enviada com sucesso!
    `
    formulario.append(resultado)
    var templateParams = {
        nome: nome,
        email: emai,
        turma: turma,
        motivo: motivo,
        mensagem: mensagem,
    
    };
     
    emailjs.send('service_t35ja89', 'template_o4a702g', templateParams)
        .then(function(response) {
           console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
           console.log('FAILED...', error);
        });
});

