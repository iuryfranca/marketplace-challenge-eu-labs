import { defineStore } from 'pinia';
import { PaymentDataProps, PaymentSuccessProps } from 'src/types/_types';

export const usePaymentStore = defineStore('payment', {
  state: () => ({
    payment: {} as PaymentDataProps,
    paymentSuccess: {} as PaymentSuccessProps,
  }),
  getters: {
    //Verificação de todos os campos na pag de pagamentos foram preenchidos
    isObjectEmpty: (state) =>
      state.payment.card.birth.length > 0 &&
      state.payment.card.cpfCnpj.length > 0 &&
      state.payment.card.cvv.length > 0 &&
      state.payment.card.expiry.length > 0 &&
      state.payment.card.flag.length > 0 &&
      state.payment.card.installments.length > 0 &&
      state.payment.card.number.length > 0 &&
      state.payment.card.owner.length > 0 &&
      state.payment.card.peopleName.length > 0 &&
      state.payment.card.phone.number.length > 0 &&
      state.payment.paymentMethod.length > 0,
  },
  actions: {
    //É necessário inicializar o objeto pata que ele porra receber os valos nos inputs
    inicializeValuesPayment() {
      this.payment = {
        card: {
          flag: '',
          number: '',
          expiry: '',
          cvv: '',
          owner: '',
          installments: '',
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

    getDataPageSuccess() {
      this.paymentSuccess = {
        peopleName: this.payment.card.peopleName,
        birth: this.payment.card.birth,
        cpfCnpj: this.payment.card.cpfCnpj,
        phone: this.payment.card.phone.number,
        installments: this.payment.card.installments,
        paymentMethod: this.payment.paymentMethod,
      };
    },

    removeAllDataPayment() {
      (this.payment = {} as PaymentDataProps),
        (this.paymentSuccess = {} as PaymentSuccessProps);
    },
  },
});
