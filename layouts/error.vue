<template>
  <div class="flex h-screen">
    <div class="m-auto">
      <ErrorLogo />
      <h1 class="text-indigo-900 text-8xl text-center p-5 font-logo mainlogo">OCSH</h1>
      <div class="px-7 w-full text-center">
        <NuxtLink class="w-2/5 m-1 py-3 px-5 bg-pink-500 hover:bg-pink-700 duration-300 text-white font-karla font-bold rounded-lg shadow-md focus:outline-none" to="/login">Login</NuxtLink>
        <NuxtLink class="w-2/5 m-1 py-3 px-5 bg-indigo-500 hover:bg-indigo-700 duration-300 text-white font-karla font-bold rounded-lg shadow-md focus:outline-none" to="/register">Register</NuxtLink>
        <p class="p-5 text-indigo-400">2 computers online!</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['error']
}
</script>

<style>

</style>