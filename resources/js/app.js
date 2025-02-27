import './bootstrap';
import { createApp } from 'vue';

import Home from './pages/Home.vue';
import Rastreio from './pages/Rastreio.vue';

import Menu from './components/client/Menu.vue';
import Cart from './components/client/Cart.vue';
import Search from './components/client/Search.vue';
import Footer from './components/client/Footer.vue';
import SocialMedias from './components/client/SocialMedias.vue';
import BannerCarousel from './components/client/BannerCarousel.vue';
import MiniBanner from './components/client/MiniBanner.vue';
import Banner from './components/client/Banner.vue';
import SectionTitle from './components/client/SectionTitle.vue';
import RoundCard from './components/client/RoundCard.vue';
import Card from './components/client/Card.vue';
import ZapBtn from './components/client/ZapBtn.vue';
import CargoSearch from './components/client/CargoSearch.vue';

const app = createApp();

app.component('Home', Home);
app.component('Rastreio', Rastreio)

app.component('Menu', Menu);
app.component('Cart', Cart);
app.component('Search', Search);
app.component('Footer', Footer);
app.component('SocialMedias', SocialMedias);
app.component('BannerCarousel', BannerCarousel);
app.component('MiniBanner', MiniBanner);
app.component('Banner', Banner);
app.component('SectionTitle', SectionTitle);
app.component('RoundCard', RoundCard);
app.component('Card', Card);
app.component('ZapBtn', ZapBtn);
app.component('CargoSearch', CargoSearch);
app.mount('#app');
