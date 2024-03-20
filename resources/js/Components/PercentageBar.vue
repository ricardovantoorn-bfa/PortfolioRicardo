<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue';

const props = defineProps({
    percentage: {
        type: Number,
        required: true,
    },
    skillname: {
        type: String,
        required: true,
    },
});

</script>
<template>
    <div class="flex items-center mb-2">
        <span class="mr-2">{{ skillname }}</span>
        <div class="w-full h-2 bg-gray-400 rounded-full overflow-hidden">
            <div class="h-full bg-blue-500" :style="{ width: percentage + '%' }"></div>
        </div>
        <span class="ml-2">{{ percentage }}%</span>
    </div>
</template>
