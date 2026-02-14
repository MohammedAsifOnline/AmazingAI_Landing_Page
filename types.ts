
export interface Benefit {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Tool {
  id: string;
  name: string;
  logo: string;
  isBlurred?: boolean;
}

export interface NewsArticle {
  id: string;
  title: string;
  category: string;
  date: string;
  imageUrl: string;
  readTime: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface AffiliateContent {
  title: string;
  subtitle: string;
  videoUrl: string;
  thumbnailUrl?: string;
}

export enum SectionId {
  HERO = 'home',
  PROMO = 'promo-video',
  IMAGE_GRID = 'showcase-grid',
  GAIN = 'gain',
  AUDIENCE = 'audience',
  MASTER = 'master',
  CERTIFICATE = 'certificate',
  STUDENT = 'student-offer',
  AFFILIATE = 'affiliate',
  NEWS = 'news',
  FAQ = 'faq'
}

export interface PageContent {
  brand: {
    logoUrl: string;
    title: string;
  };
  hero: {
    badge: string;
    title: string;
    titleAccent: string;
    subtitle: string;
    primaryCTA: string;
    secondaryCTA: string;
    promoVideoUrl: string;
  };
  imageGrid: string[];
  gain: {
    title: string;
    subtitle: string;
    items: Benefit[];
  };
  affiliate: AffiliateContent;
  audience: {
    title: string;
    subtitle: string;
    items: Benefit[];
  };
  master: {
    title: string;
    subtitle: string;
    items: Tool[];
  };
  faqs: FAQItem[];
  certificate: {
    title: string;
    subtitle: string;
    studentName: string;
    courseName: string;
    founderName: string;
    sealUrl: string;
  };
}
