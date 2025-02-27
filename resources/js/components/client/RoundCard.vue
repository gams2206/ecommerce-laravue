<template>
    <div class="text-center text-secondary">
        <div>
            <img :src="imgUrl" :alt="describ">
        </div>
        <h3>{{ title }}</h3>
    </div>
</template>

<script>
export default {
    name: 'RoundCard',
    props: {
        title: {
            type: String,
            required: true
        },
        imgUrl: {
            type: String,
            required: true
        },
        describ: {
            type: String,
            required: true
        }
    }
};
</script>

<style scoped>
h3 {
    margin: 1rem 0;
    font-size: medium;
    transition: 700ms;
}

img {
    width: 8.5rem;
    border-radius: 100%;
    transition: 700ms;
}

.text-center:hover img {
    transform: scale(1.2);
    transition: 700ms;
}

.text-center:hover h3 {
    color: rgb(41, 41, 41);
    transition: 700ms;
}
</style>