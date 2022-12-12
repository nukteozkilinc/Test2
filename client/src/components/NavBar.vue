<template>
<div>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>

        <router-link to="/">
          <b-navbar-brand>
            Posts
          </b-navbar-brand>
        </router-link>

        <router-link to="/project">
          <b-navbar-brand>
            Proyects
          </b-navbar-brand>
        </router-link>

        <router-link to="/contact">
          <b-navbar-brand>
            Contact
          </b-navbar-brand>
        </router-link>

        <router-link to="/about">
          <b-navbar-brand>
            About me
          </b-navbar-brand>
        </router-link>

      </b-navbar-nav>

      <!-- Right aligned nav items -->
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>

export default{
  name: 'NavBar',
}
</script>