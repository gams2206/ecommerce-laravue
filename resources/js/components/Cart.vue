<template>
    <div class="d-flex align-items-center">
        <i class="bi bi-cart-fill h3"></i>
        <i id="quantity">0</i>
        <p>Carrinho</p>
    </div>
</template>

<script>
export default {
    name: 'Cart',
};
</script>

<style scoped>
#quantity {
    position: absolute;
    top: 0px;
    right: 70px;
    background-color: #FDB717;
    padding: 1px 5px;
    border-radius: 15px;
    font-size: 10px;
}

p {
    margin-bottom: 0px;
    font-size: large;
    margin-left: 5px;
}

div {
    position: relative;
    cursor: pointer;
}
</style>