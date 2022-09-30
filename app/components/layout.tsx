import { Container } from './container';
import { CtaButton } from './cta-button';
import { Footer } from './footer';

interface LayoutProps {
  children: React.ReactNode;
}
export const Layout = ({ children }: LayoutProps) => {
  return (
    <main className="font-serif leading-tight [--responsive-massive-radius:60px] sm:[--responsive-massive-radius:120px]">
      <header className="fixed top-[0] left-[0] z-20 hidden w-full text-body md:block">
        <Container className="flex space-x-3 py-3 [&_a]:bg-white">
          <CtaButton to="/" variant="small" className="ml-auto">
            Home
          </CtaButton>
          <CtaButton to="/mentoring" variant="small">
            Mentorship
          </CtaButton>
          <CtaButton to="/" variant="small">
            About me
          </CtaButton>
          <CtaButton to="/" variant="small">
            My vision on frontend
          </CtaButton>
        </Container>
      </header>
      {children}
      <Footer />
    </main>
  );
};
