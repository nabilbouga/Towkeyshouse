'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import Link from 'next/link';
import { MapPin, Bed, Bath, Square, Search } from 'lucide-react';
import { useState } from 'react';

const allProperties = [
  {
    id: 1,
    title: 'Luxury Beachfront Villa',
    location: 'Costa del Sol, Málaga',
    price: '$2,500,000',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop',
    beds: 5,
    baths: 4,
    sqft: '4,200',
    type: 'Villa',
    description: 'Stunning beachfront property with panoramic ocean views'
  },
  {
    id: 2,
    title: 'Modern Apartment Complex',
    location: 'Barcelona, Catalonia',
    price: '$1,800,000',
    image: 'https://images.unsplash.com/photo-1567521464027-f127ff144326?w=800&h=600&fit=crop',
    beds: 4,
    baths: 3,
    sqft: '3,500',
    type: 'Apartment',
    description: 'Contemporary apartment in the heart of Barcelona'
  },
  {
    id: 3,
    title: 'Exclusive Penthouse',
    location: 'Marbella, Málaga',
    price: '$3,200,000',
    image: 'https://images.unsplash.com/photo-1539932233786-86213cad0c2f?w=800&h=600&fit=crop',
    beds: 6,
    baths: 5,
    sqft: '5,100',
    type: 'Penthouse',
    description: 'Magnificent penthouse with private pool and spa'
  },
  {
    id: 4,
    title: 'Mediterranean Estate',
    location: 'Valencia, Valencia',
    price: '$2,100,000',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
    beds: 4,
    baths: 4,
    sqft: '3,800',
    type: 'Estate',
    description: 'Charming Mediterranean property with gardens'
  },
  {
    id: 5,
    title: 'Coastal Manor House',
    location: 'Ibiza, Balearic Islands',
    price: '$2,800,000',
    image: 'https://images.unsplash.com/photo-1570129477492-45ec003aaf58?w=800&h=600&fit=crop',
    beds: 5,
    baths: 4,
    sqft: '4,500',
    type: 'Villa',
    description: 'Exclusive manor house with island paradise views'
  },
  {
    id: 6,
    title: 'Urban Loft',
    location: 'Madrid, Madrid',
    price: '$1,600,000',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop',
    beds: 3,
    baths: 2,
    sqft: '2,800',
    type: 'Loft',
    description: 'Stylish loft in Madrid\'s most prestigious neighborhood'
  },
];

export default function PropertiesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('All');

  const filteredProperties = allProperties.filter((property) => {
    const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         property.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'All' || property.type === selectedType;
    return matchesSearch && matchesType;
  });

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Page Header */}
      <div className="pt-32 pb-16 px-4 bg-secondary text-secondary-foreground">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold mb-4 text-balance">Properties</h1>
          <p className="text-lg opacity-90">Discover our exclusive selection of luxury properties across Spain</p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-background sticky top-24 z-40 py-6 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search by location or property name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Type Filter */}
            <div className="flex gap-2 flex-wrap">
              {['All', 'Villa', 'Apartment', 'Penthouse', 'Estate', 'Loft'].map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    selectedType === type
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-foreground hover:bg-muted/80'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Properties Grid */}
      <div className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {filteredProperties.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProperties.map((property) => (
                <Link key={property.id} href={`/properties/${property.id}`}>
                  <div className="group cursor-pointer overflow-hidden rounded-lg bg-card border border-border hover:border-primary transition-all duration-300 shadow-lg hover:shadow-xl h-full flex flex-col">
                    {/* Image */}
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={property.image}
                        alt={property.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                        {property.type}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-2xl font-bold text-foreground mb-2">{property.title}</h3>
                      <div className="flex items-center gap-2 text-muted-foreground mb-4">
                        <MapPin className="w-4 h-4" />
                        <p>{property.location}</p>
                      </div>

                      {/* Features */}
                      <div className="grid grid-cols-3 gap-4 py-4 border-y border-border mb-4">
                        <div className="text-center">
                          <Bed className="w-5 h-5 mx-auto mb-1 text-primary" />
                          <p className="text-sm text-muted-foreground">{property.beds} Beds</p>
                        </div>
                        <div className="text-center">
                          <Bath className="w-5 h-5 mx-auto mb-1 text-primary" />
                          <p className="text-sm text-muted-foreground">{property.baths} Baths</p>
                        </div>
                        <div className="text-center">
                          <Square className="w-5 h-5 mx-auto mb-1 text-primary" />
                          <p className="text-sm text-muted-foreground">{property.sqft} sqft</p>
                        </div>
                      </div>

                      {/* Price */}
                      <div className="mt-auto">
                        <p className="text-3xl font-bold text-primary">{property.price}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">No properties found matching your search.</p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </main>
  );
}
