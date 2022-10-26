import { Footer } from './footer';
import { Header } from './header';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <main className="font-serif leading-tight [--responsive-massive-radius:60px] sm:[--responsive-massive-radius:120px]">
      <Header />
      {children}
      <Footer />
    </main>
  );
};
