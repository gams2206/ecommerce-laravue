<template>
    <section>
        <div id="carousel" class="carousel slide carousel-fade" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="d-block w-100"
                        src="https://thumbor.cartpanda.com/QXTNZCzlQff7ZjD1le7v21N35kM=/https://assets.mycartpanda.com/static/theme_images/1f/32/c2/393465_6749722361.png?v=13252247658"
                        alt="Primeiro Slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100"
                        src="https://thumbor.cartpanda.com/scWz79grHkJiPZs1roN-6cHnrsk=/https://assets.mycartpanda.com/static/theme_images/1f/32/c2/393465_7731269641.png?v=13252247658"
                        alt="Segundo Slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100"
                        src="https://thumbor.cartpanda.com/I5wKLQNz907kTp83tAzSVe3wQHk=/https://assets.mycartpanda.com/static/theme_images/1f/32/c2/393465_9693632147.png?v=13252247658"
                        alt="Terceiro Slide">
                </div>
            </div>
            <div class="carousel-indicators">
                <button class="active" type="button" data-bs-target="#carousel" data-bs-slide-to="0" aria-label="Slide 1">

                </button>
                <button type="button" data-bs-target="#carousel" data-bs-slide-to="1" aria-label="Slide 2">

                </button>
                <button type="button" data-bs-target="#carousel" data-bs-slide-to="2" aria-label="Slide 3">
                    
                </button>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'BannerCarousel',
};
</script>

<style scoped>
img {
    border-radius: 0.75rem;
}

.carousel-indicators>button {
    width: 0.7rem;
    height: 0.7rem;
    border-radius: 100%;
    margin: auto 0.75rem;
}
</style>