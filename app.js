let amigos = [];

function agregarAmigo(){
    let ingresoAmigo = document.getElementById('amigo').value;
    if (ingresoAmigo == ''){
        alert('Por favor, inserte un nombre.')
    } else {
        console.log(ingresoAmigo);
        amigos.push(ingresoAmigo);
        //console.log(typeof(ingresoAmigo));
        console.log(amigos);
        // limpiar caja input
        document.getElementById('amigo').value = '';
    }
    return
}

//agregarAmigo();