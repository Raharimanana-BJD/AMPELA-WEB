<template>
    <button id="toggle-menu" class="md:hidden flex focus:outline-none" @click="toggleMenu">
        <svg class="w-6 h-6 text-neutral-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
    </button>
</template>

<script>
export default {
    name: "Hamburger",
    methods: {
        toggleMenu() {
            this.menuOpen = !this.menuOpen;
        },
    },
};
</script>