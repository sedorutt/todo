<template>
     <div>
         <page-top></page-top>
        <div class="container">
            <table class="table table-hover">
                <tr>
                    <th>Title</th>
                    <th>content</th>
                    <th>deadline</th>
                </tr>
                <tbody>
                    <tr v-for="(task ,index) in tasks" :key="index">
                        <td>{{task.title}}</td>
                        <td>{{task.content}}</td>
                        <td>{{task.dead_line}}</td>
                        <td>
                            <router-link v-bind:to="{name:'Detail',params:{taskId:task.id.toString()}}">
                                <button class="blue">Detail</button>
                            </router-link>
                            <router-link v-bind:to="{name:'Edit' ,params:{taskId:task.id.toString()}}">
                                <button class="green">Edit</button>
                            </router-link>
                            <button @click="destroy(task.id)" class="red">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            tasks:[]
        }
    },
    methods:{
        getTasks(){
            axios.get('/api/tasks')
                .then(response =>{
                    this.tasks = response.data
                });
        },
        destroy(id){
            axios.delete('/api/tasks/'+id)
                .then(response =>{
                    this.getTasks()
                });
        },
    },
    mounted(){
        this.getTasks();
    }

}
</script>


<style scoped>
button{
    width: 60px;
}
.blue {
    background-color: rgb(54, 120, 218);
    color: white;
}
.green {
    background-color: green;
    color: white;
}
.red {
    background-color: firebrick;
    color: white;
}
</style>