<script lang="ts" setup>
import { navConfig } from "@config/ui/navbar.config"
import { projConfig } from "@config/project/project.config"
import ThemeToggle from "./ThemeToggle.vue";
</script>
<template>
    <div class="navbar">
      <div class="project">
        <img src="~/assets/nuxt-green.svg" alt="">
        <div class="flex place-items-center gap-1">
          <h1 class="projectTitle">
            {{navConfig.title}}
          </h1>
          <div class="ProjectVersion">
            <span>v{{projConfig.version}}</span>
          </div>
        </div>
       

      </div>
      <!-- <NavSearchSmall class="ml-auto" /> -->
      <NavSearchLarge class="md:flex ml-auto" />

      <div class="links">
        <div class="link" v-for="(link, index) in navConfig.links" :key="index">
          <NuxtLink :to="link.path" class="text-white hover:text-gray-300">
            {{ link.label }}
          </NuxtLink>
        </div>
      </div>
      <div class="functionality flex place-items-center h-full">
        <ThemeToggle />
      </div>
    </div>
</template>

<style scoped lang="scss">
.navbar{
  @apply w-full bg-primary py-3 border-b border-[var(--border-color)] flex items-center gap-6 px-8 text-sm;
  .project{
    @apply flex place-items-center gap-2;
    .ProjectVersion{
      @apply text-[9px] ml-1 rounded-sm px-[5px] h-[18px] flex place-items-center border border-[var(--border-color)] bg-[var(--primary-transparent)];
      span{
        @apply tracking-wider;
      }
    }
    h1{
      @apply h-full flex place-items-center text-lg;
    }
    img{
      @apply size-8;
    }
  }
  .links{
    @apply flex gap-7 ;
    .link{
      @apply h-full flex place-items-center cursor-pointer text-xs;
      &:hover{
        @apply text-gray-300;
      }
    }
  }
  .functionality{
    @apply cursor-pointer;
  }
  
}

</style>
