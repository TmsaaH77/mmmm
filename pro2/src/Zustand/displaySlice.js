
import {create} from "zustand";
import axios from "axios";

const url = "http://localhost:3000/products"
export const useDisplay = create((set) => ({
     products : [],
     isLoading : true,
     getProducts: async (category) => {
  const endpoint = category
    ? `${url}?category=${category}`
    : url;

  const { data } = await axios.get(endpoint);
  set({ products: data, isLoading: false });
}

})) 