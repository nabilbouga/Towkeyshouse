'use client';

import { useState } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { MapPin, Bed, Bath, Square, ChevronLeft, ChevronRight } from 'lucide-react';

const luxuryApartments = [
  {
    id: 1,
    title: 'Beachfront Luxury Apartment',
    location: 'Marbella, Costa del Sol',
    price: '$1,200,000',
    images: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1584622281867-8a83df3ef142?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop',
    ],
    beds: 3,
    baths: 2,
    sqft: '2,100',
    amenities: ['Ocean View', 'Private Beach', 'Infinity Pool', 'Gym', 'Concierge'],
    description: 'Stunning beachfront apartment with direct private beach access and spectacular Mediterranean views.'
  },
  {
    id: 2,
    title: 'Downtown Barcelona Penthouse Apartment',
    location: 'Barcelona, Catalonia',
    price: '$950,000',
    images: [
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1567521464027-f127ff144326?w=800&h=600&fit=crop',
    ],
    beds: 3,
    baths: 2.5,
    sqft: '1,950',
    amenities: ['City View', 'Terrace', 'Spa', 'Wine Cellar', 'Smart Home'],
    description: 'Contemporary penthouse apartment in the vibrant heart of Barcelona with terrace views.'
  },
  {
    id: 3,
    title: 'Golf Course Luxury Apartment',
    location: 'Málaga, Costa del Golf',
    price: '$850,000',
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1584622281867-8a83df3ef142?w=800&h=600&fit=crop',
    ],
    beds: 2,
    baths: 2,
    sqft: '1,650',
    amenities: ['Golf Course View', 'Private Pool', 'Garden', 'Tennis Court', '24/7 Security'],
    description: 'Exclusive apartment overlooking championship golf courses with luxury amenities.'
  },
  {
    id: 4,
    title: 'Marina Apartment with Yacht Access',
    location: 'Puerto Banús, Marbella',
    price: '$1,450,000',
    images: [
      'https://images.unsplash.com/photo-1567521464027-f127ff144326?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop',
    ],
    beds: 4,
    baths: 3,
    sqft: '2,600',
    amenities: ['Marina View', 'Yacht Berth', 'Fine Dining', 'Helipad Access', 'Private Dock'],
    description: 'Prestigious marina apartment with direct yacht berth and exclusive amenities.'
  },
  {
    id: 5,
    title: 'Mountain View Boutique Apartment',
    location: 'Ronda, Málaga',
    price: '$650,000',
    images: [
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1584622281867-8a83df3ef142?w=800&h=600&fit=crop',
    ],
    beds: 2,
    baths: 2,
    sqft: '1,400',
    amenities: ['Mountain View', 'Fireplace', 'Wine Storage', 'Library', 'Garden'],
    description: 'Charming apartment in picturesque mountain town with authentic Spanish architecture.'
  },
  {
    id: 6,
    title: 'Island Luxury Apartment',
    location: 'Ibiza, Balearic Islands',
    price: '$1,350,000',
    images: [
      'https://images.unsplash.com/photo-1571508601348-011b92b70320?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1567521464027-f127ff144326?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop',
    ],
    beds: 3,
    baths: 3,
    sqft: '2,300',
    amenities: ['Island View', 'Beach Club Access', 'Nightlife Proximity', 'Helipad', 'Spa'],
    description: 'Ultra-luxury apartment on the famous island of Ibiza with exclusive club access.'
  },
  {
    id: 7,
    title: 'Sevilla Historic Luxury Apartment',
    location: 'Sevilla, Andalusia',
    price: '$750,000',
    images: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1584622281867-8a83df3ef142?w=800&h=600&fit=crop',
    ],
    beds: 3,
    baths: 2,
    sqft: '1,800',
    amenities: ['Historic Architecture', 'Central Location', 'Courtyard', 'Rooftop Terrace', 'Parking'],
    description: 'Exquisite apartment in historic Sevilla with traditional Andalusian design elements.'
  },
  {
    id: 8,
    title: 'Málaga Seafront Penthouse',
    location: 'Málaga City Center',
    price: '$1,100,000',
    images: [
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1571508601348-011b92b70320?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1567521464027-f127ff144326?w=800&h=600&fit=crop',
    ],
    beds: 3,
    baths: 2.5,
    sqft: '2,050',
    amenities: ['Sea View', 'Modern Design', 'Gym', 'Concierge', 'Parking'],
    description: 'Modern penthouse in Málaga with contemporary design and premium amenities.'
  },
];

const ITEMS_PER_PAGE = 6;

function ApartmentCard({ apartment }: { apartment: typeof luxuryApartments[0] }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPreviousImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? apartment.images.length - 1 : prev - 1
    );
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === apartment.images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="group overflow-hidden rounded-lg bg-card border border-border hover:border-primary transition-all duration-300 shadow-lg hover:shadow-xl flex flex-col">
      {/* Image Carousel */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={apartment.images[currentImageIndex]}
          alt={apartment.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Image Navigation Buttons */}
        {apartment.images.length > 1 && (
          <>
            <button
              onClick={goToPreviousImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-2 rounded-full transition-all z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={goToNextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-2 rounded-full transition-all z-10"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}

        {/* Image Counter */}
        <div className="absolute bottom-2 right-2 bg-black/60 text-white px-3 py-1 rounded-full text-xs font-semibold">
          {currentImageIndex + 1} / {apartment.images.length}
        </div>

        {/* Image Dots */}
        <div className="absolute bottom-2 left-2 flex gap-1 z-10">
          {apartment.images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentImageIndex ? 'bg-primary w-4' : 'bg-white/60 hover:bg-white'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>

        <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
          Apartment
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-foreground mb-2">{apartment.title}</h3>
        <div className="flex items-center gap-2 text-muted-foreground mb-4">
          <MapPin className="w-4 h-4" />
          <p>{apartment.location}</p>
        </div>

        <p className="text-muted-foreground text-sm mb-4">{apartment.description}</p>

        {/* Features */}
        <div className="grid grid-cols-3 gap-4 py-4 border-y border-border mb-4">
          <div className="text-center">
            <Bed className="w-5 h-5 mx-auto mb-1 text-primary" />
            <p className="text-sm text-muted-foreground">{apartment.beds} Beds</p>
          </div>
          <div className="text-center">
            <Bath className="w-5 h-5 mx-auto mb-1 text-primary" />
            <p className="text-sm text-muted-foreground">{apartment.baths} Baths</p>
          </div>
          <div className="text-center">
            <Square className="w-5 h-5 mx-auto mb-1 text-primary" />
            <p className="text-sm text-muted-foreground">{apartment.sqft} sqft</p>
          </div>
        </div>

        {/* Amenities */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-foreground mb-2">Amenities</h4>
          <div className="flex flex-wrap gap-2">
            {apartment.amenities.slice(0, 3).map((amenity) => (
              <span key={amenity} className="bg-muted text-muted-foreground text-xs px-3 py-1 rounded-full">
                {amenity}
              </span>
            ))}
            {apartment.amenities.length > 3 && (
              <span className="bg-muted text-muted-foreground text-xs px-3 py-1 rounded-full">
                +{apartment.amenities.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Price and CTA */}
        <div className="mt-auto">
          <p className="text-3xl font-bold text-primary mb-4">{apartment.price}</p>
          <a
            href="https://wa.me/34600000000"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-primary text-primary-foreground py-2 rounded-lg hover:opacity-90 transition-opacity font-semibold text-center"
          >
            Inquire Now
          </a>
        </div>
      </div>
    </div>
  );
}

export default function ApartmentsPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(luxuryApartments.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentApartments = luxuryApartments.slice(startIndex, endIndex);

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Page Header */}
      <div className="pt-32 pb-16 px-4 bg-secondary text-secondary-foreground">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold mb-4 text-balance">Luxury Apartments</h1>
          <p className="text-lg opacity-90">Discover our exclusive selection of premium apartments in Spain's most desirable locations</p>
        </div>
      </div>

      {/* Apartments Grid */}
      <div className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentApartments.map((apartment) => (
              <ApartmentCard key={apartment.id} apartment={apartment} />
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="flex items-center justify-between mt-16 pt-8 border-t border-border">
            <button
              onClick={goToPreviousPage}
              disabled={currentPage === 1}
              className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity font-semibold"
            >
              <ChevronLeft className="w-5 h-5" />
              Previous
            </button>

            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => {
                    setCurrentPage(page);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`w-10 h-10 rounded-lg font-semibold transition-all ${
                    page === currentPage
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-card text-foreground border border-border hover:border-primary'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>

            <button
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
              className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity font-semibold"
            >
              Next
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Page Info */}
          <div className="text-center mt-6 text-muted-foreground">
            <p>Showing {startIndex + 1} - {Math.min(endIndex, luxuryApartments.length)} of {luxuryApartments.length} apartments</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-16 bg-secondary text-secondary-foreground">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Find Your Dream Apartment?</h2>
          <p className="text-lg mb-8 opacity-90">
            Our expert team is here to help you find the perfect luxury apartment in Spain
          </p>
          <a
            href="https://wa.me/34600000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:opacity-90 transition-opacity font-semibold"
          >
            Contact Our Team on WhatsApp
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
