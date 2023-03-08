import { api } from 'src/lib/axios';
import { defineStore } from 'pinia';
import { CardProductProps } from '../types/_types';

export const useProductsStore = defineStore('products', {
  state: () => ({
    products: [] as CardProductProps[],
    productsFiltered: [] as CardProductProps[],
    loading: false as boolean,
    error: null as string | unknown,
    searchTerm: '' as string,
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

      await api
        .get('/products')
        .then((res: any) => {
          this.error = null;
          this.products = res.data;
        })
        .catch((error) => {
          this.error = error;
        })
        .finally(() => {
          // Esse setTimeOut só está aqui para que vpvE possam ver o Skeleton que fiz :)
          setTimeout(() => {
            this.loading = false;
          }, 2500);
        });
    },

    getSearchFilter(searchTerm: string | null) {
      this.productsFiltered = this.products.filter((product) =>
        searchTerm === null || searchTerm === ''
          ? (this.productsFiltered = [])
          : Object.values(product)
              .join('')
              .toLowerCase()
              .includes(searchTerm?.toLowerCase() as string)
      );
    },
  },
});
