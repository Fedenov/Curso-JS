function mostrarLista(dato1, dato2, dato3){
    if(dato1 || dato2 || dato3){
        return[dato1, dato2, dato3]
    }
    else{
        return("lista vacia")
    }
}
console.log(mostrarLista("txt1", "txt2", "txt3"))

