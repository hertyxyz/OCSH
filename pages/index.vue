<template>
  <div class="flex h-screen">
    <div class="m-auto">
      <Logo />
      <h1 class="text-indigo-900 text-8xl text-center p-5 font-logo mainlogo">OCSH</h1>
      <div class="px-7 w-full text-center">
        <NuxtLink class="w-2/5 m-1 py-3 px-5 bg-pink-500 hover:bg-pink-700 duration-300 text-white font-karla font-bold rounded-lg shadow-md focus:outline-none" to="/login">Login</NuxtLink>
        <NuxtLink class="w-2/5 m-1 py-3 px-5 bg-indigo-500 hover:bg-indigo-700 duration-300 text-white font-karla font-bold rounded-lg shadow-md focus:outline-none" to="/register">Register</NuxtLink>
        <p class="p-5 text-indigo-400">{{dj}} computers online!</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
.MainLogo {
  animation: 1s appear;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}

/*
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}*/
</style>
