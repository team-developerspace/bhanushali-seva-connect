
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Login = () => {
  const [currentLanguage, setCurrentLanguage] = useState<'en' | 'gu'>('en');

  return (
    <Layout>
      <div className="flex justify-center py-8">
        <div className="w-full max-w-md">
          <Card className="border-2">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl text-center">
                {currentLanguage === 'en' ? 'Welcome Back' : 'પુન: સ્વાગત છે'}
              </CardTitle>
              <CardDescription className="text-center">
                {currentLanguage === 'en' 
                  ? 'Sign in to your account to access community services' 
                  : 'સમુદાય સેવાઓ ઍક્સેસ કરવા માટે તમારા એકાઉન્ટમાં સાઇન ઇન કરો'}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Tabs defaultValue="login" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="login">
                    {currentLanguage === 'en' ? 'Login' : 'લોગિન'}
                  </TabsTrigger>
                  <TabsTrigger value="register">
                    {currentLanguage === 'en' ? 'Register' : 'રજિસ્ટર'}
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="login" className="space-y-4 mt-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">
                      {currentLanguage === 'en' ? 'Email' : 'ઇમેઇલ'}
                    </Label>
                    <Input id="email" placeholder="name@example.com" type="email" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password">
                        {currentLanguage === 'en' ? 'Password' : 'પાસવર્ડ'}
                      </Label>
                      <Link 
                        to="/forgot-password" 
                        className="text-xs text-bhanushali-orange hover:underline"
                      >
                        {currentLanguage === 'en' ? 'Forgot password?' : 'પાસવર્ડ ભૂલી ગયા?'}
                      </Link>
                    </div>
                    <Input id="password" type="password" />
                  </div>
                  <Button className="w-full bg-bhanushali-orange hover:bg-bhanushali-orange/90">
                    {currentLanguage === 'en' ? 'Sign In' : 'સાઇન ઇન'}
                  </Button>
                </TabsContent>

                <TabsContent value="register" className="space-y-4 mt-4">
                  <div className="space-y-2">
                    <Label htmlFor="register-name">
                      {currentLanguage === 'en' ? 'Full Name' : 'પૂરું નામ'}
                    </Label>
                    <Input id="register-name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="register-email">
                      {currentLanguage === 'en' ? 'Email' : 'ઇમેઇલ'}
                    </Label>
                    <Input id="register-email" type="email" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="register-phone">
                      {currentLanguage === 'en' ? 'Phone Number' : 'ફોન નંબર'}
                    </Label>
                    <Input id="register-phone" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="register-password">
                      {currentLanguage === 'en' ? 'Password' : 'પાસવર્ડ'}
                    </Label>
                    <Input id="register-password" type="password" />
                  </div>
                  <Button className="w-full bg-bhanushali-orange hover:bg-bhanushali-orange/90">
                    {currentLanguage === 'en' ? 'Create Account' : 'એકાઉન્ટ બનાવો'}
                  </Button>
                </TabsContent>
              </Tabs>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <div className="text-center text-sm text-muted-foreground">
                {currentLanguage === 'en' 
                  ? 'By continuing, you agree to our Terms of Service and Privacy Policy.' 
                  : 'ચાલુ રાખીને, તમે અમારી સેવાની શરતો અને ગોપનીયતા નીતિ સાથે સંમત થાઓ છો.'}
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
