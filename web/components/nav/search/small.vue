<template>
  <div class="small-search">
    <icon name="lucide:search" class="icon"/>
  </div>
</template>

<style scoped lang="scss">
.small-search {
  @apply flex place-items-center h-full border border-[--border-color] hover:bg-[--border-color] rounded-md p-[6px];
  .icon{
    @apply size-[15px];
  }
}
</style>
