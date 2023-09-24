<template>
  <div class="navbar bg-base-300">
    <div class="flex-1">
      <a class="btn btn-ghost p-2">
        <AppLogo />
      </a>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal px-1">
        <li class="px-1"><NuxtLink to="/#projects">Projects</NuxtLink></li>
        <li class="px-1"><NuxtLink to="/#team">Team</NuxtLink></li>
        <li class="px-1"><NuxtLink to="/#join-us">Join us</NuxtLink></li>
        <li class="px-1">
          <details>
            <summary>Theme</summary>
            <ul class="p-2 bg-base-100">
              <li v-for="col of colors" :key="col">
                <a @click="colorMode.preference = col">{{ col }}</a>
              </li>
            </ul>
          </details>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
const colorMode = useColorMode();
const colors = ["system", "light", "dark", "cyberpunk"];
</script>
