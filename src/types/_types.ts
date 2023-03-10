type Rating = {
  rate: number;
  count: number;
};

type installment = {
  installment: number;
  amount: number;
  label: string;
};

type cardPayment = {
  flag: string;
  number: string;
  expiry: string;
  cvv: string;
  owner: string;
  installments: string;

  peopleName: string;
  birth: string;
  cpfCnpj: string;
  phone: {
    number: string;
  };
};

export type CardProductProps = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
};

export interface ProductsCartProps extends CardProductProps {
  amount: number;
}

export type PaymentDataProps = {
  card: cardPayment;
  paymentMethod: string;
  disable: boolean;
};

export type PaymentSuccessProps = {
  peopleName: string;
  birth: string;
  cpfCnpj: string;
  phone: string;
  installments: string;
  paymentMethod: string;
};
