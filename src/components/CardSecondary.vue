<script>
export default {
  props: {
    content: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
};
</script>
<template>
  <div
    class="flex flex-col w-[275px] overflow-hidden rounded-2xl relative bg-gray-900/30"
  >
    <img class="h-40" :src="content.background" alt="" />
    <span class="absolute top-3 right-5 bg-gray-900/40 px-3 py-1 rounded-xl font-semibold">{{ content.duration }}</span>
    <div
      class="absolute top-32 right-4 w-14 h-14 rounded-full flex items-center justify-center"
    >
      <img :src="content.avatar" alt="" class="w-12 h-12 rounded-full" />
      <span class="absolute inset-0 border border-white rounded-full"></span>
    </div>
    <div class="p-5 bg-gray-800">
      <div class="flex space-x-4 items-center relative">
        <p class="font-medium text-base text-white/60">{{ content.name }}</p>
        <span :class="index % 2 == 0 ? 'text-green-500' : 'text-orange-500'"
          ><i class="fa-solid fa-circle text-[10px]"></i
        ></span>
        <svg
          class="absolute top-[-10px] right-0"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="1"
            y="1"
            width="14"
            height="14"
            rx="7"
            fill="#08A0F7"
            stroke="#252836"
            stroke-width="2"
          />
          <path
            d="M6.17157 8.32843L7.58579 9.74264L10.4142 6.91421"
            stroke="white"
            stroke-width="1.2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div class="flex flex-col">
        <span class="text-lg font-semibold py-3">{{ content.title }}</span>
        <span class="text-sm text-white/70">{{ content.views }} • {{ content.created_at }}</span>
      </div>
    </div>
  </div>
</template>