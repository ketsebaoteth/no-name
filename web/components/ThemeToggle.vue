<script lang="ts" setup async>
import { computed } from "vue";
import { ref } from "vue";

let isDarkMode = ref(false);

(async () => {
  const theme = await localStorage.getItem("theme");
  if (theme === "dark") {
    document.documentElement.classList.add("dark");
    isDarkMode.value = true;
  } else {
    document.documentElement.classList.remove("dark");
  }
})();

function toggleTheme() {
  const isDarkMode = computed(() => document.documentElement.classList.contains("dark"));
  if (isDarkMode.value) {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  } else {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }
}
</script>
<template>
  <div class="theme-toggle">
    <div class="toggle" @click="toggleTheme">
      <icon :name="isDarkMode ? 'tabler:sun' : 'tabler:moon'" class="size-4 text-gray-300" />
    </div>
  </div>
</template>
