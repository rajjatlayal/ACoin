<template>
  <div class="app" :class="$route.meta.showHeaderBg ? 'has-bg' : ''">
    <Header v-if="!$route.meta.hideMenu"></Header>
    <router-view />
    <Footer v-if="!$route.meta.hideMenu"></Footer>
  </div>
</template>
<script>
import { onBeforeMount, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import firebase from "@/firebase";
import { useStore } from "vuex";
import { appSettingsCollection } from "@/firebase";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const store = useStore();

    onBeforeMount(() => {
      firebase.auth().onAuthStateChanged((user) => {
        if (!user) {
          if (route.path == "/admin" || route.path == "/admin/dashboard") {
            router.replace("/admin/login");
          }
        } else if (route.path == "/admin" || route.path == "/admin/login") {
          router.replace("/admin/dashboard");
        }
      });

      appSettingsCollection.onSnapshot((querySnapshot) => {
        querySnapshot.forEach((data) => {
          const settings = data.data();
          const allSettings = {
            coinname: settings.coinname,
            coinaddress: settings.coinaddress,
            bscscansurl: settings.bscscansurl,
            roundstarttime: settings.roundstarttime,
            roundendtime: settings.roundendtime,
            enabledcoin: settings.enabledcoin,
            starttimeunknown: settings.starttimeunknown,
            pankakeswapv2url: settings.pankakeswapv2url,
            poocoinurl: settings.poocoinurl,
            telegramurl: settings.telegramurl,
            telegramannouncementsurl: settings.telegramannouncementsurl,
            roundnumber: settings.roundnumber,
            donations: settings.donations,
            targetdonations: settings.targetdonations,
            roundshistory: settings.roundshistory,
            roundsfeatures: settings.roundsfeatures,
          };
          store.commit("updateData", allSettings);
        });
      });
    });

    return {};
  },
};
</script>

<style lang="scss">
.app {
  &.has-bg {
    background-size: contain;
    background-repeat: no-repeat;
    background-position: top center;
    @media (max-width: $tablet-max) {
      background-image: url("~@/assets/home-bg-mobile.jpg");
    }
    @media (min-width: $desktop) {
      background-image: url("~@/assets/home-bg.jpg");
    }
  }
}
</style>
