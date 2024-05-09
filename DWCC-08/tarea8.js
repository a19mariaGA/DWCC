const App = {
    data() {
        return {
            Nombre: 'A Tenda do Barrio',
            ok: true,
            existe:false,
            nombre: '',
            direccionPersonal: '',
            hora: new Date().getHours(),
            size:20,
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


}

Vue.createApp(App).mount('#app');