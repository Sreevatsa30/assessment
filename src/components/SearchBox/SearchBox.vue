<template>
  <input
    type="text"
    class="searchbox"
    placeholder="Search for shows"
    v-model="showSearchQuery"
    tabindex="0"
    @keyup="getShowsList"
  />
</template>

<script>
import { mapActions } from 'vuex';
import tvShowService from "@/service/tvShowService";
import { HOMEVIEW, SEARCHSHOW } from '@/constants/constants';

export default {
  name: "SearchBox",
  data() {
    return {
      showSearchQuery: '',
    };
  },
  methods: {
    ...mapActions(['setState']),
    async getShowsList() {
      if(this.searchShowQuery === ''){
        this.$router.push({ name: HOMEVIEW });
      }
      const list = await tvShowService.getList(this.showSearchQuery);
      this.setState({
        stateName: 'tvShowsList',
        value: list
      });
      this.$router.push({ name: SEARCHSHOW });
    },
  },
};
</script>
