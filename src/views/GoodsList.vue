<template>
    <div>
        这是商品列表页面
        <span>{{ $route.params.goodsId }}</span>
        <router-link to="/goods/title">显示商品标题</router-link>
        <router-link to="/goods/img">显示商品图片</router-link>
        <div>
            <router-view></router-view>
        </div>
        <!-- <router-link to="/cart">跳转到购物车界面</router-link> -->
        <!-- <button @click="jump">button----跳转购物车</button> -->
        <router-link v-bind:to="{name: 'cart', params: {cartId:123}}">跳转到购物车界面</router-link>
    </div>
</template>
<style>
</style>
<script>
    export default{
        data() {
            return {
                msg:"hello vue"
            }
        },
        methods:{
            jump(){
                // this.$router.push("/cart");
                this.$router.push({path:'/cart?goodsId=123'});
            }
        }
    }
</script>