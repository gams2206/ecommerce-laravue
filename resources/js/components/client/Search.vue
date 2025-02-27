<template>
    <form class="form-inline d-flex">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
        <i class="bi bi-search h4"></i>
    </form>
</template>

<script>
export default {
    name: 'Search',
};
</script>

<style scoped>
i {
    position: absolute;
    top: 3px;
    right: 10px;
    color: black;
    cursor: pointer;
}

form {
    position: relative;
}

input {
    width: 40rem;
}
</style>