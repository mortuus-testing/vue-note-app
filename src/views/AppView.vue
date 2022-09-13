<script setup>
import { useStore } from '../stores/store'
import { onMounted, ref} from 'vue'
import { useRouter } from 'vue-router'

const store = useStore()
const router = useRouter()

onMounted(() => {
    if (store.getNotes._rawValue.length == 0) {
        store.initNotes()
    }
})
</script>
<script>
import AppFooter from '../components/AppFooter.vue'
import SearchBar from '../components/SearchBar.vue'
export default {
    components: {
        AppFooter,
        SearchBar
    },
    methods: {
        aaa() {
            this.$refs.searchBar.toggle()
        }
    }
}
</script>


<template>
    <div class="view-app">
        <SearchBar ref="searchBar" />
        <h1>APP {{store.getNotes}}</h1>
        <AppFooter @onToggle="aaa()"/>
    </div>
</template>