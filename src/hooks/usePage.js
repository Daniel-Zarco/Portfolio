import { useReveal } from './useReveal';
import { useTextSplit } from './useTextSplit';

export function usePage() {
  useTextSplit();
  useReveal();
}
