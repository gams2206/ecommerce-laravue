<template>
    <footer class="container-fluid bg-dark">
        <section class="p-3 d-flex">
            <div class="w-100">
                <h5>LINKS</h5>
                <ul class="nav flex-column">
                    <li>
                        <a href="#">Sobre Nós</a>
                    </li>
                    <li>
                        <a href="#">Fale Conosco</a>
                    </li>
                    <li>
                        <a href="#">Politica de Privacidade</a>
                    </li>
                    <li>
                        <a href="#">Prazo de Entrega</a>
                    </li>
                    <li>
                        <a href="#">Politica de Frete</a>
                    </li>
                    <li>
                        <a href="#">Trocas e Devoluções</a>
                    </li>
                </ul>
            </div>
            <div class="w-100">
                <h5>NEWSLETTER</h5>
                <p>
                    Se cadastre para receber cupons<br />
                    exclusívos e ofertas imperdíveis!
                </p>
                <form action="" method="post" class="d-block w-75">
                    <input 
                        type="email" 
                        class="form-control p-3 mb-2" 
                        id="email" 
                        aria-describedby="input email"
                        placeholder="Seu Email"
                    >
                    <button class="btn btn-warning" type="submit">Enviar</button>
                </form>
            </div>
            <div class="w-100">
                <h5>ATENDIMENTO</h5>
                <div class="flex-column">
                    <p>WHATSAPP: +55 XX 91234-5678</p>
                    <p>EMAIL: contato@ecommerce.com.br</p>
                    <p>-----------------------------------------</p>
                    <p>HORÁRIO DE ATENDIMENTO:</p>
                    <p>Seg à Sàb das 9:00h às 21:00h</p>
                </div>
            </div>
            <div class="w-100 d-flex justify-content-end p-3">
                <SocialMedias />
            </div>
        </section>
        <section class="w-100 text-center p-3">
            <h6>Copyright - Ecommerce&copy; | Todos os Direitos Reservados.</h6>
        </section>
    </footer>
</template>

<script>
import SocialMedias from './SocialMedias.vue';

export default {
    name: 'ClientFooter',
    components: {
        SocialMedias
    }
};
</script>

<style scoped>
footer {
    border-style: solid;
    border-width: 7px 0 0 0;
    border-color: #FDB717;
    color: beige;
}

h5 {
    font-size: 12px;
    font-weight: 700;
    margin-bottom: 1rem;
}

li {
    margin-bottom: 0.5rem;
}

li>a {
    text-decoration: none;
    color: aliceblue;
    font-size: medium;
}

li>a:hover {
    color: rgb(173, 179, 184);
    transition: 500ms
}

input {
    font-size: 15px;
}

form>button {
    color: whitesmoke;
    font-size: large;
    padding: 0.5rem 1.5rem;
}

form>button:hover {
    border: solid 3px whitesmoke;
    color: rgb(26, 26, 26);
    background-color: whitesmoke;
    transition: 100ms;
}

.flex-column>p {
    margin: 0.5rem;
}
</style>