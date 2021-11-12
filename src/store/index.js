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
      },
      {
        acvTitle: "Explored case studies",
        acvId: "acv-4",
        acvPoints: 5,
        acvAchieved: false
      },
      {
        acvTitle: "Old prototype",
        acvId: "acv-5",
        acvPoints: 10,
        acvAchieved: false
      },
      {
        acvTitle: "New prototype",
        acvId: "acv-6",
        acvPoints: 20,
        acvAchieved: false
      }
    ]
  },
  mutations: {
    initializeStore(state) {
      console.log("initializeStore");
      if (localStorage.getItem("userProgress") != undefined) {
        state.userProgress = parseInt(localStorage.getItem("userProgress"));
      }
      if (localStorage.getItem("achievementsArray") != undefined) {
        try {
          state.achievements = JSON.parse(
            localStorage.getItem("achievementsArray")
          );
        } catch (e) {
          localStorage.removeItem("achievementsArray");
        }
      } else {
        localStorage.setItem(
          "achievementsArray",
          JSON.stringify(state.achievements)
        );
      }
    },
    increment(state) {
      state.count++;
    },
    increaseProgress(state, value) {
      let currentProgress = parseInt(state.userProgress);
      let newProgress = parseInt(value) + currentProgress;
      state.userProgress = newProgress;
      console.log("increase progress", newProgress);
    },
    updateAchievements(state, acvId) {
      let achievementsArray = JSON.parse(
        localStorage.getItem("achievementsArray")
      );
      let achievementIndex = achievementsArray.findIndex(i => i.acvId == acvId);
      if (achievementsArray[achievementIndex].acvAchieved != true) {
        achievementsArray[achievementIndex].acvAchieved = true;
        let currentProgress = state.userProgress;
        let newProgress =
          achievementsArray[achievementIndex].acvPoints + currentProgress;
        state.userProgress = newProgress;
        localStorage.setItem("userProgress", newProgress);
      }
      state.achievements = achievementsArray;
      localStorage.setItem(
        "achievementsArray",
        JSON.stringify(achievementsArray)
      );
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
