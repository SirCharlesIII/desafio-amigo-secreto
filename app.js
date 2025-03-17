let amigos = [];
let listaId = 'listaAmigos'

function limparCampos(id) {
    let campo = document.getElementById(id);
    campo.innerHTML = '';
}

function todosAmigos() {
    let ulAmigos = document.getElementById(listaId);
    limparCampos(listaId);
    for (n = 0; n < amigos.length; n++) {
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(amigos[n]));
        ulAmigos.appendChild(li);
    }
}

function adicionarAmigo() {
    let amigo = document.querySelector("input").value;
    if (amigo.length > 0) {
        amigos.push(amigo);
        todosAmigos();
        let texto = document.querySelector('input');
        texto.value = '';
    } else {
        alert('Por favor, insira um nome.');
    }
}

function gerarNumero() {
    let numeroAleatorio = Math.floor(Math.random() * amigos.length);
    return numeroAleatorio;
}

function sortearAmigo() {
    limparCampos(listaId);
    if (amigos.length > 0) {
        let escolhido = amigos[gerarNumero()];
        let ul = document.getElementById('resultado');
        ul.innerHTML = `Parabéns o seu amigo secreto é: ${escolhido}`;
    } else {
        alert('Por favor, adicione nomes antes de sortear um amigo secreto.');
    }
}