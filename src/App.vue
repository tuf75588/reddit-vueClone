<template>
  <div id="app">
    <nav class="navbar is-dark" role="navigation" aria-label="main navigation" >
  <div class="navbar-brand">
    <a class="navbar-item" href="/#/">
      Andrew's Reddit Clone
      <img  width="112" height="28">
    </a>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>
</nav>
    <router-view class='main container'/>
  </div>
</template>

<style lang="scss">
  .main {
    margin-top: 2em;
  }
</style>
