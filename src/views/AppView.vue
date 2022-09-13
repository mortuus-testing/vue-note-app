<script setup>
import { useStore } from '../stores/store'
import { onMounted, ref} from 'vue'
import { useRouter } from 'vue-router'
import AppFooter from '../components/AppFooter.vue'
import SearchBar from '../components/SearchBar.vue'

const store = useStore()
const router = useRouter()

onMounted(() => {
    if (store.getNotes._rawValue.length == 0) {
        router.push('/')
    }
})
</script>

<script>
export default {
    methods: {
        toggleSearchBar() {
            this.$refs.searchBar.toggle()
        }
    }
}
</script>

<template>
    <div class="view-app">
        <SearchBar ref="searchBar" />
        <h1>APP {{store.getNotes}}</h1>
        <AppFooter @toggleSearchBar="this.toggleSearchBar()"/>
    </div>
</template>