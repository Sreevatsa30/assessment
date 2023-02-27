<template>
    <!-- <div v-if="tvShowsList?.length">
        {{ tvShowsList }}
        <PopularShows 
          :showList="tvShowsList"
        />
    </div> -->
    <div v-for="genre in genres" :key="genre">
        <PopularShows
          :showList="sortedList[genre]"
          :title="genre"
        />
    </div>
</template>

<script>
import PopularShows from "@/components/PopularShows/PopularShows.vue";
import tvShowService from '@/service/tvShowService';
// import { mapState } from 'vuex';

export default {
    name: 'HomeView',
    components: {
        PopularShows,
    },
    data() {
        return {
          sortedList: [],
          genres: ['Action', 'Comedy','Crime','Drama'],
        };
    },
    // methods: {
    //     ...mapState(['tvShowsList']),
    // },
    async mounted() {
        const allShowsList = await tvShowService.getAllShows();
        this.genres.forEach((genre) => {
            this.sortedList[genre] = allShowsList.filter(show => {
                return show.genres.includes(genre) && show.rating.average > 8.5;
            })
        })
    },
}
</script>
