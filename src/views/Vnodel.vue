<template>
    <div>
        <siderbar></siderbar>
        <label>nombre: </label>
        <input type="text" v-model="nombre">{{ nombre }}
        <br><br>
        <label>producto:</label>
        <input type="text" v-model="producto">{{ producto }}  
        <br><br>
        <label>electronico:"diga si o no"</label>
        <input type="text" v-model="electronico">{{ electronico }}  
        <br><br>
        <button v-on:click="consumo">continuar</button>
            </div>  
</template>
<script>
import Siderbar from '../components/Siderbar.vue';
  export default{
        name:"Vnodel",   
        props:{

        },



    data(){
        return{
            nombre:null,
            producto:null,
            electronico:null,
        }
    },
    methods:{
        consumo(){
            alert(this.nombre+this.nombredeempresa+this.direcciondelaempresa)
        }
    },
    components:{
        Siderbar
    }

}

</script>