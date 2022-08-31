<template>
  <nav class="navigation container">
    <div class="logo">
      <NuxtLink to="/">
        <img
          alt="Pokedex App"
          :src="require(`~/assets/images/pokedex-logo.png`)"
          width="120"
        />
      </NuxtLink>
    </div>

    <div class="nav-items">
      <NuxtLink class="button is-ghost" to="/"> Home </NuxtLink>
      <NuxtLink class="button is-ghost" to="/about"> About </NuxtLink>
    </div>
  </nav>
</template>
