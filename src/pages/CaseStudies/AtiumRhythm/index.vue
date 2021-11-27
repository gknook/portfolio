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
        we did learn about some leads who used our and other activities in a
        more regular way, either adding them to the beginning of meetings or
        setting up regular social moments for their team to get to know each
        other and have fun. They, however, indicated that this whole process was
        quite a pain in the ass, and that after a few weeks of doing this well,
        the excitement wore off and it was hard to maintain the effort.
      </paragraph-content>

      <paragraph-content
        >Learning that, we re-defined our problem statement to focus on helping
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
        >The idea being that this would help the team leads learn the best
        practices by being prescriptive about what activities to do. In the end
        this should help them build connections more effectively. While at the
        same time we gave the team leads that were already doing this the tools
        to easily find and schedule the right activities.</paragraph-content
      >

      <paragraph-header id="funnel">For whom</paragraph-header>

      <paragraph-content>
        The feature was focused on team leads who care about their team culture
        and want to help their team work well together by fostering human
        connections.
      </paragraph-content>

      <paragraph-header id="new-flow">Insights</paragraph-header>

      <paragraph-content
        >During the research and its synthesis we realised that, in making this
        happen, team leads have the following understanding:
        <ol class="list-decimal ml-8 my-2">
          <li class="mb-2">
            <span class="font-semibold">Known:</span> They know what meetings
            they have, and can thus conclude when a social moment would make
            sense.
          </li>
          <li class="mb-2">
            <span class="font-semibold">Possibly known:</span> They might know
            what the reasons are for adding social moments. They're generally
            looking to improve their team's connections, but might not see the
            full benefits that regularly doing social activities have on their
            team's ability to effectively work together.
          </li>
          <li>
            <span class="font-semibold">Mostly unknown:</span>They don't know
            what activities you should be doing. It's hard to come up with
            something week in week out, and out of the many things you have to
            be good at, picking social activities is not something that they
            want to excel in.
          </li>
        </ol>
      </paragraph-content>

      <paragraph-header id="flow">User flow</paragraph-header>

      <UserFlowRhythm />

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
      <RateCaseStudy caseStudy="atium-rhythm" />
    </div>
  </div>
</template>
<script>
import Hypotheses from "/src/components/hypotheses/Hypotheses.vue";
import Funnel from "/src/components/Funnel.vue";
import RhythmFlow from "/src/assets/svg/RhythmFlow.vue";
import UserFlowRhythm from "/src/components/organisms/UserFlowRhythm.vue";
import RateCaseStudy from "/src/components/organisms/RateCaseStudy.vue";

import ParagraphHeader from "/src/components/atoms/ParagraphHeader.vue";
import ParagraphContent from "/src/components/atoms/ParagraphContent.vue";

export default {
  components: {
    Hypotheses,
    RhythmFlow,
    UserFlowRhythm,
    Funnel,
    ParagraphHeader,
    ParagraphContent,
    RateCaseStudy
  }
};
</script>
