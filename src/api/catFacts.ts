import axios from '@/api/axios';

export type CatFact = {
  fact: string;
  length: number;
};

export const loadFact = () => {
  return axios.get<CatFact>('/fact');
};
