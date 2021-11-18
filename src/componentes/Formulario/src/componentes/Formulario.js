
export default {
  name: 'src-componentes-formulario',
  components: {},
  props: [],
  data () {
    return {
      formData: this.getInitialData(),
      formState: {},
      nombreMinLength: 3,
      nombreMaxLength: 15,
      edadMin: 18,
      edadMax: 120,
      url: "https://6175e83903178d00173daa13.mockapi.io/formulario",
      usuarios: [],
    }
  },
  computed: {

  },
  mounted() {
    
  },

  methods: {

    getInitialData(){
      return{
        nombre: "",
        edad: "",
        email: ""
      }
    },

    async enviarDatosAlServidor(usuarios) {
      try {
        let respuesta = await this.axios.post(this.url, usuarios, {'content-type':'application/json'})
        let datosRecibidos = respuesta.data
        console.log('datosRecibidos POST', datosRecibidos)
        this.usuarios.push(datosRecibidos)
      }
      catch(error) {
        console.error('Error en envío de datos del formulario', error)
      }
    },

    enviar() {
      let usuarios = {...this.formData}
      console.log(usuarios)
      this.enviarDatosAlServidor(usuarios)
      this.formData = this.getInitialData()
      this.formState._reset()
    }
    
  }
}


