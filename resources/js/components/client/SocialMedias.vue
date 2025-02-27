<template>
    <div class="flex-column">
        <small>Siga-nos</small>
        <div>
            <a href="#"><i class="bi bi-facebook"></i></a>
            <a href="#"><i class="bi bi-instagram"></i></a>
            <a href="#"><i class="bi bi-twitter-x"></i></a>
            <a href="#"><i class="bi bi-youtube"></i></a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SocialMedias',
};
</script>

<style scoped>
.flex-column>div{
    padding-top: 1rem;
}

i {
    font-size: large;
    background-color: grey;
    color: rgb(48, 48, 48);
    border-radius: 15px;
    padding: 5px 8px;
    margin-right: 5px;
}

i:hover {
    background-color: rgb(202, 201, 201);
    transition: 500ms;
}
</style>