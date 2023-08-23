<template>
    <div class="container mx-auto sm:px4">
        <h1 class="text-center b">Fetch Merk</h1>
        <table class="table-auto">
            <thead>
                <tr>
                    <th class="px-4 py-2">Id</th>
                    <th class="px-4 py-2">Slug</th>
                    <th class="px-4 py-2">Name</th>
                    <th class="px-4 py-2">Logo</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="merk in getMerk.data" :key="merk.id">
                    <td class="border px-4 py-2">{{ merk.id }}</td>
                    <td class="border px-4 py-2">{{ merk.slug }}</td>
                    <td class="border px-4 py-2">{{ merk.name }}</td>
                    <td class="border px-4 py-2">{{ merk.logo }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    computed: {
        ...mapGetters('merk', ['getMerk']),
    },
    methods: {
        ...mapActions('merk', ['fetchMerk']),
    },
    created() {
        this.fetchMerk();
    },
}
</script>