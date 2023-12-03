interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  imageUrl: string;
}

interface LoginFormInitialValues {
  userName: string;
  passWord: string;
  remember: number;
}

interface AddProductFormInitialValues {
  producttitle: string;
  productprice: string;
  description: string;
}
