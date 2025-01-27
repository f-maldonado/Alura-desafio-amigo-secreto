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
    if (lista.length > 0){
        let indice = Math.floor(Math.random() * lista.length)
        console.log(amigos[indice])
        let listaSorteo = document.getElementById('resultado')
        let itemSorteo = document.createElement('li')
        itemSorteo.innerHTML = amigos[indice]
        listaSorteo.append(itemSorteo)
    } 
    return
}
