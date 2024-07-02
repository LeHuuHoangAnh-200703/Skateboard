<script>
import Sidebar from './components/sidebar.vue'
import navbar from './components/navbar.vue'
import CardPrimary from './components/CardPrimary.vue';
import CardSecondary from './components/CardSecondary.vue';
const primaryCard = [
  {
    title: "How to do Basic Jumping and how to landing safely",
    avatar: "/src/assets/img/avatar-3.png",
    background: "/src/assets/img/bg-1.png",
    name: "Thomas Hope",
    views: "53K views",
    created_at: "2 weeks ago",
    check_icon: "CheckTealIcon",
    duration: "7 min",
  },
  {
    title: "Skateboard Tips You need to know",
    avatar: "/src/assets/img/avatar-2.png",
    background: "/src/assets/img/bg-2.png",
    name: "Tony Andrew",
    views: "52K views",
    created_at: "1 weeks ago",
    check_icon: "CheckOrangeIcon",
    duration: "10 min",
  },
];
const secondaryCard = [
  {
    title: "Basic how to ride your skateboard comfortly",
    avatar: "/src/assets/img/avatar-6.png",
    background: "/src/assets/img/bg-3.png",
    name: "Andy William",
    views: "53K views",
    created_at: "2 weeks ago",
    color: "green",
    duration: "7 min",
  },
  {
    title: "Prepare for your first skateboard jump",
    avatar: "/src/assets/img/avatar-4.png",
    background: "/src/assets/img/bg-7.png",
    name: "Johny Wise",
    views: "53K views",
    created_at: "2 weeks ago",
    color: "orange",
    duration: "7 min",
  },
  {
    title: "Tips to playing skateboard on the ramp",
    avatar: "/src/assets/img/avatar-8.png",
    background: "/src/assets/img/bg-6.png",
    name: "Budi Hakim",
    views: "53K views",
    created_at: "2 weeks ago",
    color: "orange",
    duration: "7 min",
  },
  {
    title: "Basic Equipment to play skateboard safely",
    avatar: "/src/assets/img/avatar-7.png",
    background: "/src/assets/img/bg-4.png",
    name: "Wijaya Abadi",
    views: "53K views",
    created_at: "2 weeks ago",
    color: "green",
    duration: "7 min",
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