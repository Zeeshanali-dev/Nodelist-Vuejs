<template>
    <div class="mb-3">
        <label for="" class="block font-semibold">{{ props.label }}</label>
        <textarea name="" id="" maxlength="100" class="w-full resize-none h-40 mt-1 mb-2 p-4 outline-none"
            placeholder="Add New Note" :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"></textarea>

        <slot name="button" />

    </div>
</template>
<script setup>
const props = defineProps({
    modelValue: {
        type: String,
        required: true
    },
    label: {
        type: String,
        default: 'ADD NOTE'
    }
});
const emit = defineEmits(['update:modelValue']);
</script>