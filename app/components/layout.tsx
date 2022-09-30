import { Footer } from './footer';

interface LayoutProps {
  children: React.ReactNode;
}
export const Layout = ({ children }: LayoutProps) => {
  return (
    <main className="font-serif leading-tight [--responsive-massive-radius:60px] sm:[--responsive-massive-radius:120px]">
      {children}
      <Footer />
    </main>
  );
};
