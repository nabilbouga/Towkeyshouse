'use client';

import Link from 'next/link';
import { MapPin, Bed, Bath, Square } from 'lucide-react';

const properties = [
  {
    id: 1,
    title: 'Luxury Beachfront Villa',
    location: 'Costa del Sol, Málaga',
    price: '$2,500,000',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop',
    beds: 5,
    baths: 4,
    sqft: '4,200',
    type: 'Villa'
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
    type: 'Apartment'
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
    type: 'Penthouse'
  },
];

export function FeaturedProperties() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Featured Properties
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Handpicked luxury properties showcasing the finest real estate investments in Spain
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <Link key={property.id} href={`/properties/${property.id}`}>
              <div className="group cursor-pointer overflow-hidden rounded-lg bg-card border border-border hover:border-primary transition-all duration-300 shadow-lg hover:shadow-xl">
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
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{property.title}</h3>
                  <div className="flex items-center gap-2 text-muted-foreground mb-4">
                    <MapPin className="w-4 h-4" />
                    <p>{property.location}</p>
                  </div>

                  {/* Features */}
                  <div className="grid grid-cols-3 gap-4 py-4 border-y border-border">
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
                  <div className="pt-4">
                    <p className="text-3xl font-bold text-primary">{property.price}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-12">
          <Link href="/properties">
            <button className="bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:opacity-90 transition-opacity font-semibold">
              View All Properties
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
