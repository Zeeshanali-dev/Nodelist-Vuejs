<script setup>
import { RouterLink } from 'vue-router'

</script>
<template>
    <div class=" bg-emerald-400">
        <div class="flex items-center justify-between px-4 py-2 container mx-auto  lg:px-0 ">
            <div class="text-white text-2xl">NoteList</div>
            <div>
                <router-link active-class="!text-black" class="px-3 text-white"
                    :to="{ name: 'notesview' }">Notes</router-link>
                <router-link active-class="!text-black" class="px-3 text-white"
                    :to="{ name: 'statsview' }">Stats</router-link>
            </div>
        </div>
    </div>
</template>
