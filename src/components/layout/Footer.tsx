
import React from 'react';
import { Link } from 'react-router-dom';

interface FooterProps {
  currentLanguage: 'en' | 'gu';
}

const Footer = ({ currentLanguage }: FooterProps) => {
  return (
    <footer className="bg-gradient-to-r from-bhanushali-orange/90 to-bhanushali-yellow/90 text-white">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">
              {currentLanguage === 'en' ? 'About Us' : 'અમારા વિશે'}
            </h3>
            <p className="mb-4">
              {currentLanguage === 'en' 
                ? 'Shree Kutchi Bhanushali Seva Samaj Trust is dedicated to serving our community through unity, support, and cultural preservation.' 
                : 'શ્રી કચ્છી ભાનુશાલી સેવા સમાજ ટ્રસ્ટ એકતા, સહાય અને સાંસ્કૃતિક સંરક્ષણ દ્વારા અમારા સમુદાયની સેવા માટે સમર્પિત છે.'}
            </p>
            <Link to="/donate" className="text-white underline hover:text-white/80">
              {currentLanguage === 'en' ? 'Donate Now' : 'હવે દાન કરો'}
            </Link>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">
              {currentLanguage === 'en' ? 'Quick Links' : 'ઝડપી લિંક્સ'}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/directory" className="text-white hover:text-white/80">
                  {currentLanguage === 'en' ? 'Directory' : 'ડિરેક્ટરી'}
                </Link>
              </li>
              <li>
                <Link to="/help" className="text-white hover:text-white/80">
                  {currentLanguage === 'en' ? 'Help Requests' : 'મદદ વિનંતીઓ'}
                </Link>
              </li>
              <li>
                <Link to="/forms" className="text-white hover:text-white/80">
                  {currentLanguage === 'en' ? 'Forms' : 'ફોર્મ્સ'}
                </Link>
              </li>
              <li>
                <Link to="/health" className="text-white hover:text-white/80">
                  {currentLanguage === 'en' ? 'Health & Insurance' : 'આરોગ્ય અને વીમા'}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">
              {currentLanguage === 'en' ? 'Contact Us' : 'અમારો સંપર્ક કરો'}
            </h3>
            <address className="not-italic">
              <p className="mb-2">
                {currentLanguage === 'en' ? 'Email: info@kbsst.org' : 'ઈમેલ: info@kbsst.org'}
              </p>
              <p className="mb-2">
                {currentLanguage === 'en' ? 'Phone: +91 98765 43210' : 'ફોન: +91 98765 43210'}
              </p>
              <p className="mb-2">
                {currentLanguage === 'en' 
                  ? 'Address: Trust Building, Main Street, Gujarat, India' 
                  : 'સરનામું: ટ્રસ્ટ બિલ્ડિંગ, મુખ્ય શેરી, ગુજરાત, ભારત'}
              </p>
            </address>
          </div>
        </div>
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p>
            {currentLanguage === 'en' 
              ? '© 2024 Shree Kutchi Bhanushali Seva Samaj Trust. All rights reserved.' 
              : '© 2024 શ્રી કચ્છી ભાનુશાલી સેવા સમાજ ટ્રસ્ટ. બધા અધિકારો સુરક્ષિત છે.'}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
