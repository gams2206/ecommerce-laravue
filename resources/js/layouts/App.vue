<template>
  <div>
    <Menu />
    <RouterView />
    <CookieBar class="cookieBar" />
    <Footer />
    <div class="zap">
      <ZapBtn 
        zapUrl="https://google.com"
      />
    </div>
  </div>
</template>

<script>
import Menu from '../components/client/Menu.vue';
import Footer from '../components/client/Footer.vue';
import ZapBtn from '../components/client/ZapBtn.vue';
import CookieBar from '../components/client/CookieBar.vue';

export default {
  name: 'App',
  components: {
    Menu,
    ZapBtn,
    CookieBar,
    Footer
  }
};
</script>

<style scoped>
.zap {
  position: fixed;
  bottom: 5rem;
  right: 1.5rem;
  z-index: 1;
}

.cookieBar {
  position: fixed;
  left: 50%;
  bottom: 1.3rem;
  z-index: 1;
}
</style>