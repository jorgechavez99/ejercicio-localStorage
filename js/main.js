
//capturar los elementos del DOM

const productos = document.querySelector('#productos');
const listaCompra = document.querySelector('#listaCompra');
const botonBorrarLista = document.querySelector('#botonBorrarLista');

const fragment = document.createDocumentFragment();
// crear los arrays

const arrayProductos = [
    'leche',
    'arroz',
    'chocolate',
    'queso',
    'carne',
    'aceite',
    'agua',
    'tomate'];

const arrayLista = [];

//variables y funciones

//darle evento al click del boton añadir producto a localStorage

//darle evento al click del boton eliminar lista

//darle evento al click del boton BorrarLista

productos.addEventListener('click', (ev) => {
    const producto = ev.target.id;
    //console.log("boton",{producto})  
    añadirProducto(producto);
    recibirProductos();
});

listaCompra.addEventListener('click', (ev) => {
    const producList = ev.target.id;
    
    detectaProductoEliminar(producList)
    eliminarProducLista()
});

botonBorrarLista.addEventListener('click',(ev)=>{
    eliminarTodaLista()
})



const mostrarProductos = () => {
    //recibir los productos del array y mostrarlos con su boton añadir


    arrayProductos.forEach((item) => {
        const producto = document.createElement('LI');

        producto.innerHTML = `${item}
                    <input type="submit" value="añadir" id="${item}">`;
        //console.log(producto)
        fragment.append(producto)

    })
    productos.append(fragment)
};

const añadirProducto = (producto) => {
    arrayLista.push(producto)
    localStorage.setItem("arrayLista", JSON.stringify(arrayLista));
};


//va a recoger los elementos añadidos y los va mostrar
const recibirProductos = () => {
    let canastaProductos = JSON.parse(localStorage.getItem('arrayLista')) || [];
   
    listaCompra.innerHTML = ''
    canastaProductos.forEach((item) => {
        let producLista = document.createElement('LI')
        producLista.innerHTML = `${item}
                        <input type="submit" value="eliminar" id="${item}"></input>`
        fragment.append(producLista)

    })
    listaCompra.append(fragment)
};

const eliminarProducLista = () => {
   
    

};

const detectaProductoEliminar=(producList)=>{
    
    console.log(producList)
    
   
}


const eliminarTodaLista = () => {

    localStorage.clear('arrayLista')
};
mostrarProductos();

