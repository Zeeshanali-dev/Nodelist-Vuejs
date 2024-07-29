<template>
    <div class=" my-5">
        <Textarea v-model="newNote">
            <template #button>
                <button :disabled="!newNote"
                    class="px-5 py-2 mr-2 text-white text-lg fontmedium bg-green-500 hover:bg-green-400 rounded-md flex items-center justify-end ml-auto"
                    @click.prevent="addNote">Add
                    New Note</button>
            </template>
</Textarea>
        <h1 class="my-3 text-3xl font-semibold">Notes</h1>
        <SingalNote v-for="note in notes" :key="note.id" :note="note" />

    </div>
</template>
<script setup>
import Textarea from '@/components/Layout/Textarea.vue';
import { storeToRefs } from 'pinia';
import { ref, watch } from 'vue';
import SingalNote from '../components/Notes/SingalNote.vue'
import { useNoteStore } from '../Stores/NoteStore'


const notesStore = useNoteStore()
const { notes } = storeToRefs(notesStore)
const newNote = ref('')

const addNote = () => {
    notesStore.addNewNote(newNote.value)
    newNote.value = ''

}

watch(newNote, (newValue, oldValue) => {
    if (newValue.length == 100) {
        alert("sorry!! Only 100 Cahrarcter ara allowed")
        return
    }
})


</script>
<style scoped></style>