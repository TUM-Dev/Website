<script setup lang="ts">
useServerSeoMeta({
  title: "OpenSource @ TUM",
  ogTitle: "OpenSource @ TUM",
  description:
    "We are a club focussing on improving our university through open source",
  ogDescription:
    "We are a club focussing on improving our university through open source",
  ogImage: "https://tum.dev/ogImage.png",
  ogUrl: "https://tum.dev/",
  twitterCard: "summary_large_image",
});
</script>

<template>
  <div id="hero">
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content flex-col lg:flex-row">
        <img
          src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
          class="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 class="text-5xl font-bold">Box Office News!</h1>
          <p class="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button class="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  </div>
  <div class="container p-10">
    <MainProjects id="projects" />
    <MainTeam id="team" />
    <MainJoinUs id="join-us" />
  </div>
</template>
