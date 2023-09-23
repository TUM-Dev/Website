<template>
  <div class="navbar bg-base-100">
    <div class="flex-1">
      <a class="btn btn-ghost normal-case text-xl">LOGO</a>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal px-1">
        <li><a href="#projects">Projects</a></li>
        <li><a href="#team">Team</a></li>
        <li><a href="#join-us">Join us</a></li>
        <li>
          <details>
            <summary>Theme</summary>
            <ul class="p-2 bg-base-100">
              <li v-for="col of colors"><a @click="colorMode.preference =col">{{col}}</a></li>
            </ul>
          </details>
        </li>
      </ul>
    </div>
  </div>
  <div class="p-4">
    <button class="btn">Hello daisyUI</button>
  </div>
</template>

<script setup lang="ts">
const colorMode = useColorMode();
const colors=[  "system",  "light",  "dark",  "cyberpunk"];
</script>