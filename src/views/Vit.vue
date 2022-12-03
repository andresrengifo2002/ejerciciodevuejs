<template>
    <div>
        <siderbar></siderbar>
        <label>nombre: </label>
        <input type="text" v-model="nombre">{{ nombre }}
        <br><br>
        <label>nombre de empresa:</label>
        <input type="text" v-model="nombredeempresa">{{ nombredeempresa }}  
        <br><br>
        <label>direccion:</label>
        <input type="text" v-model="direciondelaempresa">{{ direcciondelaempresa }}  
        <br><br>
        <button v-on:click="datosdelaempresa">continuar</button>
            </div>  
</template>
<script>
import Siderbar from '../components/Siderbar.vue';
  export default{
        name:"Vit",   
        props:{

        },



    data(){
        return{
            nombre:null,
            nombredeempresa:null,
            direcciondelaempresa :null,
        }
    },
    methods:{
        datosdelperro(){
            alert(this.nombre+this.nombredeempresa+this.direcciondelaempresa)
        }
    },
    components:{
        Siderbar
    }

}

</script>