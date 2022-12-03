<template>
    <div>
        <Siderbar></Siderbar>
        <Navbar></Navbar>
        <Footer></Footer>
        <table v-for="posts in posts " :key="posts.id">
            <thead>  
                <th>userId</th>
                <th>id</th>
                <th>titulo</th>
                <th> body </th>
        {{posts.userId}}
        {{posts.id}}
            </thead>
        </table>
    </div>  
</template>
<script>
import Siderbar from '../components/Siderbar.vue'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
export default{
    data(){
        return{
            posts:null

        }
    },
    methods(){

    },
    computed:{

    },
    components:{
        Siderbar,
        Navbar,
        Footer,

    },
    mounted(){
axios.get("https://jsonplaceholder.typicode.com/posts/1").then(response=>{
    console.log(response.data)
    this.post=respomse.data

})
    },
    

}
</script>