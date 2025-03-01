<template>
    <form>
        <h2 class="h5 text-secondary py-5">Preencha o formulário abaixo</h2>
        <div class="row">
            <div class="col">
                <input type="text" class="form-control" placeholder="Nome">
            </div>
            <div class="col">
                <input type="email" class="form-control" placeholder="Email">
            </div>
        </div>
        <div class="form-group py-3">
            <textarea class="form-control" placeholder="Sua Mensagem" id="textArea" rows="7"></textarea>
        </div>
        <div class="text-start">
            <button type="submit">Envia Mensagem</button>
        </div>
    </form>
</template>

<script>
export default {
    name: 'Form',
};
</script>

<style scoped>
button {
    border: 2px solid #FDB717;
    color: #FDB717;
    font-weight: 400;
    font-size: medium;
    padding: 1rem 2rem;
    border-radius: 0.5rem;
}
</style>