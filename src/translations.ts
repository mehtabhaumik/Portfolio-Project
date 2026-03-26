
export type Language = 'en' | 'hi' | 'gu' | 'es' | 'fr' | 'de' | 'ja';

export interface TranslationSchema {
  nav: {
    experience: string;
    skills: string;
    projects: string;
    ai: string;
    contact: string;
  };
  hero: {
    subtitle: string;
    title1: string;
    title2: string;
    description: string;
    badge: string;
    aiIntegration: string;
    architecture: string;
    uxInnovation: string;
  };
  experience: {
    title1: string;
    title2: string;
    description: string;
    funFactTitle: string;
    funFactDescription: string;
    items: {
      company: string;
      role: string;
      period: string;
      description: string;
    }[];
  };
  skills: {
    title: string;
    subtitle: string;
    items: {
      name: string;
      level: number;
    }[];
  };
  projects: {
    title1: string;
    title2: string;
    subtitle: string;
    stayTuned: string;
    stayTunedTag: string;
    items: {
      title: string;
      category: string;
      description: string;
      tech: string[];
    }[];
  };
  ai: {
    badge: string;
    title1: string;
    title2: string;
    description: string;
    status: string;
    focusItems: {
      title: string;
      desc: string;
    }[];
    activities: string[];
  };
  showcase: {
    title1: string;
    title2: string;
    subtitle: string;
    sourceCode: string;
    livePreview: string;
    expandCode: string;
    collapseCode: string;
    neuralLink: string;
    blurIntensity: string;
    transparency: string;
    basic: string;
    refined: string;
    prompt: string;
    aiOutputPreview: string;
    generatingComponent: string;
    connectedToGemini: string;
    processingPrompt: string;
  };
  contact: {
    title1: string;
    title2: string;
    description: string;
    directEmail: string;
    quickMessage: string;
    messageSent: string;
    backSoon: string;
    sendAnother: string;
    error: string;
    sending: string;
    footer: string;
    form: {
      name: string;
      email: string;
      message: string;
      send: string;
    };
  };
}

export const translations: Record<Language, TranslationSchema> = {
  en: {
    nav: { experience: 'Experience', skills: 'Skills', projects: 'Projects', ai: 'AI Focus', contact: 'Contact' },
    hero: {
      subtitle: 'BHAUMIK MEHTA / DESIGNER & ENGINEER',
      title1: 'CRAFTING THE',
      title2: 'FUTURE WEB',
      description: 'Senior Product Engineer crafting high-performance interfaces. Bridging the gap between traditional web architecture and the next generation of AI-driven experiences.',
      badge: '12+ YEARS OF DIGITAL CRAFTSMANSHIP',
      aiIntegration: 'AI Integration',
      architecture: 'Architecture',
      uxInnovation: 'UX Innovation'
    },
    experience: {
      title1: 'OVER A DECADE OF',
      title2: 'EXPERIENCE',
      description: 'Building robust digital products since 2014. From early startups to global enterprises.',
      funFactTitle: 'Fun Fact',
      funFactDescription: "When I'm not coding, you'll find me exploring new design trends or sketching character illustrations. I'm up for a coffee and a chat about the future of web!",
      items: [
        {
          company: "Ritchie Bros. Auctioneers (RB Global)",
          role: "Senior Software Developer (Front-end)",
          period: "May 2015 - March 2025",
          description: "As a core contributor across multiple development teams over the past decade, delivered real-time, low-latency experiences for high-traffic platforms, improving performance by up to 40%. Designed scalable component systems, integrated complex APIs, and built responsive, accessible UIs. Proactively proposed and researched AI integration opportunities, enabling intelligent features and driving innovation across products. Modernized legacy applications and mentored teams to deliver high-quality, user-centric solutions.",
        },
        {
          company: "Power Design, Inc",
          role: "Front-end developer (contract)",
          period: "Oct 2014 - March 2015",
          description: "Developed and maintained complex web applications, including data visualization tools, online spreadsheet systems, and HR workflows. Built dynamic form functionalities using JavaScript/jQuery and integrated RESTful APIs with AJAX and JSON for seamless data exchange. Utilized Oracle APEX for application development and contributed to both new features and legacy enhancements. Designed responsive, cross-browser compatible, and standards-compliant UIs using HTML5, CSS, and JavaScript.",
        },
        {
          company: "Verizon Data Services",
          role: "Front-end developer (contract)",
          period: "Feb 2014 - Aug 2014",
          description: "Developed and enhanced Unified Desktop and PCGUI applications, building advanced UI components such as searchable multi-select dropdowns, drag-and-drop widgets, notification systems, and data grids. Created reusable layouts and design systems using Bootstrap to ensure UI consistency and scalability. Improved usability and navigation through UX optimizations, prototypes, and performance-focused design updates, increasing user productivity by 30%. Collaborated closely with designers to deliver intuitive, high-performance user interfaces.",
        },
      ]
    },
    skills: {
      title: 'TECHNICAL ARSENAL',
      subtitle: 'Mastering the tools that shape the modern web.',
      items: [
        { name: "React / Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "AI Prompt Engineering", level: 85 },
        { name: "LLM Integration", level: 80 },
        { name: "Tailwind CSS", level: 98 },
        { name: "Design Systems & UI Architecture", level: 92 },
        { name: "Performance Optimization", level: 92 },
        { name: "WebGL / Three.js", level: 75 },
      ]
    },
    projects: {
      title1: 'AI-DRIVEN',
      title2: 'SOLUTIONS',
      subtitle: 'Showcasing recent projects that bridge the gap between web and intelligence.',
      stayTuned: 'More innovative AI projects are currently in the pipeline.',
      stayTunedTag: 'Stay tuned',
      items: [
        {
          title: "Tampa Taste CRM",
          category: "AI-Integrated Restaurant Management",
          description: "A restaurant CRM platform for a Tampa-based business featuring reservations, online ordering, live menu availability, customer feedback, booking management, and a staff portal with role-based access.",
          tech: ["React", "Node.js", "AI Insights", "RBAC"]
        },
        {
          title: "RiverviewRealty",
          category: "AI-Powered Real Estate",
          description: "A high-end real estate platform for browsing properties in the Greater Tampa and Miami regions, featuring an interactive chat assistant to streamline user inquiries.",
          tech: ["React", "AI Chatbot", "Google Maps API", "Tailwind"]
        },
      ]
    },
    ai: {
      badge: 'THE NEXT FRONTIER',
      title1: 'EXPLORING THE',
      title2: 'AI ECOSYSTEM',
      description: "With over a decade in frontend, I'm now focusing on how Generative AI redefines user interaction. From building AI-powered dashboards to integrating LLMs directly into the browser.",
      status: 'CURRENT STATUS',
      focusItems: [
        { title: "Prompt Engineering", desc: "Optimizing LLM outputs for complex UI tasks." },
        { title: "RAG Architectures", desc: "Connecting private data to AI models securely." },
        { title: "AI-First UX", desc: "Designing interfaces that adapt to AI responses." },
      ],
      activities: [
        "Learning the language of machines to empower humans.",
        "Architecting AI-driven restaurant CRMs.",
        "Building intelligent real estate chat assistants.",
        "Optimizing high-performance frontend interfaces.",
        "Exploring the intersection of UX and Generative AI.",
      ]
    },
    showcase: {
      title1: 'CAPABILITY',
      title2: 'PLAYGROUND',
      subtitle: 'Interactive snippets demonstrating technical depth across the stack.',
      sourceCode: 'Source Code',
      livePreview: 'Live Preview',
      expandCode: 'Expand Code',
      collapseCode: 'Collapse Code',
      neuralLink: 'Neural Link',
      blurIntensity: 'Blur Intensity',
      transparency: 'Transparency',
      basic: 'Basic',
      refined: 'Refined',
      prompt: 'Prompt',
      aiOutputPreview: 'AI Output Preview',
      generatingComponent: 'Generating Component...',
      connectedToGemini: 'Successfully connected to Gemini API',
      processingPrompt: 'Processing prompt'
    },
    contact: {
      title1: "LET'S BUILD",
      title2: 'TOGETHER',
      description: "Have a project in mind or just want to chat about the future of AI and Web? I'm always open to interesting collaborations.",
      directEmail: 'Direct Email',
      quickMessage: 'Quick Message',
      messageSent: 'Message Sent!',
      backSoon: "I'll get back to you at ui.bhaumik@gmail.com soon.",
      sendAnother: 'Send another message',
      error: 'Something went wrong. Please try again.',
      sending: 'SENDING...',
      footer: 'DESIGNED & DEVELOPED BY BHAUMIK MEHTA • CRAFTING THE FUTURE OF WEB & AI',
      form: { name: 'Name', email: 'Email', message: 'Message', send: 'SEND MESSAGE' }
    }
  },
  hi: {
    nav: { experience: 'अनुभव', skills: 'कौशल', projects: 'परियोजनाएं', ai: 'AI फोकस', contact: 'संपर्क' },
    hero: {
      subtitle: 'भौमिक मेहता / डिजाइनर और इंजीनियर',
      title1: 'भविष्य के',
      title2: 'वेब का निर्माण',
      description: 'उच्च प्रदर्शन वाले इंटरफेस बनाने वाले सीनियर प्रोडक्ट इंजीनियर। पारंपरिक वेब आर्किटेक्चर और AI-संचालित अनुभवों की अगली पीढ़ी के बीच की खाई को पाटना।',
      badge: 'डिजिटल शिल्प कौशल के 12+ वर्ष',
      aiIntegration: 'AI एकीकरण',
      architecture: 'आर्किटेक्चर',
      uxInnovation: 'UX नवाचार'
    },
    experience: {
      title1: 'एक दशक से अधिक का',
      title2: 'अनुभव',
      description: '2014 से मजबूत डिजिटल उत्पाद बनाना। शुरुआती स्टार्टअप से लेकर वैश्विक उद्यमों तक।',
      funFactTitle: 'रोचक तथ्य',
      funFactDescription: "जब मैं कोडिंग नहीं कर रहा होता हूं, तो आप मुझे नए डिजाइन रुझानों की खोज करते हुए या चरित्र चित्र बनाते हुए पाएंगे। मैं कॉफी और वेब के भविष्य के बारे में बातचीत के लिए हमेशा तैयार हूं!",
      items: [
        {
          company: "Ritchie Bros. Auctioneers (RB Global)",
          role: "सीनियर सॉफ्टवेयर डेवलपर (फ्रंट-एंड)",
          period: "मई 2015 - मार्च 2025",
          description: "पिछले एक दशक में कई विकास टीमों में एक मुख्य योगदानकर्ता के रूप में, उच्च-यातायात प्लेटफार्मों के लिए रीयल-टाइम, कम-विलंबता अनुभव प्रदान किए, जिससे प्रदर्शन में 40% तक सुधार हुआ। स्केलेबल घटक सिस्टम डिजाइन किए, जटिल API एकीकृत किए और उत्तरदायी, सुलभ UI बनाए।",
        },
        {
          company: "Power Design, Inc",
          role: "फ्रंट-एंड डेवलपर (अनुबंध)",
          period: "अक्टूबर 2014 - मार्च 2015",
          description: "डेटा विज़ुअलाइज़ेशन टूल, ऑनलाइन स्प्रेडशीट सिस्टम और HR वर्कफ़्लो सहित जटिल वेब एप्लिकेशन विकसित और बनाए रखे। जावास्क्रिप्ट/jQuery का उपयोग करके गतिशील फॉर्म कार्यक्षमता बनाई और निर्बाध डेटा विनिमय के लिए AJAX और JSON के साथ RESTful API एकीकृत किए।",
        },
        {
          company: "Verizon Data Services",
          role: "फ्रंट-एंड डेवलपर (अनुबंध)",
          period: "फरवरी 2014 - अगस्त 2014",
          description: "यूनिफाइड डेस्कटॉप और PCGUI एप्लिकेशन विकसित और उन्नत किए, खोज योग्य मल्टी-सिलेक्ट ड्रॉपडाउन, ड्रैग-एंड-ड्रॉप विजेट, नोटिफिकेशन सिस्टम और डेटा ग्रिड जैसे उन्नत UI घटक बनाए। UI स्थिरता सुनिश्चित करने के लिए बूटस्ट्रैप का उपयोग करके पुन: प्रयोज्य लेआउट बनाए।",
        },
      ]
    },
    skills: {
      title: 'तकनीकी शस्त्रागार',
      subtitle: 'आधुनिक वेब को आकार देने वाले उपकरणों में महारत हासिल करना।',
      items: [
        { name: "React / Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "AI Prompt Engineering", level: 85 },
        { name: "LLM Integration", level: 80 },
        { name: "Tailwind CSS", level: 98 },
        { name: "Design Systems & UI Architecture", level: 92 },
        { name: "Performance Optimization", level: 92 },
        { name: "WebGL / Three.js", level: 75 },
      ]
    },
    projects: {
      title1: 'AI-संचालित',
      title2: 'समाधान',
      subtitle: 'हाल की परियोजनाओं का प्रदर्शन जो वेब और इंटेलिजेंस के बीच की खाई को पाटती हैं।',
      stayTuned: 'अधिक नवीन AI परियोजनाएं वर्तमान में पाइपलाइन में हैं।',
      stayTunedTag: 'बने रहें',
      items: [
        {
          title: "Tampa Taste CRM",
          category: "AI-एकीकृत रेस्तरां प्रबंधन",
          description: "टैम्पा स्थित व्यवसाय के लिए एक रेस्तरां CRM प्लेटफॉर्म जिसमें आरक्षण, ऑनलाइन ऑर्डरिंग और बहुत कुछ है।",
          tech: ["React", "Node.js", "AI Insights", "RBAC"]
        },
        {
          title: "RiverviewRealty",
          category: "AI-संचालित रियल एस्टेट",
          description: "ग्रेटर टैम्पा और मियामी क्षेत्रों में संपत्तियों को ब्राउज़ करने के लिए एक उच्च-स्तरीय रियल एस्टेट प्लेटफॉर्म।",
          tech: ["React", "AI Chatbot", "Google Maps API", "Tailwind"]
        },
      ]
    },
    ai: {
      badge: 'अगला फ्रंटियर',
      title1: 'AI पारिस्थितिकी तंत्र की',
      title2: 'खोज',
      description: "फ्रंटएंड में एक दशक से अधिक के अनुभव के साथ, अब मैं इस पर ध्यान केंद्रित कर रहा हूं कि जेनरेटिव AI उपयोगकर्ता बातचीत को कैसे फिर से परिभाषित करता है।",
      status: 'वर्तमान स्थिति',
      focusItems: [
        { title: "प्रॉम्प्ट इंजीनियरिंग", desc: "जटिल UI कार्यों के लिए LLM आउटपुट को अनुकूलित करना।" },
        { title: "RAG आर्किटेक्चर", desc: "निजी डेटा को AI मॉडल से सुरक्षित रूप से जोड़ना।" },
        { title: "AI-फर्स्ट UX", desc: "AI प्रतिक्रियाओं के अनुकूल इंटरफेस डिजाइन करना।" },
      ],
      activities: [
        "इंसानों को सशक्त बनाने के लिए मशीनों की भाषा सीखना।",
        "AI-संचालित रेस्तरां CRM का निर्माण।",
        "बुद्धिमान रियल एस्टेट चैट सहायक बनाना।",
        "उच्च-प्रदर्शन वाले फ्रंटएंड इंटरफेस को अनुकूलित करना।",
        "UX और जेनरेटिव AI के मिलन की खोज।"
      ]
    },
    showcase: {
      title1: 'क्षमता',
      title2: 'प्लेग्राउंड',
      subtitle: 'पूरे स्टैक में तकनीकी गहराई का प्रदर्शन करने वाले इंटरैक्टिव स्निपेट।',
      sourceCode: 'सोर्स कोड',
      livePreview: 'लाइव प्रीव्यू',
      expandCode: 'कोड विस्तार करें',
      collapseCode: 'कोड संक्षिप्त करें',
      neuralLink: 'न्यूरल लिंक',
      blurIntensity: 'ब्लर तीव्रता',
      transparency: 'पारदर्शिता',
      basic: 'बुनियादी',
      refined: 'परिष्कृत',
      prompt: 'प्रॉम्प्ट',
      aiOutputPreview: 'AI आउटपुट प्रीव्यू',
      generatingComponent: 'घटक उत्पन्न किया जा रहा है...',
      connectedToGemini: 'Gemini API से सफलतापूर्वक कनेक्ट हुआ',
      processingPrompt: 'प्रॉम्प्ट प्रोसेस किया जा रहा है'
    },
    contact: {
      title1: 'आइए मिलकर',
      title2: 'निर्माण करें',
      description: "क्या आपके मन में कोई प्रोजेक्ट है या सिर्फ AI और वेब के भविष्य के बारे में बात करना चाहते हैं? मैं हमेशा दिलचस्प सहयोग के लिए तैयार हूं।",
      directEmail: 'सीधा ईमेल',
      quickMessage: 'त्वरित संदेश',
      messageSent: 'संदेश भेज दिया गया!',
      backSoon: "मैं जल्द ही आपसे ui.bhaumik@gmail.com पर संपर्क करूँगा।",
      sendAnother: 'एक और संदेश भेजें',
      error: 'कुछ गलत हो गया। कृपया पुनः प्रयास करें।',
      sending: 'भेजा जा रहा है...',
      footer: 'भौमिक मेहता द्वारा डिजाइन और विकसित • वेब और AI के भविष्य का निर्माण',
      form: { name: 'नाम', email: 'ईमेल', message: 'संदेश', send: 'संदेश भेजें' }
    }
  },
  gu: {
    nav: { experience: 'અનુભવ', skills: 'કૌશલ્ય', projects: 'પ્રોજેક્ટ્સ', ai: 'AI ફોકસ', contact: 'સંપર્ક' },
    hero: {
      subtitle: 'ભૌમિક મહેતા / ડિઝાઇનર અને એન્જિનિયર',
      title1: 'ભવિષ્યના',
      title2: 'વેબનું નિર્માણ',
      description: 'ઉચ્ચ પ્રદર્શન ઇન્ટરફેસ બનાવતા સિનિયર પ્રોડક્ટ એન્જિનિયર. પરંપરાગત વેબ આર્કિટેક્ચર અને AI-સંચાલિત અનુભવોની આગલી પેઢી વચ્ચેના અંતરને દૂર કરવું.',
      badge: 'ડિજિટલ કારીગરીના 12+ વર્ષ',
      aiIntegration: 'AI સંકલન',
      architecture: 'આર્કિટેક્ચર',
      uxInnovation: 'UX નવીનતા'
    },
    experience: {
      title1: 'એક દાયકાથી વધુનો',
      title2: 'અનુભવ',
      description: '2014 થી મજબૂત ડિજિટલ ઉત્પાદનોનું નિર્માણ. પ્રારંભિક સ્ટાર્ટઅપ્સથી વૈશ્વિક સાહસો સુધી.',
      funFactTitle: 'રસપ્રદ હકીકત',
      funFactDescription: "જ્યારે હું કોડિંગ નથી કરતો હોતો, ત્યારે તમે મને નવી ડિઝાઇન ટ્રેન્ડ્સ શોધતા અથવા કેરેક્ટર ઇલસ્ટ્રેશન સ્કેચ કરતા જોશો. હું કોફી અને વેબના ભવિષ્ય વિશે વાત કરવા માટે હંમેશા તૈયાર છું!",
      items: [
        {
          company: "Ritchie Bros. Auctioneers (RB Global)",
          role: "સિનિયર સોફ્ટવેર ડેવલપર (ફ્રન્ટ-એન્ડ)",
          period: "મે 2015 - માર્ચ 2025",
          description: "છેલ્લા એક દાયકામાં બહુવિધ ડેવલપમેન્ટ ટીમોમાં મુખ્ય યોગદાનકર્તા તરીકે, ઉચ્ચ-ટ્રાફિક પ્લેટફોર્મ્સ માટે રીઅલ-ટાઇમ, લો-લેટન્સી અનુભવો પ્રદાન કર્યા, જેનાથી પ્રદર્શનમાં 40% સુધી સુધારો થયો. સ્કેલેબલ કમ્પોનન્ટ સિસ્ટમ્સ ડિઝાઇન કરી, જટિલ API સંકલિત કર્યા અને પ્રતિભાવશીલ, સુલભ UI બનાવ્યા.",
        },
        {
          company: "Power Design, Inc",
          role: "ફ્રન્ટ-એન્ડ ડેવલપર (કોન્ટ્રાક્ટ)",
          period: "ઓક્ટોબર 2014 - માર્ચ 2015",
          description: "ડેટા વિઝ્યુલાઇઝેશન ટૂલ્સ, ઓનલાઇન સ્પ્રેડશીટ સિસ્ટમ્સ અને HR વર્કફ્લો સહિત જટિલ વેબ એપ્લિકેશન્સ વિકસાવી અને જાળવી રાખી. JavaScript/jQuery નો ઉપયોગ કરીને ડાયનેમિક ફોર્મ કાર્યક્ષમતા બનાવી અને સીમલેસ ડેટા એક્સચેન્જ માટે AJAX અને JSON સાથે RESTful API સંકલિત કર્યા.",
        },
        {
          company: "Verizon Data Services",
          role: "ફ્રન્ટ-એન્ડ ડેવલપર (કોન્ટ્રાક્ટ)",
          period: "ફેબ્રુઆરી 2014 - ઓગસ્ટ 2014",
          description: "યુનિફાઇડ ડેસ્કટોપ અને PCGUI એપ્લિકેશન્સ વિકસાવી અને ઉન્નત કરી, સર્ચેબલ મલ્ટી-સિલેક્ટ ડ્રોપડાઉન, ડ્રેગ-એન્ડ-ડ્રોપ વિજેટ્સ, નોટિફિકેશન સિસ્ટમ્સ અને ડેટા ગ્રીડ જેવા અદ્યતન UI ઘટકો બનાવ્યા. UI સુસંગતતા સુનિશ્ચિત કરવા માટે બુટસ્ટ્રેપનો ઉપયોગ કરીને પુનઃઉપયોગી લેઆઉટ બનાવ્યા.",
        },
      ]
    },
    skills: {
      title: 'તકનીકી શસ્ત્રાગાર',
      subtitle: 'આધુનિક વેબને આકાર આપતા સાધનોમાં નિપુણતા મેળવવી.',
      items: [
        { name: "React / Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "AI Prompt Engineering", level: 85 },
        { name: "LLM Integration", level: 80 },
        { name: "Tailwind CSS", level: 98 },
        { name: "Design Systems & UI Architecture", level: 92 },
        { name: "Performance Optimization", level: 92 },
        { name: "WebGL / Three.js", level: 75 },
      ]
    },
    projects: {
      title1: 'AI-સંચાલિત',
      title2: 'ઉકેલો',
      subtitle: 'તાજેતરના પ્રોજેક્ટ્સનું પ્રદર્શન જે વેબ અને ઇન્ટેલિજન્સ વચ્ચેના અંતરને દૂર કરે છે.',
      stayTuned: 'વધુ નવીન AI પ્રોજેક્ટ્સ હાલમાં પાઇપલાઇનમાં છે.',
      stayTunedTag: 'જોડાયેલા રહો',
      items: [
        {
          title: "Tampa Taste CRM",
          category: "AI-સંકલિત રેસ્ટોરન્ટ મેનેજમેન્ટ",
          description: "ટેમ્પા સ્થિત વ્યવસાય માટે રેસ્ટોરન્ટ CRM પ્લેટફોર્મ જેમાં રિઝર્વેશન, ઓનલાઇન ઓર્ડરિંગ અને ઘણું બધું છે.",
          tech: ["React", "Node.js", "AI Insights", "RBAC"]
        },
        {
          title: "RiverviewRealty",
          category: "AI-સંચાલિત રિયલ એસ્ટેટ",
          description: "ગ્રેટર ટેમ્પા અને મિયામી વિસ્તારોમાં મિલકતો બ્રાઉઝ કરવા માટે હાઇ-એન્ડ રિયલ એસ્ટેટ પ્લેટફોર્મ.",
          tech: ["React", "AI Chatbot", "Google Maps API", "Tailwind"]
        },
      ]
    },
    ai: {
      badge: 'આગામી ફ્રન્ટિયર',
      title1: 'AI ઇકોસિસ્ટમની',
      title2: 'શોધ',
      description: "ફ્રન્ટએન્ડમાં એક દાયકાથી વધુ સમય સાથે, હું હવે જનરેટિવ AI વપરાશકર્તાની ક્રિયાપ્રતિક્રિયાને કેવી રીતે ફરીથી વ્યાખ્યાયित કરે છે તેના પર ધ્યાન કેન્દ્રિત કરી રહ્યો છું.",
      status: 'વર્તમાન સ્થિતિ',
      focusItems: [
        { title: "પ્રોમ્પ્ટ એન્જિનિયરિંગ", desc: "જટિલ UI કાર્યો માટે LLM આઉટપુટને ઓપ્ટિમાઇઝ કરવું." },
        { title: "RAG આર્કિટેક્ચર", desc: "ખાનગી ડેટાને AI મોડલ્સ સાથે સુરક્ષિત રીતે જોડવું." },
        { title: "AI-ફર્સ્ટ UX", desc: "AI પ્રતિભાવોને અનુરૂપ ઇન્ટરફેસ ડિઝાઇન કરવું." },
      ],
      activities: [
        "માણસોને સશક્ત બનાવવા માટે મશીનોની ભાષા શીખવી.",
        "AI-સંચાલિત રેસ્ટોરન્ટ CRM નું નિર્માણ.",
        "બુદ્ધિશાળી રિયલ એસ્ટેટ ચેટ સહાયકો બનાવવા.",
        "ઉચ્ચ-પ્રદર્શન ફ્રન્ટએન્ડ ઇન્ટરફેસને ઓપ્ટિમાઇઝ કરવું.",
        "UX અને જનરેટિવ AI ના સંગમની શોધ."
      ]
    },
    showcase: {
      title1: 'ક્ષમતા',
      title2: 'પ્લેગ્રાઉન્ડ',
      subtitle: 'સમગ્ર સ્ટેકમાં તકનીકી ઊંડાઈ દર્શાવતા ઇન્ટરેક્ટિવ સ્નિપેટ્સ.',
      sourceCode: 'સોર્સ કોડ',
      livePreview: 'લાઇવ પ્રીવ્યૂ',
      expandCode: 'કોડ વિસ્તૃત કરો',
      collapseCode: 'કોડ સંકોચો',
      neuralLink: 'ન્યુરલ લિંક',
      blurIntensity: 'બ્લર તીવ્રતા',
      transparency: 'પારદર્શિતા',
      basic: 'બેઝિક',
      refined: 'રિફાઇન્ડ',
      prompt: 'પ્રોમ્પ્ટ',
      aiOutputPreview: 'AI આઉટપુટ પ્રીવ્યૂ',
      generatingComponent: 'ઘટક જનરેટ થઈ રહ્યો છે...',
      connectedToGemini: 'Gemini API સાથે સફળતાપૂર્વક જોડાયેલ',
      processingPrompt: 'પ્રોમ્પ્ટ પ્રોસેસ થઈ રહ્યો છે'
    },
    contact: {
      title1: 'ચાલો સાથે મળીને',
      title2: 'નિર્માણ કરીએ',
      description: "શું તમારા મનમાં કોઈ પ્રોજેક્ટ છે અથવા ફક્ત AI અને વેબના ભવિષ્ય વિશે વાત કરવા માંગો છો? હું હંમેશા રસપ્રદ સહયોગ માટે તૈયાર છું.",
      directEmail: 'સીધો ઇમેઇલ',
      quickMessage: 'ઝડપી સંદેશ',
      messageSent: 'સંદેશ મોકલાઈ ગયો!',
      backSoon: "હું ટૂંક સમયમાં ui.bhaumik@gmail.com પર તમારો સંપર્ક કરીશ.",
      sendAnother: 'બીજો સંદેશ મોકલો',
      error: 'કંઈક ખોટું થયું. કૃપા કરીને ફરી પ્રયાસ કરો.',
      sending: 'મોકલી રહ્યું છે...',
      footer: 'ભૌમિક મહેતા દ્વારા ડિઝાઇન અને વિકસિત • વેબ અને AI ના ભવિષ્યનું નિર્માણ',
      form: { name: 'નામ', email: 'ઇમેઇલ', message: 'સંદેશ', send: 'સંદેશ મોકલો' }
    }
  },
  es: {
    nav: { experience: 'Experiencia', skills: 'Habilidades', projects: 'Proyectos', ai: 'Enfoque AI', contact: 'Contacto' },
    hero: {
      subtitle: 'BHAUMIK MEHTA / DISEÑADOR E INGENIERO',
      title1: 'CREANDO LA',
      title2: 'WEB DEL FUTURO',
      description: 'Ingeniero de Producto Senior creando interfaces de alto rendimiento. Cerrando la brecha entre la arquitectura web tradicional y la próxima generación de experiencias impulsadas por IA.',
      badge: 'MÁS DE 12 AÑOS DE ARTESANÍA DIGITAL',
      aiIntegration: 'Integración de IA',
      architecture: 'Arquitectura',
      uxInnovation: 'Innovación UX'
    },
    experience: {
      title1: 'MÁS DE UNA DÉCADA DE',
      title2: 'EXPERIENCIA',
      description: 'Construyendo productos digitales robustos desde 2014. Desde startups tempranas hasta empresas globales.',
      funFactTitle: 'Dato Curioso',
      funFactDescription: "Cuando no estoy programando, me encontrarás explorando nuevas tendencias de diseño o dibujando ilustraciones de personajes. ¡Estoy dispuesto a tomar un café y charlar sobre el futuro de la web!",
      items: [
        {
          company: "Ritchie Bros. Auctioneers (RB Global)",
          role: "Senior Software Developer (Front-end)",
          period: "May 2015 - March 2025",
          description: "As a core contributor across multiple development teams over the past decade, delivered real-time, low-latency experiences for high-traffic platforms, improving performance by up to 40%.",
        },
        {
          company: "Power Design, Inc",
          role: "Front-end developer (contract)",
          period: "Oct 2014 - March 2015",
          description: "Developed and maintained complex web applications, including data visualization tools, online spreadsheet systems, and HR workflows.",
        },
        {
          company: "Verizon Data Services",
          role: "Front-end developer (contract)",
          period: "Feb 2014 - Aug 2014",
          description: "Developed and enhanced Unified Desktop and PCGUI applications, building advanced UI components.",
        },
      ]
    },
    skills: {
      title: 'ARSENAL TÉCNICO',
      subtitle: 'Dominando las herramientas que dan forma a la web moderna.',
      items: [
        { name: "React / Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "AI Prompt Engineering", level: 85 },
        { name: "LLM Integration", level: 80 },
        { name: "Tailwind CSS", level: 98 },
        { name: "Design Systems & UI Architecture", level: 92 },
        { name: "Performance Optimization", level: 92 },
        { name: "WebGL / Three.js", level: 75 },
      ]
    },
    projects: {
      title1: 'SOLUCIONES',
      title2: 'IMPULSADAS POR IA',
      subtitle: 'Mostrando proyectos recientes que cierran la brecha entre la web y la inteligencia.',
      stayTuned: 'Más proyectos innovadores de IA están actualmente en camino.',
      stayTunedTag: 'Mantente sintonizado',
      items: [
        {
          title: "Tampa Taste CRM",
          category: "Gestión de Restaurantes Integrada con IA",
          description: "Una plataforma CRM para restaurantes con sede en Tampa que cuenta con reservas, pedidos en línea y más.",
          tech: ["React", "Node.js", "AI Insights", "RBAC"]
        },
        {
          title: "RiverviewRealty",
          category: "Bienes Raíces Impulsados por IA",
          description: "Una plataforma inmobiliaria de alta gama para buscar propiedades en las regiones de Tampa y Miami.",
          tech: ["React", "AI Chatbot", "Google Maps API", "Tailwind"]
        },
      ]
    },
    ai: {
      badge: 'LA PRÓXIMA FRONTERA',
      title1: 'EXPLORANDO EL',
      title2: 'ECOSISTEMA DE IA',
      description: "Con más de una década en frontend, ahora me enfoco en cómo la IA generativa redefine la interacción del usuario.",
      status: 'ESTADO ACTUAL',
      focusItems: [
        { title: "Ingeniería de Prompts", desc: "Optimizando salidas de LLM para tareas complejas de UI." },
        { title: "Arquitecturas RAG", desc: "Conectando datos privados a modelos de IA de forma segura." },
        { title: "UX Primero en IA", desc: "Diseñando interfaces que se adaptan a las respuestas de la IA." },
      ],
      activities: [
        "Aprendiendo el lenguaje de las máquinas para empoderar a los humanos.",
        "Arquitectando CRMs de restaurantes impulsados por IA.",
        "Construyendo asistentes de chat inteligentes para bienes raíces.",
        "Optimizando interfaces frontend de alto rendimiento.",
        "Explorando la intersección de UX e IA Generativa.",
      ]
    },
    showcase: {
      title1: 'PATIO DE',
      title2: 'CAPACIDADES',
      subtitle: 'Fragmentos interactivos que demuestran la profundidad técnica en todo el stack.',
      sourceCode: 'Código Fuente',
      livePreview: 'Vista Previa',
      expandCode: 'Expandir Código',
      collapseCode: 'Contraer Código',
      neuralLink: 'Enlace Neural',
      blurIntensity: 'Intensidad de Desenfoque',
      transparency: 'Transparencia',
      basic: 'Básico',
      refined: 'Refinado',
      prompt: 'Prompt',
      aiOutputPreview: 'Vista Previa de Salida IA',
      generatingComponent: 'Generando Componente...',
      connectedToGemini: 'Conectado con éxito a la API de Gemini',
      processingPrompt: 'Procesando prompt'
    },
    contact: {
      title1: 'CONSTRUYAMOS',
      title2: 'JUNTOS',
      description: "¿Tienes un proyecto en mente o solo quieres hablar sobre el futuro de la IA y la Web? Siempre estoy abierto a colaboraciones interesantes.",
      directEmail: 'Correo Directo',
      quickMessage: 'Mensaje Rápido',
      messageSent: '¡Mensaje Enviado!',
      backSoon: "Me pondré en contacto contigo en ui.bhaumik@gmail.com pronto.",
      sendAnother: 'Enviar otro mensaje',
      error: 'Algo salió mal. Por favor, inténtalo de nuevo.',
      sending: 'ENVIANDO...',
      footer: 'DISEÑADO Y DESARROLLADO POR BHAUMIK MEHTA • CREANDO EL FUTURO DE LA WEB Y LA IA',
      form: { name: 'Nombre', email: 'Correo', message: 'Mensaje', send: 'ENVIAR MENSAJE' }
    }
  },
  fr: {
    nav: { experience: 'Expérience', skills: 'Compétences', projects: 'Projets', ai: 'Focus IA', contact: 'Contact' },
    hero: {
      subtitle: 'BHAUMIK MEHTA / DESIGNER & INGÉNIEUR',
      title1: 'FAÇONNER LE',
      title2: 'WEB DU FUTUR',
      description: 'Ingénieur Produit Senior façonnant des interfaces haute performance. Combler le fossé entre l\'architecture web traditionnelle et la prochaine génération d\'expériences basées sur l\'IA.',
      badge: 'PLUS DE 12 ANS D\'ARTISANAT NUMÉRIQUE',
      aiIntegration: 'Intégration IA',
      architecture: 'Architecture',
      uxInnovation: 'Innovation UX'
    },
    experience: {
      title1: 'PLUS D\'UNE DÉCENNIE D\'',
      title2: 'EXPÉRIENCE',
      description: 'Construction de produits numériques robustes depuis 2014. Des start-ups aux entreprises mondiales.',
      funFactTitle: 'Anecdote',
      funFactDescription: "Quand je ne code pas, vous me trouverez en train d'explorer de nouvelles tendances de design ou de dessiner des illustrations de personnages. Je suis toujours partant pour un café et discuter de l'avenir du web !",
      items: [
        {
          company: "Ritchie Bros. Auctioneers (RB Global)",
          role: "Senior Software Developer (Front-end)",
          period: "May 2015 - March 2025",
          description: "As a core contributor across multiple development teams over the past decade, delivered real-time, low-latency experiences for high-traffic platforms, improving performance by up to 40%.",
        },
        {
          company: "Power Design, Inc",
          role: "Front-end developer (contract)",
          period: "Oct 2014 - March 2015",
          description: "Developed and maintained complex web applications, including data visualization tools, online spreadsheet systems, and HR workflows.",
        },
        {
          company: "Verizon Data Services",
          role: "Front-end developer (contract)",
          period: "Feb 2014 - Aug 2014",
          description: "Developed and enhanced Unified Desktop and PCGUI applications, building advanced UI components.",
        },
      ]
    },
    skills: {
      title: 'ARSENAL TECHNIQUE',
      subtitle: 'Maîtriser les outils qui façonnent le web moderne.',
      items: [
        { name: "React / Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "AI Prompt Engineering", level: 85 },
        { name: "LLM Integration", level: 80 },
        { name: "Tailwind CSS", level: 98 },
        { name: "Design Systems & UI Architecture", level: 92 },
        { name: "Performance Optimization", level: 92 },
        { name: "WebGL / Three.js", level: 75 },
      ]
    },
    projects: {
      title1: 'SOLUTIONS',
      title2: 'BASÉES SUR L\'IA',
      subtitle: 'Présentation de projets récents qui font le pont entre le web et l\'intelligence.',
      stayTuned: 'D\'autres projets d\'IA innovants sont actuellement en préparation.',
      stayTunedTag: 'Restez à l\'écoute',
      items: [
        {
          title: "Tampa Taste CRM",
          category: "Gestion de Restaurant Intégrée à l'IA",
          description: "Une plateforme CRM pour restaurants basée à Tampa, avec réservations, commandes en ligne et plus encore.",
          tech: ["React", "Node.js", "AI Insights", "RBAC"]
        },
        {
          title: "RiverviewRealty",
          category: "Immobilier Propulsé par l'IA",
          description: "Une plateforme immobilière haut de gamme pour consulter des propriétés dans les régions de Tampa et Miami.",
          tech: ["React", "AI Chatbot", "Google Maps API", "Tailwind"]
        },
      ]
    },
    ai: {
      badge: 'LA PROCHAINE FRONTIÈRE',
      title1: 'EXPLORER L\'',
      title2: 'ÉCOSYSTÈME IA',
      description: "Avec plus de dix ans d'expérience en frontend, je me concentre désormais sur la manière dont l'IA générative redéfinit l'interaction utilisateur.",
      status: 'STATUT ACTUEL',
      focusItems: [
        { title: "Prompt Engineering", desc: "Optimisation des sorties LLM pour les tâches UI complexes." },
        { title: "Architectures RAG", desc: "Connexion sécurisée des données privées aux modèles d'IA." },
        { title: "UX AI-First", desc: "Conception d'interfaces qui s'adaptent aux réponses de l'IA." },
      ],
      activities: [
        "Apprendre le langage des machines pour autonomiser les humains.",
        "Architecture de CRM pour restaurants basés sur l'IA.",
        "Création d'assistants de chat intelligents pour l'immobilier.",
        "Optimisation d'interfaces frontend haute performance.",
        "Explorer l'intersection de l'UX et de l'IA générative.",
      ]
    },
    showcase: {
      title1: 'TERRAIN DE',
      title2: 'CAPACITÉS',
      subtitle: 'Extraits interactifs démontrant la profondeur technique sur l\'ensemble de la pile.',
      sourceCode: 'Code Source',
      livePreview: 'Aperçu en Direct',
      expandCode: 'Développer le Code',
      collapseCode: 'Réduire le Code',
      neuralLink: 'Lien Neural',
      blurIntensity: 'Intensité du Flou',
      transparency: 'Transparence',
      basic: 'Basique',
      refined: 'Raffiné',
      prompt: 'Prompt',
      aiOutputPreview: 'Aperçu de la Sortie IA',
      generatingComponent: 'Génération du Composant...',
      connectedToGemini: 'Connecté avec succès à l\'API Gemini',
      processingPrompt: 'Traitement du prompt'
    },
    contact: {
      title1: 'CONSTRUISONS',
      title2: 'ENSEMBLE',
      description: "Vous avez un projet en tête ou vous voulez simplement discuter de l'avenir de l'IA et du Web ? Je suis toujours ouvert à des collaborations intéressantes.",
      directEmail: 'E-mail Direct',
      quickMessage: 'Message Rapide',
      messageSent: 'Message Envoyé !',
      backSoon: "Je vous recontacterai bientôt à ui.bhaumik@gmail.com.",
      sendAnother: 'Envoyer un autre message',
      error: 'Une erreur est survenue. Veuillez réessayer.',
      sending: 'ENVOI EN COURS...',
      footer: 'CONÇU ET DÉVELOPPÉ PAR BHAUMIK MEHTA • FAÇONNER L\'AVENIR DU WEB ET DE L\'IA',
      form: { name: 'Nom', email: 'Email', message: 'Message', send: 'ENVOYER LE MESSAGE' }
    }
  },
  de: {
    nav: { experience: 'Erfahrung', skills: 'Fähigkeiten', projects: 'Projekte', ai: 'KI-Fokus', contact: 'Kontakt' },
    hero: {
      subtitle: 'BHAUMIK MEHTA / DESIGNER & INGENIEUR',
      title1: 'GESTALTUNG DES',
      title2: 'ZUKUNFTS-WEBS',
      description: 'Senior Product Engineer, der Hochleistungsschnittstellen entwickelt. Überbrückung der Lücke zwischen traditioneller Webarchitektur und der nächsten Generation KI-gestützter Erlebnisse.',
      badge: '12+ JAHRE DIGITALE HANDWERKSKUNST',
      aiIntegration: 'KI-Integration',
      architecture: 'Architektur',
      uxInnovation: 'UX-Innovation'
    },
    experience: {
      title1: 'ÜBER EIN JAHRZEHNT',
      title2: 'ERFAHRUNG',
      description: 'Seit 2014 Entwicklung robuster digitaler Produkte. Von frühen Startups bis hin zu globalen Unternehmen.',
      funFactTitle: 'Wissenswertes',
      funFactDescription: "Wenn ich nicht gerade programmiere, erkunde ich neue Designtrends oder skizziere Charakter-Illustrationen. Ich bin immer für einen Kaffee und Gespräche über die Zukunft des Webs zu haben!",
      items: [
        {
          company: "Ritchie Bros. Auctioneers (RB Global)",
          role: "Senior Software Developer (Front-end)",
          period: "May 2015 - March 2025",
          description: "As a core contributor across multiple development teams over the past decade, delivered real-time, low-latency experiences for high-traffic platforms, improving performance by up to 40%.",
        },
        {
          company: "Power Design, Inc",
          role: "Front-end developer (contract)",
          period: "Oct 2014 - March 2015",
          description: "Developed and maintained complex web applications, including data visualization tools, online spreadsheet systems, and HR workflows.",
        },
        {
          company: "Verizon Data Services",
          role: "Front-end developer (contract)",
          period: "Feb 2014 - Aug 2014",
          description: "Developed and enhanced Unified Desktop and PCGUI applications, building advanced UI components.",
        },
      ]
    },
    skills: {
      title: 'TECHNISCHES ARSENAL',
      subtitle: 'Beherrschung der Werkzeuge, die das moderne Web prägen.',
      items: [
        { name: "React / Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "AI Prompt Engineering", level: 85 },
        { name: "LLM Integration", level: 80 },
        { name: "Tailwind CSS", level: 98 },
        { name: "Design Systems & UI Architecture", level: 92 },
        { name: "Performance Optimization", level: 92 },
        { name: "WebGL / Three.js", level: 75 },
      ]
    },
    projects: {
      title1: 'KI-GESTÜTZTE',
      title2: 'LÖSUNGEN',
      subtitle: 'Präsentation aktueller Projekte, die die Brücke zwischen Web und Intelligenz schlagen.',
      stayTuned: 'Weitere innovative KI-Projekte sind derzeit in Planung.',
      stayTunedTag: 'Bleiben Sie dran',
      items: [
        {
          title: "Tampa Taste CRM",
          category: "KI-integriertes Restaurantmanagement",
          description: "Eine Restaurant-CRM-Plattform für ein in Tampa ansässiges Unternehmen mit Reservierungen, Online-Bestellungen und mehr.",
          tech: ["React", "Node.js", "AI Insights", "RBAC"]
        },
        {
          title: "RiverviewRealty",
          category: "KI-gestützte Immobilien",
          description: "Eine High-End-Immobilienplattform zum Durchsuchen von Immobilien in den Regionen Tampa und Miami.",
          tech: ["React", "AI Chatbot", "Google Maps API", "Tailwind"]
        },
      ]
    },
    ai: {
      badge: 'DIE NÄCHSTE GRENZE',
      title1: 'ERFORSCHUNG DES',
      title2: 'KI-ÖKOSYSTEMS',
      description: "Mit über einem Jahrzehnt im Frontend konzentriere ich mich nun darauf, wie generative KI die Benutzerinteraktion neu definiert.",
      status: 'AKTUELLER STATUS',
      focusItems: [
        { title: "Prompt Engineering", desc: "Optimierung von LLM-Ausgaben für komplexe UI-Aufgaben." },
        { title: "RAG-Architekturen", desc: "Sichere Verbindung privater Daten mit KI-Modellen." },
        { title: "AI-First UX", desc: "Design von Schnittstellen, die sich an KI-Antworten anpassen." },
      ],
      activities: [
        "Die Sprache der Maschinen lernen, um Menschen zu befähigen.",
        "Architektur von KI-gesteuerten Restaurant-CRMs.",
        "Bau intelligenter Immobilien-Chat-Assistenten.",
        "Optimierung von Hochleistungs-Frontend-Schnittstellen.",
        "Erforschung der Schnittstelle zwischen UX und generativer KI.",
      ]
    },
    showcase: {
      title1: 'KAPAZITÄTS-',
      title2: 'SPIELPLATZ',
      subtitle: 'Interaktive Snippets, die die technische Tiefe über den gesamten Stack hinweg demonstrieren.',
      sourceCode: 'Quellcode',
      livePreview: 'Live-Vorschau',
      expandCode: 'Code Erweitern',
      collapseCode: 'Code Minimieren',
      neuralLink: 'Neuraler Link',
      blurIntensity: 'Unschärfeintensität',
      transparency: 'Transparenz',
      basic: 'Basis',
      refined: 'Verfeinert',
      prompt: 'Prompt',
      aiOutputPreview: 'KI-Ausgabevorschau',
      generatingComponent: 'Komponente wird generiert...',
      connectedToGemini: 'Erfolgreich mit der Gemini-API verbunden',
      processingPrompt: 'Prompt wird verarbeitet'
    },
    contact: {
      title1: 'LASS UNS GEMEINSAM',
      title2: 'BAUEN',
      description: "Haben Sie ein Projekt im Sinn oder möchten Sie einfach nur über die Zukunft von KI und Web plaudern? Ich bin immer offen für interessante Kooperationen.",
      directEmail: 'Direkte E-Mail',
      quickMessage: 'Kurznachricht',
      messageSent: 'Nachricht Gesendet!',
      backSoon: "Ich werde mich in Kürze unter ui.bhaumik@gmail.com bei Ihnen melden.",
      sendAnother: 'Weitere Nachricht senden',
      error: 'Etwas ist schief gelaufen. Bitte versuchen Sie es erneut.',
      sending: 'SENDET...',
      footer: 'ENTWORFEN & ENTWICKELT VON BHAUMIK MEHTA • GESTALTUNG DER ZUKUNFT VON WEB & KI',
      form: { name: 'Name', email: 'E-Mail', message: 'Nachricht', send: 'NACHRICHT SENDEN' }
    }
  },
  ja: {
    nav: { experience: '経験', skills: 'スキル', projects: 'プロジェクト', ai: 'AIフォーカス', contact: 'お問い合わせ' },
    hero: {
      subtitle: 'バウミック・メータ / デザイナー & エンジニア',
      title1: '未来のウェブを',
      title2: '創造する',
      description: '高性能なインターフェースを構築するシニアプロダクトエンジニア。従来のウェブアーキテクチャと次世代のAI駆動型体験の架け橋となります。',
      badge: '12年以上のデジタルクラフトマンシップ',
      aiIntegration: 'AI統合',
      architecture: 'アーキテクチャ',
      uxInnovation: 'UXイノベーション'
    },
    experience: {
      title1: '10年以上の',
      title2: '経験',
      description: '2014年から堅牢なデジタル製品を構築。初期のスタートアップからグローバル企業まで。',
      funFactTitle: '豆知識',
      funFactDescription: "コーディングをしていないときは、新しいデザインのトレンドを探求したり、キャラクターのイラストをスケッチしたりしています。コーヒーを飲みながらウェブの未来について語り合うのが大好きです！",
      items: [
        {
          company: "Ritchie Bros. Auctioneers (RB Global)",
          role: "Senior Software Developer (Front-end)",
          period: "May 2015 - March 2025",
          description: "As a core contributor across multiple development teams over the past decade, delivered real-time, low-latency experiences for high-traffic platforms, improving performance by up to 40%.",
        },
        {
          company: "Power Design, Inc",
          role: "Front-end developer (contract)",
          period: "Oct 2014 - March 2015",
          description: "Developed and maintained complex web applications, including data visualization tools, online spreadsheet systems, and HR workflows.",
        },
        {
          company: "Verizon Data Services",
          role: "Front-end developer (contract)",
          period: "Feb 2014 - Aug 2014",
          description: "Developed and enhanced Unified Desktop and PCGUI applications, building advanced UI components.",
        },
      ]
    },
    skills: {
      title: 'テクニカル・アーセナル',
      subtitle: '現代のウェブを形作るツールをマスターする。',
      items: [
        { name: "React / Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "AI Prompt Engineering", level: 85 },
        { name: "LLM Integration", level: 80 },
        { name: "Tailwind CSS", level: 98 },
        { name: "Design Systems & UI Architecture", level: 92 },
        { name: "Performance Optimization", level: 92 },
        { name: "WebGL / Three.js", level: 75 },
      ]
    },
    projects: {
      title1: 'AI駆動型',
      title2: 'ソリューション',
      subtitle: 'ウェブとインテリジェンスの架け橋となる最近のプロジェクトを紹介します。',
      stayTuned: 'さらに革新的なAIプロジェクトが現在進行中です。',
      stayTunedTag: '乞うご期待',
      items: [
        {
          title: "Tampa Taste CRM",
          category: "AI統合型レストラン管理",
          description: "予約、オンライン注文などを備えた、タンパを拠点とするビジネス向けのレストランCRMプラットフォーム。",
          tech: ["React", "Node.js", "AI Insights", "RBAC"]
        },
        {
          title: "RiverviewRealty",
          category: "AI搭載型不動産",
          description: "タンパおよびマイアミ地域の物件を閲覧するためのハイエンドな不動産プラットフォーム。",
          tech: ["React", "AI Chatbot", "Google Maps API", "Tailwind"]
        },
      ]
    },
    ai: {
      badge: '次なるフロンティア',
      title1: 'AIエコシステムの',
      title2: '探求',
      description: "フロントエンドで10年以上の経験を積み、現在は生成AIがユーザーインタラクションをどのように再定義するかに焦点を当てています。",
      status: '現在のステータス',
      focusItems: [
        { title: "プロンプトエンジニアリング", desc: "複雑なUIタスク向けにLLM出力を最適化。" },
        { title: "RAGアーキテクチャ", desc: "プライベートデータをAIモデルに安全に接続。" },
        { title: "AI-First UX", desc: "AIの応答に適応するインターフェースの設計。" },
      ],
      activities: [
        "人間を支援するために機械の言語を学ぶ。",
        "AI駆動のレストランCRMの設計。",
        "インテリジェントな不動産チャットアシスタントの構築。",
        "高性能なフロントエンドインターフェースの最適化。",
        "UXと生成AIの交差点の探求。"
      ]
    },
    showcase: {
      title1: '機能',
      title2: 'プレイグラウンド',
      subtitle: 'スタック全体の技術的な深さを示すインタラクティブなスニペット。',
      sourceCode: 'ソースコード',
      livePreview: 'ライブプレビュー',
      expandCode: 'コードを展開',
      collapseCode: 'コードを折りたたむ',
      neuralLink: 'ニューラルリンク',
      blurIntensity: 'ブラー強度',
      transparency: '透明度',
      basic: '基本',
      refined: '洗練',
      prompt: 'プロンプト',
      aiOutputPreview: 'AI出力プレビュー',
      generatingComponent: 'コンポーネントを生成中...',
      connectedToGemini: 'Gemini APIへの接続に成功しました',
      processingPrompt: 'プロンプトを処理中'
    },
    contact: {
      title1: '一緒に',
      title2: '作りましょう',
      description: "プロジェクトのアイデアがある場合や、AIとウェブの未来について話したい場合は、いつでもご連絡ください。",
      directEmail: '直接メール',
      quickMessage: 'クイックメッセージ',
      messageSent: 'メッセージ送信完了！',
      backSoon: "まもなく ui.bhaumik@gmail.com からご連絡いたします。",
      sendAnother: '別のメッセージを送信',
      error: '問題が発生しました。もう一度お試しください。',
      sending: '送信中...',
      footer: 'DESIGNED & DEVELOPED BY BHAUMIK MEHTA • ウェブとAIの未来を創造する',
      form: { name: '名前', email: 'メール', message: 'メッセージ', send: 'メッセージを送信' }
    }
  }
};
