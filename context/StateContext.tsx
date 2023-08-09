"use client";
import { createContext, useContext } from "react";

export const StateContext = createContext<StateContextValue | null>(null);

export function useStateContext() {
	const context = useContext(StateContext);
	if (!context) {
		throw new Error("State context");
	}
	return context;
}
interface StateContextValue {}

export function StateProvider({ children }: { children: React.ReactNode }) {
	const contextValues = {};

	return (
		<StateContext.Provider value={contextValues}>
			{children}
		</StateContext.Provider>
	);
}
