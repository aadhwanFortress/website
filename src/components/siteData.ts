import {
  aboutIcons,
  blogImages,
  caseImages,
  industryIcons,
  processImages,
  serviceImages,
  teamImages,
  trainingImages,
} from "../assets/assetUrls";

export const navItems = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Pricing", path: "/pricing" },
  { label: "Blog & News", path: "/blog" },
  { label: "Contact Us", path: "/contact" },
];

export const services = [
  {
    title: "Managed Detection & Response",
    image: serviceImages[0],
    text: "24/7 monitoring, triage, and response built around real attacker behavior, validated detections, and clear escalation paths.",
  },
  {
    title: "Network & Zero Trust Security",
    image: serviceImages[1],
    text: "Segmentation, secure access, firewall governance, and identity-aware controls that reduce lateral movement across hybrid environments.",
  },
  {
    title: "Endpoint Protection & Hardening",
    image: serviceImages[2],
    text: "EDR tuning, secure baselines, patch prioritization, and ransomware-ready recovery practices for workstations, servers, and mobile fleets.",
  },
  {
    title: "Cloud Security Posture Management",
    image: serviceImages[3],
    text: "AWS, Azure, and Google Cloud reviews covering IAM, misconfigurations, data exposure, logging, workload protection, and compliance alignment.",
  },
  {
    title: "Penetration Testing & Red Teaming",
    image: serviceImages[4],
    text: "Human-led testing that validates exploit paths, business impact, detection quality, and the fixes that matter most.",
  },
  {
    title: "Governance, Risk & Compliance",
    image: serviceImages[5],
    text: "Control mapping, audit readiness, vendor risk, and security program guidance for ISO 27001, SOC 2, PCI DSS, HIPAA, and NIST.",
  },
];

export const aboutHighlights = [
  {
    title: "Our Approach",
    text: "We translate technical exposure into business risk, then build a practical roadmap your teams can execute.",
    icon: aboutIcons[0],
  },
  {
    title: "Our Practice",
    text: "Structured security delivery across advisory, operations, testing, cloud, and compliance workstreams.",
    icon: aboutIcons[1],
  },
  {
    title: "Why Choose Us?",
    text: "You get senior guidance, measurable outcomes, fast communication, and recommendations that respect how your business actually operates.",
    icon: aboutIcons[2],
  },
  {
    title: "Our Mission",
    text: "Help ambitious organizations grow with confidence by making security visible, repeatable, and aligned to risk.",
    icon: aboutIcons[3],
  },
  {
    title: "Our Vision",
    text: "A digital economy where resilience is designed into every product, process, cloud workload, and third-party relationship.",
    icon: aboutIcons[4],
  },
  {
    title: "Our Expertise",
    text: "Deep experience across security operations, VAPT, identity, cloud governance, privacy, and enterprise risk management.",
    icon: aboutIcons[5],
  },
];

export const industries = [
  {
    title: "Government",
    icon: industryIcons[0],
    text: "Risk-led protection for citizen services, regulated data, identity platforms, and critical public-sector workflows.",
  },
  {
    title: "Education",
    icon: industryIcons[1],
    text: "Security programs for campuses, research environments, student data, cloud learning systems, and distributed users.",
  },
  {
    title: "Growing Businesses",
    icon: industryIcons[2],
    text: "Right-sized controls, monitoring, and response plans for teams scaling fast without a large internal security staff.",
  },
  {
    title: "Retail",
    icon: industryIcons[3],
    text: "PCI-aware protection for payment systems, customer data, loyalty platforms, e-commerce operations, and fraud risk.",
  },
  {
    title: "Healthcare",
    icon: industryIcons[4],
    text: "HIPAA-aligned safeguards for patient data, connected devices, clinical applications, and ransomware resilience.",
  },
  {
    title: "Finance",
    icon: industryIcons[5],
    text: "Security governance for fintech, banking, lending, and insurance teams with demanding audit and uptime expectations.",
  },
];

export const caseStudies = [
  {
    number: "01",
    title: "Ransomware Readiness for a Healthcare Network",
    image: caseImages[0],
    text: "We strengthened endpoint controls, rebuilt backup validation, and ran tabletop exercises so clinical operations could continue under pressure.",
  },
  {
    number: "02",
    title: "Reducing Fraud Exposure for an Online Retailer",
    image: caseImages[1],
    text: "A layered identity review, payment security hardening, and phishing-resistant workflows helped cut account takeover and payment abuse.",
  },
  {
    number: "03",
    title: "Cloud Control Maturity for a Financial Platform",
    image: caseImages[2],
    text: "We mapped cloud risks to business services, remediated IAM gaps, improved logging, and prepared evidence for regulatory review.",
  },
  {
    number: "04",
    title: "Data Protection for a Multi-Office Law Firm",
    image: caseImages[3],
    text: "Access governance, secure document handling, and incident playbooks reduced client-data exposure without slowing matter teams.",
  },
  {
    number: "05",
    title: "Third-Party Risk Program for a SaaS Company",
    image: caseImages[4],
    text: "We built vendor tiers, assessment templates, and executive reporting so procurement could move faster with less hidden risk.",
  },
  {
    number: "06",
    title: "SOC Optimization for a Global Services Team",
    image: caseImages[5],
    text: "Detection tuning, alert enrichment, and response runbooks helped analysts focus on true risk instead of noisy queues.",
  },
];

export const blogPosts = [
  {
    title: "Continuous Exposure Management: Moving Beyond Annual Testing",
    category: "Threat Intelligence",
    image: blogImages[0],
    excerpt:
      "Attack surfaces change every week. Learn how exposure management brings assets, vulnerabilities, identities, and business context into one operating rhythm.",
  },
  {
    title: "Cloud Security in 2026: Identity Is the New Perimeter",
    category: "Cloud Security",
    image: blogImages[1],
    excerpt:
      "Misconfigured identities create more cloud risk than open ports. Here is how teams can govern access, workloads, secrets, and logs across multi-cloud estates.",
  },
  {
    title: "Ransomware Readiness: What Enterprises Need Before an Incident",
    category: "Incident Response",
    image: blogImages[2],
    excerpt:
      "Backups are only one layer. Resilient organizations test decision paths, containment authority, communications, and restoration priorities before the first alert.",
  },
  {
    title: "Building a Practical Cybersecurity Baseline for Growing Businesses",
    category: "Security Operations",
    image: blogImages[3],
    excerpt:
      "A strong baseline does not need to be overwhelming. Start with asset visibility, MFA, logging, endpoint hygiene, vendor review, and response ownership.",
  },
  {
    title: "Phishing Attacks: New Tactics and How Teams Stay Ready",
    category: "Human Risk",
    image: blogImages[4],
    excerpt:
      "Modern phishing blends AI-written lures, trusted platforms, and MFA fatigue. Awareness works best when paired with resilient identity controls.",
  },
  {
    title: "AI Security Governance for Models, Data, and Workflows",
    category: "AI Security",
    image: blogImages[9],
    excerpt:
      "As AI moves into production, security teams need policies for data handling, prompt abuse, model access, vendor review, and audit-ready oversight.",
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Discover Exposure",
    image: processImages[0],
    text: "We map critical assets, user journeys, cloud services, vendors, controls, and known gaps to understand where risk can become business impact.",
  },
  {
    number: "02",
    title: "Prioritize What Matters",
    image: processImages[1],
    text: "Findings are ranked by exploitability, data sensitivity, control maturity, and operational urgency so teams can fix the right issues first.",
  },
  {
    number: "03",
    title: "Strengthen and Monitor",
    image: processImages[2],
    text: "We improve prevention, logging, detection logic, identity controls, and cloud posture while keeping analysts focused on high-confidence signals.",
  },
  {
    number: "04",
    title: "Respond and Improve",
    image: processImages[3],
    text: "Every engagement ends with executive reporting, remediation support, retesting, and lessons learned that raise resilience over time.",
  },
];

export const trainings = [
  {
    title: "Ethical Hacking & Penetration Testing",
    image: trainingImages[0],
    duration: "4 Weeks",
    certified: "Yes",
    date: "Quarterly cohorts",
    text: "Hands-on training for security teams covering recon, exploitation, reporting, remediation validation, and safe testing methodology.",
  },
  {
    title: "Executive Cyber Risk Workshop",
    image: trainingImages[1],
    duration: "1 Day",
    certified: "Certificate",
    date: "Monthly",
    text: "A focused leadership session on ransomware decisions, regulatory pressure, cyber insurance, board reporting, and risk ownership.",
  },
  {
    title: "Incident Response Tabletop Program",
    image: trainingImages[2],
    duration: "3 Days",
    certified: "Yes",
    date: "On demand",
    text: "Scenario-based exercises that test escalation, containment, communications, legal coordination, and recovery under realistic pressure.",
  },
];

export const teamMembers = [
  {
    name: "Ethan Caldwell",
    image: teamImages[0],
    role: "CISO & Risk Advisory Lead",
  },
  {
    name: "Sophia Lane",
    image: teamImages[1],
    role: "Cloud Security Architect",
  },
  {
    name: "Ryan Mercer",
    image: teamImages[2],
    role: "Threat Intelligence Lead",
  },
  {
    name: "Emma Sinclair",
    image: teamImages[3],
    role: "Incident Response Commander",
  },
  {
    name: "Nathan Steele",
    image: teamImages[4],
    role: "Zero Trust Network Architect",
  },
];

export const pricingPlans = [
  {
    name: "Risk Baseline",
    price: "$2.5k",
    period: "/mo",
    text: "Essential governance, assessment, and reporting for teams formalizing their security program.",
    features: [
      "External exposure review",
      "Policy and control gap check",
      "Monthly risk report",
      "Business hours advisory",
    ],
  },
  {
    name: "Managed Defense",
    price: "$7.5k",
    period: "/mo",
    text: "Continuous monitoring, cloud posture, and response support for growing security operations.",
    features: [
      "24/7 alert triage",
      "Endpoint and identity tuning",
      "Cloud posture monitoring",
      "Priority incident support",
    ],
  },
  {
    name: "Enterprise Resilience",
    price: "Custom",
    period: "",
    text: "A tailored security partnership for complex environments, compliance pressure, and board-level reporting.",
    features: [
      "Dedicated security advisor",
      "Incident response retainer",
      "Compliance roadmap",
      "Executive risk briefings",
    ],
  },
];

export const testimonials = [
  {
    quote:
      "Aadhwan Fortress gave us a clear view of risk across cloud, vendors, and endpoints. The recommendations were practical enough for engineering and clear enough for the board.",
    company: "ThunderCipher",
    name: "Anoop Yadav",
    title: "CEO",
  },
  {
    quote:
      "Their tabletop program exposed decision gaps we had never tested. Within weeks, our leadership team had a response plan we trusted.",
    company: "Blue Rose Cotspin LLP",
    name: "Sawant Singh",
    title: "General Manager",
  },
];
