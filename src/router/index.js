import NotesView from "@/views/NotesView.vue";
import StatsView from "@/views/statsView.vue";
import EditNoteView from "@/views/EditNoteView.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: NotesView, name: "notesview" },
  { path: "/edit-note/:id", component: EditNoteView, name: "editNote" },
  { path: "/stats", component: StatsView, name: "statsview" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
