<template>
  <div class="flex flex-col w-full h-full">
    <div class="hero">
      <div class="left">
        <h1>Better Docs Starter</h1>
        <p class="text-2xl">A better documentation site for your project</p>
        <div class="actions flex gap-2">
          <NuxtLink to="/docs" class="btn bg-[--primary-color] text-black font-semibold">Get Started</NuxtLink>
          <NuxtLink to="/docs" class="btn btn-secondary border border-[--border-color] hover:bg-[--border-color]">
            Documentation
            <icon name="i-material-symbols:arrow-outward" class="w-4 h-4 ml-2" />
          </NuxtLink>
        </div>
      </div>
    </div>
    <Footer />
  </div>
 
</template>

<style scoped>
  .hero{
    @apply flex w-screen flex-grow p-10 place-items-center;

    .left{
      @apply flex flex-col gap-2;
      h1{
        @apply text-5xl font-semibold;
      }
      p{
        @apply text-sm;
      }
      .actions{
        @apply mt-2;
        .btn{
          @apply text-xs p-2 px-3 rounded flex place-items-center justify-center;
        }
      }
    }
    
  }
</style>
