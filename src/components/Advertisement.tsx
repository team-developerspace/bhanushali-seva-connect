
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface AdvertisementProps {
  position: 'sidebar' | 'inline' | 'banner';
  currentLanguage: 'en' | 'gu';
}

const Advertisement = ({ position, currentLanguage }: AdvertisementProps) => {
  const getAdSize = () => {
    switch (position) {
      case 'sidebar':
        return 'w-full h-64';
      case 'inline':
        return 'w-full h-40';
      case 'banner':
        return 'w-full h-32';
      default:
        return 'w-full h-40';
    }
  };

  return (
    <Card className="overflow-hidden shadow-md border-2 border-bhanushali-yellow/50">
      <CardContent className={`p-0 relative ${getAdSize()} bg-gradient-to-r from-bhanushali-lightYellow to-white flex items-center justify-center`}>
        <div className="text-center">
          <p className="font-bold text-bhanushali-orange">
            {currentLanguage === 'en' ? 'Advertisement Space' : 'જાહેરાત સ્પેસ'}
          </p>
          <p className="text-sm text-gray-600 mt-2">
            {currentLanguage === 'en' ? 'Your ad could be here' : 'તમારી જાહેરાત અહીં હોઈ શકે છે'}
          </p>
          <a href="/advertise" className="mt-3 inline-block text-xs bg-bhanushali-orange text-white px-3 py-1 rounded-full hover:bg-bhanushali-orange/80 transition-colors">
            {currentLanguage === 'en' ? 'Advertise with us' : 'અમારી સાથે જાહેરાત કરો'}
          </a>
        </div>
        <div className="absolute top-1 right-1 bg-bhanushali-orange/20 text-xs px-1 rounded">
          Ad
        </div>
      </CardContent>
    </Card>
  );
};

export default Advertisement;
