<template>
    <div class="block" v-if="showBlock" @click="stopTimer">
        click me
    </div>
</template>

<script>
export default {
    props: ['delay'],
    data(){
        return{
            showBlock : false,
            timer: null,
            reactionTime : 0 
        }
    },
    mounted(){
        //fired right after element is mounted on dom
        setTimeout(() => {
         this.showBlock = true;   
         this.startTimer();
        }, this.delay)
    },

    methods: {
        startTimer(){
        this.timer = setInterval(
            () => {
                this.reactionTime += 10 //inc every ten seconds    
            }, 10)
        },
        stopTimer(){
        clearInterval(this.timer);
        this.showBlock = false;
        this.$emit('end', this.reactionTime); 
        }
    }

}
</script>

<style scoped>
    .block{
        width: 400px;
        border-radius: 18px;
        color: #fff;
        text-align: center;
        padding: 100px 0;
        margin: 40px auto;
        background-color: green;
    }
</style>