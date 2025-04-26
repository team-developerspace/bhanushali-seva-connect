
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Bus, Train } from 'lucide-react';
import Advertisement from '@/components/Advertisement';
import { useLanguage } from '@/contexts/LanguageContext';

const Travel = () => {
  const { currentLanguage } = useLanguage();

  return (
    <Layout>
      <div className="flex flex-col space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-bhanushali-orange">
            {currentLanguage === 'en' ? 'Travel Dashboard' : 'પ્રવાસ ડેશબોર્ડ'}
          </h1>
          <p className="text-muted-foreground mt-1">
            {currentLanguage === 'en' 
              ? 'Book train and bus tickets for community travel' 
              : 'સમુદાય પ્રવાસ માટે ટ્રેન અને બસ ટિકિટ બુક કરો'}
          </p>
        </div>

        <div>
          <Tabs defaultValue="train">
            <TabsList className="grid w-full md:w-1/3 grid-cols-2">
              <TabsTrigger value="train" className="flex items-center gap-2">
                <Train className="h-4 w-4" />
                {currentLanguage === 'en' ? 'Train Tickets' : 'ટ્રેન ટિકિટ'}
              </TabsTrigger>
              <TabsTrigger value="bus" className="flex items-center gap-2">
                <Bus className="h-4 w-4" />
                {currentLanguage === 'en' ? 'Bus Tickets' : 'બસ ટિકિટ'}
              </TabsTrigger>
            </TabsList>
            
            <div className="mt-6">
              <TabsContent value="train">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Train className="h-5 w-5 text-bhanushali-orange" />
                      {currentLanguage === 'en' ? 'Train Booking' : 'ટ્રેન બુકિંગ'}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 gap-4">
                          <div>
                            <Label htmlFor="from-station">
                              {currentLanguage === 'en' ? 'From Station' : 'સ્ટેશનથી'}
                            </Label>
                            <Input id="from-station" placeholder={currentLanguage === 'en' ? 'Enter departure station' : 'પ્રસ્થાન સ્ટેશન દાખલ કરો'} />
                          </div>
                          <div>
                            <Label htmlFor="to-station">
                              {currentLanguage === 'en' ? 'To Station' : 'સ્ટેશન સુધી'}
                            </Label>
                            <Input id="to-station" placeholder={currentLanguage === 'en' ? 'Enter arrival station' : 'આગમન સ્ટેશન દાખલ કરો'} />
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="departure-date">
                              {currentLanguage === 'en' ? 'Departure Date' : 'પ્રસ્થાન તારીખ'}
                            </Label>
                            <Input id="departure-date" type="date" />
                          </div>
                          <div>
                            <Label htmlFor="passengers">
                              {currentLanguage === 'en' ? 'Passengers' : 'યાત્રીઓ'}
                            </Label>
                            <Input id="passengers" type="number" min="1" defaultValue="1" />
                          </div>
                        </div>
                        <Button className="w-full bg-bhanushali-orange hover:bg-bhanushali-orange/90">
                          {currentLanguage === 'en' ? 'Search Trains' : 'ટ્રેન શોધો'}
                        </Button>
                      </div>
                      
                      <div className="bg-muted/30 p-4 rounded-md">
                        <h3 className="font-medium mb-2">
                          {currentLanguage === 'en' ? 'Community Train Information' : 'સમુદાય ટ્રેન માહિતી'}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          {currentLanguage === 'en' 
                            ? 'Our community organizes special trains for major festivals and events. Check upcoming special trains below:' 
                            : 'અમારો સમુદાય મોટા તહેવારો અને ઇવેન્ટ્સ માટે ખાસ ટ્રેનોનું આયોજન કરે છે. નીચે આગામી વિશેષ ટ્રેનો તપાસો:'}
                        </p>
                        <div className="space-y-2">
                          <div className="bg-white p-2 rounded border">
                            <p className="font-medium">
                              {currentLanguage === 'en' ? 'Diwali Special' : 'દિવાળી સ્પેશિયલ'}
                            </p>
                            <p className="text-sm">Mumbai to Bhuj - Oct 25, 2024</p>
                          </div>
                          <div className="bg-white p-2 rounded border">
                            <p className="font-medium">
                              {currentLanguage === 'en' ? 'Annual Community Meet' : 'વાર્ષિક સમુદાય મીટ'}
                            </p>
                            <p className="text-sm">Mumbai to Ahmedabad - May 10, 2024</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <div className="mt-6">
                  <Advertisement position="inline" currentLanguage={currentLanguage} />
                </div>
              </TabsContent>

              <TabsContent value="bus">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Bus className="h-5 w-5 text-bhanushali-orange" />
                      {currentLanguage === 'en' ? 'Bus Booking' : 'બસ બુકિંગ'}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 gap-4">
                          <div>
                            <Label htmlFor="from-city">
                              {currentLanguage === 'en' ? 'From City' : 'શહેરથી'}
                            </Label>
                            <Input id="from-city" placeholder={currentLanguage === 'en' ? 'Enter departure city' : 'પ્રસ્થાન શહેર દાખલ કરો'} />
                          </div>
                          <div>
                            <Label htmlFor="to-city">
                              {currentLanguage === 'en' ? 'To City' : 'શહેર સુધી'}
                            </Label>
                            <Input id="to-city" placeholder={currentLanguage === 'en' ? 'Enter arrival city' : 'આગમન શહેર દાખલ કરો'} />
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="departure-date-bus">
                              {currentLanguage === 'en' ? 'Departure Date' : 'પ્રસ્થાન તારીખ'}
                            </Label>
                            <Input id="departure-date-bus" type="date" />
                          </div>
                          <div>
                            <Label htmlFor="passengers-bus">
                              {currentLanguage === 'en' ? 'Passengers' : 'યાત્રીઓ'}
                            </Label>
                            <Input id="passengers-bus" type="number" min="1" defaultValue="1" />
                          </div>
                        </div>
                        <Button className="w-full bg-bhanushali-orange hover:bg-bhanushali-orange/90">
                          {currentLanguage === 'en' ? 'Search Buses' : 'બસ શોધો'}
                        </Button>
                      </div>
                      
                      <div className="bg-muted/30 p-4 rounded-md">
                        <h3 className="font-medium mb-2">
                          {currentLanguage === 'en' ? 'Community Bus Services' : 'સમુદાય બસ સેવાઓ'}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          {currentLanguage === 'en' 
                            ? 'Our community organizes special bus trips for events, temple visits, and pilgrimages. View upcoming trips:' 
                            : 'અમારો સમુદાય ઇવેન્ટ્સ, મંદિર મુલાકાતો અને યાત્રાઓ માટે વિશેષ બસ પ્રવાસોનું આયોજન કરે છે. આગામી પ્રવાસો જુઓ:'}
                        </p>
                        <div className="space-y-2">
                          <div className="bg-white p-2 rounded border">
                            <p className="font-medium">
                              {currentLanguage === 'en' ? 'Temple Tour' : 'મંદિર ટૂર'}
                            </p>
                            <p className="text-sm">Mumbai to Somnath - Jun 15, 2024</p>
                          </div>
                          <div className="bg-white p-2 rounded border">
                            <p className="font-medium">
                              {currentLanguage === 'en' ? 'Kutch Festival' : 'કચ્છ ઉત્સવ'}
                            </p>
                            <p className="text-sm">Ahmedabad to Bhuj - Dec 20, 2024</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <div className="mt-6">
                  <Advertisement position="inline" currentLanguage={currentLanguage} />
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default Travel;
