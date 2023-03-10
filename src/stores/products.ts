import { ProductsCartProps } from 'src/types/_types';
import { api } from 'src/lib/axios';
import { defineStore } from 'pinia';
import { CardProductProps } from '../types/_types';

export const useProductsStore = defineStore('products', {
  state: () => ({
    products: [] as ProductsCartProps[],
    productsFiltered: [] as ProductsCartProps[],
    loading: false as boolean,
    error: null as string | unknown,
    searchTerm: '' as string,
  }),
  getters: {},
  actions: {
    // Get API de produtos
    async fetchProducts() {
      this.products = [];
      this.loading = true;

      await api
        .get('/products')
        .then((res: any) => {
          this.error = null;
          res.data.map((product: CardProductProps) => {
            this.products.push({ ...product, amount: 1 });
          });
        })
        .catch((error) => {
          this.error = error;
        })
        .finally(() => {
          // Esse setTimeOut só está aqui para que vpvE possam ver o Skeleton que fiz :)
          setTimeout(() => {
            this.loading = false;
          }, 1000);
        });
    },

    // Função para filtrar por nome os produtos exibidos
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

    // Ordenar exibição por nome de produtos
    getProductsByName() {
      this.products = this.products.sort(
        (a, b) => a.title.charCodeAt(0) - b.title.charCodeAt(0)
      );
    },

    // Ordenar exibição e menor > maior preço
    getProductsByPrice() {
      this.products = this.products.sort((a, b) =>
        a.price > b.price ? 1 : -1
      );
    },
  },
});
