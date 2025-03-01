<template>
    <section class="container p-5 m-5">
        <h1 class="h1 text-center m-5">
            Fale conosco
        </h1>
        <div class="text-box">
            <b>
                Dúvidas sobre produtos:
            </b>
            <br><br>
            <p>
                Tem perguntas sobre nossos produtos? Estamos aqui para fornecer informações detalhadas, ajudá-lo a
                encontrar o que procura e oferecer orientações sobre nossos itens exclusivos.
            </p>
        </div>
        <div class="text-box">
            <b>
                Assistência com pedidos:
            </b>
            <br><br>
            <p>
                Precisa de ajuda com um pedido ou rastreamento? Nossa equipe de suporte está pronta para auxiliar,
                garantindo que sua experiência de compra seja tranquila e sem complicações.
            </p>
        </div>
        <div class="text-box">
            <b>
                Feedback e Sugestões:
            </b>
            <br><br>
            <p>
                Valorizamos sua opinião. Compartilhe conosco seus comentários, sugestões ou ideias. Queremos crescer com
                você e aprimorar constantemente a Ecommerce para atender às suas expectativas.
            </p>
        </div>
        <div class="text-box text-center">
            <b>
                Como Entrar em Contato Conosco
            </b>
            <br><br>
            <p>
                <b>Whatsapp:</b> (00) 91234-5678
                <br>
                <b>Atendimento SAC:</b> <a href="#" class="text-secondary">contato@ecommerce.com</a>
                <br><br>
                <b>Redes Sociais</b>
                <br>
                Conecte-se conosco nas redes sociais para atualizações, novidades e interações
                diretas. Estamos ativos no Instagram: @ecommerce
            </p>
            <div class="p-5">
                <Form />
            </div>
        </div>
    </section>
</template>

<script>
import Form from '../components/client/Form.vue'

export default {
    name: 'FaleConosco',
    components: {
        Form
    }
};
</script>

<style scoped>
.text-box {
    padding: 1rem 15rem;
}

.text-box>b {
    margin: 0;
}
</style>