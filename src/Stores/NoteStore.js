import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useNoteStore = defineStore("notesStore", () => {
  const notes = ref([
    { id: 1, content: "First Note" },
    { id: 2, content: "Second Note" },
  ]);

  /**
   * *Getter methods
   * */

  const getNoteContentById = computed(() => {
    return (id) => {
      return notes.value.find((note) => note.id == id).content;
    };
  });
  const totalNotesCount = computed(() => {
    return notes.value.length;
  });

  const totalCharacterCount = computed(() => {
    let count = 0;
    for (let note of notes.value) {
      count += note.content.length;
    }

    return count;
  });

  /**
   * *Action Function
   * */

  const addNewNote = (noteContent) => {
    const randomId = new Date().getTime();
    const note = {
      id: randomId,
      content: noteContent,
    };
    notes.value.unshift(note);
  };

  const deleteNote = (idToDelete) => {
    notes.value = notes.value.filter((note) => note.id !== idToDelete);
  };

  const updateNote = (id, content) => {
    const index = notes.value.findIndex((note) => note.id == id);
    notes.value[index].content = content;
  };

  return {
    notes,
    /**
     * *Action Function
     * */
    addNewNote,
    deleteNote,
    updateNote,
    /**
     * *Getter methods
     * */
    getNoteContentById,
    totalNotesCount,
    totalCharacterCount,
  };
});
