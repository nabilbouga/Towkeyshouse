'use client';

export function HeroSection() {
  return (
    <div className="relative w-full h-screen overflow-hidden pt-20">
      {/* Background Video - Spain Beach */}
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="https://videos.pexels.com/video-files/1409899/1409899-hd_1920_1080_30fps.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <div className="space-y-6 max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white text-balance">
            Luxury Living in Spain
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 text-balance">
            Discover exquisite apartments and properties along Spain's most beautiful coasts
          </p>
          <div className="flex gap-4 justify-center pt-8">
            <a
              href="/properties"
              className="bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:opacity-90 transition-opacity font-semibold"
            >
              Explore Properties
            </a>
            <a
              href="/apartments"
              className="bg-white/20 text-white px-8 py-4 rounded-lg hover:bg-white/30 transition-colors font-semibold border border-white/40"
            >
              View Apartments
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
