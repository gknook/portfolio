import Vuex from "vuex";

const store = new Vuex.Store({
  state: {
    count: 0,
    userProgress: 0,
    achievements: [
      {
        acvTitle: "Found my portfolio!",
        acvId: "acv-1",
        acvPoints: 5,
        acvAchieved: false
      },
      {
        acvTitle: "Found hidden debug button",
        acvId: "acv-2",
        acvPoints: 5,
        acvAchieved: false
      },
      {
        acvTitle: "Get to know Guido",
        acvId: "acv-3",
        acvPoints: 10,
        acvAchieved: false
      },
      {
        acvTitle: "Explored case studies",
        acvId: "acv-4",
        acvPoints: 15,
        acvAchieved: false
      },
      {
        acvTitle: "Noise meter - old prototype",
        acvId: "acv-5",
        acvPoints: 25,
        acvAchieved: false
      },
      {
        acvTitle: "Noise meter - new prototype",
        acvId: "acv-6",
        acvPoints: 40,
        acvAchieved: false
      }
    ]
  },
  mutations: {
    initializeStore(state) {
      if (localStorage.getItem("achievementsArray") != undefined) {
        // Initialize the achievements gained based on what's in the local storage
        try {
          state.achievements = JSON.parse(
            localStorage.getItem("achievementsArray")
          );
          state.userProgress = localStorage.getItem("userProgress");
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
    updateAchievements(state, acvId) {
      // Save the last achievement gained to the session storage
      sessionStorage.setItem("acv-id", acvId);
      // Parse the Achievements array JSON and store it locally
      let achievementsArray = JSON.parse(
        localStorage.getItem("achievementsArray")
      );
      // Check what the index is of the achievement we're updating
      let achievementIndex = achievementsArray.findIndex(i => i.acvId == acvId);
      // If the achievement has not yet been achieved
      if (achievementsArray[achievementIndex].acvAchieved != true) {
        // Set the achievement.achieved to true
        achievementsArray[achievementIndex].acvAchieved = true;
      }
      // Update the achievements in the store
      state.achievements = achievementsArray;
      // And on local storage
      localStorage.setItem(
        "achievementsArray",
        JSON.stringify(achievementsArray)
      );

      // Filter the array for achieved achievements
      let achievedArray = achievementsArray.filter(
        achievement => achievement.acvAchieved === true
      );

      // set the progress to 0
      let progress = 0;
      for (let achievement of achievedArray) {
        // add the points for each achievement that was achieved
        progress += achievement.acvPoints;
      }
      // set the progress in the store
      state.userProgress = progress;
      // set the progress locally
      localStorage.setItem("userProgress", progress);
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
    },
    achievements(state) {
      return state.achievements;
    }
  }
});

export default store;
