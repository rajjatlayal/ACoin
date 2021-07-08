import { createStore } from "vuex";

export default createStore({
  state: {
    roundStartTimeEnded: false,
    roundEndTimeEnded: false,
    settings: {
      coinname: "",
      coinaddress: "",
      bscscansurl: "",
      roundstarttime: "",
      roundendtime: "",
      enabledcoin: "",
      starttimeunknown: "",
      pankakeswapv2url: "",
      poocoinurl: "",
      telegramurl: "",
      telegramannouncementsurl: "",
      roundnumber: "",
      donations: "",
      targetdonations: "",
      roundshistory: "",
      roundsfeatures: "",
    },
  },
  getters: {
    settings: (state) => state.settings,
    coinname: (state) => state.settings.coinname,
    coinaddress: (state) => state.settings.coinaddress,
    bscscansurl: (state) => state.settings.bscscansurl,
    roundstarttime: (state) => state.settings.roundstarttime,
    roundendtime: (state) => state.settings.roundendtime,
    isStartingCoin: (state) => {
      return state.settings.enabledcoin && !state.roundStartTimeEnded;
    },
    isinProgressCoin: (state) => {
      return (
        state.settings.enabledcoin &&
        state.roundStartTimeEnded &&
        !state.roundEndTimeEnded
      );
    },
    enabledcoin: (state) => {
      return (
        state.settings.enabledcoin &&
        !state.settings.starttimeunknown &&
        state.roundStartTimeEnded &&
        !state.roundEndTimeEnded
      );
    },
    starttimeunknown: (state) => state.settings.starttimeunknown,
    pankakeswapv2url: (state) => state.settings.pankakeswapv2url,
    poocoinurl: (state) => state.settings.poocoinurl,
    telegramurl: (state) => state.settings.telegramurl,
    telegramannouncementsurl: (state) =>
      state.settings.telegramannouncementsurl,
    roundnumber: (state) => state.settings.roundnumber,
    roundStartTimeEnded: (state) => state.roundStartTimeEnded,
    roundEndTimeEnded: (state) => state.roundEndTimeEnded,
    donations: (state) => state.settings.donations,
    targetdonations: (state) => state.settings.targetdonations,
    roundshistory: (state) => state.settings.roundshistory,
    roundsfeatures: (state) => state.settings.roundsfeatures,
  },
  mutations: {
    updateData(state, data) {
      state.settings = data;
    },
    roundStartTimeEnded(state, data) {
      state.roundStartTimeEnded = data;
    },
    roundEndTimeEnded(state, data) {
      state.roundEndTimeEnded = data;
    },
  },
  actions: {
    updateData({ commit }) {
      commit("updateData");
    },
    roundStartTimeEnded({ commit }) {
      commit("roundStartTimeEnded");
    },
    roundEndTimeEnded({ commit }) {
      commit("roundEndTimeEnded");
    },
  },
  modules: {},
});
