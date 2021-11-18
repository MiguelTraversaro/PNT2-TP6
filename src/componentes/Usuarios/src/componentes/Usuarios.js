
export default {
  name: 'src-componentes-usuarios',
  components: {},
  props: [],
  data () {
    return {
      url: "https://6175e83903178d00173daa13.mockapi.io/formulario",
      usuarios: [],
      peticion: false,
      encontro: false
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
      obtenerUsuarios(){
        this.usuarios = []
        this.peticion = true
        this.axios(this.url)
          .then(respuesta => {
            console.log('AXIOS THEN', respuesta.data)
            this.usuarios = respuesta.data
            this.peticion = false
            this.encontro = true
          })
          .catch(error => console.error('Error AXIOS THEN', error))
      },
      async obtenerUsuariosAsync() {
        this.usuarios = []
        this.peticion = true
        try {
          let respuesta = await this.axios(this.url)
          console.log('AXIOS ASYNC', respuesta.data)
          this.usuarios = respuesta.data
          this.peticion = false
          this.encontro = true
        }
        catch(error) {
          console.error('Error AXIOS ASYNC', error)
        }
      },
  }
}


