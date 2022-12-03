<template>
    <div>
        <siderbar></siderbar>
        <label>nombre:</label>
        <input type="text" v-model="nombre">{{ nombre }}
        <br><br>
        <label>nombre de dueño:</label>
        <input type="text" v-model="nombrededueño">{{ nombrededueño }}  
        <br><br>
        <label>año de la mascota:</label>
        <input type="text" v-model="añosdelamascota">{{ añosdelamascota }}  
        <br><br>
        <button v-on:click="datosdelperro">continuar</button>
        
    </div>  
</template>
<script>
import Siderbar from '../components/Siderbar.vue';
    export default{
        name:"Vfor",   
        props:{

        },



    data(){
        return{
            nombre:null,
            nombrededueño:null,
            añosdelamascota :null,
        }
    },
    methods:{
        datosdelperro(){
            alert(this.nombre+this.nombrededueño+this.añosdelamascota)
        }
    },
    components:{
        Siderbar
    }

}
</script>