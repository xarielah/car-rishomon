import { ReactNode } from "react";
import HeaderHero from "../header/hero/header-hero";
import SideHistory from "../header/last-searches/history-side-bar/side-history";
import Navigation from "../header/navigation";

const MainLayout = ({ children }: IMainLayoutProps) => {
  return (
    <>
      <SideHistory />
      <main className="relative max-w-5xl mx-auto">
        <header>
          <Navigation />
          <HeaderHero />
        </header>
        <section className="main">{children}</section>
      </main>
    </>
  );
};

interface IMainLayoutProps {
  children: ReactNode | ReactNode[];
}

export default MainLayout;
