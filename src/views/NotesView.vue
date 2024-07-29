<template>
    <div class=" my-5">
        <div class="mb-3">
            <label for="" class="block font-semibold">Message</label>
            <textarea name="" id="" class="w-full resize-none h-40 mt-1 mb-2 p-4 outline-none"
                placeholder="Add New Note" v-model="newNote"></textarea>
            <button :disabled="!newNote"
                class="px-5 py-2 mr-2 text-white text-lg fontmedium bg-green-500 hover:bg-green-400 rounded-md flex items-center justify-end ml-auto"
                @click.prevent="addNote">Add
                New Note</button>

        </div>
        <h1 class="my-3 text-3xl font-semibold">Notes</h1>
        <div class="bg-white shadow-md mb-3  last:mb-0" v-for="note in notes" :key="note.id">
            <div class="px-6 py-4 min-h-8">
                {{ note.content }}
            </div>
            <div class="border-t flex flex-1 items-center justify-between">

                <button class="px-6 py-4 block w-full">Edit</button>
                <button class="px-6 py-4 block w-full">delete</button>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';


const notes = ref([
    { id: 1, content: 'First Note' },
    { id: 2, content: 'Second Note' },
])

const newNote = ref('')

const addNote = () => {
    const randomId = new Date().getTime()
    const note = {
        id: randomId,
        content: newNote.value
    }

    notes.value.unshift(note);
    newNote.value = ''

}
</script>
<style scoped></style>