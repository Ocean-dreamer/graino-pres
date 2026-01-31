export const presentationConfig = {
  // Brand Colors
  colors: {
    primary: '#2D5016',
    secondary: '#8BC34A',
    accent: '#FFD54F',
    dark: '#1a1a1a',
    light: '#f5f5f5',
    white: '#ffffff',
  },
  
  // Animation Settings
  animations: {
    slideTransition: 'slide', // 'slide' | 'fade' | 'zoom'
    transitionDuration: 0.8,
    enableParallax: true,
    enableAutoPlay: false,
    autoPlayInterval: 5000,
  },
  
  // Features
  features: {
    showProgressBar: true,
    showSlideNumbers: true,
    enableKeyboard: true,
    enableSwipe: true,
    showNavDots: true,
  },
  
  // Company Info
  company: {
    name: 'Graino',
    tagline: 'Seeds of Excellence',
    logo: '/assets/images/logo.png',
    email: 'contact@graino.com',
    phone: '+1 234 567 890',
    social: {
      facebook: 'https://facebook.com/graino',
      instagram: 'https://instagram.com/graino',
      twitter: 'https://twitter.com/graino',
    }
  }
};

export const slides = [
  { id: 1, name: 'Hero', component: 'HeroSlide' },
  { id: 2, name: 'Problem', component: 'ProblemSlide' },
  { id: 3, name: 'Solution', component: 'SolutionSlide' },
  { id: 4, name: 'Products', component: 'ProductsSlide' },
  { id: 5, name: 'Process', component: 'ProcessSlide' },
  { id: 6, name: 'Stats', component: 'StatsSlide' },
  { id: 7, name: 'Gallery', component: 'GallerySlide' },
  { id: 8, name: 'Testimonials', component: 'TestimonialsSlide' },
  { id: 9, name: 'Vision', component: 'VisionSlide' },
  { id: 10, name: 'Contact', component: 'ContactSlide' },
];