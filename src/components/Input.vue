<script>
export default {
    data(){
        return {
            image:null,
        }
    },
    methods:{
        handleImageInput(event)
        {
            this.image = event.target.files[0];
        }
    },
    computed:{
        imageURL:function(){
            return URL.createObjectURL(this.image);
        }
    },
    setup(){
        const myComponent = {
            beforeDistro(){
                URL.revokeObjectURL(this.imageURL);
            }
        }
        return {myComponent}
    }
}
</script>


<template>
  <div>
    <input type="file" name="image" accept="image/*" @change="handleImageInput">
    <img v-if="image" :src="imageURL" alt="User Input Image">
  </div>

</template>
