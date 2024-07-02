<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faHouse, faArrowRight, faDownload, faFileArrowDown, faWallet } from '@fortawesome/free-solid-svg-icons';
const sidebarMenu = [
  {
    label: "Menu",
    children: [
      { name: "Discover", icon: faHouse },
      { name: "Trending", icon: faArrowRight },
      { name: "Streaming", icon: faDownload },
      { name: "Playlist", icon: faFileArrowDown },
      { name: "Bookmark", icon: faWallet },
    ],
  },
  {
    label: "Category",
    children: [
      { name: "Live Stream", icon: faHouse },
      { name: "Tutorial", icon: faArrowRight },
      { name: "Competition", icon: faDownload },
      { name: "Community", icon: faFileArrowDown },
    ],
  },
];
</script>

<template>
    <div class="flex flex-col space-y-2">
      <div class="px-8 pt-2">
        <div class="py-10" v-for="(menu, index) in sidebarMenu" :key="index">
          <span class="tracking-widest uppercase text-xl font-bold">{{ menu.label }}</span>
          <ul class="flex flex-col space-y-5 pt-5">
            <li class="flex items-center space-x-3 group" v-for="(item, index) in menu.children" :key="index">
              <span class="p-3 text-gray-500 bg-gray-800 rounded-md group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                <font-awesome-icon :icon="item.icon" class="w-[16px] h-[16px]"/>
              </span>
              <a href="#" class="text-lg text-gray-500 font-semibold group-hover:text-white transition-all duration-300">
                {{ item.name }}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>