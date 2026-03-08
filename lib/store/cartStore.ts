import { create } from "zustand"

export const useCartStore = create((set) => ({
  cart: [],
  isOpen: false,

  addToCart: (product) =>
    set((state) => ({
      cart: [...state.cart, product]
    })),

  toggleCart: () =>
    set((state) => ({
      isOpen: !state.isOpen
    })),

  removeFromCart: (id) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id)
    }))
}))