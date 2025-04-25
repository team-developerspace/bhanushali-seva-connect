
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import { Calendar, MessageSquare, Heart, Eye, ThumbsUp, Filter, PlusCircle } from 'lucide-react';
import Advertisement from '@/components/Advertisement';

interface HelpPost {
  id: number;
  title: string;
  titleGu?: string;
  content: string;
  contentGu?: string;
  category: 'education' | 'health' | 'general';
  date: string;
  author: string;
  likes: number;
  comments: number;
  status: 'open' | 'resolved';
}

const Help = () => {
  const [currentLanguage, setCurrentLanguage] = useState<'en' | 'gu'>('en');
  const [filter, setFilter] = useState<string>('all');

  // Mock data - in a real app, this would come from an API
  const helpPosts: HelpPost[] = [
    {
      id: 1,
      title: 'Need financial assistance for college education',
      titleGu: 'કોલેજ શિક્ષણ માટે નાણાકીય સહાયની જરૂર છે',
      content: 'I am seeking financial assistance for my engineering education. My family is unable to support my studies due to financial constraints. Any help would be greatly appreciated.',
      contentGu: 'હું મારા એન્જિનિયરિંગ શિક્ષણ માટે નાણાકીય સહાય શોધી રહ્યો છું. નાણાકીય મર્યાદાઓને કારણે મારું પરિવાર મારા અભ્યાસને સમર્થન આપવામાં અસમર્થ છે. કોઈપણ મદદની ઘણી પ્રશંસા કરવામાં આવશે.',
      category: 'education',
      date: '3 days ago',
      author: 'Ravi Patel',
      likes: 15,
      comments: 8,
      status: 'open',
    },
    {
      id: 2,
      title: 'Urgent: Medical treatment support needed',
      titleGu: 'તાકીદનું: તબીબી સારવાર સહાય જરૂરી',
      content: 'My father is hospitalized and requires urgent surgery. We are struggling to arrange funds for the operation. Please help us during this difficult time.',
      contentGu: 'મારા પિતા હોસ્પિટલમાં દાખલ છે અને તાકીદની સર્જરીની જરૂર છે. અમે ઓપરેશન માટે ફંડની વ્યવસ્થા કરવા માટે સંઘર્ષ કરી રહ્યા છીએ. કૃપા કરીને આ મુશ્કેલ સમયમાં અમને મદદ કરો.',
      category: 'health',
      date: '1 week ago',
      author: 'Meena Shah',
      likes: 32,
      comments: 14,
      status: 'open',
    },
    {
      id: 3,
      title: 'Looking for job opportunities in accounting',
      titleGu: 'એકાઉન્ટિંગમાં નોકરીની તકો શોધી રહ્યા છે',
      content: 'I recently graduated with an accounting degree and am looking for job opportunities. If anyone in our community can provide guidance or referrals, it would help tremendously.',
      contentGu: 'હું તાજેતરમાં એકાઉન્ટિંગ ડિગ્રી સાથે સ્નાતક થયો છું અને નોકરીની તકો શોધી રહ્યો છું. જો અમારા સમુદાયમાં કોઈ માર્ગદર્શન અથવા રેફરલ્સ પ્રદાન કરી શકે, તો તે ઘણી મદદ કરશે.',
      category: 'general',
      date: '2 weeks ago',
      author: 'Amit Kumar',
      likes: 7,
      comments: 5,
      status: 'resolved',
    },
  ];

  const filteredPosts = filter === 'all'
    ? helpPosts
    : helpPosts.filter(post => 
        filter === 'open' 
          ? post.status === 'open'
          : filter === 'resolved' 
            ? post.status === 'resolved' 
            : post.category === filter
      );

  const getCategoryBadge = (category: string) => {
    switch (category) {
      case 'education':
        return (
          <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
            {currentLanguage === 'en' ? 'Education' : 'શિક્ષણ'}
          </Badge>
        );
      case 'health':
        return (
          <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
            {currentLanguage === 'en' ? 'Health' : 'આરોગ્ય'}
          </Badge>
        );
      case 'general':
        return (
          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
            {currentLanguage === 'en' ? 'General' : 'સામાન્ય'}
          </Badge>
        );
      default:
        return null;
    }
  };

  return (
    <Layout>
      <div className="flex flex-col space-y-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-bhanushali-orange">
              {currentLanguage === 'en' ? 'Help Dashboard' : 'મદદ ડેશબોર્ડ'}
            </h1>
            <p className="text-muted-foreground mt-1">
              {currentLanguage === 'en' 
                ? 'Request and offer help to community members' 
                : 'સમુદાયના સભ્યોને મદદ માંગો અને આપો'}
            </p>
          </div>

          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-bhanushali-orange hover:bg-bhanushali-orange/90">
                <PlusCircle className="mr-2 h-4 w-4" />
                {currentLanguage === 'en' ? 'New Help Request' : 'નવી મદદ વિનંતી'}
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle>
                  {currentLanguage === 'en' ? 'Create Help Request' : 'મદદ વિનંતી બનાવો'}
                </DialogTitle>
                <DialogDescription>
                  {currentLanguage === 'en' 
                    ? 'Share your situation with the community to receive assistance.' 
                    : 'સહાય મેળવવા માટે સમુદાય સાથે તમારી સ્થિતિ શેર કરો.'}
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="title">
                    {currentLanguage === 'en' ? 'Title' : 'શીર્ષક'}
                  </Label>
                  <Input id="title" placeholder={currentLanguage === 'en' ? 'Enter a clear title' : 'સ્પષ્ટ શીર્ષક દાખલ કરો'} />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="category">
                    {currentLanguage === 'en' ? 'Category' : 'શ્રેણી'}
                  </Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder={currentLanguage === 'en' ? 'Select category' : 'શ્રેણી પસંદ કરો'} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="education">
                        {currentLanguage === 'en' ? 'Education' : 'શિક્ષણ'}
                      </SelectItem>
                      <SelectItem value="health">
                        {currentLanguage === 'en' ? 'Health' : 'આરોગ્ય'}
                      </SelectItem>
                      <SelectItem value="general">
                        {currentLanguage === 'en' ? 'General' : 'સામાન્ય'}
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="details">
                    {currentLanguage === 'en' ? 'Details' : 'વિગતો'}
                  </Label>
                  <Textarea 
                    id="details" 
                    rows={5} 
                    placeholder={currentLanguage === 'en' 
                      ? 'Explain your situation in detail...' 
                      : 'તમારી સ્થિતિ વિગતવાર સમજાવો...'} 
                  />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit" className="bg-bhanushali-orange hover:bg-bhanushali-orange/90">
                  {currentLanguage === 'en' ? 'Submit Request' : 'વિનંતી સબમિટ કરો'}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardContent className="pt-6 space-y-4">
                <h2 className="font-semibold text-lg flex items-center gap-2">
                  <Filter size={18} />
                  {currentLanguage === 'en' ? 'Filters' : 'ફિલ્ટર્સ'}
                </h2>

                <div className="space-y-2">
                  <Label htmlFor="status-filter">
                    {currentLanguage === 'en' ? 'Status' : 'સ્થિતિ'}
                  </Label>
                  <Select value={filter} onValueChange={setFilter}>
                    <SelectTrigger id="status-filter">
                      <SelectValue placeholder={currentLanguage === 'en' ? 'All Requests' : 'બધી વિનંતીઓ'} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">
                        {currentLanguage === 'en' ? 'All Requests' : 'બધી વિનંતીઓ'}
                      </SelectItem>
                      <SelectItem value="open">
                        {currentLanguage === 'en' ? 'Open Requests' : 'ખુલ્લી વિનંતીઓ'}
                      </SelectItem>
                      <SelectItem value="resolved">
                        {currentLanguage === 'en' ? 'Resolved Requests' : 'ઉકેલાયેલી વિનંતીઓ'}
                      </SelectItem>
                      <SelectItem value="education">
                        {currentLanguage === 'en' ? 'Education' : 'શિક્ષણ'}
                      </SelectItem>
                      <SelectItem value="health">
                        {currentLanguage === 'en' ? 'Health' : 'આરોગ્ય'}
                      </SelectItem>
                      <SelectItem value="general">
                        {currentLanguage === 'en' ? 'General' : 'સામાન્ય'}
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            <Advertisement position="sidebar" currentLanguage={currentLanguage} />
          </div>

          <div className="lg:col-span-3 space-y-6">
            <Tabs defaultValue="list">
              <div className="flex justify-end mb-4">
                <TabsList>
                  <TabsTrigger value="list">
                    {currentLanguage === 'en' ? 'List View' : 'સૂચિ વ્યૂ'}
                  </TabsTrigger>
                  <TabsTrigger value="grid">
                    {currentLanguage === 'en' ? 'Grid View' : 'ગ્રિડ વ્યૂ'}
                  </TabsTrigger>
                </TabsList>
              </div>

              {/* List View */}
              <TabsContent value="list">
                {filteredPosts.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground">
                      {currentLanguage === 'en' 
                        ? 'No help requests found.' 
                        : 'કોઈ મદદ વિનંતીઓ મળી નથી.'}
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {filteredPosts.map((post) => (
                      <Card key={post.id} className="overflow-hidden">
                        <CardHeader className="pb-2">
                          <div className="flex justify-between items-start">
                            <div>
                              <CardTitle className="text-xl">
                                {currentLanguage === 'en' ? post.title : post.titleGu}
                              </CardTitle>
                              <CardDescription className="flex flex-wrap items-center gap-2 mt-1">
                                <span className="flex items-center">
                                  <Calendar className="h-3 w-3 mr-1" />
                                  {post.date}
                                </span>
                                <span>•</span>
                                <span>{post.author}</span>
                                <span>•</span>
                                {getCategoryBadge(post.category)}
                                <span>•</span>
                                <Badge variant={post.status === 'open' ? 'default' : 'outline'} className={post.status === 'open' ? 'bg-green-500' : ''}>
                                  {post.status === 'open' 
                                    ? (currentLanguage === 'en' ? 'Open' : 'ખુલ્લી') 
                                    : (currentLanguage === 'en' ? 'Resolved' : 'ઉકેલાયેલ')
                                  }
                                </Badge>
                              </CardDescription>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-foreground/80 line-clamp-3">
                            {currentLanguage === 'en' ? post.content : post.contentGu}
                          </p>
                        </CardContent>
                        <CardFooter className="border-t pt-4 flex justify-between">
                          <div className="flex items-center space-x-4">
                            <Button variant="ghost" size="sm" className="space-x-1">
                              <ThumbsUp className="h-4 w-4" />
                              <span>{post.likes}</span>
                            </Button>
                            <Button variant="ghost" size="sm" className="space-x-1">
                              <MessageSquare className="h-4 w-4" />
                              <span>{post.comments}</span>
                            </Button>
                          </div>
                          <div>
                            <Button variant="outline" size="sm">
                              {currentLanguage === 'en' ? 'View Details' : 'વિગતો જુઓ'}
                            </Button>
                          </div>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                )}
              </TabsContent>

              {/* Grid View */}
              <TabsContent value="grid">
                {filteredPosts.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground">
                      {currentLanguage === 'en' 
                        ? 'No help requests found.' 
                        : 'કોઈ મદદ વિનંતીઓ મળી નથી.'}
                    </p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {filteredPosts.map((post) => (
                      <Card key={post.id} className="overflow-hidden">
                        <CardHeader className="pb-2">
                          <div className="flex justify-between">
                            <div>
                              <div className="flex items-center gap-2 mb-2">
                                {getCategoryBadge(post.category)}
                                <Badge variant={post.status === 'open' ? 'default' : 'outline'} className={post.status === 'open' ? 'bg-green-500' : ''}>
                                  {post.status === 'open' 
                                    ? (currentLanguage === 'en' ? 'Open' : 'ખુલ્લી') 
                                    : (currentLanguage === 'en' ? 'Resolved' : 'ઉકેલાયેલ')
                                  }
                                </Badge>
                              </div>
                              <CardTitle className="text-lg line-clamp-1">
                                {currentLanguage === 'en' ? post.title : post.titleGu}
                              </CardTitle>
                              <CardDescription className="text-sm mt-1">
                                {post.author} • {post.date}
                              </CardDescription>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-foreground/80 text-sm line-clamp-2">
                            {currentLanguage === 'en' ? post.content : post.contentGu}
                          </p>
                        </CardContent>
                        <CardFooter className="border-t pt-3 flex justify-between">
                          <div className="flex items-center space-x-2 text-sm">
                            <span className="flex items-center">
                              <Eye className="h-3 w-3 mr-1" />42
                            </span>
                            <span className="flex items-center">
                              <Heart className="h-3 w-3 mr-1" />{post.likes}
                            </span>
                            <span className="flex items-center">
                              <MessageSquare className="h-3 w-3 mr-1" />{post.comments}
                            </span>
                          </div>
                          <Button variant="ghost" size="sm">
                            {currentLanguage === 'en' ? 'View' : 'જુઓ'}
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                )}
              </TabsContent>
            </Tabs>

            <Advertisement position="inline" currentLanguage={currentLanguage} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Help;
