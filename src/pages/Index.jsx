import React from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Globe, Users, TreePine, Sun } from 'lucide-react';

const Index = () => {
  const facts = [
    { icon: <Globe className="w-8 h-8 text-green-600" />, title: "54 Countries", description: "Africa is home to 54 diverse nations" },
    { icon: <Users className="w-8 h-8 text-blue-600" />, title: "1.3 Billion People", description: "Over 1.3 billion people call Africa home" },
    { icon: <TreePine className="w-8 h-8 text-yellow-600" />, title: "Diverse Ecosystems", description: "From deserts to rainforests, Africa has it all" },
    { icon: <Sun className="w-8 h-8 text-orange-600" />, title: "Cradle of Humanity", description: "Oldest evidence of human life found here" },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="relative h-96 bg-cover bg-center" style={{backgroundImage: "url('/placeholder.svg')"}}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Discover Africa</h1>
            <p className="text-xl text-white mb-8">A continent of diversity, culture, and natural wonders</p>
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">Explore Now</Button>
          </div>
        </div>
      </section>

      {/* Facts Section */}
      <section className="py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Fascinating Facts About Africa</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {facts.map((fact, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">{fact.icon}</div>
                <h3 className="text-xl font-semibold">{fact.title}</h3>
              </CardHeader>
              <CardContent>
                <p>{fact.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Diversity Section */}
      <section className="py-16 px-4 bg-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Experience Africa's Diversity</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <img src="/placeholder.svg" alt="African Wildlife" className="mx-auto object-cover w-full h-48 rounded-lg shadow-md" />
            <img src="/placeholder.svg" alt="African Culture" className="mx-auto object-cover w-full h-48 rounded-lg shadow-md" />
            <img src="/placeholder.svg" alt="African Landscapes" className="mx-auto object-cover w-full h-48 rounded-lg shadow-md" />
          </div>
          <p className="text-lg mb-8">
            From the bustling markets of Marrakech to the serene beaches of Zanzibar, 
            from the wildlife-rich savannas of the Serengeti to the ancient pyramids of Egypt, 
            Africa offers an unparalleled range of experiences for every traveler.
          </p>
          <Button className="bg-green-600 hover:bg-green-700 text-white">Plan Your African Adventure</Button>
        </div>
      </section>
    </div>
  );
};

export default Index;