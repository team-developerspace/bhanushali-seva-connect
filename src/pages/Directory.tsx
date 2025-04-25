
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import Advertisement from '@/components/Advertisement';
import { Search, User, Filter } from 'lucide-react';

interface DirectoryMember {
  id: number;
  name: string;
  location: string;
  village: string;
  caste: string;
  phone: string;
  email: string;
}

const Directory = () => {
  const [currentLanguage, setCurrentLanguage] = useState<'en' | 'gu'>('en');
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [villageFilter, setVillageFilter] = useState('');
  const [casteFilter, setCasteFilter] = useState('');
  const [isAuthorized, setIsAuthorized] = useState(true); // For demo, set to true to show directory

  // Mock data - in a real app, this would come from an API
  const members: DirectoryMember[] = [
    { id: 1, name: 'Raj Bhanushali', location: 'Mumbai', village: 'Kandla', caste: 'Bhanushali', phone: '9876543210', email: 'raj@example.com' },
    { id: 2, name: 'Meena Patel', location: 'Ahmedabad', village: 'Bhuj', caste: 'Bhanushali', phone: '9876543211', email: 'meena@example.com' },
    { id: 3, name: 'Amit Shah', location: 'Surat', village: 'Kandla', caste: 'Bhanushali', phone: '9876543212', email: 'amit@example.com' },
    { id: 4, name: 'Priya Mehta', location: 'Mumbai', village: 'Mundra', caste: 'Bhanushali', phone: '9876543213', email: 'priya@example.com' },
    { id: 5, name: 'Vijay Kumar', location: 'Rajkot', village: 'Anjar', caste: 'Bhanushali', phone: '9876543214', email: 'vijay@example.com' },
    { id: 6, name: 'Neha Desai', location: 'Ahmedabad', village: 'Bhachau', caste: 'Bhanushali', phone: '9876543215', email: 'neha@example.com' },
    { id: 7, name: 'Rahul Joshi', location: 'Vadodara', village: 'Mundra', caste: 'Bhanushali', phone: '9876543216', email: 'rahul@example.com' },
    { id: 8, name: 'Kavita Singh', location: 'Mumbai', village: 'Anjar', caste: 'Bhanushali', phone: '9876543217', email: 'kavita@example.com' },
  ];

  // Get unique values for filters
  const locations = [...new Set(members.map(member => member.location))];
  const villages = [...new Set(members.map(member => member.village))];
  const castes = [...new Set(members.map(member => member.caste))];

  // Filter members based on search and filters
  const filteredMembers = members.filter(member => {
    return (
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (locationFilter === '' || member.location === locationFilter) &&
      (villageFilter === '' || member.village === villageFilter) &&
      (casteFilter === '' || member.caste === casteFilter)
    );
  });

  // Reset all filters
  const resetFilters = () => {
    setSearchTerm('');
    setLocationFilter('');
    setVillageFilter('');
    setCasteFilter('');
  };

  return (
    <Layout>
      <div className="flex flex-col space-y-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-bhanushali-orange">
              {currentLanguage === 'en' ? 'Community Directory' : 'સમુદાય ડિરેક્ટરી'}
            </h1>
            <p className="text-muted-foreground mt-1">
              {currentLanguage === 'en' 
                ? 'Find and connect with community members' 
                : 'સમુદાયના સભ્યોને શોધો અને તેમની સાથે જોડાઓ'}
            </p>
          </div>
          <Button variant="outline" className="flex items-center gap-2">
            <User size={16} />
            {currentLanguage === 'en' ? 'Update My Info' : 'મારી માહિતી અપડેટ કરો'}
          </Button>
        </div>

        {!isAuthorized ? (
          <Card className="w-full max-w-2xl mx-auto">
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <User className="mx-auto h-12 w-12 text-muted-foreground" />
                <h2 className="text-xl font-semibold">
                  {currentLanguage === 'en' 
                    ? 'Login Required' 
                    : 'લોગિન આવશ્યક છે'}
                </h2>
                <p className="text-muted-foreground">
                  {currentLanguage === 'en' 
                    ? 'You must be logged in to view the community directory.' 
                    : 'સમુદાય ડિરેક્ટરી જોવા માટે તમારે લોગિન કરવું આવશ્યક છે.'}
                </p>
                <Button className="mt-4">
                  {currentLanguage === 'en' ? 'Login to Continue' : 'ચાલુ રાખવા માટે લોગિન કરો'}
                </Button>
              </div>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-1 space-y-6">
              <Card>
                <CardContent className="pt-6 space-y-4">
                  <h2 className="font-semibold text-lg flex items-center gap-2">
                    <Filter size={18} />
                    {currentLanguage === 'en' ? 'Filters' : 'ફિલ્ટર્સ'}
                  </h2>

                  <div className="space-y-2">
                    <Label htmlFor="location">
                      {currentLanguage === 'en' ? 'Location' : 'સ્થાન'}
                    </Label>
                    <Select value={locationFilter} onValueChange={setLocationFilter}>
                      <SelectTrigger id="location">
                        <SelectValue placeholder={currentLanguage === 'en' ? 'All Locations' : 'બધા સ્થાનો'} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="">
                          {currentLanguage === 'en' ? 'All Locations' : 'બધા સ્થાનો'}
                        </SelectItem>
                        {locations.map((location) => (
                          <SelectItem key={location} value={location}>
                            {location}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="village">
                      {currentLanguage === 'en' ? 'Village' : 'ગામ'}
                    </Label>
                    <Select value={villageFilter} onValueChange={setVillageFilter}>
                      <SelectTrigger id="village">
                        <SelectValue placeholder={currentLanguage === 'en' ? 'All Villages' : 'બધા ગામો'} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="">
                          {currentLanguage === 'en' ? 'All Villages' : 'બધા ગામો'}
                        </SelectItem>
                        {villages.map((village) => (
                          <SelectItem key={village} value={village}>
                            {village}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="caste">
                      {currentLanguage === 'en' ? 'Caste' : 'જાતિ'}
                    </Label>
                    <Select value={casteFilter} onValueChange={setCasteFilter}>
                      <SelectTrigger id="caste">
                        <SelectValue placeholder={currentLanguage === 'en' ? 'All Castes' : 'બધી જાતિઓ'} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="">
                          {currentLanguage === 'en' ? 'All Castes' : 'બધી જાતિઓ'}
                        </SelectItem>
                        {castes.map((caste) => (
                          <SelectItem key={caste} value={caste}>
                            {caste}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <Button variant="outline" onClick={resetFilters} className="w-full">
                    {currentLanguage === 'en' ? 'Reset Filters' : 'ફિલ્ટર્સ રીસેટ કરો'}
                  </Button>
                </CardContent>
              </Card>

              <Advertisement position="sidebar" currentLanguage={currentLanguage} />
            </div>

            <div className="lg:col-span-3 space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between mb-6">
                    <div className="relative flex-grow">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder={currentLanguage === 'en' ? 'Search members...' : 'સભ્યો શોધો...'}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <span>
                        {currentLanguage === 'en' 
                          ? `${filteredMembers.length} members found` 
                          : `${filteredMembers.length} સભ્યો મળ્યા`}
                      </span>
                    </div>
                  </div>

                  <div className="border rounded-lg overflow-hidden">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>{currentLanguage === 'en' ? 'Name' : 'નામ'}</TableHead>
                          <TableHead>{currentLanguage === 'en' ? 'Location' : 'સ્થાન'}</TableHead>
                          <TableHead>{currentLanguage === 'en' ? 'Village' : 'ગામ'}</TableHead>
                          <TableHead>{currentLanguage === 'en' ? 'Contact' : 'સંપર્ક'}</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filteredMembers.length === 0 ? (
                          <TableRow>
                            <TableCell colSpan={4} className="text-center py-8 text-muted-foreground">
                              {currentLanguage === 'en' 
                                ? 'No members found. Try adjusting your filters.' 
                                : 'કોઈ સભ્યો મળ્યા નથી. તમારા ફિલ્ટર્સ સમાયોજિત કરવાનો પ્રયાસ કરો.'}
                            </TableCell>
                          </TableRow>
                        ) : (
                          filteredMembers.map((member) => (
                            <TableRow key={member.id}>
                              <TableCell className="font-medium">{member.name}</TableCell>
                              <TableCell>{member.location}</TableCell>
                              <TableCell>{member.village}</TableCell>
                              <TableCell>
                                <Button variant="link" className="p-0 h-auto font-normal text-left">
                                  {member.phone}
                                </Button>
                              </TableCell>
                            </TableRow>
                          ))
                        )}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>

              <Advertisement position="inline" currentLanguage={currentLanguage} />
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Directory;
