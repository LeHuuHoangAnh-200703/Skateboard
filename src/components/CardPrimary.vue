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
    :class="index === 0 ? 'w-2/3' : 'w-1/3'"
    class="bg-cover bg-center bg-no-repeat p-10 h-[400px] rounded-2xl relative overflow-hidden"
    :style="`background-image:url('${content.background}')`"
  >
    <h3 class="font-bold text-3xl max-w-xs">{{ content.title }}</h3>
    <div class="flex flex-wrap-reverse items-center pt-5 pr-24">
      <div
        class="relative flex items-center justify-center rounded-full w-14 h-14"
      >
        <span
          class="absolute inset-0 border rounded-full border-white"
        ></span>
        <img :src="content.avatar" class="w-12 h-12 rounded-full" alt="" />
        <svg
          class="absolute bottom-0 right-0"
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
      <div class="flex flex-col pl-2 py-2">
          <p class="text-base font-semibold">{{ content.name }}</p>
          <span class="text-xs text-white/70">{{ content.views }} • {{ content.created_at }}</span>
      </div>
      <span class="absolute bottom-3 right-5 bg-gray-900/40 px-3 py-1 rounded-xl font-bold">{{ content.duration }}</span>
    </div>
  </div>
</template>