'use client';

import { MessageCircle, Phone, Mail, MapPin } from 'lucide-react';

export function ContactSection() {
  return (
    <section className="py-20 bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Get In Touch</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Have questions about our properties? Our expert team is ready to help you find your perfect Spanish home
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* WhatsApp */}
          <a
            href="https://wa.me/+34614246575"
            target="_blank"
            rel="noopener noreferrer"
            className="p-8 bg-secondary-foreground/10 hover:bg-primary hover:text-primary-foreground rounded-lg transition-all duration-300 group"
          >
            <MessageCircle className="w-8 h-8 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
            <p className="opacity-75 text-sm">+34 614 246 575</p>
          </a>

          {/* Phone */}
          <a
            href="tel:+34614246575"
            className="p-8 bg-secondary-foreground/10 hover:bg-primary hover:text-primary-foreground rounded-lg transition-all duration-300 group"
          >
            <Phone className="w-8 h-8 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-semibold mb-2">Phone</h3>
            <p className="opacity-75 text-sm">+34 614 246 575</p>
          </a>

          {/* Email */}
          <a
            href="mailto:info@towkeyeshomes.com"
            className="p-8 bg-secondary-foreground/10 hover:bg-primary hover:text-primary-foreground rounded-lg transition-all duration-300 group"
          >
            <Mail className="w-8 h-8 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="opacity-75 text-sm">Sales@twokeyshomes.com</p>
          </a>

          {/* Location */}
          <div className="p-8 bg-secondary-foreground/10 rounded-lg">
            <MapPin className="w-8 h-8 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Location</h3>
            <p className="opacity-75 text-sm">Málaga, Spain</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-lg mb-6 opacity-90">
            Prefer to chat? Click below to start a WhatsApp conversation with our team
          </p>
          <a
            href="https://wa.me/+34614246575"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:opacity-90 transition-opacity font-semibold"
          >
            <MessageCircle className="w-5 h-5" />
            Start WhatsApp Chat
          </a>
        </div>
      </div>
    </section>
  );
}
