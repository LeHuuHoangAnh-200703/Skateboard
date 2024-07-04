<script>
import Sidebar from './components/sidebar.vue'
import navbar from './components/navbar.vue'
import CardPrimary from './components/CardPrimary.vue';
import CardSecondary from './components/CardSecondary.vue';
const primaryCard = [
  {
    title: "Gojo and Sukuna Domain Clash - Jujutsukaisen 2025",
    avatar: "/src/assets/img/avatar-3.png",
    background: "/src/assets/img/bg-10.jpg",
    name: "Thomas Hope",
    views: "530K views",
    created_at: "2 weeks ago",
    check_icon: "CheckTealIcon",
    duration: "7 min",
  },
  {
    title: "Yuta is back but in Gojo Satoru's body",
    avatar: "/src/assets/img/avatar-2.png",
    background: "/src/assets/img/bg-9.jpg",
    name: "Tony Andrew",
    views: "252K views",
    created_at: "1 weeks ago",
    check_icon: "CheckOrangeIcon",
    duration: "10 min",
  },
];
const secondaryCard = [
  {
    title: "Gojo Satoru is currently the strongest magician",
    avatar: "/src/assets/img/avatar-6.png",
    background: "/src/assets/img/bg-11.jpg",
    name: "Andy William",
    views: "168K views",
    created_at: "3 weeks ago",
    color: "green",
    duration: "4 min",
  },
  {
    title: "Gojo vs Sukuna Shibuya Death Battle",
    avatar: "/src/assets/img/avatar-4.png",
    background: "/src/assets/img/bg-12.jpg",
    name: "Johny Wise",
    views: "73K views",
    created_at: "2 weeks ago",
    color: "orange",
    duration: "7 min",
  },
  {
    title: "Yuji can use black lightning at any time",
    avatar: "/src/assets/img/avatar-8.png",
    background: "/src/assets/img/bg-13.jpg",
    name: "Budi Hakim",
    views: "453K views",
    created_at: "2 weeks ago",
    color: "orange",
    duration: "7 min",
  },
  {
    title: "Sukuna is the strongest magician in history",
    avatar: "/src/assets/img/avatar-7.png",
    background: "/src/assets/img/bg-14.jpg",
    name: "Wijaya Abadi",
    views: "153K views",
    created_at: "4 weeks ago",
    color: "green",
    duration: "10 min",
  },
];
export default {
  components: { Sidebar, navbar, CardPrimary, CardSecondary},
  setup() {
    return {
        primaryCard,
        secondaryCard,
    };
  },
}
</script>

<template>
    <div class="flex bg-gray-900 font-sans text-white">
        <div class="flex flex-col min-h-screen w-80">
            <div class="px-8 py-8">
                <h1 class="font-semibold text-2xl uppercase">skateboard</h1>
            </div>
            <Sidebar />
        </div>
        <div class="w-full">
            <navbar />
            <div class="pt-[26px] px-8">
                <h2 class="text-4xl font-semibold">Discover</h2>
                <div class="flex space-x-6 py-7">
                    <CardPrimary v-for="(card, index) in primaryCard" :key="index" :content="card" :index="index" />
                </div>
            </div> 
            <div class="pt-10 px-8">
                <h2 class="text-4xl font-semibold">Most watched</h2>
                <div class="flex space-x-6 py-7">
                    <CardSecondary v-for="(card, index) in secondaryCard" :key="index" :content="card" :index="index" />
                </div>
            </div> 
        </div>
    </div>
</template>