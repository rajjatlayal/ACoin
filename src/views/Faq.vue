<template>
  <div class="wrapper">
    <div class="container">
      <div class="faq-content section subpage">
        <Title :title="sectionTitle" :sub="sectionSub"></Title>
        <div
          class="entry"
          v-for="(question, i) in questions"
          :key="question.id"
          :class="question.active ? 'active' : ''"
        >
          <div class="title" @click="toggleQuestion(i)">
            {{ question.title }}
          </div>
          <div class="desc" v-if="question.active">
            {{ question.description }}
          </div>
        </div>
      </div>
    </div>
  </div>
  <Contact></Contact>
</template>

<script>
import { ref, toRef, computed } from "vue";
import { useStore } from "vuex";

import Contact from "@/components/Contact.vue";
import Title from "@/components/atomic/Title.vue";

export default {
  components: {
    Contact,
    Title,
  },
  setup() {
    const store = useStore();
    const settings = toRef(store.state, "settings");
    const questions = ref([
      {
        id: 0,
        title: "Is this a rug pull?",
        description:
          "Yes. This is 100% a rug pull. The point of this game is to pump and participate in the mechanics then dump before the rug pull.",
        active: false,
      },
      {
        id: 1,
        title: "When is the token live?",
        description:
          "It is unknown to everyone unless there is a visible countdown on the website.",
        active: false,
      },
      {
        id: 2,
        title: "Is this safe?",
        description:
          "It’s completely safe if you understand how it works. There is no proxy in the contract and it’s not pausable. Ownership is also renounced and liquidity is locked until it is time for the rug pull.",
        active: false,
      },
      {
        id: 3,
        title: "Where can I buy?",
        description:
          "Once the website says the token is live, you can click the “buy here” button on the homepage and it will take you directly to Pancakeswap where you can exchange your crypto for $ARENA.",
        active: false,
      },
      {
        id: 4,
        title: "When will everything be automated?",
        description:
          "We are currently working on the website, it will be finished before October 2021.",
        active: false,
      },
      {
        id: 5,
        title: "How do I get my prize money?",
        description:
          "When the round ends, all the winners' addresses are listed in the Telegram where you have 24 hours to claim it by messaging an admin.",
        active: false,
      },
    ]);
    const toggleQuestion = (i) => {
      if (!questions.value[i].active) {
        questions.value.map((entry) => (entry.active = false));
      }
      questions.value[i].active = !questions.value[i].active;
    };

    const sectionTitle = computed(() => {
      return `${settings.value.coinname} F.A.Q`;
    });

    const sectionSub = computed(() => {
      return `Please read before purchasing ${settings.value.coinname}`;
    });

    return { sectionTitle, sectionSub, toggleQuestion, questions };
  },
};
</script>
<style lang="scss" scoped>
.faq-content {
}
.entry {
  background: #1c1c2c;
  border-radius: 20px;
  background-repeat: no-repeat;
  background-position: top 34px right 42px;
  margin-bottom: 16px;
  background-image: url("data:image/svg+xml,%3Csvg width='20' height='14' viewBox='0 0 20 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M2.5 0.75L10 8.25L17.5 0.75L20 3.25L10 13.25L0 3.25L2.5 0.75Z' fill='%23A9A8B8'/%3E %3C/svg%3E");
  &.active {
    background-image: url("data:image/svg+xml,%3Csvg width='20' height='14' viewBox='0 0 20 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M17.5 13.25L10 5.75L2.5 13.25L2.18557e-07 10.75L10 0.749999L20 10.75L17.5 13.25Z' fill='white'/%3E %3C/svg%3E");
    cursor: unset;
  }
}
.title {
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  cursor: pointer;
  padding: 26px 42px;
}
.desc {
  font-size: 18px;
  line-height: 22px;
  color: #b4afbc;
  padding: 0 42px 26px 42px;
}
</style>
