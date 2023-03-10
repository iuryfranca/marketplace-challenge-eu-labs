import { defineStore } from 'pinia';
import { PaymentDataProps } from '../types/_types';

export const usePaymentStore = defineStore('payment', {
  state: () => ({
    payment: {} as PaymentDataProps,
  }),
  getters: {},
  actions: {
    inicializeValuesPayment() {
      this.payment = {
        card: {
          id: 0,
          flag: '',
          number: '',
          expiry: '',
          cvv: '',
          owner: '',
          installments: {
            installment: 1,
            amount: 0,
            label: '',
          },
          peopleName: '',
          birth: '',
          cpfCnpj: '',
          phone: {
            number: '',
          },
        },
        paymentMethod: '',
        disable: true,
      };
    },
  },
});
