/**
 * portfolio-data.js
 * Static data file replacing the MySQL database for GitHub Pages deployment.
 * Contains all projects, skills, languages, certificates, and personal info.
 */
const PORTFOLIO_DATA = {
  about: {
    name: "Juliusz Krajewski",
    title: "Software Engineering Student | Full-Stack Web Developer | Embedded Systems Enthusiast",
    bio: "I am a multilingual Software Engineering student at ROC ter AA, driven by the challenge of building functional, user-centric digital solutions. With a technical foundation spanning front-end design and back-end logic, I specialize in creating efficient web applications using PHP, C#, and MySQL.\n\nBeyond the screen, I have a proven track record of high-stakes collaboration and technical leadership. I was honored to be one of three students selected to represent Ter AA at the 2026 Drone Challenge, where I served as the Main 3D Designer and Embedded Systems Engineer. This experience, combined with over 40 hours of community-driven technical work at Stadstuin Helmond, has sharpened my ability to solve complex problems under pressure and work effectively within multidisciplinary teams.\n\nCurrently expanding my expertise in JavaScript and Python, I am passionate about bridging the gap between hardware and software. I am eager to connect with fellow developers and industry professionals to contribute to innovative projects in the web development and tech sectors.",
    profile_image: "assets/me.jpg",
    participation: "Represented Ter AA at the 5th edition Drone Challenge",
    favorite_technologies: ["PHP", "C++"]
  },
  contact: {
    email: "juliuszkrajewski2009@gmail.com",
    github_url: "https://github.com/ShadowPL618",
    linkedin_url: "https://www.linkedin.com/in/juliusz-krajewski-12a225389/?skipRedirect=true"
  },
  skills: {
    proficient: [
      { skill_name: "HTML", category: "Technical" },
      { skill_name: "CSS", category: "Technical" },
      { skill_name: "PHP", category: "Technical" },
      { skill_name: "MySQL", category: "Technical" },
      { skill_name: "Arduino", category: "Technical" },
      { skill_name: "Visual Studio", category: "Technical" },
      { skill_name: "YAML", category: "Technical" },
      { skill_name: "C++", category: "Technical" },
      { skill_name: "Autodesk Fusion", category: "Technical" },
      { skill_name: "Teamwork", category: "Soft Skills" },
      { skill_name: "Problem-solving", category: "Soft Skills" },
      { skill_name: "Communication", category: "Soft Skills" }
    ],
    learning: [
      { skill_name: "JavaScript", category: "Technical" },
      { skill_name: "C#", category: "Technical" },
      { skill_name: "Python", category: "Technical" },
      { skill_name: "Solid Works", category: "Technical" },
      { skill_name: "WordPress", category: "Technical" }
    ]
  },
  languages: [
    { language_name: "Polish", proficiency_level: "100%", is_native: true },
    { language_name: "English", proficiency_level: "85%", is_native: false },
    { language_name: "Dutch", proficiency_level: "80%", is_native: false },
    { language_name: "Italian", proficiency_level: "10%", is_native: false }
  ],
  certificates: [
    { title: "Spelbrekers - Ter AA Representative", issuer: "Ter AA", year: 2026 },
    { title: "Techmakers Consortium Certificate", issuer: "Techmakers", year: 2025 },
    { title: "Helmond Digi Debat 2025 — School Representative", issuer: "Helmond / Ter AA", year: 2025 },
    { title: "Drone Challenge 2026 — Ter AA Representative", issuer: "Ter AA", year: 2026 },
    { title: "International Energy Challenge - Participant", issuer: "Avans/Ter AA", year: 2026 },
    { title: "Drone Team Ter AA - Co-Pilot, Main 3D Designer & Main Embedded Systems Engineer", issuer: "Ter AA", year: 2026 },
    { title: "Tech Talent Team Ter AA - Drone Team Section", issuer: "Ter AA", year: 2026 }
  ],
  projects: {
    WEDE: [
      {
        id: 1,
        title: "Calculator++",
        short_description: "Advanced calculator with converter, projects, and forms.",
        description: "Calculator++ is a web-based application that combines front-end design with server-side logic. Developed using HTML and CSS for a structured, styled interface, the project utilizes PHP to process complex mathematical operations on the server. It features a multi-functional engine capable of executing several operations simultaneously.",
        overview: null,
        image_path: "assets/calculator++.png",
        technologies: ["PHP", "HTML", "CSS"],
        github_url: "https://github.com/ShadowPL618/Calculator-",
        has_live_link: false,
        is_collaborative: false,
        media: [
          { path: "assets/calculator++.png", type: "image", caption: "Calculator++ Interface" }
        ]
      },
      {
        id: 2,
        title: "GameWorld",
        short_description: "Gaming e-commerce site for PC, PlayStation, and Xbox.",
        description: "GameWorld is a comprehensive E-commerce web application for a video game retailer, developed using HTML5, CSS3, PHP, and MySQL. The project focuses on dynamic content delivery, utilizing PHP includes for modular design and GET parameters to serve multiple product categories (Playstation, Xbox, PC) through a single, database-driven template.",
        overview: null,
        image_path: "assets/gameworld.jpg",
        technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
        github_url: "https://github.com/ShadowPL618/GameWorld",
        has_live_link: false,
        is_collaborative: false,
        media: [
          { path: "assets/gameworld.jpg", type: "image", caption: "GameWorld Homepage" }
        ]
      },
      {
        id: 3,
        title: "RadioGaga",
        short_description: "Music radio station with artist galleries and playlists.",
        description: "Radio Ga Ga is a professional-level web development project that integrates HTML, CSS, PHP, and MySQL to create a dynamic music information portal. The application features a database-driven navigation system and multiple content pages, demonstrating proficiency in CRUD operations, semantic HTML, and responsive design using CSS FlexBox.",
        overview: null,
        image_path: "assets/RadioGagaScreenshot.png",
        technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
        github_url: "https://github.com/ShadowPL618/Radio-Gaga",
        has_live_link: false,
        is_collaborative: false,
        media: [
          { path: "assets/RadioGagaScreenshot.png", type: "image", caption: "Imperio Radio Homepage" }
        ]
      }
    ],
    EBSY: [
      {
        id: 4,
        title: "Safe",
        short_description: "Arduino LED safe",
        description: "Arduino Safe is an embedded systems project featuring a three-digit passcode security mechanism. Built with C++ (Arduino), it utilizes digital I/O to process tactile button inputs and provide visual feedback via LEDs. The system includes sequence validation logic, timed states, and error-handling animations to simulate a real-world electronic lock.",
        overview: null,
        image_path: "assets/EBSYsafe.png",
        technologies: ["Arduino", "C++"],
        github_url: "https://github.com/ShadowPL618/Arduino-Safe",
        has_live_link: false,
        is_collaborative: false,
        media: [
          { path: "assets/EBSYsafe.png", type: "image", caption: "Arduino Safe – Circuit Diagram" }
        ]
      },
      {
        id: 7,
        title: "Bike Lamp",
        short_description: "Arduino LED lamp",
        description: "Fietsverlichting is an Arduino-based hardware project designed to simulate a multi-functional bike light system. Using digital I/O, the project transitions from a basic toggle switch to a sophisticated controller with four distinct light modes—Off, On, Blinking, and Wave—managed through iterative button presses.",
        overview: null,
        image_path: "assets/EBSYbikelamp1.jpg",
        technologies: ["Arduino", "C++"],
        github_url: "https://github.com/ShadowPL618/Bike-Lamp",
        has_live_link: false,
        is_collaborative: false,
        media: [
          { path: "assets/EBSYbikelamp1.jpg", type: "image", caption: "Bike Lamp – Hardware Setup" },
          { path: "assets/EBSYbikelamp2.jpg", type: "image", caption: "Bike Lamp – Circuit Close-up" }
        ]
      },
      {
        id: 8,
        title: "C-Controler-LCD-I2C",
        short_description: "Arduino joystick controller with I2C LCD display.",
        description: "C-Controler-LCD-I2C is an Arduino UNO R4 WiFi embedded systems project that reads joystick input and displays directional data on an I2C LCD screen, while streaming movement commands over serial to a connected PC application.",
        overview: null,
        image_path: "assets/CControler.png",
        technologies: ["Arduino", "C++"],
        github_url: "https://github.com/ShadowPL618/C-Controler-LCD-I2C",
        has_live_link: false,
        is_collaborative: false,
        media: [
          { path: "assets/CControler.png", type: "image", caption: "C-Controler – Hardware Setup" }
        ]
      },
      // Collaborative EBSY projects from CV
      {
        id: 101,
        title: "EV Charging System",
        short_description: "Variable charging system with sensor integration for BattPulse SolarSync.",
        description: "Developed logic for a variable charging system, integrating hardware sensors with software control loops to optimise power delivery and user safety. Designed for the BattPulse SolarSync EV Charger platform.",
        overview: null,
        image_path: "assets/EBSYsafe.png",
        technologies: ["C++", "Arduino", "Sensor Integration", "Control Loops"],
        github_url: null,
        project_link: "https://www.battpulse.com/product/solarsync-ev-charger/",
        has_live_link: true,
        is_collaborative: true,
        is_private: true,
        media: []
      },
      {
        id: 102,
        title: "Marine Electrification",
        short_description: "Electrical schematics for boat motor conversion.",
        description: "Drafted comprehensive electrical schematics for a boat motor conversion, focusing on high-voltage power distribution and component integration.",
        overview: null,
        image_path: "assets/EBSYsafe.png",
        technologies: ["C++", "Arduino", "Electrical Schematics", "Power Distribution"],
        github_url: null,
        has_live_link: false,
        is_collaborative: true,
        is_private: true,
        media: []
      },
      {
        id: 103,
        title: "BMS Tester Project",
        short_description: "Diagnostic tool for battery pack monitoring.",
        description: "Engineered a diagnostic tool to monitor cell voltages and thermal data, ensuring battery pack longevity and operational safety.",
        overview: null,
        image_path: "assets/EBSYsafe.png",
        technologies: ["C++", "Arduino", "Battery Management", "Diagnostics"],
        github_url: null,
        has_live_link: false,
        is_collaborative: true,
        is_private: true,
        media: []
      },
      {
        id: 104,
        title: "Industrial Protocols (CAN/RS485)",
        short_description: "CAN bus and RS485 data communication implementation.",
        description: "Implemented robust data communication between microcontrollers using CAN bus and RS485, mirroring industry standards for automotive and industrial networking.",
        overview: null,
        image_path: "assets/EBSYsafe.png",
        technologies: ["C++", "Arduino", "CAN Bus", "RS485"],
        github_url: null,
        has_live_link: false,
        is_collaborative: true,
        is_private: true,
        media: []
      }
    ],
    APPR: [
      {
        id: 5,
        title: "Guess Number",
        short_description: "A number guessing game.",
        description: "MysteryNumber is an interactive Windows Forms (C#) desktop application where players guess a randomly generated number within a custom range. Developed using the MoSCoW method, it features real-time feedback via a \"temperature\" trackbar, sound effects, and a progress-tracking system, all while adhering to strict ROC Ter AA coding standards.",
        overview: null,
        image_path: "assets/MisteryNumber.png",
        technologies: ["C#", ".NET"],
        github_url: "https://github.com/ShadowPL618/C_Sharp_Mystery_NumberJkra",
        has_live_link: false,
        is_collaborative: false,
        media: [
          { path: "assets/MisteryNumber.png", type: "image", caption: "MysteryNumber Game Interface" }
        ]
      },
      {
        id: 6,
        title: "Race",
        short_description: "A racing game.",
        description: "The Race is a C# Windows Forms application that simulates a competitive derby using Object-Oriented Programming. It features a class-based system for racers with randomized speeds, a hidden tab-navigation interface, and automated ranking. Key functionality includes real-time logging, CSV data persistence, and sound integration, all managed through a custom settings menu.",
        overview: null,
        image_path: "assets/apprRacePicture1.png",
        technologies: ["C#", ".NET"],
        github_url: "https://github.com/ShadowPL618/Space-Race",
        has_live_link: false,
        is_collaborative: false,
        media: [
          { path: "assets/apprRacePicture1.png", type: "image", caption: "Starfighter Race – Start Screen" },
          { path: "assets/apprRacePicture2.png", type: "image", caption: "Starfighter Race – Race View" }
        ]
      },
      {
        id: 9,
        title: "Astroidinator",
        short_description: "Fallout-themed side-scrolling shooter with Arduino controller support.",
        description: "Astroidinator is a C# Windows Forms side-scrolling shooter game set in the Fallout New Vegas universe. The player controls a Brotherhood of Steel Paladin fighting NCR enemies, with an Arduino joystick controller as the intended input device. Features a lore slideshow intro, multiple enemy types, and a two-round boss mechanic.",
        overview: null,
        image_path: "assets/Astroidinator1.png",
        technologies: ["C#", ".NET", "Arduino"],
        github_url: "https://github.com/ShadowPL618/Operation-Sunburst-Defense",
        has_live_link: false,
        is_collaborative: false,
        media: [
          { path: "assets/Astroidinator1.png", type: "image", caption: "Astroidinator – Title Screen" },
          { path: "assets/Astroidinator2.png", type: "image", caption: "Astroidinator – Gameplay" },
          { path: "assets/Astroidinator3.png", type: "image", caption: "Astroidinator – Slides" },
          { path: "assets/Astroidinator4.png", type: "image", caption: "Astroidinator – Round 2" },
          { path: "assets/Astroidinator5.png", type: "image", caption: "Astroidinator – Terminal" }
        ]
      },
      // Collaborative APPR projects from CV
      {
        id: 105,
        title: "Production-Ready Python Tools",
        short_description: "Python-based GUI for internal tools with seamless deployment.",
        description: "Architected a Python-based GUI for internal tools, focusing on \"boxing\" the software for seamless deployment and end-user accessibility.",
        overview: null,
        image_path: "assets/apprRacePicture1.png",
        technologies: ["Python", "GUI Development", "Deployment"],
        github_url: null,
        has_live_link: false,
        is_collaborative: true,
        is_private: true,
        media: []
      }
    ]
  }
};