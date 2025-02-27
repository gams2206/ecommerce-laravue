<template>
  <a :href="zapUrl">
    <div>
      <i class="bi bi-whatsapp"></i> Fale Conosco Pelo Whatsapp!
    </div>
  </a>
</template>

<script>
export default {
  name: 'ZapBtn',
  props: {
    zapUrl: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
div {
  color: whitesmoke;
  background-color: #25d366;
  padding: 0.5rem;
  border-radius: 0.5rem;
  transition: 500ms;
}

div:hover {
  transform: scale(1.05);
  background-color: #38ff81;
  transition: 500ms;
}

a {
  text-decoration: none;
}
</style>