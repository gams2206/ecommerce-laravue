<template>
    <div class="d-flex justify-content-between align-items-end p-3 text-secondary">
        <h2>
            {{ title }}
        </h2>
        <a :href="pgLink">
            Ver Todos
        </a>
    </div>
</template>

<script>
export default {
    name: 'SectionTitle',
    props: {
        title: {
            type: String,
            required: true
        },
        pgLink: {
            type: String,
            default: "#"
        }
    }
};
</script>

<style scoped>
h2 {
    font-size: x-large;
}

a {
    color: grey;
    transition: 500ms;
    text-decoration: none;
    font-size: medium;
    font-weight: 400;
}

a:hover {
    color: rgb(41, 41, 41);
    transform: scale(1.2);
    font-weight: 600;
    transition: 500ms;
}
</style>