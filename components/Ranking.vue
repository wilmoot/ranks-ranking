<template>
  <section class="ranking">
    <header class="ranking__header">
      <p class="ranking__header-position"></p>
      <p class="ranking__header-el">Nickname:</p>
      <p class="ranking__header-el">Rang:</p>
      <p class="ranking__header-el">Points:</p>
    </header>

    <section class="ranking__content">
      <div class="ranking__bar" v-for="(player, idx) in list" :key="idx">
        <p class="ranking__bar-position">{{idx+1}}.</p>
        <p class="ranking__bar-el">{{player.name}}</p>
        <p class="ranking__bar-el"><img class="ranking__bar-rang" v-tooltip.left="`${player.stats[roomId].rank}`"
            :src="require(`../assets/images/${player.stats[roomId].rank}.svg`)" alt="Gold"></p>
        <p class="ranking__bar-el">{{player.stats[roomId].points}}</p>
      </div>
      <infinite-loading :identifier="infiniteId" @infinite="infiniteHandler"></infinite-loading>
    </section>

  </section>
</template>

<script>

  import axios from 'axios';

  const api = 'https://room.futlife.me/api/stats/sort';

  export default {
    name: 'Ranking',
    components: [],
    data() {
      return {
        page: 0,
        list: [],
        infiniteId: +new Date(),
      };
    },
    computed: {
      roomId() {
        return this.$store.state.roomId
      }
    },
    watch:{
        roomId(){
            this.changeType();
        }
    },
    methods: {

      async infiniteHandler($state) {
        const lazyRequest = await axios.get(api, {
          params: {
            roomId: this.$store.state.roomId,
            pageNumber: this.page,
          }
        });

        const data = lazyRequest.data;

        if (data.length) {
          this.page += 1;
          this.list.push(...data);
          $state.loaded();
        } else {
          $state.complete();
        }
      },

      changeType(){
          this.page = 0;
          this.list = [];
          this.infiniteId += 1;
      }
    }
  }

</script>
