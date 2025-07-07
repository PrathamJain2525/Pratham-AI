export const tools = [
  {
    id: 1,
    category: "AI Assistants",
    tools: [
      {
        name: "ChatGPT",
        logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
        description: "Advanced language model for natural conversations and content generation",
        website: "https://chat.openai.com"
      },
      {
        name: "Claude",
        logo: "https://claude.ai/favicon.ico",
        description: "Anthropic's AI assistant known for nuanced analysis and reasoning",
        website: "https://claude.ai/"
      },
      {
        name: "Gemini",
        logo: "/images/gemini.png" ,
        description: "Google's multimodal AI model for text, code, and analysis",
        website: "https://gemini.google.com"
      },
      {
        name: "DeepSeek",
        logo: "/images/deepseek.png",
        description: "Specialized AI for deep learning and research tasks",
        website: "https://deepseek.ai"
      },
      {
        name: "Grok",
        logo: "https://x.ai/favicon.ico",
        description: "Real-time AI assistant with current events knowledge",
        website: "https://x.ai"
      }
    ]
  },
  {
    id: 2,
    category: "Video Generation & Editing",
    tools: [
      {
        name: "Synthesia",
        logo: "/images/synthesia.png",
        description: "AI video creation platform for professional content",
        website: "https://www.synthesia.io"
      },
      {
        name: "Runway",
        logo: "/images/runway.png",
        description: "Advanced AI video editing and generation tools",
        website: "https://runwayml.com"
      },
      {
        name: "Filmora",
        logo: "https://filmora.wondershare.com/favicon.ico",
        description: "AI-powered video editing software",
        website: "https://filmora.wondershare.com"
      },
      {
        name: "OpusClip",
        logo: "/images/opusclip.png",
        description: "Automated video editing and optimization",
        website: "https://www.opus.pro"
      }
    ]
  },
  {
    id: 3,
    category: "Notetaking & Meeting",
    tools: [
      {
        name: "Fathom",
        logo: "https://fathom.video/favicon.ico",
        description: "AI meeting assistant for transcription and summaries",
        website: "https://fathom.video"
      },
      {
        name: "Nyota",
        logo: "/images/nyota.png",
        description: "Smart meeting notes and action item tracking",
        website: "https://nyota.ai"
      }
    ]
  },
  {
    id: 4,
    category: "Writing & Grammar",
    tools: [
      {
        name: "Rytr",
        logo: "/images/rytr.png",
        description: "AI writing assistant for various content types",
        website: "https://rytr.me"
      },
      {
        name: "Sudowrite",
        logo: "/images/sudowrite.png",
        description: "Creative writing assistant for authors",
        website: "https://www.sudowrite.com"
      },
      {
        name: "Grammarly",
        logo: "/images/grammerly.png",
        description: "AI-powered writing assistant for grammar and style",
        website: "https://www.grammarly.com"
      },
      {
        name: "Wordtune",
        logo: "/images/wordtune.png",
        description: "AI writing enhancement and rewriting tool",
        website: "https://www.wordtune.com"
      }
    ]
  },
  {
    id: 5,
    category: "Image Generation",
    tools: [
      {
        name: "Midjourney",
        logo: "/images/midjourney.png",
        description: "Advanced AI image generation through Discord",
        website: "https://www.midjourney.com"
      },
      {
        name: "DALL·E 3",
        logo: "https://openai.com/favicon.ico",
        description: "OpenAI's latest text-to-image AI model",
        website: "https://openai.com/dall-e-3"
      }
    ]
  },
  {
    id: 6,
    category: "Development Tools",
    tools: [
      {
        name: "Bubble",
        logo: "/images/bubble.png",
        description: "No-code platform with AI capabilities",
        website: "https://bubble.io"
      },
      {
        name: "Cursor",
        logo: "https://www.cursor.so/favicon.ico",
        description: "AI-powered code editor",
        website: "https://www.cursor.so"
      },
      {
        name: "v0",
        logo: "/images/v0.png",
        description: "AI web application generator",
        website: "https://v0.dev"
      }
    ]
  },
  {
    id: 7,
    category: "Voice & Music",
    tools: [
      {
        name: "ElevenLabs",
        logo: "https://elevenlabs.io/favicon.ico",
        description: "Advanced AI voice synthesis",
        website: "https://elevenlabs.io"
      },
      {
        name: "Murf",
        logo: "/images/murf.png",
        description: "AI voice generator for various use cases",
        website: "https://murf.ai"
      },
      {
        name: "Suno",
        logo: "https://suno.ai/favicon.ico",
        description: "AI music generation platform",
        website: "https://suno.ai"
      }
    ]
  }
];

export const workflows = [
  {
    id: 1,
    title: "Content Creation Pipeline",
    description: "Streamlined process for creating blog posts and articles",
    steps: [
      "Research topic using ChatGPT",
      "Generate outline",
      "Create content draft",
      "Generate supporting images",
      "Review and refine"
    ],
    tools: ["ChatGPT", "DALL-E", "Grammarly"],
    difficulty: "Intermediate"
  },
  {
    id: 2,
    title: "AI Art Generation",
    description: "Process for creating unique artistic pieces",
    steps: [
      "Concept development",
      "Prompt engineering",
      "Initial generation",
      "Refinement",
      "Final touches"
    ],
    tools: ["Midjourney", "DALL-E", "Photoshop"],
    difficulty: "Advanced"
  },
  {
    id: 3,
    title: "Research Assistant Workflow",
    description: "Efficient process for academic research",
    steps: [
      "Topic exploration",
      "Literature review",
      "Data analysis",
      "Summary generation",
      "Citation compilation"
    ],
    tools: ["ChatGPT", "Zotero", "Notion"],
    difficulty: "Intermediate"
  }
];

export const articles = [
  {
    id: 1,
    title: "Introduction to AI",
    category: "Fundamentals",
    content: "Artificial Intelligence (AI) is revolutionizing how we work and live...",
    fullContent: "Artificial Intelligence (AI) is revolutionizing how we work and live. It encompasses a wide range of technologies, including machine learning, deep learning, natural language processing, and computer vision. AI systems can automate tasks, make predictions, and provide insights that were previously impossible. Applications of AI are rapidly expanding across industries, from healthcare and finance to transportation and entertainment.",
    readTime: "5 min"
  },
  {
    id: 2,
    title: "Prompt Engineering Guide",
    category: "Skills",
    content: "Learn how to craft effective prompts for AI models...",
    fullContent: "Learn how to craft effective prompts for AI models. Prompt engineering is the art and science of designing effective prompts that elicit desired responses from AI models. A well-crafted prompt can significantly improve the accuracy, relevance, and creativity of AI-generated content. Key techniques include providing clear instructions, specifying the desired output format, and using examples to guide the model. Iterative refinement and experimentation are essential for optimizing prompt performance.",
    readTime: "8 min"
  },
  {
    id: 3,
    title: "AI Ethics and Responsibility",
    category: "Ethics",
    content: "Understanding the ethical implications of AI development...",
    fullContent: "Understanding the ethical implications of AI development. AI ethics addresses the moral and social implications of AI technologies. Key concerns include bias, fairness, transparency, and accountability. Biased AI systems can perpetuate and amplify existing inequalities. Ensuring fairness requires careful attention to data collection, model design, and evaluation metrics. Transparency and explainability are crucial for building trust and enabling human oversight. Accountability mechanisms are needed to assign responsibility for AI-related harms.",
    readTime: "10 min"
  }
];

export const industries = [
  {
    id: 1,
    name: "Banking & Finance",
    applications: [
      {
        name: "Fraud Detection",
        tool: "Feedzai Risk Manager",
        metrics: "analyzes transactions in 3ms, reducing fraud losses by 38%"
      },
      {
        name: "Algorithmic Trading",
        tool: "AlgoTraders QuantumEdge",
        metrics: "uses 59 data sources for 22.4% average returns"
      },
      {
        name: "Customer Support",
        tool: "Wizr AI CX Suite",
        metrics: "handles queries in 52 languages with 94% first-time resolution"
      }
    ]
  },
  {
    id: 2,
    name: "Healthcare",
    applications: [
      {
        name: "Medical Diagnosis",
        tool: "PathoScan Pro",
        metrics: "detects tumors with 99.1% accuracy, reducing errors by 41%"
      },
      {
        name: "Drug Discovery",
        tool: "SynthoMol 4.0",
        metrics: "accelerates drug development by 40%"
      },
      {
        name: "Personalized Treatment",
        tool: "HealthMind PrecisionRx",
        metrics: "analyzes 1.2M biomarkers for customized therapy"
      },
      {
        name: "Robotic Surgery",
        tool: "SurgiBot X7",
        metrics: "reduces recovery time by 28%"
      },
      {
        name: "Health Monitoring",
        tool: "VitaliQ Cortex",
        metrics: "predicts emergencies 14 hours in advance, reducing readmissions by 58%"
      }
    ]
  },
  {
    id: 3,
    name: "E-commerce & Retail",
    applications: [
      {
        name: "Product Recommendations",
        tool: "Algolia AI Search",
        metrics: "improves conversion rates by 22%"
      },
      {
        name: "Chatbots",
        tool: "Tidio Conversational AI",
        metrics: "resolves 70% of queries without human agents"
      },
      {
        name: "Inventory Management",
        tool: "Prediko Demand Engine",
        metrics: "forecasts with 92% accuracy"
      },
      {
        name: "Warehouse Automation",
        tool: "Hy-Tek Robotic Vision System",
        metrics: "processes 14,000 items/hour"
      },
      {
        name: "Fraud Detection",
        tool: "Chargebacks911 AI Sentinel",
        metrics: "has 99.4% fraud detection accuracy"
      }
    ]
  },
  {
    id: 4,
    name: "Manufacturing & Supply Chain",
    applications: [
      {
        name: "Predictive Maintenance",
        tool: "WorkTrek Predictive Edge",
        metrics: "reduces downtime by 67%"
      },
      {
        name: "Quality Control",
        tool: "Kibsi Vision Studio",
        metrics: "has 99.3% defect detection accuracy"
      },
      {
        name: "Supply Chain Optimization",
        tool: "DELMIA Virtual Twin",
        metrics: "improves forecasting by 38%"
      },
      {
        name: "Warehouse Automation",
        tool: "Kardex Autonomo",
        metrics: "achieves 99.99% picking accuracy"
      },
      {
        name: "Production Planning",
        tool: "AIO Dynamic Orchestrator",
        metrics: "reduces changeover time by 43%"
      }
    ]
  },
  {
    id: 5,
    name: "Education & EdTech",
    applications: [
      {
        name: "AI Tutors",
        tool: "Aura Tutor Pro",
        metrics: "improves knowledge retention by 41%"
      },
      {
        name: "Automated Grading",
        tool: "GradeAI Pro",
        metrics: "evaluates essays with 98.7% accuracy"
      },
      {
        name: "Language Learning",
        tool: "LinguaMind AI",
        metrics: "achieves high-level fluency in 140 hours"
      },
      {
        name: "Virtual Reality",
        tool: "EduVerse XR",
        metrics: "creates realistic learning environments"
      },
      {
        name: "School Administration",
        tool: "EduFlow Commander",
        metrics: "handles 93% of administrative tasks"
      }
    ]
  },
  {
    id: 6,
    name: "Sales & Marketing",
    applications: [
      {
        name: "Lead Generation",
        tool: "Demandbase Smart Leads",
        metrics: "analyzes 82 data sources to identify strong leads"
      },
      {
        name: "Email Automation",
        tool: "Fireflies Superflows",
        metrics: "automatically writes and sends follow-up emails"
      },
      {
        name: "Conversational AI",
        tool: "Drift Conversation Cloud",
        metrics: "handles customer objections in real-time"
      },
      {
        name: "Pipeline Forecasting",
        tool: "Outreach AI Prospector",
        metrics: "predicts deal outcomes with 92% accuracy"
      },
      {
        name: "CRM Automation",
        tool: "monday Sales Autopilot",
        metrics: "automates 93% of repetitive CRM tasks"
      }
    ]
  }
];
