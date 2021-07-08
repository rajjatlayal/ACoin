<template>
  <div class="title-section">
    <h1 class="title">{{ title }}</h1>
    <div class="sub">{{ sub }}</div>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    sub: String,
  },
  setup() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.title-section {
  text-align: center;
  margin-bottom: 90px;
}
.title {
  font-weight: bold;
  font-size: 42px;
  margin-bottom: 8px;
}
.sub {
  font-size: 18px;
  color: $secondary-color;
}
</style>
