/**
 * ─────────────────────────────────────────────────────────────
 *  ALL SITE CONTENT LIVES HERE.
 *  Edit this file to update the portfolio. Every value below
 *  comes from resume.pdf. Anything marked TODO is a placeholder.
 * ─────────────────────────────────────────────────────────────
 */

export const profile = {
  name: 'Jajula Shivadhanu Goud',
  firstName: 'Shivadhanu',
  initials: 'JS',
  role: 'AI Undergraduate · ML & Full-Stack Developer',
  tagline: 'Building AI-driven solutions, full-stack products and on-chain systems.',
  summary:
    'Artificial Intelligence undergraduate with hands-on experience in machine learning, full-stack development, and blockchain applications. Research Intern at Providence University (Taiwan) with expertise in developing AI-driven solutions, complemented by national-level hackathon achievements and strong problem-solving skills.',

  // TODO: add a square photo to /public (e.g. /public/me.jpg) and set photo: 'me.jpg'.
  // Leave as null to show the initials monogram instead.
  photo: null,

  email: 'shivadhanu.0305@gmail.com',
  phone: '+91 6301664543',
  location: 'Hyderabad, India', // derived from the education entries on the resume. Confirm.

  // Served from /public/resume.pdf
  resumeFile: 'resume.pdf',

  links: {
    linkedin: 'https://www.linkedin.com/in/shivadhanu-goud-jajula-0b3740210/',
    github: 'https://github.com/shiva-1301',
    leetcode: 'https://leetcode.com/u/Shiva_dt_0305/',
    codeforces: 'https://codeforces.com/profile/shiva_1301',
  },
}

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

/** "Fun facts" circles in the About section */
export const stats = [
  { value: '9.26', label: 'CGPA out of 10' },
  { value: '1600+', label: 'LeetCode rating' },
  { value: '400+', label: 'Problems solved' },
  { value: '3', label: 'Awards & finals' },
]

export const about = {
  intro:
    "I'm a B.Tech Artificial Intelligence student at Anurag University, Hyderabad. I like taking problems from raw data or a rough idea all the way to something that runs: training and explaining models, shipping full-stack apps, and writing smart contracts that hold up under scrutiny.",
  whatIDo: [
    {
      icon: 'brain',
      title: 'Machine Learning',
      text: 'Model development, feature engineering and explainability with DistilBERT, gradient-boosted trees and SHAP.',
    },
    {
      icon: 'layers',
      title: 'Full-Stack Development',
      text: 'End-to-end web platforms with React, Node.js, Express and MongoDB, including auth and real-time features.',
    },
    {
      icon: 'cube',
      title: 'Blockchain',
      text: 'Ethereum smart contracts in Solidity with Hardhat, wired to React dashboards through Ethers.js and MetaMask.',
    },
  ],
}

export const skills = [
  { category: 'Languages', items: ['Python', 'Java', 'C', 'C++', 'JavaScript', 'SQL', 'Solidity'] },
  { category: 'Frameworks', items: ['React', 'Node.js', 'Spring Boot', 'Flask', 'FastAPI', 'Hardhat'] },
  { category: 'ML & Data', items: ['DistilBERT', 'XGBoost', 'LightGBM', 'CatBoost', 'SHAP', 'Web scraping'] },
  { category: 'Blockchain', items: ['Ethereum', 'Ethers.js', 'MetaMask', 'Smart contracts'] },
  { category: 'Tools & Cloud', items: ['Git', 'Docker', 'Google Cloud Platform', 'MongoDB'] },
]

export const experience = [
  {
    role: 'Research Intern (TEEP Program)',
    org: 'Providence University',
    location: 'Taichung, Taiwan',
    period: 'May 2026 – Jul 2026',
    bullets: [
      'Selected for the Taiwan Experience Education Program (TEEP) to conduct AI research on counterfeit predatory journal detection using DistilBERT, CatBoost, LightGBM, XGBoost, and SHAP explainability.',
      'Performed web scraping, feature engineering, model development, and contributed to an ongoing research manuscript under faculty supervision.',
    ],
    tags: ['DistilBERT', 'CatBoost', 'LightGBM', 'XGBoost', 'SHAP'],
  },
]

export const projects = [
  {
    title: 'AI-Based DCRM Analysis for EHV Circuit Breakers',
    badge: 'Smart India Hackathon Finalist',
    tagline: 'Machine learning for high-voltage switchgear diagnostics',
    bullets: [
      'Developed an AI-assisted system for analyzing Dynamic Contact Resistance Measurement (DCRM) waveforms of 132kV/220kV/400kV SF6 circuit breakers.',
      'Built machine learning models to detect contact wear, arcing, bounce, and mechanism faults from waveform patterns.',
    ],
    tech: ['Python', 'Machine Learning', 'Signal analysis'],
    links: { github: 'https://github.com/shiva-1301/dcrm_analyser', live: null },
  },
  {
    title: 'LifeLink',
    badge: null,
    tagline: 'AI-powered hospital management platform',
    bullets: [
      'Developed a full-stack healthcare platform featuring emergency response, hospital discovery, and secure medical record management.',
      'Implemented SOS alerts with real-time GPS location sharing and nearest responder notification.',
      'Built role-based authentication and encrypted medical document storage for secure patient data management.',
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    links: { github: 'https://github.com/shiva-1301/hospiico', live: null },
  },
  {
    title: 'ClubDAO',
    badge: null,
    tagline: 'Decentralized governance & treasury system',
    bullets: [
      'Developed Ethereum smart contracts supporting proposal creation, voting, and automated treasury execution.',
      'Implemented secure vote tracking with double-vote prevention and execution constraints.',
      'Built a React dashboard integrated with MetaMask for on-chain governance and treasury management.',
    ],
    tech: ['Solidity', 'Hardhat', 'React.js', 'Ethers.js'],
    links: { github: 'https://github.com/shiva-1301/ClubDAO', live: null },
  },
]

export const education = [
  {
    school: 'Anurag University',
    degree: 'B.Tech in Artificial Intelligence',
    location: 'Ghatkesar, Hyderabad',
    period: 'Aug 2023 – May 2027',
    score: 'CGPA 9.26 / 10',
  },
  {
    school: 'Narayana Jr. College',
    degree: 'Intermediate (MPC)',
    location: 'L.B. Nagar, Hyderabad',
    period: 'Apr 2021 – May 2023',
    score: '94%',
  },
]

export const achievements = [
  {
    title: '1st Place, VISIONOVA Hackathon 2026',
    text: 'Secured top position in college-wide innovation challenge.',
  },
  {
    title: 'Finalist, Smart India Hackathon (SIH) 2025',
    text: 'Selected at national level under Government of India initiative.',
  },
  {
    title: '1st Place, IEEE Coding Competition 2023',
    text: 'Won coding contest organized by IEEE CIS Chapter.',
  },
]

export const codingProfiles = [
  {
    name: 'LeetCode',
    handle: 'Shiva_dt_0305',
    note: 'Rating 1600+ · 400+ problems solved · strong in Data Structures and Algorithms',
    url: profile.links.leetcode,
  },
  {
    name: 'Codeforces',
    handle: 'shiva_1301',
    note: null,
    url: profile.links.codeforces,
  },
]
