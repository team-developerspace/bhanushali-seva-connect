
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Advertisement from '@/components/Advertisement';
import { User, Users, Bus, Calendar, FileText, Hospital, ShoppingBag, CalendarHeart } from 'lucide-react';
import Layout from '@/components/layout/Layout';

const Index = () => {
  const [currentLanguage, setCurrentLanguage] = useState<'en' | 'gu'>('en');

  const featureCards = [
    { 
      icon: <Users className="h-8 w-8 text-bhanushali-orange" />, 
      titleEn: 'Community Directory', 
      titleGu: 'સમુદાય ડિરેક્ટરી',
      descEn: 'Connect with community members, filtered by location and village.',
      descGu: 'સ્થાન અને ગામ દ્વારા ફિલ્ટર કરેલા, સમુદાયના સભ્યો સાથે જોડાઓ.',
      link: '/directory'
    },
    { 
      icon: <Bus className="h-8 w-8 text-bhanushali-orange" />, 
      titleEn: 'Travel Booking', 
      titleGu: 'પ્રવાસ બુકિંગ',
      descEn: 'Book train and bus tickets for community travel needs.',
      descGu: 'સમુદાયની પ્રવાસ જરૂરિયાતો માટે ટ્રેન અને બસ ટિકિટ બુક કરો.',
      link: '/travel'
    },
    { 
      icon: <FileText className="h-8 w-8 text-bhanushali-orange" />, 
      titleEn: 'Help Portal', 
      titleGu: 'મદદ પોર્ટલ',
      descEn: 'Request for education, health, or general assistance.',
      descGu: 'શિક્ષણ, આરોગ્ય, અથવા સામાન્ય સહાય માટે વિનંતી કરો.',
      link: '/help'
    },
    { 
      icon: <Calendar className="h-8 w-8 text-bhanushali-orange" />, 
      titleEn: 'Forms & Events', 
      titleGu: 'ફોર્મ્સ અને ઇવેન્ટ્સ',
      descEn: 'Access event registration and community forms.',
      descGu: 'ઇવેન્ટ રજીસ્ટ્રેશન અને સમુદાય ફોર્મ્સ ઍક્સેસ કરો.',
      link: '/forms'
    },
    { 
      icon: <Hospital className="h-8 w-8 text-bhanushali-orange" />, 
      titleEn: 'Health Services', 
      titleGu: 'આરોગ્ય સેવાઓ',
      descEn: 'Hospital and insurance information for members.',
      descGu: 'સભ્યો માટે હોસ્પિટલ અને વીમા માહિતી.',
      link: '/health'
    },
    { 
      icon: <ShoppingBag className="h-8 w-8 text-bhanushali-orange" />, 
      titleEn: 'Community Shops', 
      titleGu: 'સમુદાય દુકાનો',
      descEn: 'Shop from businesses within our community.',
      descGu: 'અમારા સમુદાયની અંદરના વ્યવસાયોમાંથી ખરીદી કરો.',
      link: '/shops'
    },
  ];

  const upcomingEvents = [
    {
      id: 1,
      titleEn: 'Annual Community Meeting',
      titleGu: 'વાર્ષિક સમુદાય બેઠક',
      dateEn: 'May 15, 2024',
      dateGu: '15 મે, 2024',
      locationEn: 'Community Hall',
      locationGu: 'સમુદાય હોલ',
    },
    {
      id: 2,
      titleEn: 'Youth Career Workshop',
      titleGu: 'યુવા કારકિર્દી કાર્યશાળા',
      dateEn: 'June 8, 2024',
      dateGu: '8 જૂન, 2024',
      locationEn: 'Knowledge Center',
      locationGu: 'નોલેજ સેન્ટર',
    },
    {
      id: 3,
      titleEn: 'Health Camp',
      titleGu: 'આરોગ્ય શિબિર',
      dateEn: 'July 2, 2024',
      dateGu: '2 જુલાઈ, 2024',
      locationEn: 'Central Hospital',
      locationGu: 'સેન્ટ્રલ હોસ્પિટલ',
    },
  ];

  const recentHelp = [
    {
      id: 1,
      titleEn: 'Education Support Needed',
      titleGu: 'શિક્ષણ સહાય જરૂરી છે',
      categoryEn: 'Education',
      categoryGu: 'શિક્ષણ',
      dateEn: '2 days ago',
      dateGu: '2 દિવસ પહેલા',
    },
    {
      id: 2,
      titleEn: 'Medical Assistance Required',
      titleGu: 'તબીબી સહાય જરૂરી છે',
      categoryEn: 'Health',
      categoryGu: 'આરોગ્ય',
      dateEn: '5 days ago',
      dateGu: '5 દિવસ પહેલા',
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-bhanushali-orange to-bhanushali-yellow rounded-lg shadow-lg overflow-hidden mb-12">
        <div className="container mx-auto py-16 px-6 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {currentLanguage === 'en' 
                ? 'Welcome to Shree Kutchi Bhanushali Seva Samaj Trust' 
                : 'શ્રી કચ્છી ભાનુશાલી સેવા સમાજ ટ્રસ્ટમાં આપનું સ્વાગત છે'}
            </h1>
            <p className="text-lg mb-6">
              {currentLanguage === 'en' 
                ? 'Serving our community through unity, support, and cultural preservation.' 
                : 'એકતા, સહાય અને સાંસ્કૃતિક સંરક્ષણ દ્વારા અમારા સમુદાયની સેવા કરવી.'}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" variant="default" className="bg-white text-bhanushali-orange hover:bg-white/90">
                <Link to="/directory">
                  {currentLanguage === 'en' ? 'Community Directory' : 'સમુદાય ડિરેક્ટરી'}
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                <Link to="/donate">
                  {currentLanguage === 'en' ? 'Donate Now' : 'હવે દાન કરો'}
                </Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/3 mt-8 md:mt-0">
            <img 
              src="/lovable-uploads/ee52775c-946f-4d30-a707-d59f099fa99b.png" 
              alt="Shree Kutchi Bhanushali Seva Samaj Trust Logo" 
              className="w-64 h-64 mx-auto object-contain drop-shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Banner Ad */}
      <div className="mb-12">
        <Advertisement position="banner" currentLanguage={currentLanguage} />
      </div>

      {/* Features Section */}
      <section className="mb-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-bhanushali-orange mb-2">
            {currentLanguage === 'en' ? 'Our Services' : 'અમારી સેવાઓ'}
          </h2>
          <p className="text-muted-foreground">
            {currentLanguage === 'en' 
              ? 'Explore the various services offered by our community trust.' 
              : 'અમારા સમુદાય ટ્રસ્ટ દ્વારા આપવામાં આવતી વિવિધ સેવાઓ શોધો.'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featureCards.map((card, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border-2 border-muted">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                {card.icon}
                <CardTitle>
                  {currentLanguage === 'en' ? card.titleEn : card.titleGu}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  {currentLanguage === 'en' ? card.descEn : card.descGu}
                </CardDescription>
                <Button asChild variant="outline" className="w-full">
                  <Link to={card.link}>
                    {currentLanguage === 'en' ? 'Explore' : 'અન્વેષણ કરો'}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Inline Ad */}
      <div className="mb-12">
        <Advertisement position="inline" currentLanguage={currentLanguage} />
      </div>

      {/* News & Events */}
      <section className="mb-12">
        <Tabs defaultValue="events">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-bhanushali-orange">
              {currentLanguage === 'en' ? 'Community Updates' : 'સમુદાય અપડેટ્સ'}
            </h2>
            <TabsList>
              <TabsTrigger value="events">
                {currentLanguage === 'en' ? 'Events' : 'ઇવેન્ટ્સ'}
              </TabsTrigger>
              <TabsTrigger value="help">
                {currentLanguage === 'en' ? 'Help Requests' : 'મદદ વિનંતીઓ'}
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="events" className="space-y-4">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex items-center p-4">
                    <div className="bg-bhanushali-lightOrange p-3 rounded-lg mr-4">
                      <CalendarHeart className="h-6 w-6 text-bhanushali-orange" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-medium text-lg">
                        {currentLanguage === 'en' ? event.titleEn : event.titleGu}
                      </h3>
                      <div className="flex flex-col sm:flex-row sm:items-center text-sm text-muted-foreground">
                        <span className="mr-4">
                          {currentLanguage === 'en' ? event.dateEn : event.dateGu}
                        </span>
                        <span>
                          {currentLanguage === 'en' ? event.locationEn : event.locationGu}
                        </span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      {currentLanguage === 'en' ? 'Details' : 'વિગતો'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
            <div className="text-center mt-6">
              <Button asChild variant="outline">
                <Link to="/forms">
                  {currentLanguage === 'en' ? 'View All Events' : 'બધા ઇવેન્ટ્સ જુઓ'}
                </Link>
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="help" className="space-y-4">
            {recentHelp.map((help) => (
              <Card key={help.id} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex items-center p-4">
                    <div className="bg-bhanushali-lightOrange p-3 rounded-lg mr-4">
                      <User className="h-6 w-6 text-bhanushali-orange" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-medium text-lg">
                        {currentLanguage === 'en' ? help.titleEn : help.titleGu}
                      </h3>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <span className="bg-bhanushali-lightYellow px-2 py-0.5 rounded-full text-xs mr-2">
                          {currentLanguage === 'en' ? help.categoryEn : help.categoryGu}
                        </span>
                        <span>{currentLanguage === 'en' ? help.dateEn : help.dateGu}</span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      {currentLanguage === 'en' ? 'View' : 'જુઓ'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
            <div className="text-center mt-6">
              <Button asChild variant="outline">
                <Link to="/help">
                  {currentLanguage === 'en' ? 'View All Help Requests' : 'બધી મદદ વિનંતીઓ જુઓ'}
                </Link>
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* CTA Section */}
      <section className="bg-bhanushali-lightYellow rounded-lg p-8 text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-bhanushali-orange">
          {currentLanguage === 'en' 
            ? 'Join Our Community Network' 
            : 'અમારા સમુદાય નેટવર્કમાં જોડાઓ'}
        </h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          {currentLanguage === 'en' 
            ? 'Register as a community member to access our directory and other exclusive services.' 
            : 'અમારી ડિરેક્ટરી અને અન્ય વિશિષ્ટ સેવાઓનો ઉપયોગ કરવા માટે સમુદાયના સભ્ય તરીકે નોંધણી કરો.'}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" className="bg-bhanushali-orange hover:bg-bhanushali-orange/90">
            <Link to="/register">
              {currentLanguage === 'en' ? 'Register Now' : 'હવે નોંધણી કરો'}
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-bhanushali-orange text-bhanushali-orange">
            <Link to="/login">
              {currentLanguage === 'en' ? 'Member Login' : 'સભ્ય લોગિન'}
            </Link>
          </Button>
        </div>
      </section>

      {/* Sponsors */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-center text-bhanushali-orange mb-6">
          {currentLanguage === 'en' ? 'Our Sponsors' : 'અમારા પ્રાયોજકો'}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((sponsor) => (
            <div key={sponsor} className="bg-white p-6 rounded-lg shadow border flex items-center justify-center h-24">
              <p className="text-muted-foreground">Sponsor {sponsor}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <Button asChild variant="link">
            <Link to="/sponsors">
              {currentLanguage === 'en' ? 'Become a Sponsor' : 'પ્રાયોજક બનો'}
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
