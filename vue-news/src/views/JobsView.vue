<template>
  <div>
    <list-item></list-item>
    <!-- <ul class="jobs-list">
      <li v-for="job in this.$store.state.jobs" class="post">
        <div>
          <p class="jobs-title">
            <a :href="job.url">{{ job.title }}</a>
          </p>
          <small class="link-text">
            {{ job.time_ago }} by
            <a :href="job.url">{{ job.domain }}</a>
          </small>
        </div>
      </li>
    </ul> -->
  </div>
</template>

<script>
import ListItem from "../components/ListItem.vue";
import ListMixin from "../mixins/ListMixin.js";

export default {
  components: {
    ListItem: ListItem
  },
  mixins: [ListMixin],
  // created() {
  //   bus.$emit("start:spinner");
  //   this.$store.dispatch("FETCH_JOBS")
  //     .then(() => {
  //       console.log("fetched");
  //       bus.$emit("end:spinner");
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }
};
</script>


