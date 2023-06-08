<template>
  <div>
    <p class="text-h5">
      Leader Boards
    </p>
    <v-container class="d-flex justify-space-evenly">
      <v-card v-for="(leader, key) in leaders" :key="key" class="pa-5 ma-3">
        {{leader.text}}
      </v-card>
      
    </v-container>
  </div>
</template>

<script>
import { storeToRefs } from 'pinia';
import { useLeaderStore } from '@/stores';
const leaderStore = useLeaderStore();
const { leaders } = storeToRefs(leaderStore);

export default {
  data() {
    return {
      leaders: []
    }
  },
  created() {
    leaderStore.fetch().then(()=>{
      console.log(leaders.value)
      this.leaders = leaders.value
    })
  }
}
</script>