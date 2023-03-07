import { create } from 'zustand';

export interface ProgressStateProps {
	isAnimating: boolean;
	setIsAnimating: (isAnimating: boolean) => void;
}

export const useProgressStore = create((set) => ({
	isAnimating: false,
	setIsAnimating: (isAnimating: boolean) => set(() => ({ isAnimating })),
}));