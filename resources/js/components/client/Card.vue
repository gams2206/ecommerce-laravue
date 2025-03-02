<template>
  <div class="m-2 bg-white shadow card">
    <div class="mb-2">
      <img src="https://thumbor.cartpanda.com/xWVFAm48DNRo6ASHhgH24edOpfg=/https://assets.mycartpanda.com/static/products_images/5lVQ0twKWYB0dJRWZhbTNrkqDhjCsm.jpg?v=13252247658" alt="">
      <p>34% OFF</p>
    </div>
    <h4 class="text-secondary">
      Colar Portgas D. Ace®
    </h4>
    <span class="text-center">
      <div class="d-flex align-items-end">
        R$ 64,90 <div class="text-decoration-line-through text-secondary">R$ 97,90</div>
      </div>
      <div class="text-start text-secondary">
        ou 12x de R$ 6,57
      </div>
    </span>
    <button>
      Ver Produto
    </button>
  </div>
</template>

<script>
export default {
  name: 'Card',
};
</script>

<style scoped>
.shadow {
  border-radius: 15px;
  padding: 1.2rem;
  position: relative;
}

p {
  font-size: small;
  position: absolute;
  top: 0.7rem;
  left: 0.7rem;
  background-color: #FDB717;
  border-radius: 0.3rem;
  padding: 1px 0.3rem;
  color: white;
}

img {
  height: 100%;
  width: 100%;
  border-radius: 15px;
}

h4 {
  font-size: small;
  margin-bottom: 1.5rem;
}

span {
  font-size: larger;
}

.text-decoration-line-through {
  font-size: small;
  padding: 1px;
}

.text-start {
  font-size: small;
}

button {
  color: #FDB717;
  border: solid 2px #FDB717;
  border-radius: 5px;
  padding: 0.5rem;
  background-color: white;
  font-size: small;
  width: 100%;
  margin: 2rem 0 0 0;
}
</style>