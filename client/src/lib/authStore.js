import { create } from 'zustand'

const useAuthStore = create(set => ({
  user: null,
  setUser: (newUser) => set(state => ({ user: newUser })),
}))

export default useAuthStore;