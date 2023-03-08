import { defineStore } from 'pinia';
import { ProductsCartProps, CardProductProps } from '../types/_types';

export const useCartStore = defineStore('cart', {
  state: () => ({
    productItems: [] as ProductsCartProps[],
  }),
  getters: {
    itemsCart: (state) =>
      state.productItems.reduce((products, product) => {
        const existingItem = products.find((item) => item.id === product.id);

        if (!existingItem) {
          products.push({ ...product });
        } else {
          existingItem.amount++;
        }

        return products;
      }, [] as ProductsCartProps[]),

    amountItemsCart: (state) => state.productItems.length,

    amountPriceCart: (state): number =>
      state.productItems.reduce((a, b) => a + b.price, 0),
  },
  actions: {
    addItem(productItem: CardProductProps) {
      this.productItems.push({ ...productItem, amount: 1 });
    },

    removeItem(id: number) {
      const objectToRemove = this.productItems.find(
        (product) => product.id === id
      );

      if (objectToRemove)
        this.productItems.splice(this.productItems.indexOf(objectToRemove), 1);
      else alert('Produto não encontrado');
    },

    getAmountItemCart(id: number | undefined) {
      return this.productItems.filter((item) => item.id === id).length;
    },

    removeAllItems() {
      this.productItems = [];
    },
  },
});
