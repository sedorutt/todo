<template>
    <div>
        <page-top></page-top>
        <div class="container">
            <h2>詳細表示</h2>
            <form>
                <label for="title">Title</label>
                <input type="text" id="title" class="read-area " readonly v-model="task.title">

                <label for="content">Content</label>
                <input type="text" id="content" class="read-area " readonly v-model="task.content">
           
                <label for="deadline">Deadline</label>
                <input type="text" id="deadline" class="read-area " readonly v-model="task.dead_line">
            </form>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        taskId:String
    },
    data(){
        return{
            task:{}
        }
    },
    methods:{
        getTask(){
            axios.get('/api/tasks/'+this.taskId)
                .then(response =>{
                    this.task = response.data;
                });
        },
    },
    mounted(){
        this.getTask();
    }

}
</script>

<style scoped>
.read-area{
    width: 100%;
    margin-bottom: 20px;
}
</style>