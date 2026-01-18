import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface HeroProps {
  detectedCountry?: string;
}

interface Slide {
  title: string;
  subtitle: string;
  description: string;
  backgroundImage: string;
  cta: string;
}

const Hero: React.FC<HeroProps> = ({ detectedCountry = 'Global' }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const applyFormUrl = "https://forms.zohopublic.com/pumasolutionsglobalgm1/form/StudentAssessment/formperma/Zgn5DTfvr31olMyn3d5sKFnEbSv9HALS4_wOnGR5AQE";

  const slides: Slide[] = [
    {
      title: 'Define Your',
      subtitle: 'Academic',
      description: 'Enzenius Global is your elite partner for international education, bridging the gap to top universities in the UK, USA, Canada, and Australia.',
      backgroundImage: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2000&auto=format&fit=crop',
      cta: 'Start Your Journey'
    },
    {
      title: 'Unlock Global',
      subtitle: 'Opportunities',
      description: 'Study in world-class institutions with clear pathways to career success. Join thousands of students who have transformed their futures through Enzenius Global.',
      backgroundImage: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=2000&auto=format&fit=crop',
      cta: 'Explore Destinations'
    },
    {
      title: 'Build Your',
      subtitle: 'Future Today',
      description: 'From admission guidance to visa support, we\'re with you every step of your international education journey. Your success is our mission.',
      backgroundImage: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?q=80&w=2000&auto=format&fit=crop',
      cta: 'Get Free Consultation'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const slide = slides[currentSlide];

  return (
    <section className="relative w-full min-h-[500px] h-[70vh] md:h-[75vh] lg:h-[80vh] flex items-center overflow-hidden bg-slate-900">
      {/* Slider Container */}
      <div className="absolute inset-0 z-0">
        {slides.map((s, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${s.backgroundImage}')` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/75 to-slate-900/60"></div>
            </div>
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10 w-full">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-white space-y-4 md:space-y-6">
            <span className="inline-flex bg-brandCTA/20 border border-brandCTA/40 text-white px-4 md:px-5 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-semibold uppercase tracking-wide hover:bg-brandCTA/30 transition-colors duration-300">
              {detectedCountry !== 'Global' ? `${detectedCountry}'s Trusted Partner` : 'Empowering Global Aspirations'}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight uppercase tracking-tighter text-white">
              {slide.title} <span className="logo-text-gradient">{slide.subtitle}</span> Legacy
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-blue-100/95 max-w-2xl mx-auto font-medium leading-relaxed">
              {slide.description}
            </p>
            <div className="flex flex-col sm:flex-row justify-center flex-wrap gap-3 md:gap-4 pt-2 md:pt-4">
              <a 
                href={applyFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brandCTA hover:bg-orange-600 text-white px-6 md:px-8 py-2.5 md:py-3 rounded-lg font-bold uppercase tracking-wider transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95 inline-flex items-center justify-center gap-2 text-xs md:text-sm"
            >
              {slide.cta} <i className="fas fa-arrow-right text-xs"></i>
            </a>
            <Link 
              to="/destinations"
              className="bg-transparent border-2 border-white/40 hover:border-white/60 text-white px-6 md:px-8 py-2.5 md:py-3 rounded-lg font-bold uppercase tracking-wider transition-all duration-300 hover:bg-white/10 active:scale-95 text-xs md:text-sm"
            >
              Explore Countries
            </Link>
          </div>
          </div>
        </div>
      </div>

      {/* Slider Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-3 md:gap-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all ${
              index === currentSlide
                ? 'bg-brandCTA w-8 md:w-10'
                : 'bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slider Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 md:left-12 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 bg-white/20 hover:bg-white/40 text-white rounded-full flex items-center justify-center transition-all backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <i className="fas fa-chevron-left text-lg md:text-xl"></i>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 md:right-12 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 bg-white/20 hover:bg-white/40 text-white rounded-full flex items-center justify-center transition-all backdrop-blur-sm"
        aria-label="Next slide"
      >
        <i className="fas fa-chevron-right text-lg md:text-xl"></i>
      </button>
    </section>
  );
};

export default Hero;