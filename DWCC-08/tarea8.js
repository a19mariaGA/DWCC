const App = {
    data() {
        return {
            Nombre: 'A Tenda do Barrio',
            ok: true,
            existe: false,
            nombre: '',
            html:"tienda.html",
            mostrarPagina: false, 
            direccionPersonal: '',
            hora: new Date().getHours(),
            size: 20,
            colorVal: 100,
        }
    },

    methods: {
        direccion() {
            alert("Republica del Salvador nº25");
        },

    

        enviarPedido() {
            // Aquí puedes manejar el envío del pedido, por ejemplo, mediante una llamada a una API
            console.log("Pedido enviado:", { nombre: this.nombre, direccion: this.direccion });
            // Luego puedes reiniciar el formulario si es necesario
            this.nombre = '';
            this.direccion = '';
            // También puedes cerrar el formulario si lo deseas
            this.existe = false;
        }
    }
};

const productosTienda = {
    data() {
        return {
            productos: [
                { nombre: 'Brocoli', precio: 2, imagen: 'brocoli.jpeg' },
                { nombre: 'Coliflor', precio: 2.5, imagen: 'coliflor.jpeg' },
                { nombre: 'Pimientos', precio: 1.23, imagen: 'pimientos.jpeg' },
                { nombre: 'Ajos', precio: 2, imagen: 'ajos.jpeg' },
                { nombre: 'Zanahorias', precio: 3, imagen: 'zanahorias.jpeg' }
            ]
        };
    },
    template: `
      <table>
        <thead>
          <tr>
            <th :style="{ 'font-size': size + 'px' }">Nombre</th>
            <th :style="{ 'font-size': size + 'px' }">Precio</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(producto, index) in productos" :key="index">
            <td>
              {{ producto.nombre }}
              <img :src="producto.imagen" :alt="producto.nombre" width="50" height="50">
            </td>
            <td>{{ producto.precio }}</td>
          </tr>
        </tbody>
      </table>
    `
};

Vue.createApp(App).component('productos-tienda', productosTienda).mount('#app');