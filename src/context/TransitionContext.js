import { createContext, useContext } from 'react';

export const TransitionContext = createContext(null);

export function usePageTransition() {
  return useContext(TransitionContext);
}
