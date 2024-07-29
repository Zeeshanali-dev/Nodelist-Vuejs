<template>
    <div class="bg-white shadow-md mb-3 last:mb-0">
        <div class="px-6 py-4 min-h-8">
            {{ note.content }}
        </div>
        <div class="text-right text-gray-400 px-6">
            <small>{{ characterLength }}</small>
        </div>
        <div class="border-t flex flex-1 items-center justify-between">
            <router-link class="px-6 py-4 block w-full felx items-center justify-center text-center"
                :to="{ name: 'editNote', params: { id: note.id } }">Edit</router-link>
            <button class="px-6 py-4 block w-full" @click.prevent="handleDeleteClick">Delete</button>
        </div>

    </div>
</template>

<script setup>
import { computed, reactive } from "vue";
import { useNoteStore } from '../../Stores/NoteStore';

const props = defineProps({
    note: {
        type: Object,
        required: true,
    },
});

const notesStore = useNoteStore();

const characterLength = computed(() => {
    const noteLength = props.note.content.length;
    return `${noteLength} character${noteLength !== 1 ? 's' : ''}`;
});

const handleDeleteClick = () => {

    notesStore.deleteNote(props.note.id);
};


</script>