<template>
  <div class="wrapper">
    <div class="container">
      <div class="learnmore-content section subpage">
        <div class="section purpose-container">
          <Title title="Feature 1" sub="Connecting Metamask"></Title>
          <div class="feature-desc">
            For the first feature of the official website, we will be allowing
            users to connect their Metamask wallet. Since this is the main
            wallet the team uses right now we chose this, but in future reports
            we will add other common wallets like Trust Wallet.
          </div>
          <div class="video">
            <iframe
              src="https://www.youtube.com/embed/sY_Td7_vJZE"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, toRef, computed } from "vue";
import { useStore } from "vuex";

import Title from "@/components/atomic/Title.vue";

export default {
  components: {
    Title,
  },
  setup() {
    const store = useStore();
    const settings = toRef(store.state, "settings");
  },
};
</script>
<style lang="scss" scoped>
.purpose-container {
  .illustration {
    max-width: 280px;
    margin: 0 auto 50px auto;
    svg {
      width: 100%;
      height: 117px;
    }
  }
}
.feature-desc {
  max-width: 790px;
  color: #d0cdd6;
  margin: 0 auto;
  line-height: 28px;
  text-align: center;
  span {
    font-weight: bold;
  }
}
.video {
  position: relative;
  padding-top: 56.25%;
  margin-top: 70px;
  iframe {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>
