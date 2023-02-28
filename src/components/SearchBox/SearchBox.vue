<template>
  <input
    type="text"
    class="searchbox"
    placeholder="Search for shows"
    v-model="showSearchQuery"
    tabindex="0"
    @keyup="debounceFunction"
  />
</template>

<script>
import { mapActions } from 'vuex';
import tvShowService from "@/service/tvShowService";
import { HOMEVIEW, SEARCHSHOW } from '@/constants/constants';
import debounce from '@/utils/debounce';

export default {
  name: "SearchBox",
  data() {
    return {
      showSearchQuery: '',
    };
  },
  methods: {
    ...mapActions(['setState']),
    debounceFunction() {
      debounce ( this.getShowsList, 300);
    },
    async getShowsList() {
      if(!this.showSearchQuery){
        this.$router.push({ name: HOMEVIEW });
        return;
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
