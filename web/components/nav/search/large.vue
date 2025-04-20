<template>
  <div class="large-search">
    <div class="input-container">
      <icon name="lucide:search" class=" ml-1"/>
      <input type="text" placeholder="Search Documentation" />
      <div class="command flex place-items-center gap-1">
        <div class="cmd flex place-items-center">
          <icon name="lucide:command" class="icon"/>
        </div>
        <div class="ctrl">
          k
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.large-search {
  @apply flex place-items-center cursor-pointer border border-[--border-color] hover:bg-[--border-color] rounded-md p-[6px];
  .input-container{
    @apply flex place-items-center gap-2;
    input{
      @apply bg-transparent border-none outline-none text-xs text-white placeholder:text-gray-400;
      &::placeholder{
        @apply text-gray-400;
      }
    }
    .command{
      @apply flex place-items-center gap-1;
      div{
        @apply border border-[--border-color] rounded-md size-5 text-xs flex place-items-center justify-center;
      }
    }
    .icon{
      @apply size-[11px];
    }
  }
}
</style>
