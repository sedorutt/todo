<template>
  <div>
    <page-top></page-top>
    <div class="container">
            <form @submit.prevent="submit"> 
                <label for="title">Title</label>
                <input type="text" id="title" class="edit-area" v-model="task.title">

                <label for="content">Content</label>
                <input type="text" id="content" class="edit-area" v-model="task.content">
           
                <label for="deadline">deadline</label>
                <input type="text" id="deadline" class="edit-area" v-model="task.dead_line">
                <button type="submit">更新</button>
            </form>
        </div>
  </div>
</template>

<script>
export default {
    props:{
      taskId:Number
    },
    data(){
      return{
        task:{
        title:"",
        content:'',
        dead_line:Date
      }
      }
    },
    methods:{
      getTask(){
        axios.get('/api/tasks/'+this.taskId)
            .then(response => {
              this.task = response.data;
            });
      },
      submit(){
        axios.put('/api/tasks/'+this.taskId ,this.task)
            .then(response => {
              this.$router.push({name:'Dashboard'})
            });
      },
    },
    mounted(){
      this.getTask();
    }

}
</script>

<style scoped>
.edit-area {
  width: 100%;
  margin-bottom: 20px;
}
</style>