import { api } from 'src/lib/axios';
import { defineStore } from 'pinia';
import { CardProductProps } from '../types/_types';

export const useProductsStore = defineStore('products', {
  state: () => ({
    products: [] as CardProductProps[],
    loading: false as boolean,
    error: null as string | unknown,
  }),
  getters: {
    // Ordenar exibição por nome de produtos
    getProductsByName: (state) =>
      state.products.sort((a, b) => {
        if (a.title < b.title) -1;
        if (a.title > b.title) 1;
        return 0;
      }),

    // Ordenar exibição e menor > maior preço
    getProductsByPrice: (state) =>
      state.products.sort((a, b) => (a.price > b.price ? 1 : -1)),
  },
  actions: {
    // Get API de produtos
    async fetchProducts() {
      this.products = [];
      this.loading = true;
      try {
        this.products = await api
          .get('/products')
          .then((res: any) => res.json());
      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false;
      }
    },
  },
});
