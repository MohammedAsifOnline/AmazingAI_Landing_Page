
import { PageContent, FAQItem, NewsArticle } from './types';

export const FAQS: FAQItem[] = [
  { id: 'f1', question: "Do I need any technical background?", answer: "No, our curriculum is designed for everyone. We start with the absolute fundamentals and gradually move to advanced concepts." },
  { id: 'f2', question: "Is the certification recognized?", answer: "Yes, AmazingAI is ISO 9001:2015 certified, and our credentials are widely recognized by top tech companies." },
  { id: 'f3', question: "Can I access the tools immediately?", answer: "Absolutely! Once registered, you get instant access to our curated tool database and learning paths." }
];

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: 'n1',
    title: "How Generative AI is Transforming the Modern Workplace",
    category: "AI Trends",
    date: "May 10, 2024",
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    readTime: "5 min read"
  },
  {
    id: 'n2',
    title: "Mastering Prompt Engineering: A Guide for Beginners",
    category: "Tutorials",
    date: "May 8, 2024",
    imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4628c9457?auto=format&fit=crop&q=80&w=800",
    readTime: "8 min read"
  }
];

export const INITIAL_CONTENT: PageContent = {
  brand: {
    logoUrl: "", 
    title: "AmazingAI"
  },
  hero: {
    badge: "ISO 9001 Certified Learning Provider",
    title: "Personalized AI Learning for",
    titleAccent: "Every Profession.",
    subtitle: "Learn practical AI tools with guided paths, professional certification, and real-world projects designed for your career.",
    primaryCTA: "Register Now — It's Free to Start",
    secondaryCTA: "Explore Curriculum",
    promoVideoUrl: "https://www.youtube.com/watch?v=Iz4huvnC-0M"
  },
  imageGrid: [
    "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1620712943543-bcc4628c9457?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1675271591211-126ad94e495d?auto=format&fit=crop&q=80&w=800"
  ],
  gain: {
    title: "What You'll Gain",
    subtitle: "Master the future of work with our comprehensive curriculum.",
    items: [
      { id: '1', title: "AI Fundamentals", description: "Build a strong base in generative AI concepts, LLMs, and neural network basics.", icon: "🧠" },
      { id: '2', title: "Learn 25+ AI Tools", description: "Hands-on mastery of industry-leading tools like ChatGPT, Claude, Midjourney, and more.", icon: "🛠️" },
      { id: '3', title: "Interactive Method", description: "Learning by doing with real-world projects tailored to your profession.", icon: "🎮" },
      { id: '4', title: "Prompting Techniques", description: "Master the art of prompt engineering to get perfect results every time.", icon: "⌨️" }
    ]
  },
  master: {
    title: "Learn",
    subtitle: "20+ AI Tools",
    items: [
      { id: 't1', name: "ChatGPT", logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg", isBlurred: false },
      { id: 't2', name: "Claude", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Claude_Logo.svg", isBlurred: false },
      { id: 't3', name: "Grok", logo: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=100", isBlurred: false },
      { id: 't4', name: "Co-Pilot", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Microsoft_Copilot_Icon.svg", isBlurred: false },
      { id: 't5', name: "Google AI Studio", logo: "https://www.gstatic.com/lamda/images/gemini_sparkle_v002.svg", isBlurred: false },
      { id: 't6', name: "Suno AI", logo: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=100", isBlurred: false },
      { id: 't7', name: "Midjourney", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Midjourney_Emblem.svg", isBlurred: true },
      { id: 't8', name: "Runway", logo: "https://runwayml.com/favicon.ico", isBlurred: true },
      { id: 't9', name: "D-ID", logo: "https://www.d-id.com/wp-content/uploads/2021/04/cropped-favicon-192x192.png", isBlurred: true },
      { id: 't10', name: "descript", logo: "https://upload.wikimedia.org/wikipedia/commons/7/78/Descript_logo.svg", isBlurred: true },
      { id: 't11', name: "tome", logo: "https://tome.app/favicon.ico", isBlurred: true },
      { id: 't12', name: "vidyo.ai", logo: "https://vidyo.ai/wp-content/uploads/2022/08/cropped-favicon-32x32.png", isBlurred: true }
    ]
  },
  faqs: FAQS,
  certificate: {
    title: "Professional Certification",
    subtitle: "Get recognized for your skills with our globally valid certificate.",
    studentName: "Your Name Here",
    courseName: "Mastering Generative AI for Professionals",
    founderName: "Mohammad Asif",
    sealUrl: ""
  }
};
