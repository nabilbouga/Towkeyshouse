import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Search, Home, DollarSign, FileCheck, Users, MapPin } from 'lucide-react';

const services = [
  {
    id: 1,
    icon: Search,
    title: 'Property Search',
    description: 'Expert guidance in finding properties that match your specific criteria, budget, and lifestyle preferences.'
  },
  {
    id: 2,
    icon: FileCheck,
    title: 'Legal Consultation',
    description: 'Complete assistance with documentation, contracts, and legal requirements for foreign property purchases.'
  },
  {
    id: 3,
    icon: DollarSign,
    title: 'Financial Planning',
    description: 'Advice on investment returns, financing options, and tax implications for your property purchase.'
  },
  {
    id: 4,
    icon: Home,
    title: 'Property Management',
    description: 'Full-service management including maintenance, rentals, and tenant coordination for your properties.'
  },
  {
    id: 5,
    icon: Users,
    title: 'Personal Assistance',
    description: 'Dedicated account managers provide personalized support throughout your entire real estate journey.'
  },
  {
    id: 6,
    icon: MapPin,
    title: 'Location Expertise',
    description: 'In-depth knowledge of neighborhoods, local amenities, and communities across Spain.'
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Page Header */}
      <div className="pt-32 pb-16 px-4 bg-secondary text-secondary-foreground">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold mb-4 text-balance">Our Services</h1>
          <p className="text-lg opacity-90">Comprehensive real estate solutions tailored to your needs</p>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.id} className="p-8 bg-card border border-border rounded-lg hover:border-primary hover:shadow-lg transition-all duration-300">
                  <Icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-2xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 bg-muted">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center text-balance">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Consultation</h3>
              <p className="text-muted-foreground">
                We understand your needs, budget, and preferences to guide your search
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Property Search</h3>
              <p className="text-muted-foreground">
                We curate exclusive listings matching your exact specifications
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Viewings</h3>
              <p className="text-muted-foreground">
                Schedule and attend personalized property viewings at your convenience
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Closing</h3>
              <p className="text-muted-foreground">
                We handle all legal matters and coordinate the final closing process
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Benefits */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center text-balance">Why Invest in Spanish Real Estate?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-card border border-border rounded-lg">
              <h3 className="text-xl font-bold text-primary mb-3">Strong Market Growth</h3>
              <p className="text-muted-foreground">
                Spain's real estate market has shown consistent growth, particularly in coastal and urban areas with strong rental potential.
              </p>
            </div>
            <div className="p-8 bg-card border border-border rounded-lg">
              <h3 className="text-xl font-bold text-primary mb-3">Golden Visa Benefits</h3>
              <p className="text-muted-foreground">
                Property purchases of €500,000+ can qualify for Spain's Golden Visa program, offering residency benefits.
              </p>
            </div>
            <div className="p-8 bg-card border border-border rounded-lg">
              <h3 className="text-xl font-bold text-primary mb-3">Lifestyle Destination</h3>
              <p className="text-muted-foreground">
                Spain offers a superior lifestyle with excellent weather, rich culture, world-class healthcare, and vibrant communities.
              </p>
            </div>
            <div className="p-8 bg-card border border-border rounded-lg">
              <h3 className="text-xl font-bold text-primary mb-3">Rental Income Potential</h3>
              <p className="text-muted-foreground">
                Popular locations generate strong rental yields, especially for luxury apartments and vacation properties.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-secondary text-secondary-foreground">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-balance">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-secondary-foreground/10 rounded-lg">
              <p className="mb-4 text-lg">
                "Twokeys Homes made our property search seamless. Their expertise and attention to detail exceeded our expectations."
              </p>
              <p className="font-semibold">— Marcus & Catherine, Germany</p>
            </div>
            <div className="p-8 bg-secondary-foreground/10 rounded-lg">
              <p className="mb-4 text-lg">
                "From initial consultation to closing, the team was professional, responsive, and genuinely cared about finding us the right home."
              </p>
              <p className="font-semibold">— Fatima & Hassan, Morocco</p>
            </div>
            <div className="p-8 bg-secondary-foreground/10 rounded-lg">
              <p className="mb-4 text-lg">
                "The management services have been outstanding. Our property is well-maintained and generates excellent rental returns."
              </p>
              <p className="font-semibold">— Anders, Sweden</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6 text-balance">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let our team guide you through your Spanish real estate journey. Contact us today for a free consultation.
          </p>
          <a
            href="https://wa.me/34600000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:opacity-90 transition-opacity font-semibold"
          >
            Chat on WhatsApp Now
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
