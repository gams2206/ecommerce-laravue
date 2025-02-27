<template>
    <div class="text-center p-5">
        <h1>Insira seu código de rastreio abaixo.</h1>
        <div class="d-flex justify-content-center">
            <form class="d-flex p-5 gap-2 text-secondary" action="">
                <input class="form-control" type="text" id="inputText" v-model="inputValue"
                    @input="transformToUpperCase" @keydown="validateInput">
                <button class="btn btn-lg btn-warning">Rastrear</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CargoSearch',
    data() {
        return {
            inputValue: '',
        };
    },
    methods: {
        transformToUpperCase() {
            this.inputValue = this.inputValue.toUpperCase();
        },
        validateInput(event) {
            const tecla = event.key;
            const padrao = /^[a-zA-Z0-9]$/;

            if (!padrao.test(tecla) && tecla !== 'Backspace') {
                event.preventDefault();
            }
        },
    },
};
</script>

<style scoped>
.text-center>div {
    transform: scale(1.3);
}

h1 {
    font-size: 1.3rem;
    transform: scale(1.3);
}

.form-control {
    color: rgba(150, 150, 150, 0.7);
    font-size: larger
}

button {
    color: beige;
    background-color: #FDB717;
}

button:hover {
    color: beige;
}
</style>