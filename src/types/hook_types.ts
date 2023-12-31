export interface LoginFormTypes {
  email: string;
  password: string;
}

export interface AddProductFormType {
  productTitle: string;
  originalPrice: number;
  category: "Clothing" | "Footwear" | "Accessories" | "Gadgets" | "Utilities";
  discount: number;
  imageUrl: string;
}
