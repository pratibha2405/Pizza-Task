<template>
  <q-layout view="lHh Lpr lFf">
    <q-header reveal elevated>
      <q-toolbar>
        <q-btn flat round dense icon="menu" class="q-mr-sm" />
        <q-toolbar-title class="menu__link">
          <router-link :to="{ name: 'Home' }">{{ $t("pizza") }} </router-link>
        </q-toolbar-title>
        <q-tabs class="text-weight-bold" v-model="tab" shrink>
          <q-route-tab :to="{ name: 'DisplayItems' }" exact replace>
            Cart - {{ cart }}
          </q-route-tab>
          <q-btn flat round color="white" icon="add_shopping_cart" />
        </q-tabs>

      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue";
// import { Cookies } from "quasar";
export default {
  name: "MainLayout",
  components: {},
  data() {
    return {
      // user: Cookies.get("user"),
      tab: ""
    };
  },
  computed: {
    cart() {
      return this.$store.state.module.cart.length;
    }
  },
  methods: {
    // onLogout() {
    //   this.$store.dispatch("module/logout");
    // }
  }
};
</script>
<style lang="stylus" scoped>
.menu__link a {
  color: white;
 text-decoration: none;
}
</style>
