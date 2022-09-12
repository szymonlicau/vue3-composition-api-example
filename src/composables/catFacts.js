import { loadFact } from '@/api/catFacts';

import { ref, computed, onMounted } from 'vue';

export const useCatFacts = () => {
  const apiFact = ref(null);
  const loading = ref(false);

  const factMessage = computed(() => apiFact.value?.fact);

  const loadNewFact = async () => {
    if (loading.value) {
      return;
    }

    loading.value = true;

    apiFact.value = null;

    const response = await loadFact();

    // Force wait a second
    const forcedDelay = 500;
    await new Promise(resolve => setTimeout(resolve, forcedDelay));

    apiFact.value = response?.data || null;

    loading.value = false;
  };

  onMounted(() => {
    loadNewFact()
  });

  return {
    apiFact,
    factMessage,
    loadNewFact
  };
}
