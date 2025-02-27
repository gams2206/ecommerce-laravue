<template>
    <nav>
        <div class="black text-white d-flex justify-content-around align-items-center">
            <p class="d-inline m-1"><i class="bi bi-box-seam"></i> Envio Grátis Para Todo o Brasil</p>
            <p class="d-inline m-1"><i class="bi bi-cart-x"></i> Trocas e Devoluções em Até 7 Dias</p>
            <p class="d-inline m-1"><i class="bi bi-heart"></i> Parcele Suas Compras Em Até 12x</p>
        </div>
        <div class="bg-dark text-white d-flex justify-content-around align-items-center p-3">
            <a href="#" class="navbar-brand"><img
                    src="https://thumbor.cartpanda.com/a3OPKejaK-Mb9QY_7zmBC7gSMy4=/420x0/https://assets.mycartpanda.com/static/theme_images/1f/32/c2/393465_7970716072.png?v=13252247658"
                    alt="Logo" width="200rem" height="70rem"></a>
            <Search />
            <div class="d-flex gap-3 align-items-center">
                <a href="#" class="link-underline-dark"><i class="bi bi-geo-alt-fill"></i> Rastrear Pedido</a>
                <p style="font-size: xx-large; font-weight: 100;"> | </p>
                <Cart />
            </div>
        </div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#toggler"
                aria-controls="toggler" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="container-fluid collapse navbar-collapse" id="toggler">
                <div class="container">
                    <ul class="navbar-nav d-flex justify-content-evenly w-100">
                        <li class="nav-item">
                            <a class="nav-link" href="#">HOME</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">ACTION FIGURES</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">ROUPAS E ACESSORIOS</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">LUMINARIAS</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">FANTASIAS E COSPLAY</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">CASES E AIRPODS</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </nav>
</template>

<script>
export default {
    name: 'ClientMenu',
};
</script>

<style scoped>
.black {
    background-color: black;
}

.black>p {
    font-size: 0.95rem;
}

li>a {
    font-size: small;
    font-weight: 700;
    color: beige;
    font-family: sans-serif;
}

div>a {
    color: beige;
    font-weight: 400;
    font-size: large;
}

div>p {
    font-size: medium;
}

i {
    font-size: 21px;
}
</style>