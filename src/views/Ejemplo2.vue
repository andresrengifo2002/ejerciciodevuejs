<template>
    <div>
        <Siderbar></Siderbar>
        {{ numero }}
        {{ mensaje }}
        {{ valor }}
        <p> hola !!!!!</p>
        <br><br>
        <label>nombre:</label>
        <input type="text" v-model="nombre">{{ nombre }}
        <br><br>
        <label>apellido: </label>
        <input type="text" v-model="apellido">{{ apellido }}
        <br><br>
        <label>direccion: </label>
        <input type="text" v-model="direccion">{{ direccion }}
        <br><br>
        <label>telefono:</label>
        <input type="text" v-model="telefono">{{ telefono }}
        <br><br>
        <button v-on:click="datos">Aceptar</button>
        
    </div>  
</template>
<script>
import Siderbar from '../components/Siderbar.vue'
export default{
  components: { Siderbar },
    name:"Ejemplo2",
    props:{

    },
    data(){
        return{
            numero:2,
            mensaje:"adios",
            valor :null,
            nombre :null,
            apellido :null,
            direccion :null,
            telefono :null
        }
    },
    methods:{
        datos(){
            alert(this.nombre + this.apellido + this.direccion + this.telefono)
            
        }
    },
    components:{
        Siderbar
    }
}
</script>