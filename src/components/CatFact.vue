<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';

import type { CatFact } from '@/api/catFacts';

export default defineComponent({
  props: {
    catFact: {
      type: Object as PropType<CatFact>,
      required: true
    }
  },

  computed: {
    factMessage () {
      return this.catFact.fact;
    }
  }
});
</script>

<template>
  <blockquote class="cat-fact">
    {{ factMessage }}
  </blockquote>
</template>

<style lang="scss" scoped>
.cat-fact {
  font-size: 1.8rem;
}
</style>
