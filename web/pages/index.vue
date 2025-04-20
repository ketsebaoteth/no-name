<template>
    <div class="flex flex-col w-full h-full">
      <div class="hero bg-gradient-to-tl from-[--primary-color] to-[transparent] ">
        <div class="left">
          <div class="release flex place-items-center gap-1 p-1 py-0.5 w-fit pr-4 border border-[--border-color] rounded-full">
            <div class="icon bg-[--primary-color] w-fit px-2 py-1 text-xs rounded-full flex place-items-center justify-center">
              <span>
                New
              </span>
            </div>
            <span class="text-xs text-white">1.0.0 is out check it out 🎉</span>
            <Icon name="i-mdi:chevron-right" class="w-4 h-4 text-white cursor-pointer"/>
          </div>
          <h1 class="max-w-[600px]">Modern, Readable, and Efficient Docs</h1>
          <p class="text-2xl">The best place to find documentation for your favorite libraries and frameworks</p>
          <div class="actions flex gap-2">
            <NuxtLink to="/docs" class="btn bg-[--primary-color] text-black font-semibold">Get Started</NuxtLink>
            <NuxtLink to="/docs" class="btn btn-secondary bg-black border border-[--border-color] hover:bg-[--border-color]">
              Documentation
              <icon name="i-material-symbols:arrow-outward" class="w-4 h-4 ml-2" />
            </NuxtLink>
            <div class="text-xs gap-1 place-items-center p-[5px] py-[3px] pl-3 rounded flex bg-black border border-[--border-color] ">
              <Icon name="tabler:terminal" class="w-4 h-4 inline-block mr-1" />
              npx create vdocs@latest
              <button class="hover:border-[--border-color] border border-transparent ml-4 p-[3px] rounded flex place-items-center justify-center">
                <Icon name="tabler:copy" class="size-4 inline-block" />
              </button>
            </div>
          </div>
        </div>
      </div>
    <Footer />
    </div>
  
 
</template>

<style scoped>
  .hero{
    @apply flex w-screen h-screen flex-grow p-10 place-items-center;
    background: #d64f00;
  background: linear-gradient(-5deg, rgba(214, 79, 0, 1) 0%, rgba(0, 0, 0, 1) 80%);
    .left{
      @apply flex flex-col gap-2;
      h1{
        @apply text-[60px] leading-[58px] font-semibold;
      }
      p{
        @apply text-sm;
      }
      .actions{
        @apply mt-2;
        .btn{
          @apply text-xs p-[5px] px-3 rounded flex place-items-center justify-center;
        }
      }
    }
    
  }
</style>
