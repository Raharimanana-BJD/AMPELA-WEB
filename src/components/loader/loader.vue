<template>
    <div v-if="isLoading"
        class="flex items-center justify-center h-screen w-full bg-neutral-200 absolute top-0 bottom-0 left-0 right-0 z-50">
        <img src="/loader.png" alt="Logo">
    </div>
</template>

<script>
export default {
    name: "loader",
    props: {
        isLoading: {
            type: Boolean,
            default: false
        }
    }
}
</script>
