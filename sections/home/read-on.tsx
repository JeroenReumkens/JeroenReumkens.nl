import Link from 'next/link';
import classNames from 'classnames';
import { Container } from '~/components/container';
import { DoubleArrowIcon } from '~/components/icons';
import { SectionTitle } from '~/components/section-title';

interface CtaProps {
  children: React.ReactNode;
  href: string;
  soon?: boolean;
}

const Cta = ({ children, href, soon }: CtaProps) => {
  const NavLinkOrSpan = soon ? 'span' : Link;

  return (
    <NavLinkOrSpan
      href={href}
      className={classNames(
        'group relative mb-2 inline-flex w-full flex-col justify-center rounded-lg border bg-white p-3 pr-5 shadow-hard sm:mb-3 sm:p-4 md:mb-[0] md:h-[300px] md:w-[32%]',
        soon &&
          'before:absolute before:right-[-2rem] before:top-[-2rem] before:block before:rounded-md before:bg-gray80 before:px-3 before:py-2 before:text-[1.8rem] before:text-white before:content-["soon"]'
      )}
    >
      {children}
      {!soon && (
        <span
          className="absolute right-4 bottom-4 h-3 w-3 transition-transform group-hover:translate-x-3"
          aria-hidden
        >
          <DoubleArrowIcon />
        </span>
      )}
    </NavLinkOrSpan>
  );
};

export const ReadOn = () => (
  <div className="mt-5 sm:mt-6">
    <Container>
      <SectionTitle>Read on</SectionTitle>

      <div className="mt-4 justify-between font-serif text-body leading-tight sm:mt-5 sm:text-xl md:flex">
        <Cta href="/about-jeroen">More about me</Cta>
        <Cta href="/mentoring">Mentoring</Cta>
        <Cta href="/my-vision-on-frontend" soon>
          My vision on frontend
        </Cta>
      </div>
    </Container>
  </div>
);
