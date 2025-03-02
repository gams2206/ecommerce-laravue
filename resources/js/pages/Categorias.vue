<template>
    <div class="container">
        <header class="text-secondary">
            <div class="d-block p-2">
                <h2>
                    {{ categoria }}
                </h2>
            </div>
            <div class="d-flex align-items-end justify-content-between pt-1">
                <p>Mostrando 1 - 24 de 181 produtos</p>
                <p>Ordenar por: Ordem alfabética, A-Z</p>
            </div>
        </header>
        <div class="cardContainer row justify-content-start gap-y-7 gap-x-9">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
        <footer class="row">
            <div class="col-11 pl-5 text-center">
                1 2 3 4 5 6
            </div>
            <div class="col-1 text-end">
                <button>Próximo ></button>
            </div>
        </footer>
    </div>
</template>

<script>
import Card from '../components/client/Card.vue'

export default {
    name: 'Categorias',
    components: {
        Card
    },
    data() {
        return {
            categoria: this.$route.params.categoria
                .toUpperCase()
                .replace(/-/g, ' '),
            produtos: []
        };
    },
    created() {
        // this.fetchProdutos();
    },
    watch: {
        '$route.params.categoria': function (newCategoria) {
            this.categoria = newCategoria
                .toUpperCase()
                .replace(/-/g, ' ');
            // this.fetchProdutos();
        }
    },
    // methods: {
    //     fetchProdutos() {
    //         // Aqui você faria a requisição para pegar os produtos dessa categoria
    //         fetch(`/api/produtos?categoria=${this.categoria}`)
    //             .then(response => response.json())
    //             .then(data => {
    //                 this.produtos = data;
    //             });
    //     }
    // }
};
</script>

<style scoped>
.container {
    background-color: white;
    border-radius: 1rem;
    box-shadow: 0 0 0.3rem rgb(209, 209, 209);
    margin: 5rem auto;
    align-self: center;
}

header {
    border-bottom: 1px solid rgb(210, 210, 221);
    padding: 1rem;
}

h2 {
    font-size: xx-large;
    font-weight: 500;
}

.cardContainer {
    padding: 3rem 2.6rem;
}

.card {
    width: 15rem;
    flex: 0 0 16%
}

footer {
    border-top: 1px solid rgb(210, 210, 221);
    padding: 1rem;
}
</style>