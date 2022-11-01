import { Container } from './container';

export const Footer = () => (
  <footer className="mt-5 pb-4 text-center font-serif text-body leading-tight sm:mt-7">
    <Container className="flex flex-col items-center">
      <p className="border-b text-body sm:text-2xl">
        This is where the front-ends 👋
      </p>
      <p className="mt-3 max-w-xl text-small">
        Designed and built by Jeroen Reumkens. No, I'm not a designer, so I'll
        never be proud of what I "design" 😉
      </p>
    </Container>
  </footer>
);
