
import { PageContent, FAQItem, NewsArticle } from './types';

export const FAQS: FAQItem[] = [
  { 
    id: 'f1', 
    question: "When does the 21-Day AI Mastery course start?", 
    answer: "This is a regularly running program with frequent new batches. Once you register, all access details, timelines, and start information will be shared via email." 
  },
  { 
    id: 'f2', 
    question: "How is the course delivered?", 
    answer: "The course is delivered through structured pre-recorded video modules, allowing you to learn at your own pace. Support and guidance are available throughout your learning journey." 
  },
  { 
    id: 'f3', 
    question: "How can I ask questions or clear doubts?", 
    answer: "You’ll get access to a multi-language AI assistant that supports real-time interaction, Q&A, and explanations in your preferred language—anytime you need help." 
  },
  { 
    id: 'f4', 
    question: "Is the course completely online?", 
    answer: "Yes. This is a 100% online program and can be accessed from anywhere in the world." 
  },
  { 
    id: 'f5', 
    question: "Do I need prior experience with AI or coding?", 
    answer: "No prior experience is required. The course starts from the basics and gradually moves to advanced AI applications using simple, practical explanations." 
  },
  { 
    id: 'f6', 
    question: "Is this course suitable for beginners?", 
    answer: "Absolutely. The program is designed for beginners, professionals, and entrepreneurs, with a clear learning path from fundamentals to real-world use cases." 
  },
  { 
    id: 'f7', 
    question: "Will I get access to the AI tools taught in the course?", 
    answer: "Yes. We demonstrate both free and paid AI tools and guide you on how to access free versions or trials for hands-on practice." 
  },
  { 
    id: 'f8', 
    question: "What time zone does the course follow?", 
    answer: "The default time zone is IST (Indian Standard Time). Since the content is self-paced, you can learn comfortably from any time zone." 
  },
  { 
    id: 'f9', 
    question: "What if I enroll but want to shift to another batch?", 
    answer: "We currently do not offer refunds. However, you can move your enrollment to the next available batch by contacting our support team." 
  },
  { 
    id: 'f10', 
    question: "Will I receive a certificate after completion?", 
    answer: "Yes. Upon successful completion, you’ll receive an AmazingAI Certificate of Completion. AmazingAI is ISO 9001:2015 certified, and our credentials are widely recognized by top tech companies, adding real value to your professional profile." 
  },
  { 
    id: 'f11', 
    question: "Who should join this program?", 
    answer: "Students, working professionals, entrepreneurs, freelancers, and anyone who wants to use AI for productivity, career growth, and real-world impact." 
  },
  { 
    id: 'f12', 
    question: "Does this course guarantee a job or placement?", 
    answer: "We don’t promise jobs or placements. However, learners who are consistent and serious gain strong, practical AI skills that can significantly boost career opportunities." 
  }
];

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: 'n1',
    title: "How Generative AI is Transforming the Modern Workplace",
    category: "AI Trends",
    date: "May 10, 2024",
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    readTime: "5 min read"
  }
];

export const INITIAL_CONTENT: PageContent = {
  brand: {
    // New Blue Circuit Logo Asset
    logoUrl: "https://www.etrades.in/wp-content/uploads/2026/02/Amazing_AI_logo_small-1.png", 
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
    "https://images.unsplash.com/photo-1675271591211-126ad94e495d?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
  ],
  gain: {
    title: "What You'll Gain",
    subtitle: "Master the future of work with our comprehensive curriculum.",
    items: [
      { id: 'g0', title: "Fundamentals of AI", description: "Build a solid foundation in how artificial intelligence and machine learning work.", icon: "🧠" },
      { id: 'g1', title: "Promting Techniques", description: "Master the art of prompt engineering to get exactly what you need from any LLM.", icon: "⌨️" },
      { id: '1', title: "Understand Gen AI", description: "Master the core concepts of generative models and their underlying technologies.", icon: "🔬" },
      { id: '2', title: "Content Creation", description: "Generate blog posts, social media, and professional copy in seconds.", icon: "✍️" },
      { id: '3', title: "Create AI Agents", description: "Build and deploy autonomous AI agents to automate your business processes.", icon: "🤖" },
      { id: '4', title: "Image & Video Generation", description: "Create stunning visuals and high-quality videos using Midjourney and Runway.", icon: "🎬" },
      { id: '5', title: "Music & Audio Generation", description: "Generate original soundtracks and professional voiceovers instantly.", icon: "🎵" },
      { id: '6', title: "Stunning Websites & Apps", description: "Design and code fully functional web projects using AI-assisted tools.", icon: "💻" },
      { id: '8', title: "And Lot more...", description: "Continuous updates with the latest tools added to your portal every month.", icon: "✨" }
    ]
  },
  audience: {
    title: "Who is this Workshop For?",
    subtitle: "Whether you're starting out or scaling up, AI is the lever you need.",
    items: [
      { id: 'a1', title: "Students", description: "Accelerate your career start with AI skills.", icon: "🎓" },
      { id: 'a2', title: "Working Professionals", description: "Automate tasks and boost productivity.", icon: "💼" },
      { id: 'a3', title: "Business Owners", description: "Scale operations and reduce costs.", icon: "🏢" },
      { id: 'a4', title: "Content Creators", description: "Generate endless content ideas instantly.", icon: "🎥" },
      { id: 'a5', title: "Ads & Marketing", description: "Optimize campaigns and creative targeting.", icon: "🎯" },
      { id: 'a6', title: "Others", description: "Stay relevant in the evolving digital world.", icon: "👥" }
    ]
  },
  master: {
    title: "Learn",
    subtitle: "20+ AI Tools",
    items: [
      { id: 't1', name: "ChatGPT", logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg", isBlurred: false },
      { id: 't2', name: "Claude", logo: "https://www.anthropic.com/images/icons/apple-touch-icon.png", isBlurred: false },
      { id: 't3', name: "Grok", logo: "https://x.ai/favicon.ico", isBlurred: false },
      { id: 't4', name: "Co-Pilot", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/a/aa/Microsoft_Copilot_Icon.svg/1280px-Microsoft_Copilot_Icon.svg.png", isBlurred: false },
      { id: 't5', name: "AI Studio", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Google_ai_studio_logo.png", isBlurred: false },
      { id: 't6', name: "Suno AI", logo: "https://suno.com/favicon.ico", isBlurred: false },
      { id: 't7', name: "Midjourney", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Midjourney_Emblem.svg", isBlurred: true },
      { id: 't8', name: "Runway", logo: "https://runwayml.com/favicon.ico", isBlurred: true },
      { id: 't9', name: "D-ID", logo: "https://www.d-id.com/wp-content/uploads/2021/04/cropped-favicon-192x192.png", isBlurred: true },
      { id: 't10', name: "ElevenLabs", logo: "https://elevenlabs.io/favicon.ico", isBlurred: true },
      { id: 't11', name: "Perplexity", logo: "https://www.perplexity.ai/favicon.ico", isBlurred: true },
      { id: 't12', name: "Jasper", logo: "https://www.jasper.ai/favicon.ico", isBlurred: true }
    ]
  },
  faqs: FAQS,
  certificate: {
    title: "Get Certified AI Expert",
    subtitle: "Yes! You will be certified by AI Tools Expert Trainers which brings a lot of credibility to your certificate & resume.",
    studentName: "Your Name Here",
    courseName: "Mastering Generative AI for Professionals",
    founderName: "Mohammad Asif",
    sealUrl: ""
  }
};
