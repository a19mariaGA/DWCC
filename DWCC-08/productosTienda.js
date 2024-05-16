

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
  
  export default productosTienda;
  