import { NavLink } from '@remix-run/react';
import { Container } from '~/components/container';
import { DoubleArrowIcon } from '~/components/icons/double-arrow';
import { SectionTitle } from '~/components/section-title';

interface CtaProps {
  children: React.ReactNode;
  to: string;
}

const Cta = ({ children, to }: CtaProps) => (
  <NavLink
    className="group relative mb-3 inline-flex w-full flex-col justify-center rounded-lg border bg-white p-4 shadow-hard md:mb-[0] md:h-[300px] md:w-[32%]"
    to={to}
  >
    {children}
    <span
      className="absolute right-4 bottom-4 transition-transform group-hover:translate-x-3"
      aria-hidden
    >
      <DoubleArrowIcon />
    </span>
  </NavLink>
);

export const ReadOn = () => (
  <div className="mt-6">
    <Container>
      <SectionTitle>Read on</SectionTitle>

      <div className="mt-5 justify-between font-serif text-xl leading-tight md:flex">
        <Cta to="/about-jeroen">More about me</Cta>
        <Cta to="/mentoring">Mentoring</Cta>
        <Cta to="/my-vision-on-frontend">My vision on frontend</Cta>
      </div>
    </Container>
  </div>
);
