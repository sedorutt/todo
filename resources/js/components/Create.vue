<template>
  <div>
    <page-top></page-top>
    <form @submit.prevent="submit">
      <label for="title">Title</label>
      <input type="text" id="title" v-model="task.title">

      <label for="content">Content</label>
      <input type="text" id="content" v-model="task.content">
      
      <label for="deadline">Deadline</label>
      <input type="date" id="deadline" class="date" v-model="task.dead_line">
      <button type="submit">登録</button>
    </form>
  </div>
</template>


<script>
export default {
  data(){
    return{
      task:{
        title:"",
        content:'',
        dead_line:''
      }
    }
  },
  methods:{
    submit(){
      axios.post('/api/tasks',this.task)
          .then(response => {
            this.$router.push({name:"Dashboard"})
          });
    }
  }
}
</script>

<style scoped>
label{
  margin: 1.5rem 0 0 0 ;
}
input{
  width: 100%;
}
.date{
  width: 150px;
  margin-left: 0.5rem;
  margin-bottom: 5rem;
}
button{
  display: block;
  margin: 0 auto;
  padding: 10px 20px;
}
</style>