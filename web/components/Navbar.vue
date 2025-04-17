<script lang="ts" setup>
import { navConfig } from "@config/ui/navbar.config"
import { projConfig } from "@config/project/project.config"
</script>
<template>
  <div class="navbar">
    <div class="project">
      <img src="~/assets/nuxt-green.svg" alt="">
      <h1 class="projectTitle">
        {{navConfig.title}}
      </h1>
      <div class="ProjectVersion">
        <span>v{{projConfig.version}}</span>
      </div>
    </div>
    <div class="links">
      <div class="link" v-for="(link, index) in navConfig.links" :key="index">
        <NuxtLink :to="link.path" class="text-white hover:text-gray-300">
          {{ link.label }}
        </NuxtLink>
      </div>
    </div>
    <div class="functionality flex place-items-center h-full">
      <div class="search flex place-items-center" v-if="navConfig.searchEnabled">
        <icon name="tabler:search" class="size-4 text-gray-300" />
      </div>

    </div>
  </div>
</template>

<style scoped lang="scss">

.navbar{
  @apply w-screen h-12 bg-gray-800 text-white flex items-center gap-5 px-5 text-sm;
  .project{
    @apply flex place-items-center gap-1;
    .ProjectVersion{
      @apply text-[9px] ml-1 rounded-sm px-1 h-5 flex place-items-center border border-[var(--primary-color)] bg-[var(--primary-transparent)];
    }
    h1{
      @apply h-full flex place-items-center;
    }
    img{
      @apply h-full w-7;
    }
  }
  .links{
    @apply flex gap-5 ml-auto;
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
