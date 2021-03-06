<script setup lang="ts">
import { RouterLink } from "vue-router";
import LandingSection from "@/components/sections/LandingSection.vue";
import PrimaryStackSection from "@/components/sections/PrimaryStackSection.vue";
import SecondaryStackSection from "@/components/sections/secondarystack/SecondaryStackSection.vue";
import CardWithShadowVue from "@/components/ui/CardWithShadow.vue";
import TransparentStripVue from "@/components/ui/TransparentStrip.vue";
import ProjectsOverviewVue from "@/components/sections/ProjectsOverview.vue";
import TrainingSectionVue from "@/components/sections/TrainingSection.vue";
import { computed } from "vue";
const cardsToDisplay = computed(() =>
  Math.floor((window.innerWidth * 0.82 - 20) / 170)
);
</script>

<template>
  <main>
    <div>
      <LandingSection />
    </div>
    <div>
      <PrimaryStackSection />
    </div>
    <div>
      <SecondaryStackSection :cardsToDisplay="cardsToDisplay" />
    </div>
    <div style="margin-bottom: 60px">
      <CardWithShadowVue
        :title="`Get to know me`"
        :paragraphs="[
          `I'm a Harvard-educated professional with strong communication skills and
        experience in mentorship and teaching.`,
          `I learn quickly, accept constructive feedback gratefully, and share knowledge 
        freely with peers who need assistance.`,
          `I care deeply about diversity & inclusion, decolonization, and transgender rights.`,
        ]"
        :buttons="[
          {
            text: `Read more`,
            url: `about#story`,
            classList: `btn btn-primary`,
          },
        ]"
        :imageUrl="`person.png`"
        :textLeft="true"
        :offsetUp="true"
      />
    </div>
    <div style="margin-bottom: 40px">
      <TransparentStripVue
        :title="`Github`"
        :subtitle="`Applying best practices`"
        :paragraphs="[
          `<p>I've used git and GitHub from the start of my training to build
        expertise in pull requests, resolving merge conflicts, and posting clean
        commits. I recently completed an
        <a
          href='https://github.com/jayeclark/jayeclark/blob/main/opensourcechallenge.md'
          target='_blank'
          >Open Source Challenge</a
        >
        to submit 100 open source software pull requests in 100 days, which
        significantly expanded my git and GitHub experience.</p>`,
        ]"
        :buttons="[
          {
            text: `Go to my GitHub`,
            url: `https://github.com/jayeclark/`,
            classList: `btn btn-primary`,
          },
        ]"
        :textLeft="false"
        :imageUrl="`github-hero.png`"
      />
    </div>
    <div style="margin-bottom: 120px; height: max-content">
      <TransparentStripVue
        :title="`Codewars`"
        :subtitle="`Coding Challenges`"
        :paragraphs="[
          `<p>I train regularly on Codewars. I've achieved a rank of 2 kyu in Javascript, which
        reflects a 'proficient' skill level, and I rank among the top 1%
        of developers on the site. The most recent challenge I completed was building a regex that can determine if a binary number is divisible by seven.</p>`,
        ]"
        :buttons="[
          {
            text: `Go to my profile`,
            url: `https://www.codewars.com/users/jayclark`,
            classList: `btn btn-primary`,
          },
        ]"
        :textLeft="true"
        :imageUrl="`codewars.png`"
      />
    </div>

    <ProjectsOverviewVue />

    <!-- TRAINING PLAN-->
    <TrainingSectionVue />

    <!-- CONTACT CARD -->
    <div id="bottom-contact-card" class="contact card-white">
      <div class="card-container">
        <div class="card-content offset-small">
          <h2>Hire me</h2>
          <p>
            I'm looking for full-time W2 or 1099 employment. I'm also available
            on a volunteer basis for Civic Tech and Open Source Software
            projects.
          </p>
          <p>Let's talk about a possible role for me on your team.</p>
          <RouterLink to="/contact">
            <div class="btn btn-primary">Get in touch</div>
          </RouterLink>
        </div>
        <div class="card-image-bottom">
          <img
            src="@/assets/hireme.png"
            style="max-width: 100%"
            class="expanding-image"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<style>
main {
  width: 82vw;
  margin: 0px 9%;
}

@media only screen and (max-width: 576px) {
  .card-image-bottom {
    transform: translate(0px, 0px) !important;
  }
}

@media only screen and (max-width: 1000px) {
  .open-source-projects > .card-white {
    flex-wrap: wrap;
  }

  .open-source-projects > .card-white > .card-content {
    min-width: 400px;
  }
}
</style>
