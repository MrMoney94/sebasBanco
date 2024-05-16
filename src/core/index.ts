import {URLBASE} from '../constants';
import {IProduct} from '../interface/global';

type VerifyIdProps = {
  id: string;
};

export async function VerifyId({id}: VerifyIdProps) {
  const url = `${URLBASE}/bp/products/verification?id=${id}`;

  try {
    const http = await fetch(url);
    const data = await http.json();
    return data;
  } catch (error) {
    return error;
  }
}

export async function GetProducts() {
  const url = `${URLBASE}/bp/products`;

  try {
    const http = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorId: '1717781015',
      },
    });
    const data = await http.json();
    return data;
  } catch (error) {
    return error;
  }
}

export async function AddProduct(dataJson: IProduct) {
  const url = `${URLBASE}/bp/products`;

  try {
    const http = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorId: '1717781015',
      },
      body: JSON.stringify(dataJson),
    });
    const data = await http.json();
    return {status: 200, data};
  } catch (error) {
    return {status: 400};
  }
}
