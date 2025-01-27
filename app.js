let amigos = []

function agregarAmigo(){
    // Captura del valor en input
    let ingresoAmigo = document.getElementById('amigo').value
    
    // comprobacion de que no es un valor vacio
    if (ingresoAmigo == ''){
        alert('Por favor, inserte un nombre.')
    } else {
        // agregar valor (nombre) a la lista
        amigos.push(ingresoAmigo)
        // funcion que agrega items con los nombres en HTML
        listarAmigos(amigos)
        // limpiar caja input
        document.getElementById('amigo').value = ''
        // se habilita el boton de sortear
        document.getElementById('draw-button').removeAttribute('disabled')
    }
    return
}

function listarAmigos(lista){
    // captura del elemento lista ul
    let listaAmigos = document.getElementById('listaAmigos')
    // se vacia al iniciar (impide que queden valores anteriores)
    listaAmigos.innerHTML = ''
    let nombreAmigo = ''
    
    for(let i = 0; i < lista.length; i++){
        // se recorre la lista (arreglo principal)
        nombreAmigo = lista[i]
        // se crea los elementos items li
        let items = document.createElement('li')
        // se asigna valor a los elementos
        items.innerHTML = nombreAmigo
        // se agrega los elementos al HTML 
        listaAmigos.append(items)
    }
    return
}

function sortearAmigo(lista){
    // La verificacion de lista (amigos) vacia, se realiza con la habilitacion del boton "Sortear amigo" en la funcion agregarAmigo()
    let indice = Math.floor(Math.random() * lista.length)
    //console.log(amigos[indice])
    let listaSorteo = document.getElementById('resultado')
    let itemSorteo = document.createElement('li')
    itemSorteo.innerHTML = amigos[indice]
    listaSorteo.append(itemSorteo)
    // se desabilita el boton "Sortear amigo" para que solo sea uno sorteo por lista
    document.getElementById('draw-button').setAttribute('disabled', 'true')
    return
}
