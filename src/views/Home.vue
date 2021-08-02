<template>
  <Hero
    :isStartingCoin="isStartingCoin"
    :isinProgressCoin="isinProgressCoin"
  ></Hero>
  <DataTable></DataTable>
  <!-- <TableLite></TableLite> -->
  <Intro
    :isStartingCoin="isStartingCoin"
    :isinProgressCoin="isinProgressCoin"
  ></Intro>
  <Features></Features>
  <Donate></Donate>
  <Contact></Contact>
</template>

<script lang="ts">
import { computed, ref, toRef, onBeforeMount } from "vue";
import { useStore } from "vuex";
import firebase from "@/firebase";

import Hero from "@/components/Hero.vue";
// import TableLite from "@/components/TableLite.vue";
import DataTable from "@/components/DataTable.vue";
import Intro from "@/components/Intro.vue";
import Features from "@/components/Features.vue";
import Donate from "@/components/Donate.vue";
import Contact from "@/components/Contact.vue";

export default {
  
  components: {
    Hero,
    // TableLite,
    DataTable,
    Intro,
    Features,
    Donate,
    Contact,
  },
  setup() {
    const store = useStore();
    const settings = toRef(store.state, "settings");
    const enabledCoin = computed(() => store.getters.enabledcoin);
    const isStartingCoin = computed(() => store.getters.isStartingCoin);
    const isinProgressCoin = computed(() => store.getters.isinProgressCoin);
    const isAdminLogged = ref(false);
    onBeforeMount(() => {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          isAdminLogged.value = true;
        }
      });
    });

    return {
      isAdminLogged,
      enabledCoin,
      isStartingCoin,
      isinProgressCoin,
    };
  },
};
</script>
