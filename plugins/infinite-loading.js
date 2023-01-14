import Vue from 'vue';
import InfiniteLoading from 'vue-infinite-loading';

Vue.use(InfiniteLoading, {slots: {noMore: 'Non ci sono più giocatori...'}});