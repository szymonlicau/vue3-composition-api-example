<template>
  <div class="fact-randomizer">
    <h1 class="fact-randomizer__title">
      Did you know... 🐱
    </h1>

    <transition>
      <div
        v-if="apiFact"
        class="fact-randomizer__result"
      >
        <blockquote
          class="fact-randomizer__fact"
        >
          {{ factMessage }}
        </blockquote>

        <button
          class="fact-randomizer__submit"
          @click="loadNewFact"
        >
          Read another one!
        </button>
      </div>
    </transition>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

import { useCatFacts } from '@/composables/catFacts';

export default defineComponent({
  setup () {
    const {
      apiFact,
      factMessage,
      loadNewFact
    } = useCatFacts();

    return {
      apiFact,
      factMessage,
      loadNewFact
    };
  },
});
</script>

<style lang="scss">
.fact-randomizer {
  &__title {
    margin-bottom: 2rem;
  }

  &__result {
    max-width: 60rem;
    margin: 0 auto;

    &.v-enter-active,
    &.v-leave-active {
      transition: all 0.2s ease-in-out;
    }

    &.v-enter-from,
    &.v-leave-to {
      opacity: 0;
      transform: scale(0) rotate(5deg);
    }
  }

  &__fact {
    font-size: 1.8rem;
  }

  &__submit {
    display: inline-block;
    font-weight: bold;
    font-size: 1.8rem;
    color: white;
    background-color: burlywood;
    border: none;
    border-radius: 0.4rem;
    padding: 0.8rem 1.6rem;
    cursor: pointer;
    transition: all 0.1s linear;

    &:focus-visible {
      outline: 0.3rem solid chocolate;
    }

    &:hover {
      background-color: chocolate;
    }
  }
}
</style>
