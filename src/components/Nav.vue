<template>
    <div class="nav">
      <nav>
        <button class="menu-btn menu-btn-closed" @click="onClose">
          <i class="fas fa-bars"></i> 
        </button>
        <section ref="nav" class="nav-wrapper nav-hidden">
          <button class="menu-btn" @click="onClose">
            <i class="fas fa-bars"></i> 
          </button>
          <router-link to="/" id="logo" class="nav-wrapper-link">
            <i class="fas fa-home"></i>
            Home
          </router-link>
          <router-link to="/recepies" id="logo" class="nav-wrapper-link">
            <i class="fas fa-stream"></i>
            Recepies
          </router-link>
          <router-link to="/new" class="nav-wrapper-link">
            <i class="fas fa-plus"></i>
            Create a new plan
          </router-link>
        </section>
      </nav>       
    </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
    }
  },
  methods: {
    onClose() {
      var nav = this.$refs.nav;
      nav.classList.toggle('nav-hidden');
    }
  }
}
</script>
