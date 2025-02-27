<template>
  <div>
    <Menu />
    <RouterView />
    <Footer />
  </div>
</template>

<script>
import Menu from '../components/client/Menu.vue';
import Footer from '../components/client/Footer.vue';

export default {
  name: 'App',
  components: {
    Menu,
    Footer
  }
};
</script>