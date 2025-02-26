import './bootstrap';

import { createApp } from 'vue';
import Home from './pages/Home.vue';
import ClientMenu from './components/ClientMenu.vue';
import Cart from './components/Cart.vue';
import ClientSearch from './components/ClientSearch.vue';
import ClientFooter from './components/ClientFooter.vue';
import SocialMedias from './components/SocialMedias.vue';
import BannerCarousel from './components/BannerCarousel.vue';
import MiniBanner from './components/MiniBanner.vue';
import Banner from './components/Banner.vue';
import SectionTitle from './components/SectionTitle.vue';
import RoundCard from './components/RoundCard.vue';
import Card from './components/Card.vue';
import ZapBtn from './components/ZapBtn.vue';

const app = createApp();

app.component('Home', Home);
app.component('ClientMenu', ClientMenu);
app.component('Cart', Cart);
app.component('ClientSearch', ClientSearch);
app.component('ClientFooter', ClientFooter);
app.component('SocialMedias', SocialMedias);
app.component('BannerCarousel', BannerCarousel);
app.component('MiniBanner', MiniBanner);
app.component('Banner', Banner);
app.component('SectionTitle', SectionTitle);
app.component('RoundCard', RoundCard);
app.component('Card', Card);
app.component('ZapBtn', ZapBtn);
app.mount('#app');
