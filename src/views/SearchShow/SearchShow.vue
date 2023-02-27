<template>
  <div class="div" v-if="tvShowsList.length">
    <ShowDetail />
  </div>
  <div v-else class="nodata">
    <h3>Sorry! We could'nt find what you are looking for :'</h3>
  </div>
</template>

<script>
import ShowDetail from "@/components/ShowDetail/ShowDetail.vue";
import { mapState } from 'vuex';

export default {
  name: "SearchShow",
  computed: {
    ...mapState(['tvShowsList']),
  },
  components: {
    ShowDetail,
  },
};
</script>
