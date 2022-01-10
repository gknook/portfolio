<template>
  <div class="p-6 mx-auto w-full">
    <div
      id="introduction"
      class="mb-8 md:px-12 sm:px-6 w-full max-w-screen-md mx-auto"
    >
      <hgroup class="mb-4">
        <h2 class="text-indigo-50 text-sm uppercase font-bold mb-4">
          Guido's portfolio
        </h2>
        <h1 class="text-indigo-50 sm:text-3xl text-xl font-bold mb-2">
          Process
        </h1>
      </hgroup>
      <paragraph-content
        >My process has been heavily influenced by my formal education. I
        studied Industrial Design Engineering at the Delft University of
        Technology. For more tan 50 years they've been teaching students how to
        create products that people love to use.</paragraph-content
      >
      <paragraph-content
        >The field of industrial design obviously focuses on physical products,
        and my studies also did. But the process of creating digital products is
        not that different. Of course in terms of engineering it is; you
        substitute mechanical properties with software frameworks, and injection
        molding with DevOps, but in the end, you're still designing something
        for customers. Something that they love to use, and that is what the
        core process facilitates really well.</paragraph-content
      >
      <paragraph-content
        >So my process is a combination of what I was taught, with some of the
        insights I gained from the software development discourse (e.g. the lean
        startup, storyboarding, kanban/scrum, shape up, etc.).
      </paragraph-content>
    </div>
    <div class="mb-8 w-full max-w-screen-lg mx-auto">
      <div class="md:px-12 sm:px-6 w-full max-w-screen-md mx-auto">
        <paragraph-header>
          The outer loop: empathize-define-iterate-implement
        </paragraph-header>
        <div class="mt-4 flex space-x-4">
          <div class="flex-none w-16 align-top">
            <img
              class=""
              src="https://res.cloudinary.com/gknook/image/upload/v1575488796/empathize_icon_vdffsx.svg"
              alt="Emphatize"
            />
          </div>
          <paragraph-content>
            <span class="font-semibold">Empathize/understand:</span> I always
            start by understanding what the problem is. If it's a problem that
            the end user has I will further explore that problem by empathizing
            with their situation and needs through explorative (user) research.

            <!--What is it? why is it a problem? and how did we get to
    this conclusion? Especially if it's a problem that the end user has I will further explore that problem by
    empathizing with their situation and needs. I will also consider the stakeholders and the technical realm of
    possibilities from very early beginnings. -->
          </paragraph-content>
        </div>
        <div class="mt-4 flex space-x-4">
          <div class="flex-none w-16 align-top">
            <img
              class=""
              src="https://res.cloudinary.com/gknook/image/upload/v1575488795/define_icon_vkxk8x.svg"
              alt="Define"
            />
          </div>
          <paragraph-content>
            <span class="font-semibold">(Re-)define:</span> In my experience
            almost never is the initial problem the actual thing that needs to
            be solved. Therefore I redefine the problem. When defining a problem
            to solve for a product team, what I like to do is to come up with a
            specific measurable business outcome that we want to achieve.

            <!--
    Once I have the feeling that I have
    a good initial understanding (and depending on the problem this can be anywhere from 5 minutes of brainstorming to
    weeks of deep design research), I'll redefine the problem. In my experience almost never is the initial problem the
    actual thing that needs to be solved. When defining a problem to solve for a product team, what I like to do is to
    come up with a specific business outcome that we want to achieve. This means that I describe an ideal future
    scenario, preferable in terms of metrics that we want to hit (e.g. conversion is 80%). This does not prescribe a
    solution, but does define what we're trying to achieve. This businenss outcome is a very abstract solution to the
    problem as I understand it.  
    
    
    STORYMAP: One specific form in which
    I like to do this definition, is creating a story map of a product. A story map is basically a translation of the
    customer journey into a map of actions that the user can do with the product. This story map is generally a great
    boundary object to discuss with stakeholders, it's the right level between abstract and concrete (not too abstract
    that nobody knows what it means, not too concrete that everything is fixed and there's little room for learning).-->
          </paragraph-content>
        </div>
        <div class="mt-4 flex space-x-4">
          <div class="flex-none w-16 align-top">
            <img
              class=""
              src="https://res.cloudinary.com/gknook/image/upload/v1575488796/iterate_icon_s1d9m2.svg"
              alt="Iterate"
            />
          </div>
          <paragraph-content>
            <span class="font-semibold">Iterate:</span> After defining the
            problem I start iterating. This is where the inner loop comes into
            play.
            <a href="#inner-loop" class="text-pink-400 underline">See below</a>.
          </paragraph-content>
        </div>
        <div class="mt-4 flex space-x-4">
          <div class="flex-none w-16 align-top">
            <img
              class=""
              src="https://res.cloudinary.com/gknook/image/upload/v1575488795/implement_icon_rl8wsg.svg"
              alt="Implement"
            />
          </div>
          <paragraph-content>
            <span class="font-semibold">Implement:</span> At some point the
            iterations yield a version of the product that sufficiently solves
            the problem that was defined/re-defined.

            <!--Ideally proven by the fact
    that the problem hits key metrics (the business outcome has been achieved). Note: The understanding of the problem
    definition most likely will have 'co-evolved' with the creation of the solution in the inner iteration loop.-->
          </paragraph-content>
        </div>
      </div>
      <!-- PROCESS DIAGRAM -->
      <img
        class="mt-8 bg-blue-50 rounded-lg shadow-lg"
        src="https://res.cloudinary.com/gknook/image/upload/q_auto,f_auto,dpr_auto/process_stappen-17_ds4k6d.jp2"
        alt="The problem solving process I tend to follow."
      />

      <div class="flex mt-2 justify-center">
        <div
          class="flex-none md:w-4/5 w-full text-center text-sm text-indigo-50"
        >
          The problem solving process I tend to follow. Essentially it's two
          loops, a larger outer
          <span class="whitespace-nowrap"
            >empathize-define-iterate-implement loop</span
          >
          and the inner
          <span class="whitespace-nowrap">ideate-build-test loop</span>.
        </div>
      </div>
      <!-- MORE STEPS -->

      <div class="md:px-12 sm:px-6 w-full max-w-screen-md mx-auto mt-8">
        <paragraph-header id="inner-loop">
          The inner iteration loop: ideate-build-test
        </paragraph-header>
        <div class="mt-4 flex space-x-4">
          <div class="flex-none w-16 align-top">
            <img
              class=""
              src="https://res.cloudinary.com/gknook/image/upload/v1575488795/ideate_icon_u7yeqq.svg"
              alt="Ideate"
            />
          </div>
          <paragraph-content>
            <span class="font-semibold">Ideate:</span> During the ideate stage
            I'll start coming up with solutions, initially these can be on the
            level of
            <a href="https://www.feltpresence.com/breadboards.html"
              >breadboards</a
            >
            and wireframes, to eventually going more and more concrete and
            detailed solutions.
          </paragraph-content>
        </div>
        <div class="mt-4 flex space-x-4">
          <div class="flex-none w-16 align-top">
            <img
              class=""
              src="https://res.cloudinary.com/gknook/image/upload/v1575488795/build_icon_ngikd5.svg"
              alt="Build"
            />
          </div>
          <paragraph-content>
            <span class="font-semibold">Build:</span> After ideation, we can
            start building, in the beginning these will be rough prototoypes or
            click dummies to get quick feedback. With additional iterations the
            outcomes become more concrete, eventually leading to interactive
            experiences that can be thoroughly tested.
          </paragraph-content>
        </div>
        <div class="mt-4 flex space-x-4">
          <div class="flex-none w-16 align-top">
            <img
              class=""
              src="https://res.cloudinary.com/gknook/image/upload/v1575488795/test_icon_ogptpr.svg"
              alt="Test"
            />
          </div>
          <paragraph-content>
            <span class="font-semibold">Test:</span> No product leader or
            designer can place themselves in the shoes of their customers for
            100%, therefore it's incredibly important to keep testing. Only by
            putting the prototypes in front of the eyes of real customers will
            you get the insights that make or break your product. Insights
            gathered during tests are the inspiration for the next iteration
            cycle.
          </paragraph-content>
        </div>
      </div>
    </div>
  </div>
</template>
