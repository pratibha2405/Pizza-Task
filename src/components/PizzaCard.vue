<template>
  <q-card class="my-card">
    <q-img :src="product.image" class="img__card" />
    <q-card-section>
      <div class="row no-wrap items-center">
        <div class="col text-h6 ellipsis">
          {{ product.title }}
        </div>
      </div>
    </q-card-section>

    <q-card-section class="q-pt-none">
      <div class="text-caption text-grey">
        {{ product.description }}
      </div>
    </q-card-section>

    <q-separator />

    <q-card-actions align="between">
      <q-btn flat class="text-weight-bolder">
        <q-icon name="fas fa-rupee-sign"> </q-icon>
        {{ product.prize }}
      </q-btn>
      <q-btn color="primary" @click="AddToCart">
        ADD TO CART
      </q-btn>
    </q-card-actions>
  </q-card>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  methods: {
    AddToCart() {
      this.$store.dispatch("module/AddToCart", {
        product: this.product,
        quantity: 1
      });
    }
  }
};
</script>

<style lang="stylus" scoped>
.my-card:hover{
  transform : scale(1.05);
}
  </style>
