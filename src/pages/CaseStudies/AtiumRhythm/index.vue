<template>
  <div class="p-6 mx-auto w-full">
    <div
      id="introduction"
      class="md:px-12 sm:px-6 w-full max-w-screen-md mx-auto"
    >
      <hgroup class="mb-4">
        <h2 class="text-indigo-50 text-sm uppercase font-bold mb-4">
          Case study
        </h2>
        <h1 class="text-indigo-50 sm:text-3xl text-xl font-bold mb-2">
          Social Rhythm
        </h1>
        <div class="text-indigo-50 sm:text-lg text-md flex items-end">
          <span class="mb-0">2020 - </span>
          <div class="mx-2 rounded-lg">
            <!-- <img
              src="/src/assets/company_logos/atium_logo_dark.png"
              class="h-10"
            /> -->
          </div>
          <span class="mb-0"> - Product Manager / Designer</span>
        </div>
      </hgroup>
      <paragraph-content
        >We'd founded Atium earlier in 2020 and built 5 different activities
        that teams could play. We were able to reach people with that and our
        activities were being played, but it was very much a one-off experience
        for most. Our vision was, and to this date is, to help build true
        connections in remote teams. So a one-off experience, albeit helpful,
        doesn't establish the lasting change we thought our customers were
        looking for. That's when we set out to discover how we might inject our
        activities into the weekly rhythm that teams already
        had.</paragraph-content
      >
    </div>

    <div
      id="case-wrapper"
      class="mb-8 md:px-12 sm:px-6 w-full max-w-screen-md mx-auto"
    >
      <paragraph-header id="role">Role</paragraph-header>
      <paragraph-content>
        My role within this project was very broad, from facilitating the
        setting of the vision, doing the user research, shaping the feature,
        designing the concepts, writing the UX-copy and implementing part of the
        front-end of the solution we eventually built.
      </paragraph-content>

      <paragraph-header id="team">Team</paragraph-header>
      <paragraph-content>
        I worked together with my two co-founders on this, where Mario mainly
        helped me conduct the research by joining customer conversations,
        Giannis built part of the front-end and the back-end (including the
        Slack integration).
      </paragraph-content>

      <paragraph-header id="problem">Problem</paragraph-header>
      <paragraph-content>
        Based on the context mentioned above, the initial problem definition was
      </paragraph-content>
      <label
        for="problem-statement-1"
        class="text-white uppercase text-xs font-semibold mb-2 ml-4 block"
        >Initial problem statement</label
      >
      <q
        id="problem-statement-1"
        class="
          text-gray-50
          font-base
          text-xl
          italic
          block
          mb-8
          border-l-2 border-gray-200
          pl-4
        "
        >How might we help teams build connection by integrating tightly into
        their weekly rhythms?</q
      >
      <paragraph-content>
        Talking to (potential) users, we learned that, although they saw the
        need and use for play to create connections, they had trouble
        operationalizing that into their teams. Many team leads would schedule a
        remote event now and then, had fun but they moved on. At the same time
        we did learn about some leads who used our and others activities in a
        more regular way, either adding them to the beginning of meetings or
        setting up regular social moments for their team to get to know each
        other and have fun. They, however, indicated that this whole process was
        quite a pain in the ass, and that after a few weeks of doing this well,
        the excitement wore off and it was hard to maintain the effort.
      </paragraph-content>

      <paragraph-content
        >Learning that we re-defined our problem statement to focus on helping
        team leads operationalize those best practices.</paragraph-content
      >
      <label
        for="problem-statement-2"
        class="text-white uppercase text-xs font-semibold mb-2 ml-4 block"
        >Redefined problem statement</label
      >
      <q
        id="problem-statement-2"
        class="
          text-gray-50
          font-base
          text-xl
          italic
          block
          mb-8
          border-l-2 border-gray-200
          pl-4
        "
        >How might we help teams automatically schedule activities during
        moments in their week that fit their rhythm?</q
      >
      <paragraph-content
        >The idea being that this would help the team leads that had no clue
        learn the best practices by being prescriptive about what to do so that
        in the end they would build connections more effectively, and give the
        team leads that were already doing this the tools to easily find and
        schedule the right activities.</paragraph-content
      >

      <paragraph-header id="funnel">For whom</paragraph-header>

      <paragraph-content>
        As alluded to in the problem statement, the feature was really focused
        on team leads who care about their team culture and want to help their
        team work well together by fostering human connections.
      </paragraph-content>

      <paragraph-header id="new-flow">Insights</paragraph-header>

      <paragraph-content
        >During the research and its synthesis we realised that in making this
        happen as a team lead you have three levels of understanding:
        <ol class="list-decimal ml-8 my-2">
          <li class="mb-2">
            You know what meetings you have, and can thus conclude when a social
            moment would make sense.
          </li>
          <li class="mb-2">
            You might know what the reasons are for adding social moments.
            You're generally looking to improve your team's connections, but
            might not see the full benefits that regularly doing social
            activities have on your team's ability to effectively work together.
          </li>
          <li>
            You don't know what activities you should be doing. It's hard to
            come up with something week in week out, and out of the many things
            you have to be good at, picking social activities is not something
            that you want to excel in.
          </li>
        </ol>
      </paragraph-content>

      <paragraph-header id="flow">User flow</paragraph-header>

      <div class="relative h-52">
        <div class="flex items-center space-x-4 absolute left-0 top-0 h-40">
          <div
            class="
              rounded-full
              text-white
              border-4 border-gray-700 border-dotted
              hover:border-indigo-700
              transition-all
              duration-200
              w-52
              cursor-pointer
            "
            @mouseenter="toggleDescription('step-1')"
            @mouseleave="toggleDescription(null)"
          >
            <div
              class="
                bg-gray-900
                hover:bg-indigo-900
                p-4
                rounded-full
                transition-all
                duration-200
              "
            >
              <div class="text-sm w-full text-center mb-px">Social rhythm</div>
              <div
                class="text-xs w-full text-center"
                :class="[{ hidden: description != 'step-1' }]"
              >
                Set up a social rhythm
              </div>
            </div>
          </div>
          <svg
            width="62"
            height="18"
            viewBox="0 0 62 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="4.5" cy="9" r="3.5" stroke="#7B61FF" stroke-width="2" />
            <rect x="8" y="8" width="42" height="2" fill="#7B61FF" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M50.7513 0.880336C51.0823 0.446857 51.6906 0.372877 52.1099 0.715097L61.2988 8.2151C61.5311 8.40474 61.6667 8.69393 61.6667 8.99998C61.6667 9.30603 61.5311 9.59522 61.2988 9.78486L52.1099 17.2849C51.6906 17.6271 51.0823 17.5531 50.7513 17.1196C50.4203 16.6861 50.4919 16.0573 50.9111 15.7151L57.9132 9.99998H49.6667C49.6667 9.99998 49.6667 9.55227 49.6667 8.99998C49.6667 8.4477 49.6667 7.99998 49.6667 7.99998H57.9132L50.9111 2.28486C50.4919 1.94264 50.4203 1.31381 50.7513 0.880336Z"
              fill="#7B61FF"
            />
          </svg>
          <div
            class="
              rounded-2xl
              text-white
              border-4 border-gray-700 border-dotted
              hover:border-indigo-700
              w-52
              cursor-pointer
            "
            @mouseenter="toggleDescription('step-2')"
            @mouseleave="toggleDescription(null)"
          >
            <div
              class="
                bg-gray-900
                hover:bg-indigo-900
                p-4
                rounded-xl
                transition-all
                duration-200
              "
            >
              <div class="text-sm w-full text-center mb-px">
                Add a regular meeting
              </div>
              <div
                class="text-xs w-full text-center"
                :class="[{ hidden: description != 'step-2' }]"
              >
                Typically a meeting you already have.
              </div>
            </div>
          </div>
          <svg
            width="62"
            height="18"
            viewBox="0 0 62 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="4.5"
              cy="9"
              r="3.5"
              stroke="#7B61FF"
              stroke-width="2"
              class="flex-none"
            />
            <rect
              x="8"
              y="8"
              width="42"
              height="2"
              fill="#7B61FF"
              class="flex-shrink"
            />
            <path
              class="flex-none"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M50.7513 0.880336C51.0823 0.446857 51.6906 0.372877 52.1099 0.715097L61.2988 8.2151C61.5311 8.40474 61.6667 8.69393 61.6667 8.99998C61.6667 9.30603 61.5311 9.59522 61.2988 9.78486L52.1099 17.2849C51.6906 17.6271 51.0823 17.5531 50.7513 17.1196C50.4203 16.6861 50.4919 16.0573 50.9111 15.7151L57.9132 9.99998H49.6667C49.6667 9.99998 49.6667 9.55227 49.6667 8.99998C49.6667 8.4477 49.6667 7.99998 49.6667 7.99998H57.9132L50.9111 2.28486C50.4919 1.94264 50.4203 1.31381 50.7513 0.880336Z"
              fill="#7B61FF"
            />
          </svg>
          <div
            class="
              rounded-2xl
              text-white
              border-4 border-gray-700 border-dotted
              hover:border-indigo-700
              w-52
              cursor-pointer
            "
            @mouseenter="toggleDescription('step-3')"
            @mouseleave="toggleDescription(null)"
          >
            <div
              class="
                bg-gray-900
                hover:bg-indigo-900
                p-4
                rounded-xl
                transition-all
                duration-200
              "
            >
              <div class="text-sm w-full text-center mb-px">Define length</div>
              <div
                class="text-xs w-full text-center"
                :class="[{ hidden: description != 'step-3' }]"
              >
                How much time you spend on the social moment
              </div>
            </div>
          </div>
          <svg
            width="62"
            height="18"
            viewBox="0 0 62 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="4.5"
              cy="9"
              r="3.5"
              stroke="#7B61FF"
              stroke-width="2"
              class="flex-none"
            />
            <rect
              x="8"
              y="8"
              width="42"
              height="2"
              fill="#7B61FF"
              class="flex-shrink"
            />
            <path
              class="flex-none"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M50.7513 0.880336C51.0823 0.446857 51.6906 0.372877 52.1099 0.715097L61.2988 8.2151C61.5311 8.40474 61.6667 8.69393 61.6667 8.99998C61.6667 9.30603 61.5311 9.59522 61.2988 9.78486L52.1099 17.2849C51.6906 17.6271 51.0823 17.5531 50.7513 17.1196C50.4203 16.6861 50.4919 16.0573 50.9111 15.7151L57.9132 9.99998H49.6667C49.6667 9.99998 49.6667 9.55227 49.6667 8.99998C49.6667 8.4477 49.6667 7.99998 49.6667 7.99998H57.9132L50.9111 2.28486C50.4919 1.94264 50.4203 1.31381 50.7513 0.880336Z"
              fill="#7B61FF"
            />
          </svg>
          <div
            class="
              rounded-full
              text-white
              border-4 border-gray-700 border-dotted
              hover:border-indigo-700
              w-52
              cursor-pointer
            "
            @mouseenter="toggleDescription('step-4')"
            @mouseleave="toggleDescription(null)"
          >
            <div
              class="
                bg-gray-900
                hover:bg-indigo-900
                p-4
                rounded-full
                transition-all
                duration-200
              "
            >
              <div class="text-sm w-full text-center mb-px">Receive rhythm</div>
              <div
                class="text-xs w-full text-center"
                :class="[{ hidden: description != 'step-4' }]"
              >
                Suggested activities for the regular meeting
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- <RhythmFlow /> -->

      <paragraph-header id="new-flow">Concepts</paragraph-header>
      <paragraph-content
        >To solve the problem statement above we came up with the social rhythm
        feature. Initially basing this on standard moments that fit agile
        meetings like retrospectives, I eventually took the insights mentioned
        above to heart.</paragraph-content
      >
      <span class="text-white text-3xl w-full text-center font-bold block mt-20"
        >WIP</span
      >
    </div>

    <div class="bg-pink-400 hidden"></div>
    <div class="mx-auto max-w-sm mt-20">
      <RateCaseStudy />
    </div>
  </div>
</template>
<script>
import Hypotheses from "/src/components/hypotheses/Hypotheses.vue";
import Funnel from "/src/components/Funnel.vue";
import RhythmFlow from "/src/assets/svg/RhythmFlow.vue";
import RateCaseStudy from "/src/components/organisms/RateCaseStudy.vue";

import ParagraphHeader from "/src/components/atoms/ParagraphHeader.vue";
import ParagraphContent from "/src/components/atoms/ParagraphContent.vue";

export default {
  components: {
    Hypotheses,
    RhythmFlow,
    Funnel,
    ParagraphHeader,
    ParagraphContent,
    RateCaseStudy
  },
  data() {
    return {
      description: null
    };
  },
  mounted() {},
  computed: {},
  methods: {
    toggleDescription(id) {
      if (this.descript == id) {
        this.description = null;
      } else {
        this.description = id;
      }
    }
  }
};
</script>
