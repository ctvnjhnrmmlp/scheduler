import { create } from 'zustand';

export const useProfessorStore = create<UserStore>()((set) => ({
	user: null,
	setUser: (user) =>
		set(() => ({
			user: user,
		})),
	clearUser: () =>
		set(() => ({
			user: null,
		})),
}));
