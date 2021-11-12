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
        // Initialize the current user progress based on what's in the local storage
        state.userProgress = parseInt(localStorage.getItem("userProgress"));
      }
      if (localStorage.getItem("achievementsArray") != undefined) {
        // Initialize the achievements gained based on what's in the local storage
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
    // increaseProgress(state, value) {
    //   let currentProgress = parseInt(state.userProgress);
    //   let newProgress = parseInt(value) + currentProgress;
    //   state.userProgress = newProgress;
    // },
    updateAchievements(state, acvId) {
      let achievementsArray = JSON.parse(
        localStorage.getItem("achievementsArray")
      );
      // Parse the Achievements array JSON and store it locally
      let achievementIndex = achievementsArray.findIndex(i => i.acvId == acvId);
      // Check what the index is of the achievement we're updating
      if (achievementsArray[achievementIndex].acvAchieved != true) {
        // If the achievement has not yet been achieved do this
        achievementsArray[achievementIndex].acvAchieved = true;
        // Set the achievement.achieved to true
        let currentProgress = state.userProgress;
        let newProgress =
          achievementsArray[achievementIndex].acvPoints + currentProgress;
        // Set the total progress
        state.userProgress = newProgress;
        // In the store
        localStorage.setItem("userProgress", newProgress);
        // And in local storage
      }
      state.achievements = achievementsArray;
      // Update the achievements in the store
      localStorage.setItem(
        "achievementsArray",
        JSON.stringify(achievementsArray)
      );
      // And on local storage
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
    // increaseProgress({ commit }, value) {
    //   commit("increaseProgress", value);
    // }
  }
});

export default store;
