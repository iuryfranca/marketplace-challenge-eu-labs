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
  id: number;
  flag: string;
  number: string;
  expiry: string;
  cvv: string;
  owner: string;
  installments: installment;

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
