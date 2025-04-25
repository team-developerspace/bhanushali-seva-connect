
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Toaster } from '@/components/ui/toaster';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useLanguage } from '@/contexts/LanguageContext';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { currentLanguage, setLanguage } = useLanguage();

  return (
    <div className="app-container flex flex-col min-h-screen">
      <Header currentLanguage={currentLanguage} setLanguage={setLanguage} />
      <ScrollArea className="flex-grow">
        <main className="container mx-auto py-6 px-4">
          {children}
        </main>
      </ScrollArea>
      <Footer currentLanguage={currentLanguage} />
      <Toaster />
    </div>
  );
};

export default Layout;
