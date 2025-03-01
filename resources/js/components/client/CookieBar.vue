<template>
    <div v-if="!cookiesAccepted" class="cookie-modal d-flex align-items-center text-start">
        <div class="px-3">
            <p class="text-secondary">
                Utilizamos cookies para melhorar nosso site e sua experiência de compra. Ao continuar navegando em nosso
                site, <b>você está de acordo conforme nossa política quando a utilização de cookies.</b>
            </p>
        </div>
        <div>
            <button @click="acceptCookies">Entendi e Fechar</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CookieBar',
    data() {
        return {
            cookiesAccepted: localStorage.getItem('cookiesAccepted') === 'true'
        };
    },
    methods: {
        acceptCookies() {
            localStorage.setItem('cookiesAccepted', 'true');
            this.cookiesAccepted = true;
        }
    }
};
</script>

<style scoped>
.cookie-modal {
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background-color: white;
    padding: 1rem;
    border-radius: 5px;
    text-align: center;
    font-size: small;
    min-width: 65%;
}

button {
    font-size: medium;
    padding: 0.5rem 1rem;
    border-radius: 0.3rem;
    min-width: 10rem;
    background-color: #FDB717;
    color: white;
    transition: 500ms;
}

button:hover {
    color: black;
    transform: scale(1.05);
    transition: 500ms;
}
</style>