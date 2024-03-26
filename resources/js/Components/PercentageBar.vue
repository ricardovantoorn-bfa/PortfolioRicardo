<script setup>
import { defineProps, onMounted, onUnmounted, ref } from 'vue';

const props = defineProps({
    percentage: {
        type: Number,
        required: true,
    },
    skillname: {
        type: String,
        required: true,
    },
    // Voeg een data-attribuut toe om het huidige aantal te volgen
    count: {
        type: Number,
        default: 0,
    },
});

let interval;
const computedPercentage = ref(props.count);
onMounted(() => {
    interval = setInterval(() => {
        if (computedPercentage.value < props.percentage) {
            computedPercentage.value++;
        } else {
            clearInterval(interval); 
        }
    }, 15); 
});

onUnmounted(() => {
    clearInterval(interval);
});
</script>


<template>
    <div class="flex items-center mb-2">
        <span class="mr-2">{{ skillname }}</span>
        <div class="w-full h-2 bg-gray-400 rounded-full overflow-hidden">
            <div class="h-full bg-blue-500" :style="{ width: computedPercentage + '%' }"></div>
        </div>
        <span class="ml-2">{{ computedPercentage }}%</span>
    </div>
</template>
