<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view />
</template>

<script>
import { defineComponent } from "vue";
import { createClient, provideClient } from "@urql/vue";
export default defineComponent({
  setup() {
    const client = createClient({
      // USE ECOMMERCE POC MERCHANDISE CHECKOUT SANITY
      url: "https://3eriodbh.api.sanity.io/v1/graphql/production/default",
    });

    provideClient(client);
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
