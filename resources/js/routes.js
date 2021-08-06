import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Detail from './components/Detail.vue';
import Edit from './components/Edit.vue';
import NotFound from './components/NotFound';
import PageTopComponent from './components/PageTopComponent.vue';
import Create from './components/Create.vue';
import Vue from 'vue';

Vue.component('page-top', PageTopComponent);


export default{
    mode: 'history',
    linkActiveClass: 'font-semibold',
    routes: [
        {
            path: '*',
            component: NotFound
        },
        {
            path: '/',
            component: Home,
            name: "Dashboard",
            props: true,
            beforeEnter: (to, form, next) =>{
               axios.get('/api/athenticated').then(()=>{
                   next()
               }).catch(()=>{
                   return next({ name: 'Login'})
               })
            }
        },
        {
            path: '/register',
            name:'register',
            component: Register
        },
        {
            path: '/login',
            component: Login,
            name: 'Login'
        },
        {
            path: '/tasks/create',
            component: Create,
            name: 'Create',
            props: true,
            beforeEnter: (to, form, next) =>{
               axios.get('/api/athenticated').then(()=>{
                   next()
               }).catch(()=>{
                   return next({ name: 'Login'})
               })
            }
        },
        {
            path: '/tasks/:taskId/edit',
            component: Edit,
            name: 'Edit',
            props: true,
            beforeEnter: (to, form, next) =>{
               axios.get('/api/athenticated').then(()=>{
                   next()
               }).catch(()=>{
                   return next({ name: 'Login'})
               })
            }
        },
        {
            path: "/tasks/:taskId",
            name: "Detail",
            props: true,
            component: Detail,
            beforeEnter: (to, form, next) =>{
               axios.get('/api/athenticated').then(()=>{
                   next()
               }).catch(()=>{
                   return next({ name: 'Login'})
               })
            }
       
          }
          
    ]
}
