export const WEBSITE_NAME = "Bhanu Prakash";
export const WEBSITE_URL = "https://bhanuprakashsfdc.com/";
export const NAME = "Bhanu Prakash";
export const ROLE = "Salesforce Consultant";
export const CITY = "Tirupathi, AP, India 517501";
export const PHONE = "+91-8861789164";
export const WHATSAPP = "https://api.whatsapp.com/send?phone=918861789164&text=Hi%2C%0AHow%20can%20I%20help%20you%20today%20%3F"
export const EMAIL = "hi@bhanuprakashsfdc.com";
export const FB = "https://www.facebook.com/bhanuprakashsfdc/";
export const X = "https://x.com/bhanusfdc";
export const LI = "https://www.linkedin.com/in/bhanu-prakash-salesforce/";
export const IN = "https://www.instagram.com/bhanuprakashsalesforce/";
export const GI = "https://github.com/bhanuprakashsfdc";
  
  export const SKILLS = [
    { name: 'Salesforce', proficiency: '95%' },
    { name: 'Apex', proficiency: '80%' },
    { name: 'LWC', proficiency: '90%' },
    { name: 'Web Designing', proficiency: '90%' },
    { name: 'Leadership Skills', proficiency: '90%' },
    { name: 'Performance Evaluation', proficiency: '90%' },
    { name: 'Team Management', proficiency: '95%' },
    { name: 'CSS', proficiency: '85%' },
    { name: 'WordPress/ CMS', proficiency: '90%' },
    { name: 'SEO', proficiency: '90%' },
    { name: 'JavaScript', proficiency: '90%' },
    { name: 'React', proficiency: '90%' },
  ];
  
  export const COUNTERS = [
    { number: '10', label: 'Years Of Experience' },
    { number: '12', label: 'Handled Projects' },
    { number: '05', label: 'Open Source Libraries' },
    { number: '15', label: 'Happy Clients' },
    { number: '10', label: 'Certifications' },
  ];
  
  export const SERVICE_DETAILS = [
    {
      id: '01',
      title: 'Salesforce Consulting Services',
      description: 'Leveraging my expertise in Salesforce, I help businesses streamline operations, enhance customer relationships, and drive growth',
    },
    {
      id: '02',
      title: 'Web Development',
      description: 'Building high-performance websites that captivate audiences. My expertise lies in crafting responsive, scalable, and user-friendly web applications.',
    },
    {
      id: '03',
      title: 'SEO / Marketing',
      description: 'Driving organic growth through strategic SEO and effective marketing campaigns. I optimize websites for search engines and implement data-driven marketing strategies.',
    },
    {
      id: '04',
      title: 'UI/UX Design',
      description: 'Transforming concepts into engaging and user-centered designs. I create intuitive interfaces that delight users and achieve business objectives.',
    },
  ];

  export const SECTION_NAMES = {
    SERVICES: 'SERVICES',
    SKILLS: 'SKILLS',
  };
  
  export const TITLES = {
    SERVICES: 'My Services',
    SKILLS: 'My Advantages',
  };
  
  export const SUBTITLES = {
    SERVICES: 'I create exceptional digital experiences that drive results. From crafting intuitive user interfaces to building robust websites and optimizing for search, I deliver solutions that are both aesthetically pleasing and highly functional.',
    SKILLS: 'Deep Salesforce expertise, proven implementation success, tailored solutions, and process optimization for business growth. Building User-centric design, robust web development, SEO mastery, and visually stunning websites for exceptional user experiences. ',
  };
  
  export const SKILLS_DATA = [
    { src: '', alt: 'Salesforce', name: 'Salesforce', percent: 95 },
    { src: '', alt: 'Apex ', name: 'Apex', percent: 85 },
    { src: '', alt: 'LWC', name: 'LWC', percent: 90 },
    { src: '', alt: 'Web Designing', name: 'Web Designing', percent: 90 },
    { src: '', alt: 'WordPress', name: 'WordPress', percent: 90 },
    { src: '', alt: 'SEO', name: 'SEO', percent: 90 },
    { src: '', alt: 'Javascript', name: 'JavaScript', percent: 90 },
  ];
  
  // constants.jsx
import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

// Contact info data
export const CONTACT_INFOV = [
  {
    id: 'location',
    icon: faMapMarkerAlt,
    label: 'Location',
    value: 'Melbourne Street. No 20',
  },
  {
    id: 'email',
    icon: faEnvelope,
    label: 'E-mail',
    value: 'smith@gmail.com',
  },
  {
    id: 'phone',
    icon: faPhone,
    label: 'Phone',
    value: '+123 456 7890',
  },
];
export const TESTIMONIALS = [
  {
    image: 'assets/img/testimonial/author1.png',
    rating: 5,
    content: 'I was very pleased with Bhanu work. I am already planning on working with him again in the near future.',
    author: 'Richard',
    position: 'Ceo & Founder',
  },
  {
    image: 'assets/img/testimonial/author2.png',
    rating: 5,
    content: 'Thanks guys, keep up the good work! Wow what great service, I love it! Salesforce experience cloud site implementation is worth much more than I paid. Thank You!',
    author: 'Barclay C',
    position: 'Project Manager',
  },
  {
    image: 'assets/img/testimonial/author3.png',
    rating: 5,
    content: 'Keep up the excellent work. Thanks Salesforce Chat bot implementation!',
    author: 'Rosaline',
    position: 'Owner',
  },
];
export const CLOUDS_DATA = [
  { name: 'Loyalty Management Cloud', icon: 'fas fa-crown' },
  { name: 'Consumer Goods Cloud', icon: 'fas fa-box-open' },
  { name: 'Field Service Cloud', icon: 'fas fa-clipboard-check' },
  { name: 'Experience Cloud', icon: 'fas fa-paint-roller' },
  { name: 'Service Cloud', icon: 'fas fa-database' },
  { name: 'Sales Cloud', icon: 'fas fa-handshake' },
  { name: 'Non Profit Cloud', icon: 'fas fa-file-alt' },
  { name: 'Financial Service Cloud', icon: 'fas fa-home' },
  { name: 'Tableau CRM', icon: 'fas fa-anchor' },
  { name: 'Health Cloud', icon: 'fas fa-heartbeat' },
  { name: 'Manufacturing Cloud', icon: 'fas fa-industry' },
  { name: 'Education Cloud', icon: 'fas fa-university' }
];
export const CERTIFICATIONS = [
  {
    title: "Certified Application Architect",
    dateEarned: "July 4, 2023",
    imageSrc: "/assets/img/certifications/application.png", // Update this with the correct image path
    altText: "Certified Application Architect",
  },
  {
    title: "Certified Data Architect",
    dateEarned: "June 20, 2023",
    imageSrc: "/assets/img/certifications/dataarchitect.png", // Update this with the correct image path
    altText: "Certified Data Architect",
  },
  {
    title: "Certified Sharing and Visbility Architect",
    dateEarned: "July 4, 2023",
    imageSrc: "/assets/img/certifications/sharing.png", // Update this with the correct image path
    altText: "Certified Sharing and Visbility Architect",
  },
  {
    title: "Certified Platform App Builder",
    dateEarned: "May 22, 2023",
    imageSrc: "/assets/img/certifications/appbuilder.png", // Update this with the correct image path
    altText: "Certified Platform App Builder",
  },
  {
    title: "Certified Field Service Consultant",
    dateEarned: "January 22, 2023",
    imageSrc: "/assets/img/certifications/fsl.png", // Update this with the correct image path
    altText: "Certified Field Service Consultant",
  },
  {
    title: "Certified Platform Developer II",
    dateEarned: "December 13, 2022",
    imageSrc: "/assets/img/certifications/pd2.png", // Update this with the correct image path
    altText: "Certified Platform Developer II",
  },
  {
    title: "Certified Service Cloud Consultant",
    dateEarned: "September 24, 2022",
    imageSrc: "/assets/img/certifications/servicecloud.png", // Update this with the correct image path
    altText: "Certified Service Cloud Consultant",
  },
  {
    title: "Certified Tableau CRM and Einstein Discovery Consultant",
    dateEarned: "August 9, 2020",
    imageSrc: "/assets/img/certifications/tableaucrm.png", // Update this with the correct image path
    altText: "Certified Tableau CRM and Einstein Discovery Consultant",
  },
  {
    title: "Certified Platform Developer I",
    dateEarned: "August 1, 2020",
    imageSrc: "/assets/img/certifications/pd1.png", // Update this with the correct image path
    altText: "Certified Platform Developer I",
  },
  {
    title: "Certified Administrator",
    dateEarned: "February 18, 2020",
    imageSrc: "/assets/img/certifications/sfadmin.png", // Update this with the correct image path
    altText: "Certified Administrator",
  },
];
