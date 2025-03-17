//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function todosAmigos() {
    let ul = document.getElementById('listaAmigos');
    ul.innerHTML = '';
    for (n = 0; n < amigos.length; n++) {
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(amigos[n]));
        ul.appendChild(li);
    }
}

function adicionarAmigo() {
    let amigo = document.querySelector("input").value;

    if (amigo.length > 0) {
        amigos.push(amigo);
        todosAmigos();
        limparInput();
    } else {
        alert('Por favor, insira um nome.');
    }
}

function limparInput() {
    amigo = document.querySelector("input");
    amigo.value = '';
}
