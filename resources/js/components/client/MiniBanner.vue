<template>
    <a href="#">
        <div class="banner" @mouseover="showBtn = true" @mouseleave="showBtn = false"
            :style="{ backgroundImage: 'url(\'' + imageUrl + '\')' }">
            <div class="overlay"></div>
            <div class="content">
                <h2>{{ title }}</h2>
                <p>{{ description }}</p>
            </div>
            
                <button v-if="showBtn" class="btn btn-outline text-white">
                    Clique Para Explorar
                </button>
        </div>
    </a>
</template>

<script>
export default {
    name: "MiniBanner",
    data() {
        return {
            showBtn: false,
        };
    },
    props: {
        title: { type: String },
        description: { type: String },
        imageUrl: { type: String,
            required: true
        }
    }
}
</script>

<style scoped>
.banner {
    position: relative;
    width: 100%;
    height: 100%;
    background-size: 100%;
    background-position: center;
    display: flex;
    justify-content: start;
    align-items: start;
    border-radius: 1rem;
    transition: background-size 0.7s ease;
}

.banner:hover {
    background-size: 120%;
    transition: background-size 0.7s ease;
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 1rem;
}

.content {
    position: relative;
    color: white;
    font-size: 24px;
    text-align: start;
    z-index: 1;
    padding: 1.5rem;
}

a {
    text-decoration: none;
}

h2 {
    font-size: larger;
}

p {
    font-size: large;
}

button {
    position: absolute;
    bottom: 0.9rem;
    right: 0.9rem;
    opacity: 0.9;
}
</style>