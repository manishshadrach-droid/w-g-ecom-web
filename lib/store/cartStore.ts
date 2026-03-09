import { create } from "zustand"

export interface CartItem {
  id: number
  name: string
  price: number
  image: string
  quantity: number
}

interface CartState {
  items: CartItem[]
  isOpen: boolean

  addToCart: (item: CartItem) => void
  removeFromCart: (id: number) => void
  clearCart: () => void
  toggleCart: () => void
}

export const useCartStore = create<CartState>((set) => ({
  items: [],
  isOpen: false,

  addToCart: (item) =>
    set((state) => {
      const existing = state.items.find((i) => i.id === item.id)

      if (existing) {
        return {
          items: state.items.map((i) =>
            i.id === item.id
              ? { ...i, quantity: i.quantity + item.quantity }
              : i
          ),
        }
      }

      return {
        items: [...state.items, item],
      }
    }),

  removeFromCart: (id) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    })),

  clearCart: () =>
    set({
      items: [],
    }),

  toggleCart: () =>
    set((state) => ({
      isOpen: !state.isOpen,
    })),
}))