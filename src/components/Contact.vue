<template>
  <div class="wrapper">
    <div class="container">
      <div class="section contact-section">
        <Title
          title="Contact"
          sub="Feel free to contact us with any questions."
        ></Title>
        <div class="contact-container">
          <div class="entry email">
            <svg
              width="77"
              height="77"
              viewBox="0 0 77 77"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M55 47.25V30.75C55 29.2283 53.7002 28 52.0899 28H24.9101C23.2998 28 22 29.2283 22 30.75V47.25C22 48.7717 23.2998 50 24.9101 50H52.0899C53.7002 50 55 48.7717 55 47.25ZM52.4586 30.5483C53.0988 31.1533 52.7496 31.7767 52.4004 32.0883L44.5238 38.9083L52.0899 46.3517C52.3228 46.6083 52.478 47.0117 52.2063 47.2867C51.9541 47.58 51.3721 47.5617 51.1199 47.3783L42.642 40.54L38.4903 44.115L34.358 40.54L25.8801 47.3783C25.6279 47.5617 25.0459 47.58 24.7937 47.2867C24.522 47.0117 24.6772 46.6083 24.9101 46.3517L32.4762 38.9083L24.5996 32.0883C24.2504 31.7767 23.9012 31.1533 24.5414 30.5483C25.1817 29.9433 25.8413 30.2367 26.3845 30.6767L38.4903 39.9167L50.6155 30.6767C51.1587 30.2367 51.8183 29.9433 52.4586 30.5483Z"
                fill="#DD892A"
              />
              <circle
                cx="38.5"
                cy="38.5"
                r="37.5"
                stroke="#DD892A"
                stroke-width="2"
              />
            </svg>
            <div class="title colored">EMAIL US</div>
            <div class="mail">service@arenacoin.gg</div>
            <a
              class="btn btn-primary btn-email"
              href="mailto:service@arenacoin.gg"
            >
              Email us
            </a>
          </div>
          <div class="entry telegram">
            <svg
              width="77"
              height="77"
              viewBox="0 0 77 77"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M32.0046 51.2434C30.9745 51.2434 31.1496 50.8544 30.7943 49.8735L27.7653 39.9049L51.0819 26.072"
                fill="#C8DAEA"
              />
              <path
                d="M32.0046 51.2434C32.7995 51.2434 33.1506 50.8799 33.5944 50.4485L37.8338 46.3263L32.5457 43.1375"
                fill="#A9C9DD"
              />
              <path
                d="M32.5452 43.1382L45.3587 52.605C46.821 53.4118 47.8761 52.994 48.2404 51.2476L53.4562 26.669C53.9901 24.5281 52.6401 23.5567 51.2411 24.1918L20.6142 36.0014C18.5237 36.84 18.5361 38.0064 20.2332 38.526L28.0928 40.9793L46.2885 29.4998C47.1475 28.9789 47.936 29.2587 47.289 29.8331"
                fill="white"
              />
              <circle
                cx="38.5"
                cy="38.5"
                r="37.5"
                stroke="#C8DAEA"
                stroke-width="2"
              />
            </svg>
            <div class="title">TELEGRAM</div>
            <a
              class="btn btn-reverse btn-notification"
              :href="$store.state.settings.telegramannouncementsurl"
              target="_blank"
            >
              Announcements
            </a>
            <a
              class="btn btn-secondary btn-chat"
              :href="$store.state.settings.telegramurl"
              target="_blank"
            >
              Group Chat
            </a>
          </div>
        </div>
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
<style lang="scss" scoped>
.contact-container {
  max-width: 660px;
  margin: 0 auto;
  @media (min-width: $desktop) {
    display: flex;
    justify-content: space-around;
  }
  a {
    margin: 11px auto 0 auto;
    display: block;
    max-width: 178px;
  }
}
.title {
  font-weight: bold;
  margin-top: 12px;
  padding-bottom: 15px;
  margin-bottom: 22px;
  position: relative;
  &::after {
    position: absolute;
    content: " ";
    width: 18px;
    height: 3px;
    bottom: 0;
    left: 50%;
    border-radius: 8px;
    transform: translateX(-50%);
    background-color: white;
  }
  &.colored {
    &::after {
      @include bg-gradient($dark-orange, $light-orange);
    }
  }
}
.entry {
  max-width: 300px;
  text-align: center;
  @media (max-width: $tablet-max) {
    margin: 0 auto;
    &:not(:last-child) {
      margin: 0 auto 60px auto;
    }
  }
}
.mail {
  padding: 18px 0;
}
</style>
