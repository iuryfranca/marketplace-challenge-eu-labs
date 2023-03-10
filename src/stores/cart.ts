import { defineStore } from 'pinia';
import { ProductsCartProps, CardProductProps } from '../types/_types';

export const useCartStore = defineStore('cart', {
  state: () => ({
    productItems: [] as ProductsCartProps[],
  }),
  getters: {
    // Aqui é onde eu guardo todos os items que forem adicionados ao carrinho para usar em qualquer lugar do site
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

    // retorno simples para pegar o toal de items que foram adicionados no carrinho
    amountItemsCart: (state) => state.productItems.length,

    // retorno simples para pegar a soma de todos de items no carrinho
    amountPriceCart: (state): number =>
      state.productItems.reduce((a, b) => a + b.price, 0),
  },
  actions: {
    // Adiciona o item ao carrinho
    addItem(productItem: CardProductProps) {
      this.productItems.push({ ...productItem, amount: 1 });
    },

    // Remove o item ao carrinho
    removeItem(id: number) {
      const objectToRemove = this.productItems.find(
        (product) => product.id === id
      );

      if (objectToRemove)
        this.productItems.splice(this.productItems.indexOf(objectToRemove), 1);
      else alert('Produto não encontrado');
    },

    // Pegar a quantidade do item no carrinho por [id], assim eu posso mostrar para o usuário cada item e sua quantidade de forma individual
    getAmountItemCart(id: number | undefined) {
      return this.productItems.filter((item) => item.id === id).length;
    },

    //Remove todos os items do carrinho, usado na pag de sucesso
    removeAllItems() {
      this.productItems = [];
    },
  },
});
