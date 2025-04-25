
import React from 'react';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface LanguageToggleProps {
  currentLanguage: 'en' | 'gu';
  setLanguage: (lang: 'en' | 'gu') => void;
}

export const LanguageToggle = ({ currentLanguage, setLanguage }: LanguageToggleProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full">
          <Globe className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem 
          onClick={() => setLanguage('en')}
          className={currentLanguage === 'en' ? 'bg-accent text-accent-foreground' : ''}
        >
          English
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setLanguage('gu')}
          className={currentLanguage === 'gu' ? 'bg-accent text-accent-foreground' : ''}
        >
          ગુજરાતી
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
