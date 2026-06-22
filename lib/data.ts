// Static data for the Spark Ventures landing page
// All content is sourced from the original HTML preview

export const HERO_STATS = [
  { label: "AI Products", value: "15+" },
  { label: "Countries", value: "04" },
  { label: "Launch Window", value: "30d" },
  { label: "Founder Equity", value: "100%" },
];

export const TRUST_LAYER_STATS = [
  { value: "15+", label: "Ready-to-Launch Products" },
  { value: "30d", label: "Average Launch Window" },
  { value: "04", label: "Active Geographies" },
  { value: "∞", label: "Shared Dev Resources" },
  { value: "24/7", label: "Operational Backbone" },
  { value: "MRR", label: "Recurring Revenue Models" },
];

export const TRADITIONAL_PATH = [
  { step: "01", label: "Idea" },
  { step: "02", label: "Hire Developers" },
  { step: "03", label: "Build MVP" },
  { step: "04", label: "Raise Capital" },
  { step: "05", label: "Find Customers" },
  { step: "06", label: "Hope It Works" },
];

export const SPARK_PATH = [
  { step: "01", label: "Choose Product" },
  { step: "02", label: "Launch Brand" },
  { step: "03", label: "Execute GTM" },
  { step: "04", label: "Acquire Customers" },
  { step: "05", label: "Scale Revenue" },
  { step: "06", label: "Compound Equity" },
];

export const STACK = [
  {
    tag: "PROD",
    accent: "blue",
    index: "01 / 04",
    title: "Product Infrastructure",
    items: [
      "White-label AI software",
      "Roadmaps & hosting",
      "Maintenance & uptime",
      "Feature development",
      "Technical support",
    ],
  },
  {
    tag: "GTM",
    accent: "emerald",
    index: "02 / 04",
    title: "GTM Infrastructure",
    items: [
      "Sales playbooks",
      "ICP development",
      "Lead generation systems",
      "Outbound campaigns",
      "AI sales systems",
    ],
  },
  {
    tag: "OPS",
    accent: "gold",
    index: "03 / 04",
    title: "Shared Operations",
    items: [
      "Customer support",
      "Finance & legal templates",
      "Back-office resources",
      "Project management",
      "Operations support",
    ],
  },
  {
    tag: "GROW",
    accent: "blue",
    index: "04 / 04",
    title: "Venture Growth",
    items: [
      "Founder coaching",
      "Weekly strategy calls",
      "Partnership intros",
      "Investor readiness",
      "Expansion planning",
    ],
  },
];

export const MARKETPLACE_FILTERS = [
  "All Systems",
  "Sales",
  "Marketing",
  "Operations",
  "Industrial",
  "HR",
];

export type ProductStatus = "Available" | "Scaling" | "Enterprise";
export type ProductAccent = "emerald" | "blue" | "gold";

export const PRODUCTS = [
  { id: "SC-01", category: "Sales", name: "AI Sales Copilot", status: "Available" as ProductStatus, accent: "emerald" as ProductAccent, description: "Lead orchestration and automated outreach engine.", market: "$12B TAM", launch: "14 days", model: "B2B SaaS" },
  { id: "CA-02", category: "Sales", name: "AI Calling Agent", status: "Scaling" as ProductStatus, accent: "blue" as ProductAccent, description: "Outbound voice AI with CRM-grade analytics.", market: "$4.2B", launch: "21 days", model: "Usage-Based" },
  { id: "MK-03", category: "Marketing", name: "AI Marketing OS", status: "Available" as ProductStatus, accent: "emerald" as ProductAccent, description: "End-to-end campaign planning, content and attribution.", market: "$18B", launch: "30 days", model: "B2B SaaS" },
  { id: "RC-04", category: "HR", name: "AI Recruiter", status: "Available" as ProductStatus, accent: "emerald" as ProductAccent, description: "Automated sourcing, screening and outbound at scale.", market: "$8B", launch: "21 days", model: "Per-Seat" },
  { id: "HR-05", category: "HR", name: "AI HR Platform", status: "Available" as ProductStatus, accent: "emerald" as ProductAccent, description: "Modern HRIS with AI workflows for SMB & mid-market.", market: "$22B", launch: "30 days", model: "B2B SaaS" },
  { id: "PR-06", category: "Operations", name: "AI Procurement OS", status: "Enterprise" as ProductStatus, accent: "gold" as ProductAccent, description: "Vendor negotiation and supply-chain risk detection.", market: "$9B", launch: "30 days", model: "Enterprise" },
  { id: "CN-07", category: "Construction", name: "Construction OS", status: "Enterprise" as ProductStatus, accent: "gold" as ProductAccent, description: "Field workflows, RFIs and project AI for builders.", market: "$14B", launch: "45 days", model: "Enterprise" },
  { id: "LG-08", category: "Logistics", name: "Logistics OS", status: "Enterprise" as ProductStatus, accent: "gold" as ProductAccent, description: "Route optimization and freight auditing.", market: "$38B", launch: "45 days", model: "Usage-Based" },
  { id: "CS-09", category: "Customer Ops", name: "AI Support Suite", status: "Available" as ProductStatus, accent: "emerald" as ProductAccent, description: "Tier-1 deflection with human escalation pipeline.", market: "$11B", launch: "21 days", model: "B2B SaaS" },
  { id: "IN-10", category: "Industrial", name: "AI Inspection Platform", status: "Enterprise" as ProductStatus, accent: "gold" as ProductAccent, description: "Computer-vision QA for industrial workflows.", market: "$6B", launch: "45 days", model: "Enterprise" },
  { id: "AR-11", category: "Industrial", name: "AI Asset Reliability", status: "Scaling" as ProductStatus, accent: "blue" as ProductAccent, description: "Predictive maintenance for heavy equipment.", market: "$5B", launch: "45 days", model: "Enterprise" },
  { id: "FS-12", category: "Field Service", name: "AI Field Service Copilot", status: "Available" as ProductStatus, accent: "emerald" as ProductAccent, description: "Tech dispatch, parts intelligence and SLA tracking.", market: "$7B", launch: "30 days", model: "B2B SaaS" },
  { id: "CT-13", category: "Marketing", name: "AI Content Studio", status: "Available" as ProductStatus, accent: "emerald" as ProductAccent, description: "Brand-aware content engine across formats.", market: "$10B", launch: "14 days", model: "B2B SaaS" },
  { id: "SE-14", category: "Marketing", name: "AI SEO Platform", status: "Available" as ProductStatus, accent: "emerald" as ProductAccent, description: "Programmatic SEO with topical authority graphs.", market: "$8B", launch: "21 days", model: "B2B SaaS" },
  { id: "VF-15", category: "Marketing", name: "AI Video Funnel", status: "Scaling" as ProductStatus, accent: "blue" as ProductAccent, description: "Personalized video at scale for inbound funnels.", market: "$5B", launch: "21 days", model: "Usage-Based" },
];

export const PARTNERSHIPS = [
  {
    tag: "LIC-01",
    title: "Launch License",
    subtitle: "For independent founders",
    price: "$15K–50K",
    priceSub: "+ $500–3K / mo",
    items: [
      "100% Ownership",
      "No Equity Dilution",
      "Full Tech Stack",
      "GTM Playbooks",
      "Self-Directed Launch",
    ],
    button: "Select License",
    variant: "outline",
  },
  {
    tag: "VP-02",
    title: "Venture Partner",
    subtitle: "For industry operators",
    price: "$10K–25K",
    priceSub: "+ 10–20% Equity",
    items: [
      "Shared Success",
      "Strategic Support",
      "Co-Build Roadmap",
      "Investor Network",
      "Quarterly Reviews",
    ],
    button: "Apply for Partnership",
    variant: "primary",
    recommended: true,
  },
  {
    tag: "FIR-03",
    title: "Founder In Residence",
    subtitle: "For exceptional founders",
    price: "Equity-Led",
    priceSub: "Capital Support Available",
    items: [
      "Product Included",
      "Team Included",
      "Infrastructure Included",
      "Capital On Tap",
      "Studio Cohort",
    ],
    button: "Submit Application",
    variant: "outline",
  },
];

export const PERSONAS = [
  { id: "P-01", title: "Corporate Executives", body: "Turn deep industry expertise into a software business with proven AI products." },
  { id: "P-02", title: "Consultants", body: "Productize your knowledge — exit the time-for-money trap with recurring revenue." },
  { id: "P-03", title: "Agency Owners", body: "Add recurring SaaS revenue alongside services, with shared product & ops." },
  { id: "P-04", title: "Industry Specialists", body: "Build vertical software for the niche you already understand best." },
  { id: "P-05", title: "Aspiring Founders", body: "Launch without a technical co-founder or 18-month build cycle." },
];

export const SEQUENCE = [
  { step: "01", title: "Founder Discovery", body: "90-minute deep-dive on your expertise, network and unfair advantages." },
  { step: "02", title: "Product Selection", body: "Match to one of 15+ proven AI products with a clear market fit." },
  { step: "03", title: "Brand Creation", body: "Identity, narrative and positioning built in days, not months." },
  { step: "04", title: "Launch Infrastructure", body: "Stack stood up: product, hosting, support, CRM, analytics, GTM." },
  { step: "05", title: "Customer Acquisition", body: "Outbound, inbound and partnerships activated from day one." },
  { step: "06", title: "Scale and Grow", body: "Ongoing studio support — coaching, capital and expansion." },
];

export const CASE_STUDIES = [
  { id: "CS-01", founder: "Former Banking Executive", name: "AI Compliance Platform", body: "Productized 18 years of regulatory ops into a vertical AI tool for mid-market lenders.", revenue: "$48K MRR", timeline: "5 months" },
  { id: "CS-02", founder: "Recruitment Founder", name: "AI Recruiter SaaS", body: "Layered AI sourcing on top of an existing book of clients. Margins expanded 4×.", revenue: "$72K MRR", timeline: "7 months" },
  { id: "CS-03", founder: "Marketing Agency", name: "AI Marketing OS", body: "Converted a services agency into a hybrid SaaS — recurring revenue overtook services in Q3.", revenue: "$110K MRR", timeline: "9 months" },
  { id: "CS-04", founder: "Construction Consultant", name: "Construction OS", body: "Took a network of GCs from spreadsheets to vertical AI ops in one quarter.", revenue: "$36K MRR", timeline: "6 months" },
];

export const NETWORK_NODES = [
  { label: "Founders", color: "gold", x: 94, y: 50 },
  { label: "Operators", color: "emerald", x: 77.7, y: 84.2 },
  { label: "Customers", color: "blue", x: 40.9, y: 93.0 },
  { label: "Investors", color: "gold", x: 10.8, y: 70.0 },
  { label: "Partners", color: "emerald", x: 9.8, y: 32.1 },
  { label: "Developers", color: "blue", x: 38.6, y: 7.5 },
  { label: "Advisors", color: "gold", x: 75.9, y: 14.4 },
];

export const FAQ_ITEMS = [
  { q: "Who owns the company?", a: "You do. Under the Launch License, you retain 100% equity. Under the Venture Partner model, Spark takes 10–20% equity in exchange for ongoing infrastructure, strategic support and capital readiness." },
  { q: "How is equity structured?", a: "Three models: Launch License (100% founder equity), Venture Partner (10–20% Spark equity), and Founder In Residence (custom equity-led arrangements with capital support)." },
  { q: "What support do I get post-launch?", a: "Weekly founder coaching, partnership introductions, investor readiness, expansion planning and access to the shared Spark studio operations team." },
  { q: "Whose technology powers the products?", a: "Spark Ventures owns and maintains a portfolio of white-label AI products. As a founder, you launch under your own brand with full product roadmaps, hosting and uptime covered." },
  { q: "How does pricing actually work?", a: "Launch License: $15K–50K upfront + $500–3K/mo. Venture Partner: $10K–25K upfront + 10–20% equity. Founder In Residence: equity-led with capital support." },
  { q: "Are exits supported?", a: "Yes. Our venture growth team provides investor readiness, partnership intros and quarterly reviews so founders can pursue acquisition or capital raises on their own terms." },
  { q: "Can I operate internationally?", a: "Absolutely. We currently support founders across 4 geographies with shared legal templates, finance back-office and local partnership networks." },
  { q: "What founders are accepted?", a: "Industry operators, corporate executives, consultants, agency owners and aspiring founders with domain expertise — typically 8+ years in their field." },
];
