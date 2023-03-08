interface Rating {
  rate: number;
  count: number;
}

export interface CardProductProps {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

export interface ProductsCartProps extends CardProductProps {
  amount: number;
}
