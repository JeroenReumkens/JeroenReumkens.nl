import classNames from 'classnames';
import { animate, stagger } from 'motion';
import { useEffect, useRef, useState } from 'react';
import { Container } from './container';
import { CtaButton } from './cta-button';
import { Footer } from './footer';

interface LayoutProps {
  children: React.ReactNode;
}
export const Layout = ({ children }: LayoutProps) => {
  const navRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const [isNavVisible, setIsNavVisible] = useState(true);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const updateScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 100) {
        setIsNavVisible(false);
      } else {
        setIsNavVisible(true);
      }
    };

    window.addEventListener('scroll', updateScroll);
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);

  useEffect(() => {
    const links = navRef.current?.querySelectorAll('a');
    const hamburger = hamburgerRef.current;
    if (!links || !hamburger) return;
    animate(
      links,
      isNavVisible ? { x: 0, opacity: 1 } : { x: 30, opacity: 0 },
      {
        delay: stagger(0.1, {
          start: isNavVisible ? 0.5 : 0,
          from: isNavVisible ? 'last' : 'first',
        }),
      }
    );
    animate(
      hamburger,
      isNavVisible ? { opacity: 0, x: 30 } : { opacity: 1, x: 0 },
      { delay: stagger(0.1, { start: isNavVisible ? 0 : 0.5 }) }
    );
  }, [isNavVisible]);

  return (
    <main className="font-serif leading-tight [--responsive-massive-radius:60px] sm:[--responsive-massive-radius:120px]">
      <header className="fixed top-[0] left-[0] z-20 hidden w-full text-body md:block">
        <Container className="relative flex pt-3 [&_a]:bg-white">
          <nav
            ref={navRef}
            className="ml-auto space-x-3 current-child:shadow-faded"
          >
            <CtaButton to="/" variant="small">
              Home
            </CtaButton>
            <CtaButton to="/mentoring" variant="small">
              Mentorship
            </CtaButton>
            <CtaButton to="/about-jeroen" variant="small">
              About me
            </CtaButton>
            <CtaButton to="#" variant="small" soon>
              My vision on frontend
            </CtaButton>
          </nav>

          <button
            ref={hamburgerRef}
            onClick={() => setIsNavVisible((visible) => !visible)}
            className={classNames(
              'text-[currentColor] transition-color absolute right-4 top-3 bottom-[0] rounded-md border bg-white px-3 opacity-0 shadow-hard',
              isNavVisible && 'pointer-events-none'
            )}
          >
            <span className="sr-only">
              {isNavVisible ? 'hide' : 'show'} navigation
            </span>
            <svg
              width="15px"
              height="15px"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </Container>
      </header>
      {children}
      <Footer />
    </main>
  );
};
