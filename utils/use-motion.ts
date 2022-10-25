import { useEffect } from 'react';

/**
 * useMotion is merely some syntactic sugar that always ensures that refs aren't null.
 * It accepts an array of refs and a callback that will be called with the ref's DOM
 * elements as arguments.
 */
export const useMotion = (
  refs: React.RefObject<HTMLElement | SVGElement>[],
  animation: (refs: (HTMLElement | SVGElement)[]) => void
) => {
  useEffect(() => {
    if (refs.some((ref) => !ref.current)) return;
    animation(refs.map((ref) => ref.current!) as HTMLElement[]);
  }, [refs, animation]);
};
