<template>
    <div class="d-flex align-items-center cart">
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
    top: -7px;
    right: 65px;
    background-color: #FDB717;
    padding: 1px 7px;
    border-radius: 15px;
    font-size: 12px;
    transition: 200ms;
}

p {
    margin-bottom: 0px;
    font-size: large;
    margin-left: 5px;
}

.cart {
    position: relative;
    cursor: pointer;
}

.cart:hover #quantity {
    font-size: 14px;
    transition: 200ms;
}
</style>