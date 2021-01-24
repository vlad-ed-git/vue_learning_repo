<template>
  <div class="backdrop" @click.self="closeModal">
    <div class="modal">
      <h1>{{ header }}</h1>
      <hr />
      <p :class="{ sale: sale }">Model content</p>
    </div>
  </div>
</template>

<script>
export default{
    props : ['header', 'sale'],
    methods: {
        closeModal(){
            this.$emit('close_modal') //emit event
        }
    },
}
</script>

<style scoped>
.modal {
  width: 400px;
  padding: 20px;
  margin: 100px auto;
  background: white;
  border-radius: 10px;
}
.backdrop {
  top: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}
</style>