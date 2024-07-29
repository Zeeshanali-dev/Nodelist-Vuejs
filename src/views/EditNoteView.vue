<template>
    <div class="my-5">
        <Textarea v-model="noteContent" label="Edit Note">
            <template #button>
                <button :disabled="!noteContent"
                    class="px-5 py-2 mr-2 text-white text-lg fontmedium bg-green-500 hover:bg-green-400 rounded-md flex items-center justify-end ml-auto cursor-pointer"
                    @click.prevent="onNoteSave">Save note</button>
                <button 
                    class="px-5 py-2 mr-2 text-white text-lg fontmedium bg-green-500 hover:bg-green-400 rounded-md flex items-center justify-end ml-auto cursor-pointer"
                    @click.prevent="$router.replace({ name: 'notesview' })">cancel</button>
            </template>
</Textarea>
    </div>
</template>
<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import Textarea from '../components/Layout/Textarea.vue'
import { useNoteStore } from '../Stores/NoteStore'

const route = useRoute()
const router = useRouter()

const notesStore = useNoteStore();
const noteContent = ref('')
noteContent.value = notesStore.getNoteContentById(route.params.id);

const onNoteSave = () => {
    console.log(noteContent.value);
    notesStore.updateNote(route.params.id, noteContent.value)
    router.replace('/')
}
</script>