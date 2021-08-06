<template>
    <div class="flex">
        <div v-if="user">
            <h3>ユーザー</h3>
            <p>Name: {{user.name}}</p>
            <p>Email: {{user.email}}</p>
        </div>
        <div class="top-btn">
            <router-link class="mr-4" v-bind:to="{name:'Dashboard'}" exact>List</router-link>
            <router-link :to="{name:'Create'}">ToDo追加</router-link>
        </div>

    </div>
</template>
<script>
export default {
    data(){
        return{
            user: null
        }
    },
    methods:{
        // logout(){
        //     axios.post('/api/logout').then(()=>{
        //         this.$router.push({ name: "Home"})
        //     })
        // }
        
    },
    mounted(){
        axios.get('/api/user').then((res)=>{
            this.user = res.data
        })
    }
}
</script>

<style scoped>
.flex {
    display: flex;
    justify-content: space-around;
}
.top-btn{
    margin-top: 3rem;
    align-items: center;
}
</style>