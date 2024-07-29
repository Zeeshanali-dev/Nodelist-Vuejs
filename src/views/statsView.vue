<template>
    <div>
        <table class="w-full bg-white border p-4 text-center">
            <thead class="border">
                <tr>
                    <th class="p-2">Stat</th>
                    <th class="p-2">Value</th>
                </tr>
            </thead>
            <tbody class="">
                <tr class="border-b ">
                    <td class="py-2">Total Notes Count</td>
                    <td class="py-2">{{ notesCount }}</td>
                </tr>
                <tr>
                    <td class="py-2">Total character count</td>
                    <td class="py-2">{{ totalCharacterCount }} </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script setup>
import { useNoteStore } from '../Stores/NoteStore'

const notesStore = useNoteStore();

const notesCount = notesStore.totalNotesCount
const totalCharacterCount = notesStore.totalCharacterCount
</script>
<style scoped></style>