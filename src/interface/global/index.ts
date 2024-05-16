export type IProduct = {
  id: string;
  name: string;
  description: string;
  logo: string;
  date_release: string;
  date_revision: string;
};

export type State = {
  isLoading: boolean;
  products: Array<IProduct>;
};

export type Action = {
  type: 'products';
  data: ActionData;
};

export type ActionData = {
  products: Array<IProduct>;
};
