import classNames from 'classnames';
import { animate, stagger } from 'motion';
import { useEffect, useRef, useState } from 'react';
import { useScrollDepth, useWindowWidth } from '~/utils/use-window';
import { Container } from './container';
import { CtaButton } from './cta-button';
import { Footer } from './footer';

interface LayoutProps {
  children: React.ReactNode;
}
export const Layout = ({ children }: LayoutProps) => {
  const navRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const width = useWindowWidth();
  const [isNavVisible, setIsNavVisible] = useState(width >= 1024);
  const scrollY = useScrollDepth();

  useEffect(() => {
    if (width < 1024) return;

    if (scrollY > 100) {
      setIsNavVisible(false);
    } else {
      setIsNavVisible(true);
    }
  }, [scrollY, width]);

  useEffect(() => {
    const links = navRef.current?.querySelectorAll('a');
    const hamburger = hamburgerRef.current;
    if (!links || !hamburger) {
      return;
    }

    if (width < 1024) {
      // Removes any existing inline styles (set by animations). This ensures there's
      // no animation styles sticking around on mobile.
      // if (links) links.forEach((link) => link.removeAttribute('style'));
      if (hamburger) hamburger.removeAttribute('style');

      animate(
        links,
        isNavVisible ? { y: 0, x: 0, opacity: 1 } : { y: 30, x: 0, opacity: 0 },
        {
          delay: stagger(0.1),
        }
      );
    } else {
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
    }
  }, [isNavVisible, width]);

  return (
    <main className="font-serif leading-tight [--responsive-massive-radius:60px] sm:[--responsive-massive-radius:120px]">
      <header className="fixed top-[0] left-[0] z-20 w-full text-body">
        <Container className={'relative flex h-5 pt-3 md:block [&_a]:bg-white'}>
          <nav
            ref={navRef}
            className={classNames(
              'grain fixed top-[0] left-[0] ml-auto flex h-full w-full translate-x-full flex-col bg-gray opacity-0 transition-opacity current-child:shadow-faded md:relative md:top-auto md:left-auto md:flex md:h-auto md:w-auto md:translate-x-[0] md:flex-row md:bg-transparent md:opacity-100 md:after:hidden',
              isNavVisible && 'translate-x-[0] opacity-100'
            )}
          >
            <Container className="md:space-y-auto mt-6 space-y-4 md:mt-auto md:ml-auto md:mr-[0] md:w-auto md:space-y-3 md:space-x-3 md:p-[0]">
              <CtaButton className="w-full md:w-auto" to="/" variant="small">
                Home
              </CtaButton>
              <CtaButton
                className="w-full md:w-auto"
                to="/mentoring"
                variant="small"
              >
                Mentorship
              </CtaButton>
              <CtaButton
                className="w-full md:w-auto"
                to="/about-jeroen"
                variant="small"
              >
                About me
              </CtaButton>
            </Container>
          </nav>

          <button
            ref={hamburgerRef}
            onClick={() => setIsNavVisible((visible) => !visible)}
            className={classNames(
              'text-[currentColor] transition-color absolute right-4 top-3 bottom-[0] rounded-md border bg-white px-3 shadow-hard md:opacity-0 lg:right-[0]',
              isNavVisible && 'md:pointer-events-none'
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
