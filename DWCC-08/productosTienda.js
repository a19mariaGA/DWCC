App.componente("productosTienda", {
    
    data: function(){

        return{

            productos: [
                { nombre: 'Brocoli', precio: 2, imagen: 'brocoli.jpeg' },
                { nombre: 'Coliflor', precio: 2.5, imagen: 'coliflor.jpeg' },
                { nombre: 'Pimientos', precio: 1.23, imagen: 'pimientos.jpeg' },
                { nombre: 'Ajos', precio: 2, imagen: 'ajos.jpeg' },
                { nombre: 'Zanahorias', precio: 3, imagen: 'zanahorias.jpeg' }
            ]


        }
    }
    
  });
  
  export default tablaProductos;
  