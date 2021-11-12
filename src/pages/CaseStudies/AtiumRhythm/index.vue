<template>
  <div class="p-6 mx-auto w-full my-12">
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
          <span class="mb-0">2017 - </span>
          <div class="mx-2 rounded-lg">
            <img
              src="/src/assets/company_logos/atium_logo_dark_fin_simple@4x.png"
              class="h-10"
            />
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
        doesn't make the lasting change we thought our customers were looking
        for. So we set out to discover how we might inject our activities into
        the weekly rhythm that teams already had.</paragraph-content
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
        helped me conduct the research in talking to customers, and Giannis
        built part of the front-end and the whole back-end (including the Slack
        integration).
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
        Talking to (potential) users, we learned that although they saw the need
        and use for play to create connections, they had trouble
        operationalizing that into their teams. Many team leads would schedule a
        remote event now and then, had fun but the moved on. At the same time we
        did learn about some leads who used our and others activities in a more
        regular way, either adding them to the beginning of meetings or setting
        up regular social moments for their team to get to know each other and
        have fun. They however indicated that this whole process was quite a
        pain in the ass, and that after a few weeks of doing this well, the
        excitement wore off and it was hard to maintain the effort.
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

      <paragraph-header id="funnel">The funnel</paragraph-header>

      <paragraph-content>
        Clearly the biggest drop-off was between the intro and the noise meter.
        The events below are triggered when the user finished a certain step.
        E.g. <span class="font-mono font-bold">98%</span>
        <span class="italic"> "finished the introduction"</span>, and (only)
        <span class="font-mono font-bold">84%</span>
        <span class="italic"> "finished the noise meter"</span>.
      </paragraph-content>

      <paragraph-header id="old-flow">Old flow</paragraph-header>

      <paragraph-header id="new-flow">User tests</paragraph-header>

      <paragraph-content
        >We did several user tests to discover what the underlying problem was.
        When we invited people in, we encountered one of two scenarios:
        <ol class="list-decimal ml-8 my-2">
          <li class="mb-2">
            Either there was no problem, because the big button would just allow
            them to continue (it was quiet enough).
          </li>
          <li>
            Or they quickly just got frustrated, telling us they couldn't
            continue, because the button was disabled (it was too loud).
          </li>
        </ol>
        Although this also makes clear why a user test is not always perfect
        (people behave differently in a test setting). A real problem in the
        latter case was that the users didn't seem to feel the agency to change
        their situation.</paragraph-content
      >

      <paragraph-header id="new-flow">Redesigned noise meter</paragraph-header>
      <paragraph-content
        >In the prototype below I show what we changed on the noise meter to
        address the issues we encounted (click through the iPhone
        app).</paragraph-content
      >

      <paragraph-header id="wish-list"
        >What I'd still have loved to add</paragraph-header
      >
      <paragraph-content>
        <ul class="list-disc ml-6 mt-2">
          <li class="mb-2">
            <strong>Add a reminder feature.</strong> Beyond the direct issue,
            part of the problem was that people didn't have access to a quieter
            place at the moment they downloaded the app. I'd love to have added
            a reminder feature to do the test later that day or that week when
            they were more likely in a quieter environment.
          </li>
          <li>
            <strong>Intelligent noise monitor during the hearing test.</strong>
            Not all noise is created equal, and if you have bad hearing some of
            it doesn't matter. Technically we would have been able to measure
            whether the noise that we registered during the test actually had an
            impact on your hearing. To explain why I'd have to go deeply into
            sound and hearing, so if you're interested in how that might work,
            feel free to ask!
          </li>
        </ul>
      </paragraph-content>
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
import ProfilePic from "/src/assets/svg/ProfilePic.vue";
import RateCaseStudy from "/src/components/organisms/RateCaseStudy.vue";

import ParagraphHeader from "/src/components/atoms/ParagraphHeader.vue";
import ParagraphContent from "/src/components/atoms/ParagraphContent.vue";

export default {
  components: {
    Hypotheses,
    ProfilePic,
    Funnel,
    ParagraphHeader,
    ParagraphContent,
    RateCaseStudy
  },
  data() {
    return {};
  },
  mounted() {},
  computed: {},
  methods: {}
};
</script>
