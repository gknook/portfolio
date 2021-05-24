import Vuex from "vuex";

const store = new Vuex.Store({
  state: {
    count: 0,
    userProgress: 0,
    achievements: [
      {
        acvTitle: "Found my portfolio!",
        acvId: "acv-1",
        acvPoints: 3,
        acvAchieved: false
      },
      {
        acvTitle: "Found hidden debug button",
        acvId: "acv-2",
        acvPoints: 2,
        acvAchieved: false
      },
      {
        acvTitle: "Get to know Guido",
        acvId: "acv-3",
        acvPoints: 5,
        acvAchieved: false
      }
    ]
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    increaseProgress(state, value) {
      state.userProgress = value;
    },
    updateAchievements(state, acvId) {
      let achievementsArray = state.achievements;
      let achievementIndex = achievementsArray.findIndex(i => i.acvId == acvId);
      if (achievementsArray[achievementIndex].acvAchieved != true) {
        achievementsArray[achievementIndex].acvAchieved = true;
        state.userProgress += achievementsArray[achievementIndex].acvPoints;
      }
      state.achievements = achievementsArray;
    }
  },
  getters: {
    count(state) {
      return state.count;
    },
    userProgress(state) {
      return state.userProgress;
    },
    achievementsGained(state) {
      return state.achievements.filter(a => a.acvAchieved === true);
    }
  },
  actions: {
    incrementAction({ commit }) {
      commit("increment");
    },
    increaseProgress({ commit }, value) {
      commit("increaseProgress", value);
    }
  }
});

export default store;
