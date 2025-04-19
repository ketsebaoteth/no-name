<script setup lang="ts">
import { footerConfig } from "@config/ui/footer.config";
</script>
<template>
  <div class="w-full flex p-5 px-8 border-t border-[--border-color]">
    <p class="text-xs">Copyright © 2025 Better Platforms, Inc. Built with Better Docs.</p>
    <div class="socials flex ml-auto gap-4">
      <a
        v-for="(social, index) in footerConfig.socials"
        :key="index"
        :href="social.link"
        target="_blank"
        class="text-[--primary-color] hover:text-[--primary-color-hover] text-xs flex place-items-center gap-1"
      >
        <icon :name="social.icon" class="w-4 h-4" />
        {{ social.label }}
      </a>

    </div>
  </div>
</template>
