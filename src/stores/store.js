import { ref, computed, toRaw } from 'vue'
import { defineStore } from 'pinia'

export const useStore = defineStore('store', () => {

  // Notes
  const notes = ref([])
  const getNotes = computed(notes)
  async function initNotes() {
    const res = await fetch(import.meta.env.VITE_API_URL)
    const data = await res.json()
    notes.value.push(data.data[0])
  }

  return { notes, getNotes, initNotes}
})
