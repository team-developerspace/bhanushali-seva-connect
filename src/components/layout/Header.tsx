
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { LanguageToggle } from '@/components/LanguageToggle';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Globe, User } from 'lucide-react';

interface HeaderProps {
  currentLanguage: 'en' | 'gu';
  setLanguage: (lang: 'en' | 'gu') => void;
}

const Header = ({ currentLanguage, setLanguage }: HeaderProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b shadow-sm">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <img src="/lovable-uploads/ee52775c-946f-4d30-a707-d59f099fa99b.png" alt="Logo" className="h-12" />
            <h1 className="font-bold text-lg hidden md:block">
              {currentLanguage === 'en' ? 'Shree Kutchi Bhanushali Seva Samaj Trust' : 'શ્રી કચ્છી ભાનુશાલી સેવા સમાજ ટ્રસ્ટ'}
            </h1>
          </Link>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-4">
          <Link to="/directory" className="text-foreground hover:text-primary transition-colors">
            {currentLanguage === 'en' ? 'Directory' : 'ડિરેક્ટરી'}
          </Link>
          <Link to="/travel" className="text-foreground hover:text-primary transition-colors">
            {currentLanguage === 'en' ? 'Travel' : 'પ્રવાસ'}
          </Link>
          <Link to="/help" className="text-foreground hover:text-primary transition-colors">
            {currentLanguage === 'en' ? 'Help' : 'મદદ'}
          </Link>
          <Link to="/forms" className="text-foreground hover:text-primary transition-colors">
            {currentLanguage === 'en' ? 'Forms' : 'ફોર્મ્સ'}
          </Link>
          <Link to="/health" className="text-foreground hover:text-primary transition-colors">
            {currentLanguage === 'en' ? 'Health' : 'આરોગ્ય'}
          </Link>
          <Link to="/shops" className="text-foreground hover:text-primary transition-colors">
            {currentLanguage === 'en' ? 'Shops' : 'દુકાનો'}
          </Link>
          <LanguageToggle currentLanguage={currentLanguage} setLanguage={setLanguage} />
          
          {isLoggedIn ? (
            <Link to="/profile">
              <Button variant="ghost" size="icon" className="rounded-full">
                <User className="h-5 w-5" />
              </Button>
            </Link>
          ) : (
            <Link to="/login">
              <Button variant="outline">
                {currentLanguage === 'en' ? 'Login' : 'લોગિન'}
              </Button>
            </Link>
          )}
        </nav>

        {/* Mobile navigation */}
        <div className="flex items-center gap-2 md:hidden">
          <LanguageToggle currentLanguage={currentLanguage} setLanguage={setLanguage} />
          
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col gap-4 mt-8">
                <Link to="/" className="text-lg font-medium hover:text-primary transition-colors">
                  {currentLanguage === 'en' ? 'Home' : 'હોમ'}
                </Link>
                <Link to="/directory" className="text-lg font-medium hover:text-primary transition-colors">
                  {currentLanguage === 'en' ? 'Directory' : 'ડિરેક્ટરી'}
                </Link>
                <Link to="/travel" className="text-lg font-medium hover:text-primary transition-colors">
                  {currentLanguage === 'en' ? 'Travel' : 'પ્રવાસ'}
                </Link>
                <Link to="/help" className="text-lg font-medium hover:text-primary transition-colors">
                  {currentLanguage === 'en' ? 'Help' : 'મદદ'}
                </Link>
                <Link to="/forms" className="text-lg font-medium hover:text-primary transition-colors">
                  {currentLanguage === 'en' ? 'Forms' : 'ફોર્મ્સ'}
                </Link>
                <Link to="/health" className="text-lg font-medium hover:text-primary transition-colors">
                  {currentLanguage === 'en' ? 'Health' : 'આરોગ્ય'}
                </Link>
                <Link to="/shops" className="text-lg font-medium hover:text-primary transition-colors">
                  {currentLanguage === 'en' ? 'Shops' : 'દુકાનો'}
                </Link>
                {isLoggedIn ? (
                  <Link to="/profile" className="text-lg font-medium hover:text-primary transition-colors">
                    {currentLanguage === 'en' ? 'Profile' : 'પ્રોફાઇલ'}
                  </Link>
                ) : (
                  <Link to="/login">
                    <Button className="w-full">
                      {currentLanguage === 'en' ? 'Login' : 'લોગિન'}
                    </Button>
                  </Link>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
