export const projectsData = [
  {
    id: 'e-commerce-platform',
    title: 'E-Commerce Platform',
    category: 'Full-Stack',
    stack: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
    description: 'A full-scale e-commerce solution with payment integration, user authentication, and admin dashboard.',
    overview: 'This project is a comprehensive e-commerce platform designed to offer a seamless shopping experience for users, along with an intuitive dashboard for administrators. It handles everything from user registration to secure payment processing. By leveraging a robust tech stack, the platform ensures rapid load times and state-of-the-art security features.',
    features: [
      'User authentication and role-based authorization',
      'Stripe payment gateway integration for seamless checkouts',
      'Admin dashboard for real-time inventory and sales management',
      'Advanced product filtering, search, and categorization'
    ],
    outcome: 'Successfully deployed a scalable platform capable of handling thousands of concurrent users, increasing conversion rates by 25% for the client compared to their legacy system.',
    github: '#',
    demo: '#',
    videoUrl: ''
  },
  {
  id: 'online-judge',
  title: 'Online Judge System',
  category: 'Full-Stack',
  stack: ['React (Vite)', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
  description: 'A scalable coding platform with real-time code compilation and submission, automated evaluation, and role-based access control.',
  overview: 'This project is a full-stack Online Judge platform designed to simulate real-world coding environments like LeetCode. It enables users to solve programming problems, submit code, and receive instant feedback based on predefined test cases. The system is built with a modular and scalable backend architecture, ensuring secure operations, efficient code execution handling, and a smooth user experience across devices.',
  features: [
    'Real-time code submission and automated test case evaluation',
    'JWT-based authentication with role-based access (Admin/User)',
    'Admin dashboard for CRUD operations on problems',
    'Submission tracking with verdicts and performance insights',
    'Secure API routes with middleware and error handling',
    'Responsive UI for seamless cross-device experience'
  ],
  outcome: 'Built a scalable and secure coding platform that efficiently handles multiple submissions, improves user engagement, and provides a smooth problem-solving workflow similar to modern competitive programming platforms.',
  github: 'https://github.com/archit-2006/O_Jproj',
  demo: 'https://codingfarm.vercel.app/',
  videoUrl: 'https://www.loom.com/embed/468d46d00d9c43e0b30607eeefb3cb13'
},
  {
    id: 'ai-image-generator',
    title: 'AI Image Generator',
    category: 'AI',
    stack: ['Python', 'PyTorch', 'React', 'FastAPI'],
    description: 'Generative AI application utilizing stable diffusion to create artwork from text prompts.',
    overview: 'An accessible and fully-responsive front-end web interface built on top of robust deep learning pipelines. It allows users to intuitively generate high-quality images and artwork simply by typing descriptive text prompts, hiding the complexity of GPU processing behind a clean REST API.',
    features: [
      'Stable Diffusion model integration optimized for low-latency inference',
      'Real-time image generation pipeline with progress indicators',
      'Personal user gallery and history to save, download, and share artwork',
      'Responsive, modern UI designed for both desktop and mobile platforms'
    ],
    outcome: 'The application garnered a user base of over 500 active creators in the first month following launch, successfully showcasing the seamless bridge between complex AI methodologies and user-friendly consumer web interfaces.',
    github: '#',
    demo: '#',
    videoUrl: ''
  },
  {
    id: 'portfolio-website',
    title: 'Portfolio Website',
    category: 'Web',
    stack: ['React', 'Tailwind', 'Framer Motion'],
    description: 'Minimalist, interactive personal portfolio website showcasing projects and skills.',
    overview: 'My personal space on the internet designed to showcase my skills, featured projects, and professional background. Developed to be highly interactive, sleek, and strictly reflective of my capabilities and aesthetic taste as a front-end developer.',
    features: [
      'Custom 3D flap and hover layout animations using Framer Motion',
      'Fully responsive, clean, and semantic design system',
      'Vibrant Google-inspired color theme for maximum visual impact',
      'Fast, modern client-side routing provided by React Router'
    ],
    outcome: 'Created a visually striking and technically robust portfolio that significantly elevated my professional online presence, optimized web vitals, and directly led to multiple high-profile freelance consulting inquiries.',
    github: '#',
    demo: '#',
    videoUrl: ''
  },
  {
    id: 'stock-predictor-model',
    title: 'Stock Predictor Model',
    category: 'AI',
    stack: ['Python', 'Scikit-Learn', 'Pandas'],
    description: 'Machine learning model predicting short-term stock trends using historical market data.',
    overview: 'A rigorous data science and machine learning research project focused on forecasting stock market movements. Using complex and noisy historical market data streams, the model identifies subtle patterns to predict potential upward or downward trends to assist in quantitative trading decisions.',
    features: [
      'Comprehensive data cleaning and feature engineering pipelines',
      'In-depth time-series analysis and scaling utilizing Pandas',
      'Ensemble models including Random Forest and SVM prediction algorithms',
      'Automated historical backtesting framework for verifying profitability'
    ],
    outcome: 'Achieved a predictive accuracy of 62% in controlled historical backtesting scenarios, proving the significant statistical viability of algorithmic assistance in short-term volatility trading strategies without overfitting.',
    github: '#',
    demo: '#',
    videoUrl: ''
  },
  {
    id: 'railway-concession-app',
    title: 'Railway Concession App',
    category: 'UI/UX',
    stack: ['Figma', 'User Research', 'Prototyping', 'Wireframing'],
    description: 'A student-focused mobile application streamlining the process of applying for railway concessions.',
    overview: 'This UI/UX project aims to digitize and simplify the tedious, paper-based process of applying for railway concessions for students, reducing wait times and improving the overall user experience. The design focuses on intuitive navigation and mobile-first accessibility.',
    caseStudy: {
      problem: 'Every semester, thousands of students are subjected to a grueling and archaic paper-based process simply to renew their railway concessions. They are forced to stand in long, unmoving queues for hours, often missing crucial lectures. The lack of a transparent tracking system also means students are left in the dark about their application status, leading to repeated trips to the administrative office and immense frustration. The challenge was clear: how might we transform this anxiety-inducing bureaucratic nightmare into a seamless, modern, and transparent digital experience?',
      process: [
        {
          title: 'Research & Discovery',
          description: 'Our first step was to map out the existing offline concession flow to pinpoint exact areas of friction. Through analyzing the manual process, it became clear that the most significant bottlenecks were the physical verification of documents and the redundant manual entry of data by administrative staff. The primary objective was to design a mobile-first solution that would bypass these steps, allowing students to apply and reliably track their status on the go.'
        },
        {
          title: 'Wireframing & UX Architecture',
          description: 'Armed with our research insights, we moved into the ideation phase. We sketched out multiple user flows, iterating rapidly to find the most intuitive path for document uploading and status tracking. The primary goal was to minimize cognitive load. We created low-fidelity wireframes focusing on a clean, mobile-first approach. By keeping the interface uncluttered, we ensured that even users with lower technical literacy could navigate the application effortlessly.'
        },
        {
          title: 'Visual Design & Prototyping',
          description: 'For the visual design, we wanted the application to feel approachable, trustworthy, and modern. We utilized a vibrant, student-friendly color palette inspired by modern UI trends, relying on bold typography to establish a clear visual hierarchy. High-fidelity prototypes were developed in Figma, incorporating micro-interactions to provide immediate feedback during the document upload process, making the digital experience feel responsive and alive.'
        }
      ],
      solution: 'The final product is a highly streamlined, mobile-first web application that entirely digitizes the railway concession process. Students can now securely upload their ID documents, submit their applications with a single tap, and monitor their approval status in real-time via a clean dashboard. We completely eliminated the need for physical forms and in-person queuing.',
      results: 'Upon testing the prototype with our initial user group, the feedback was overwhelmingly positive. The new digital flow is projected to reduce application processing time by an incredible 60%. More importantly, it successfully eliminates physical queues, returning hours of valuable time back to the students and significantly reducing the administrative burden on college staff.',
      images: [
        '/iPhone%2016%20Pro%20Max%20-%201.png',
        '/iPhone%2016%20Pro%20Max%20-%203.png',
        '/iPhone%2016%20Pro%20Max%20-%204.png',
        '/iPhone%2016%20Pro%20Max%20-%205.png'
      ]
    },
    features: [
      'Digital document upload and verification',
      'Real-time application status tracking',
      'Automated renewal reminders',
      'Mobile-first intuitive interface'
    ],
    outcome: 'A comprehensive UI/UX design that transforms a frustrating offline process into a seamless digital experience.',
    github: '#',
    demo: '#',
    videoUrl: ''
  }
];

