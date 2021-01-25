<template>
  <h1>{{ title }}</h1>
  <div v-if="showModal">
 <Modal :header="modal_header" :sale="sale" @close_modal="toggleModal">
 </Modal>
  </div>
  <button @click="toggleModal">open modal</button>
 </template> 
<script>
import Modal from './components/Modal'

 export default{
    name: 'App',
    components : {
      Modal,
      },
    data(){
      return {
         title : 'vlad',
         modal_header : 'props are nice!',
         sale : true,
         showModal : false,
        }
   },
   methods : {
     toggleModal(){
      this.showModal = !this.showModal;
     }
   }
   }
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1{
   display: inline-block;
   color: blue; 
  }
</style>
