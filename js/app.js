let amigos = []; //array de amigos criado para realizar as validações

function adicionar() {
    let nomeAmigo = document.getElementById('nome-amigo'); //coletando o nome do amigo informado no input
    if (nomeAmigo.value == ''){ //primeira validação - não pode informar um nome vazio na lista
        alert('Informe o nome do amigo!');
        return;
    }

    let nomeMaiusculo = nomeAmigo.value.toUpperCase(); // transformar em maiusculo para validar o nome independentemente da caixa
    if (amigos.includes(nomeMaiusculo)) { //terceira validação - saber se o nome do amigo já foi incluído no array
        alert('Nome já adicionado!');
        return;
    }

    let listaAmigos = document.getElementById('lista-amigos'); //coletar a lista de amigos no document
    amigos.push(nomeMaiusculo); // alimentar o array de amigos

    if (listaAmigos.textContent == ''){ // verificando se a lista de amigos está vázia, se estiver, incluir
        listaAmigos.textContent = nomeAmigo.value;
    } else { //... se não estiver vazia, incluir o nome, mantendo o que ja estava inserido
        listaAmigos.textContent = listaAmigos.textContent + ', '+ nomeAmigo.value;
    }
    nomeAmigo.value = '';
}

function sortear() {
    if (amigos.length < 4) { //segunda validação - a lista deve conter pelo menos 4 amigos
        alert('Adicione pelo menos 4 amigos!');
        return;
    }
    embaralha(amigos);
    let listaSorteio = document.getElementById('lista-sorteio'); //coleta a lista após o sorteio

    for(let i = 0; i < amigos.length; i++){ //após embaralhar, atualiza a lista de sorteios, atribui o primeiro elemento da lista ao último
        if(i == amigos.length -1){
            listaSorteio.innerHTML = listaSorteio.innerHTML + amigos[i] + ' --> ' + amigos[0];
        } else { //atribui o elemento da lista ao próximo elemento
            listaSorteio.innerHTML = listaSorteio.innerHTML + amigos[i] + ' --> ' + amigos[i + 1] + '<br />';
        }
    }
}

function embaralha(lista) { //função embaralhar que pegamos pronta

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}