<template>
  <div class="wrapper">
    <div class="container">
      <div class="section round-features">
        <Title
          title="This round’s features"
          sub="Features will vary per round."
        ></Title>
        <div
          class="rounds-features"
          v-html="$store.state.settings.roundsfeatures"
        ></div>
      </div>
    </div>
  </div>
</template>
<script>
import Title from "@/components/atomic/Title.vue";
export default {
  components: {
    Title,
  },
  setup() {
    return {};
  },
};
</script>
<style lang="scss">
.rounds-features {
  .feature {
    padding: 30px 35px;
    background: #1c1c2c;
    border-radius: 20px;
    margin-bottom: 20px;
  }
  .title {
    font-weight: bold;
    font-size: 24px;
    margin-bottom: 10px;
  }
  .description {
    color: #b4afbc;
    line-height: 28px;
    a {
      color: white;
    }
  }
  .bullet {
    list-style: disc;
    padding-left: 18px;
  }
  .times {
    padding: 8px 0;
    li {
      display: inline-block;
      border: 1px solid #f1ab3d;
      border-radius: 8px;
      font-size: 16px;
      color: #f1ab3d;
      padding: 1px 12px;
      &:not(:last-child) {
        margin-right: 10px;
      }
    }
  }
  .tip {
    font-size: 14px;
    color: #766a87;
  }
}
</style>
