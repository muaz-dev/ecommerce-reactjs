export const products = [
  {
    id: "salesforce",
    category: "software",
    name: "Salesforce CRM",
    price: 199,
    packages: [
      { name: "Essentials", inStock: true, price: 100 },
      { name: "Professional", inStock: true, price: 200 },
      { name: "Enterprise", inStock: true, price: 300 },
      { name: "Unlimited", inStock: true, price: 400 },
    ],
    image:
      "https://www.salesforce.com/news/wp-content/uploads/sites/3/2021/05/Salesforce-logo.jpg",
    reviews: { href: "#", average: 4.5, totalCount: 2350 },
    colors: [],
    sizes: [],
    description:
      "Salesforce CRM, a leading cloud-based customer relationship management solution, is designed to streamline company operations and enhance customer service. Tailored for businesses of all sizes, it offers a range of customizable features to manage customer interactions, sales, and marketing in one integrated platform.",
    features: [
      "Advanced customer insights with AI-driven analytics",
      "Customizable dashboards for real-time data tracking",
      "Automation of sales processes and customer interactions",
      "Integration capabilities with various third-party applications",
    ],

    details:
      "Salesforce CRM's packages cater to diverse business needs, offering varying levels of functionality. The 'Essentials' package is perfect for small businesses, while 'Professional' and 'Enterprise' cater to mid-sized and larger businesses, respectively. The 'Unlimited' package offers comprehensive features for organizations seeking extensive customization and support. All packages are regularly updated with the latest features and security enhancements.",
  },
  {
    id: "hubspot",
    category: "software",
    name: "HubSpot",
    price: "Free with Premium Plans",
    packages: [
      { name: "Free", inStock: true, price: 100 },
      { name: "Starter", inStock: true, price: 100 },
      { name: "Professional", inStock: true, price: 100 },
      { name: "Enterprise", inStock: true, price: 100 },
    ],
    image:
      "https://logos-world.net/wp-content/uploads/2022/01/HubSpot-Emblem.png",
    reviews: { href: "#", average: 4.7, totalCount: 2800 },
    colors: [],
    sizes: [],
    description:
      "HubSpot is a comprehensive inbound marketing, sales, and service software that helps companies attract visitors, convert leads, and close customers. It provides tools for social media marketing, content management, web analytics, and search engine optimization among others. HubSpot is designed to align sales and marketing teams, foster sales enablement, and improve customer service.",
    features: [
      "All-in-one marketing, sales, and service platform",
      "Advanced CRM capabilities",
      "Customizable marketing and sales automation",
      "Detailed analytics and reporting tools",
    ],

    details:
      "HubSpot offers a range of packages, starting with a robust 'Free' plan perfect for small businesses or those new to CRM. The 'Starter' package introduces more comprehensive tools for growing businesses, while 'Professional' and 'Enterprise' cater to larger businesses with advanced marketing, sales, and service automation needs. HubSpot is frequently updated with new features and integrations.",
  },
  {
    id: "trello",
    category: "software",
    name: "Trello",
    price: "Free with Premium Plans",
    packages: [
      { name: "Free", inStock: true, price: 100 },
      { name: "Standard", inStock: true, price: 100 },
      { name: "Premium", inStock: true, price: 100 },
      { name: "Enterprise", inStock: true, price: 100 },
    ],
    image: "https://logos-world.net/wp-content/uploads/2021/02/Trello-Logo.png",
    reviews: { href: "#", average: 4, totalCount: 1500 },
    colors: [],
    sizes: [],
    description:
      "Trello is an intuitive, web-based project management application designed to enhance team collaboration and workflow organization. Utilizing a card-based system, it allows users to create, assign, and track tasks with ease. Trello is ideal for both personal and professional use, providing a simple yet powerful way to manage projects of all sizes.",
    features: [
      "Easy-to-use, drag-and-drop interface",
      "Customizable boards, lists, and cards",
      "Seamless integration with popular apps and services",
      "Real-time collaboration and notifications",
    ],

    details:
      "Trello offers a range of packages to fit different user needs. The 'Free' version is great for personal use, while 'Standard' and 'Premium' provide more advanced features for teams and businesses, like additional integrations and automation. 'Enterprise' is tailored for larger organizations requiring extensive control and support. Regular updates ensure a constantly evolving and improving user experience.",
  },

  {
    id: "quickbooks",
    category: "software",
    name: "QuickBooks",
    price: "Varies Based on Plan",
    packages: [
      { name: "Simple Start", inStock: true, price: 100 },
      { name: "Essentials", inStock: true, price: 200 },
      { name: "Plus", inStock: true, price: 300 },
      { name: "Advanced", inStock: true, price: 400 },
    ],
    image:
      "https://digitalasset.intuit.com/content/dam/intuit/qb-design/brand/brand-foundations/logo/qb-logo-preferred-and-alternate-photo.svg",
    reviews: { href: "#", average: 3.6, totalCount: 3200 },
    colors: [],
    sizes: [],
    description:
      "QuickBooks is a leading accounting software designed to simplify financial management for small to medium-sized businesses. It offers a range of features for invoicing, payroll, expense tracking, and reporting. With its user-friendly interface, QuickBooks makes complex accounting tasks manageable and efficient.",
    features: [
      "Automated invoicing and billing",
      "Comprehensive expense tracking",
      "Payroll processing and tax calculation",
      "Real-time financial reporting and insights",
    ],

    details:
      "QuickBooks provides several packages to cater to diverse business needs. 'Simple Start' is ideal for new businesses, 'Essentials' for growing businesses needing more user access, 'Plus' offers inventory tracking, and 'Advanced' for larger businesses requiring more comprehensive features like advanced reporting. Each package is updated regularly to ensure compliance with the latest financial regulations.",
  },
  {
    id: "eset-nod32",
    category: "software",
    name: "ESET NOD32 Antivirus",
    price: "Varies Based on Plan",
    packages: [
      { name: "NOD32 Antivirus", inStock: true, price: 39.99 },
      { name: "Internet Security", inStock: true, price: 49.99 },
      { name: "Smart Security ", inStock: true, price: 59.99 },
    ],
    image:
      "https://live.mrf.io/statics/i/ps/www.muylinux.com/wp-content/uploads/2011/04/logo_eset_nod32.jpg?width=1200&enable=upscale",
    reviews: { href: "#", average: 4.7, totalCount: 4500 },
    colors: [],
    sizes: [],
    description:
      "ESET NOD32 Antivirus is a fast and lightweight antivirus software, known for its effective detection of viruses, worms, Trojans, spyware, and other internet threats. It's designed to offer robust protection while maintaining system performance, making it suitable for everyday web users who need reliable security without slowdowns.",
    features: [
      "Advanced malware detection and removal",
      "Minimal system impact",
      "Anti-phishing and anti-spyware protection",
      "Regular updates for up-to-date security",
    ],

    details:
      "ESET NOD32 offers several packages to cater to different security needs. 'NOD32 Antivirus' provides basic protection against viruses and malware. 'Internet Security' steps up with additional features like firewall and parental control. 'Smart Security Premium' includes all these features plus password management and secure data encryption. Regular updates ensure all packages provide current and effective protection against emerging threats.",
  },
  {
    id: "microsoft-power-bi",
    category: "software",
    name: "Microsoft Power BI",
    price: "Varies Based on Plan",
    packages: [
      { name: "Free", inStock: true, price: 1000 },
      { name: "Pro", inStock: true, price: 2000 },
      { name: "Premium", inStock: true, price: 3000 },
    ],
    image:
      "https://seeklogo.com/images/P/power-bi-microsoft-logo-E4FC8DE4A9-seeklogo.com.png",
    reviews: { href: "#", average: 3.5, totalCount: 2100 },
    colors: [],
    sizes: [],
    description:
      "Microsoft Power BI is a business analytics service that provides interactive visualizations and business intelligence capabilities with an interface simple enough for end users to create their own reports and dashboards. It is a powerful tool for converting data from various data sources into interactive dashboards and BI reports.",
    features: [
      "Drag-and-drop functionality for easy report creation",
      "Integration with Excel and other Microsoft products",
      "Real-time data processing and insights",
      "Robust data security features",
    ],

    details:
      "Power BI comes in different packages suitable for various user needs. The 'Free' version is great for individual users, offering basic data visualization tools. The 'Pro' version provides more advanced collaboration features for teams and businesses. 'Premium' is ideal for large enterprises, offering extensive cloud and on-premises reporting capabilities. Regular updates ensure the tool is always at the cutting edge of data analytics technology.",
  },
  {
    id: "sap-erp",
    category: "software",
    name: "SAP ERP",
    price: "Custom Pricing",
    packages: [
      { name: "Standard", inStock: true, price: 199 },
      { name: "Professional", inStock: true, price: 500 },
      { name: "Enterprise", inStock: true, price: 800 },
      { name: "Advanced", inStock: true, price: 1000 },
    ],
    image: "https://www.sap.com/dam/application/shared/logos/sap-logo-svg.svg",
    reviews: { href: "#", average: 4.3, totalCount: 950 },
    colors: [],
    sizes: [],
    description:
      "SAP ERP is a comprehensive enterprise resource planning software that integrates key business functions to streamline operations and drive business growth. It offers real-time data processing, enabling businesses to make informed decisions swiftly. Designed for versatility, SAP ERP is suitable for a wide range of industries, providing tailored solutions for unique business needs.",
    features: [
      "Centralized business process management",
      "Real-time data analysis and reporting",
      "Flexible integration with various digital ecosystems",
      "Advanced financial management and accounting tools",
    ],

    details:
      "The SAP ERP package tiers cater to different business sizes and requirements. The 'Standard' package is ideal for small businesses, while 'Professional' and 'Enterprise' suit mid-sized and larger organizations. 'Advanced' offers the most comprehensive features, including AI-driven analytics and extensive customization. Continuous updates ensure that all packages stay at the forefront of ERP technology.",
  },
  {
    id: "macbook",
    category: "hardware",
    name: "MacBook",
    price: 1234,
    packages: [],
    features: [],
    colors: [
      { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
      { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
      { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
    ],
    sizes: [
      { name: "13-inch", inStock: false, price: 1000 },
      { name: "14-inch", inStock: true, price: 1200 },
      { name: "16-inch", inStock: true, price: 1400 },
    ],
    image:
      "https://www.apple.com/v/macbook-pro-13/m/images/overview/hero_endframe__bsza6x4fldiq_large.jpg",
    reviews: { href: "#", average: 4.8, totalCount: 5000 },
    description:
      "The MacBook is a sleek and powerful laptop from Apple, known for its stunning Retina display, high performance, and exceptional build quality. Available in various sizes and colors, it caters to a wide range of users, from professionals to students. The MacBook is designed for those who demand performance and portability without compromise.",
    specs: [
      "Retina display with True Tone technology",
      "Latest-generation Intel or Apple M1 processors",
      "All-day battery life",
      "Highly secure with Touch ID",
    ],
    details:
      "The MacBook range includes 13-inch, 14-inch, and 16-inch models, each available in White, Gray, and Black. While the 13-inch model is currently out of stock, the 14-inch and 16-inch models are available, offering more screen real estate and power for advanced tasks. Each MacBook comes with a full suite of ports and is designed with an environmentally friendly approach.",
  },
  {
    id: "microsoft-surface-laptop-studio",
    category: "hardware",
    name: "Microsoft Surface Laptop Studio",
    price: 1599,
    packages: [],
    features: [],
    colors: [
      {
        name: "Platinum",
        class: "bg-gray-200",
        selectedClass: "ring-gray-400",
      },
    ],
    sizes: [{ name: "14.4-inch", inStock: true, price: 1599 }],
    image:
      "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Highlight-Surface-Laptop-Studio-Patinum-Refurbished:VP2-859x540",
    reviews: { href: "#", average: 4.5, totalCount: 800 },
    description:
      "The Microsoft Surface Laptop Studio stands as a versatile, high-performance laptop, ideal for professionals and creatives. It features a unique flexible hinge design, allowing it to transition from laptop to studio mode seamlessly. The laptop boasts a vibrant 14.4-inch touchscreen, powerful Intel processors, and advanced graphics options, making it perfect for both work and play.",
    specs: [
      "14.4-inch PixelSense Flow touch display",
      "12th Gen Intel Core processors",
      "NVIDIA GeForce RTX graphics option",
      "Up to 32GB RAM and 2TB storage",
    ],
    details:
      "The Surface Laptop Studio comes in a single size – a 14.4-inch model, offered in an elegant Platinum color. It features various configurations to suit different needs, from standard models perfect for everyday tasks to high-end versions designed for intensive graphic design and gaming. Its innovative design and powerful specs make it a top choice for those seeking a blend of style and substance.",
  },
  {
    id: "hp-spectre-x360",
    category: "hardware",
    name: "HP Spectre x360",
    price: 1249,
    packages: [],
    features: [],
    colors: [
      {
        name: "Nightfall Black",
        class: "bg-black",
        selectedClass: "ring-black",
      },
      {
        name: "Poseidon Blue",
        class: "bg-blue-600",
        selectedClass: "ring-blue-600",
      },
      {
        name: "Natural Silver",
        class: "bg-gray-300",
        selectedClass: "ring-gray-400",
      },
    ],
    sizes: [
      { name: "13.3-inch", inStock: true, price: 1249 },
      { name: "15.6-inch", inStock: true, price: 1449 },
    ],
    image:
      "https://img-cdn.tnwcdn.com/image?fit=1280%2C720&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2021%2F08%2FHP-Spectre-x360-14-1-of-7.jpg&signature=b273734ba382a58d403431a960fd1708",
    reviews: { href: "#", average: 4.7, totalCount: 2200 },
    description:
      "The HP Spectre x360 is a high-end convertible laptop known for its sleek design, powerful performance, and exceptional versatility. It features a 360-degree hinge that allows it to be used as a laptop, tablet, or in tent mode. Equipped with the latest Intel processors, it is designed for users who need both power and flexibility in their daily computing tasks.",
    specs: [
      "360-degree convertible design",
      "Latest Intel Core processors",
      "Up to 4K OLED touch display",
      "Long battery life with fast charge",
    ],
    details:
      "The Spectre x360 is available in 13.3-inch and 15.6-inch screen sizes, each offered in Nightfall Black, Poseidon Blue, and Natural Silver colors. The 13.3-inch model is perfect for portability and everyday use, while the 15.6-inch version offers more screen space for multimedia and professional tasks. Both models boast impressive features like 4K displays and all-day battery life, making them ideal for both work and leisure.",
  },
  {
    id: "lenovo-thinkpad-x1-extreme",
    category: "hardware",
    name: "Lenovo ThinkPad X1 Extreme",
    price: 1749,
    packages: [],
    features: [],
    colors: [
      { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
    ],
    sizes: [{ name: "15.6-inch", inStock: true, price: 1749 }],
    image:
      "https://p1-ofp.static.pub/medias/bWFzdGVyfHJvb3R8Mzk1MzcwfGltYWdlL3BuZ3xoNWEvaDBkLzE0MzMxMTYzMzQ0OTI2LnBuZ3w2MzhlYjUyZTJlYmVkOGYzZDY2YjcxNWZlZWY2MDIwMjRlMjkzNjY1OWU1MzRmMDdkNzQyZDdjM2IxMzIxN2Uw/lenovo-laptop-thinkpad-x1-extreme-hero.png",
    reviews: { href: "#", average: 4.6, totalCount: 1500 },
    description:
      "The Lenovo ThinkPad X1 Extreme is a premium laptop that combines robust performance with sleek design, making it perfect for business professionals and power users. It features high-end specs including powerful Intel processors, dedicated graphics, and a stunning 15.6-inch display. Its durable build and security features make it ideal for demanding business environments.",
    specs: [
      "15.6-inch display with up to 4K resolution",
      "Up to 10th Gen Intel Core i9 processors",
      "NVIDIA GeForce graphics options",
      "Military-grade durability",
    ],
    details:
      "The ThinkPad X1 Extreme is available in a 15.6-inch model, perfect for users who require a larger screen for productivity and entertainment. It comes in a classic Black color, offering a professional look suitable for any business setting. The laptop provides a range of high-performance configurations, catering to various needs from everyday tasks to resource-intensive applications.",
  },
  {
    id: "dell-xps-15",
    category: "hardware",
    name: "Dell XPS 15",
    price: 1850,
    packages: [],
    features: [],
    colors: [
      { name: "Silver", class: "bg-gray-200", selectedClass: "ring-gray-400" },
      { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
    ],
    sizes: [{ name: "15.6-inch", inStock: true, price: 1850 }],
    image: "https://s.isanook.com/hi/0/ui/310/1554089/xps_2022_1.jpg",
    reviews: { href: "#", average: 4.5, totalCount: 2500 },
    description:
      "The Dell XPS 15 is a high-performance laptop known for its impressive display, powerful processing capabilities, and sleek design. Ideal for both professionals and creatives, it features a stunning 15.6-inch screen, up to the latest Intel processors, and robust graphics performance. The XPS 15 combines functionality and style, making it a top choice for those seeking a premium computing experience.",
    specs: [
      "15.6-inch 4K UHD+ display",
      "Up to 10th Gen Intel Core i9 processor",
      "NVIDIA GeForce GTX 1650 Ti graphics",
      "CNC machined aluminum and carbon fiber body",
    ],
    details:
      "The XPS 15 is available in two classic color options: Silver and Black. It comes in a 15.6-inch size, offering a balance between portability and screen real estate. This laptop is tailored for users who need a powerful machine for demanding tasks like video editing, graphic design, and high-end gaming. Its refined build and top-tier components ensure a premium experience.",
  },
  {
    id: "asus-b9",
    category: "hardware",
    name: "ASUS ExpertBook B9",
    price: 1499,
    packages: [],
    features: [],
    colors: [
      {
        name: "Star Black",
        class: "bg-gray-900",
        selectedClass: "ring-gray-900",
      },
    ],
    sizes: [{ name: "14-inch", inStock: true, price: 1499 }],
    image:
      "https://res.cloudinary.com/cenergy-innovation-limited-head-office/image/fetch/c_scale,q_70,f_auto,h_740/https://d1dtruvuor2iuy.cloudfront.net/media/catalog/product/0/0/000259672_b9450fabm0377t.jpg",
    reviews: { href: "#", average: 4.4, totalCount: 1200 },
    description:
      "The ASUS ExpertBook B9 is renowned for its remarkable lightness and robust performance, making it ideal for business professionals on the go. It boasts an ultra-lightweight design, long battery life, and powerful Intel processors, ensuring high productivity and efficiency. Its 14-inch display offers the perfect balance between portability and viewing experience.",
    specs: [
      "Ultra-lightweight, weighing just 2.2 pounds",
      "Up to 11th Gen Intel Core i7 processors",
      "Military-grade durability",
      "Up to 24 hours of battery life",
    ],
    details:
      "Available in a sophisticated Star Black color, the ExpertBook B9 comes in a 14-inch model that’s perfect for the traveling professional. Its durable build meets military standards, while the powerful battery life ensures productivity throughout the day. This laptop is ideal for those who need a reliable, high-performing, yet lightweight device for business and travel.",
  },
  {
    id: "galaxy-buds2",
    category: "hardware",
    name: "Galaxy Buds2",
    price: 149.99,
    packages: [],
    features: [],
    colors: [
      {
        name: "Graphite",
        class: "bg-gray-800",
        selectedClass: "ring-gray-800",
      },
      { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
      { name: "Olive", class: "bg-green-600", selectedClass: "ring-green-600" },
      {
        name: "Lavender",
        class: "bg-purple-300",
        selectedClass: "ring-purple-300",
      },
    ],
    sizes: [{ name: "One size", inStock: true, price: 149.99 }],
    image:
      "https://images.samsung.com/is/image/samsung/assets/test/unpacked/2022-2h/galaxy-buds2-pro/galaxy-buds2-pro-kv-mo.jpg",
    reviews: { href: "#", average: 4.3, totalCount: 980 },
    description:
      "Galaxy Buds2 offer a refined audio experience in a sleek, comfortable design. They're engineered for high-quality sound, with active noise cancellation and an ergonomic fit for all-day comfort. Perfect for music enthusiasts and everyday users, they provide a seamless wireless experience with your Galaxy devices.",
    specs: [
      "Active noise cancellation and ambient sound control",
      "High-quality sound with dynamic two-way speakers",
      "Ergonomic, lightweight design for comfort",
      "Up to 5 hours of continuous playtime with ANC on",
    ],
    details:
      "Available in Graphite, White, Olive, and Lavender, the Galaxy Buds2 come in a universal size with customizable ear tips. They are ideal for users seeking a balance between style, comfort, and sound quality. With their long battery life and compact charging case, the Buds2 are great companions for music, calls, and workouts.",
  },
  {
    id: "dell-ultrasharp-u2723qe",
    category: "accessories",
    name: "Dell UltraSharp U2723QE",
    price: 579.99,
    packages: [],
    features: [],
    colors: [
      { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
    ],
    sizes: [{ name: "27-inch", inStock: true, price: 579.99 }],
    image:
      "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/peripherals/monitors/u-series/u2723qe/media-gallery/monitor-u2723qe-gallery-1.psd?fmt=pjpg&pscan=auto&scl=1&wid=3764&hei=2248&qlt=100,1&resMode=sharp2&size=3764,2248&chrss=full&imwidth=5000",
    reviews: { href: "#", average: 4.6, totalCount: 800 },
    description:
      "The Dell UltraSharp U2723QE is a premium 27-inch 4K monitor that offers exceptional clarity and color accuracy, ideal for professionals in design and creative fields. It features an IPS Black technology panel, delivering deeper blacks and more vivid colors. The monitor also boasts extensive connectivity options, ergonomic design, and eco-friendly construction.",
    specs: [
      "27-inch 4K IPS Black technology display",
      "99% sRGB and 95% DCI-P3 color coverage",
      "USB-C connectivity with up to 90W power delivery",
      "Adjustable stand with tilt, swivel, and pivot functionality",
    ],
    details:
      "The U2723QE is available in a sleek Black color and comes in a 27-inch size, perfect for detailed and color-critical work. It is designed for professionals who need a high-performance monitor with excellent color reproduction and sharp visuals. The monitor's ergonomic features and connectivity options make it a versatile choice for any workspace.",
  },
  {
    id: "keychron-k3",
    category: "accessories",
    name: "Keychron K3 Wireless Mechanical Keyboard",
    price: 74.99,
    packages: [],
    features: [],
    colors: [
      { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
    ],
    sizes: [{ name: "Compact", inStock: true, price: 74.99 }],
    image:
      "https://mercular.s3.ap-southeast-1.amazonaws.com/images/articles/2020/10/ke3.jpg",
    reviews: { href: "#", average: 4.7, totalCount: 1500 },
    description:
      "The Keychron K3 is an ultra-slim wireless mechanical keyboard, designed for productivity and a seamless typing experience. It's one of the thinnest mechanical keyboards available, offering both style and functionality. The K3 is compatible with multiple devices and operating systems, making it a versatile choice for typists, gamers, and professionals alike.",
    specs: [
      "Ultra-slim, lightweight design",
      "Wireless and wired connectivity options",
      "Hot-swappable switches",
      "RGB backlit with multiple lighting modes",
    ],
    details:
      "Available in a sleek Black color, the Keychron K3 comes in a compact size, ideal for small desks and mobile setups. It offers a comfortable typing experience without sacrificing the tactile feedback of mechanical switches. The keyboard's wireless capability allows easy switching between devices, enhancing productivity for users who multitask across platforms.",
  },
  {
    id: "logitech-mx-master-3s",
    category: "accessories",
    name: "Logitech MX Master 3S",
    price: 99.99,
    packages: [],
    features: [],
    colors: [
      {
        name: "Graphite",
        class: "bg-gray-800",
        selectedClass: "ring-gray-800",
      },
      {
        name: "Pale Gray",
        class: "bg-gray-300",
        selectedClass: "ring-gray-400",
      },
    ],
    sizes: [{ name: "Standard", inStock: true, price: 99.99 }],
    image: "https://media-cdn.bnn.in.th/209869/3-square_medium.jpg",
    reviews: { href: "#", average: 4.8, totalCount: 2000 },
    description:
      "The Logitech MX Master 3S is an advanced wireless mouse known for its precision, comfort, and customizability. Designed for power users, it features an ergonomic shape, ultra-fast scrolling, and customizable buttons. It's ideal for professionals seeking a high-performance mouse for multitasking across several computers and applications.",
    specs: [
      "Ergonomic design with thumb rest",
      "Ultra-fast MagSpeed scrolling",
      "Customizable buttons and app-specific settings",
      "Quiet Click technology",
    ],
    details:
      "The MX Master 3S is available in Graphite and Pale Gray colors, offering a choice between classic and modern aesthetics. Its size is optimized for comfort during long hours of use. This mouse is perfect for professionals and creatives who require precision and versatility in their workflow, and it’s compatible with a wide range of devices and operating systems.",
  },
];
