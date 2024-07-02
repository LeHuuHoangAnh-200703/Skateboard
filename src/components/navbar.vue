<template>
    <div class="flex items-center justify-between py-8 px-8">
        <div class="relative flex flex-1 max-w-xl">
            <input type="text" class="items-center w-full h-10 px-4 text-sm font-normal tracking-wider text-white placeholder-gray-500 bg-white/10 rounded-lg focus:outline-none" placeholder="Search">
            <span class="absolute inset-y-0 right-0 flex items-center pr-6"><i class="fa-solid fa-magnifying-glass"></i></span>
        </div>
        <div class="flex items-center space-x-8">
            <div class="flex space-x-4 items-center justify-center">
                <img src="../assets/img/avatar-1.jpg" class="w-12 h-12 rounded-full" alt="">
                <button class="font-semibold">EditsAnime <i class="fa-solid fa-chevron-down"></i></button>
            </div>
            <div>
                <div class="relative">
                    <div class="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></div>
                    <button><i class="fa-solid fa-bell text-xl text-white/50"></i></button>
                </div>
            </div>
        </div>
    </div>
</template>