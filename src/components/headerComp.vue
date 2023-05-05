<script>
    export default {
        name: "headerComp",
    }

</script>
<template>
    <div class="box">
        <div>
            <img class src="images/yu-gi-oh.png" alt="">
            <span>
            Yu-Gi-Oh! Api
        </span>
        </div> 
    </div>
</template>

<style lang="scss" scooped>
    .box{
        height: 10vh;
        width: 80%;
        margin: 0 auto;
        div {
            height: 100%;
            display: flex;
            align-items: center;
            img {
                height: 200%;
            }
            span {
                font-size: 2rem;
                margin-left: 20px;
            }
        } 
    }
</style>