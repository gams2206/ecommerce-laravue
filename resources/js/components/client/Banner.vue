<template>
    <div class="banner">
        <img :src="imgUrl" :alt="describ" class="banner-img">
    </div>
</template>

<script>
export default {
    name: "MiniBanner",
    props: {
        imgUrl: {
            type: String,
            required: true
        },
        describ: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
.banner {
    margin: 3rem 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1rem;
    position: relative;
}

.banner-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* Garante que a imagem ocupe toda a área do contêiner */
    border-radius: 1rem;
    /* Caso deseje que a imagem também tenha bordas arredondadas */
}
</style>
