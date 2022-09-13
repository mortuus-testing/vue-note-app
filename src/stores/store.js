import { ref, computed, toRaw } from 'vue'
import { defineStore } from 'pinia'

export const useStore = defineStore('store', () => {

  // Notes
  const notes = ref([])
  const getNotes = computed(() => notes)
  async function initNotes() {
    const res = await fetch(import.meta.env.VITE_API_URL)
    const res_json = await res.json()
    notes.value = res_json.data
  }

  return { notes, getNotes, initNotes}
})
