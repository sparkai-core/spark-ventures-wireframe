// Static data for the Spark Ventures landing page
// All content sourced from the wireframes (HTML specs)

export const HERO_STATS = [
  { label: "AI Products", value: "15+" },
  { label: "Countries", value: "04" },
  { label: "Launch Window", value: "30d" },
  { label: "Founder Equity", value: "100%" },
];

export const TRUST_LAYER_STATS = [
  { value: "15+", label: "15+ products ready now" },
  { value: "30d", label: "30-day launch window" },
  { value: "04", label: "4 active geographies" },
  { value: "∞", label: "Shared dev team" },
  { value: "24/7", label: "24/7 ops backbone" },
  { value: "MRR", label: "Recurring revenue from day one" },
];

export const TRADITIONAL_PATH = [
  { step: "01", label: "Find a dev team" },
  { step: "02", label: "Build for 12 months" },
  { step: "03", label: "Raise money" },
  { step: "04", label: "Find customers" },
  { step: "05", label: "Run out of runway" },
];

export const SPARK_PATH = [
  { step: "01", label: "Pick your product" },
  { step: "02", label: "Get the full stack" },
  { step: "03", label: "Start selling in week one" },
  { step: "04", label: "First revenue by day 30" },
];

export const STACK = [
  {
    tag: "PROD",
    accent: "blue",
    index: "01 / 04",
    title: "Product Infrastructure",
    body: "Working software, live hosting, ongoing maintenance. You never touch a server.",
    items: [
      "White-label AI software",
      "Live hosting & uptime",
      "Ongoing maintenance",
      "Roadmap & feature dev",
      "Technical support",
    ],
  },
  {
    tag: "GTM",
    accent: "emerald",
    index: "02 / 04",
    title: "GTM Infrastructure",
    body: "A sales system that has already generated paying customers in your vertical. Scripts, sequences, pipeline — all built.",
    items: [
      "Sales playbooks",
      "ICP & targeting",
      "Lead generation",
      "Outbound sequences",
      "Pipeline & CRM",
    ],
  },
  {
    tag: "OPS",
    accent: "gold",
    index: "03 / 04",
    title: "Shared Operations",
    body: "The back-office nobody wants to build. Billing, support flows, legal templates, onboarding sequences.",
    items: [
      "Billing & invoicing",
      "Customer support flows",
      "Legal templates",
      "Onboarding sequences",
      "Back-office ops",
    ],
  },
  {
    tag: "GROW",
    accent: "blue",
    index: "04 / 04",
    title: "Venture Growth",
    body: "Weekly calls, investor readiness, and a network of founders who've done exactly what you're starting.",
    items: [
      "Weekly strategy calls",
      "Founder coaching",
      "Investor readiness",
      "Partnership intros",
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
  { id: "SC-01", category: "Sales", name: "AI Sales Copilot", status: "Available" as ProductStatus, accent: "emerald" as ProductAccent, description: "Lead orchestration and automated outreach engine.", benefit: "Most outbound teams spend half their day on tasks that don't need a human. This routes leads, writes sequences, and books meetings. You show up for the calls.", market: "$12B TAM", launch: "14 days", model: "B2B SaaS" },
  { id: "CA-02", category: "Sales", name: "AI Calling Agent", status: "Scaling" as ProductStatus, accent: "blue" as ProductAccent, description: "Outbound voice AI with CRM-grade analytics.", benefit: "Calls that sound human, log themselves, and book follow-ups — your reps only talk to qualified leads.", market: "$4.2B", launch: "21 days", model: "Usage-Based" },
  { id: "MK-03", category: "Marketing", name: "AI Marketing OS", status: "Available" as ProductStatus, accent: "emerald" as ProductAccent, description: "End-to-end campaign planning, content and attribution.", benefit: "Plan, write, and attribute campaigns in one place. The team stops juggling six tools and starts shipping campaigns.", market: "$18B", launch: "30 days", model: "B2B SaaS" },
  { id: "RC-04", category: "HR", name: "AI Recruiter", status: "Available" as ProductStatus, accent: "emerald" as ProductAccent, description: "Automated sourcing, screening and outbound at scale.", benefit: "Source, screen, and reach out to candidates without burning recruiter hours. Your team interviews the top of the funnel, not the long tail.", market: "$8B", launch: "21 days", model: "Per-Seat" },
  { id: "HR-05", category: "HR", name: "AI HR Platform", status: "Available" as ProductStatus, accent: "emerald" as ProductAccent, description: "Modern HRIS with AI workflows for SMB & mid-market.", benefit: "HR teams spend less time on paperwork and more time on people. Onboarding, PTO, reviews — all automated.", market: "$22B", launch: "30 days", model: "B2B SaaS" },
  { id: "PR-06", category: "Operations", name: "AI Procurement OS", status: "Enterprise" as ProductStatus, accent: "gold" as ProductAccent, description: "Vendor negotiation and supply-chain risk detection.", benefit: "Procurement teams catch supplier risk earlier and negotiate better terms without spreadsheet sprawl.", market: "$9B", launch: "30 days", model: "Enterprise" },
  { id: "CN-07", category: "Industrial", name: "Construction OS", status: "Enterprise" as ProductStatus, accent: "gold" as ProductAccent, description: "Field workflows, RFIs and project AI for builders.", benefit: "Project managers spend less time chasing paperwork and more time on the build.", market: "$14B", launch: "45 days", model: "Enterprise" },
  { id: "LG-08", category: "Industrial", name: "Logistics OS", status: "Enterprise" as ProductStatus, accent: "gold" as ProductAccent, description: "Route optimization and freight auditing.", benefit: "Routes get shorter, freight bills get cleaner, dispatchers get hours back every week.", market: "$38B", launch: "45 days", model: "Usage-Based" },
  { id: "CS-09", category: "Customer Ops", name: "AI Support Suite", status: "Available" as ProductStatus, accent: "emerald" as ProductAccent, description: "Tier-1 deflection with human escalation pipeline.", benefit: "Deflect the repetitive tickets before they hit a human. Support team focuses on the conversations that actually need them.", market: "$11B", launch: "21 days", model: "B2B SaaS" },
  { id: "IN-10", category: "Industrial", name: "AI Inspection Platform", status: "Enterprise" as ProductStatus, accent: "gold" as ProductAccent, description: "Computer-vision QA for industrial workflows.", benefit: "QA teams catch defects earlier without adding headcount on the line.", market: "$6B", launch: "45 days", model: "Enterprise" },
  { id: "AR-11", category: "Industrial", name: "AI Asset Reliability", status: "Scaling" as ProductStatus, accent: "blue" as ProductAccent, description: "Predictive maintenance for heavy equipment.", benefit: "Maintenance teams get warned before equipment fails. Downtime stops being the default.", market: "$5B", launch: "45 days", model: "Enterprise" },
  { id: "FS-12", category: "Field Service", name: "AI Field Service Copilot", status: "Available" as ProductStatus, accent: "emerald" as ProductAccent, description: "Tech dispatch, parts intelligence and SLA tracking.", benefit: "Dispatchers stop playing phone tag. Techs show up with the right parts. SLAs stop slipping.", market: "$7B", launch: "30 days", model: "B2B SaaS" },
  { id: "CT-13", category: "Marketing", name: "AI Content Studio", status: "Available" as ProductStatus, accent: "emerald" as ProductAccent, description: "Brand-aware content engine across formats.", benefit: "Content teams stop staring at blank docs. On-brand drafts ship in minutes, not days.", market: "$10B", launch: "14 days", model: "B2B SaaS" },
  { id: "SE-14", category: "Marketing", name: "AI SEO Platform", status: "Available" as ProductStatus, accent: "emerald" as ProductAccent, description: "Programmatic SEO with topical authority graphs.", benefit: "SEO teams build topical authority without writing 200 briefs by hand.", market: "$8B", launch: "21 days", model: "B2B SaaS" },
  { id: "VF-15", category: "Marketing", name: "AI Video Funnel", status: "Scaling" as ProductStatus, accent: "blue" as ProductAccent, description: "Personalized video at scale for inbound funnels.", benefit: "Every lead gets a personalized video. Reply rates jump. SDRs stop doing intros.", market: "$5B", launch: "21 days", model: "Usage-Based" },
];

export const PARTNERSHIPS = [
  {
    tag: "LIC-01",
    title: "Launch License",
    subtitle: "Full independence",
    price: "$15K-50K",
    priceSub: "+ $500-3K/mo",
    body: "You license the product. You run everything. You keep 100%. We collect a monthly fee and stay out of your way.",
    button: "Select License",
    variant: "outline",
  },
  {
    tag: "VP-02",
    title: "Venture Partner",
    subtitle: "Co-build",
    price: "$10K-25K",
    priceSub: "+ 10-20% equity",
    body: "We take equity and get more involved. Deeper strategy, shared upside, direct access to the founding team. For founders who want a real partner, not just a supplier.",
    button: "Apply for Partnership",
    variant: "primary",
    recommended: true,
  },
];

export const PERSONAS = [
  { id: "P-01", symbol: "◆", title: "The Consultant", body: "You bill by the hour and the ceiling is real. This is how you turn expertise into recurring revenue." },
  { id: "P-02", symbol: "▲", title: "The Corporate Exec", body: "You've led teams and owned outcomes. Now you want to own the company, not the title." },
  { id: "P-03", symbol: "●", title: "The Agency Owner", body: "Services revenue is great until it's not. Add a SaaS line that runs without your hours." },
  { id: "P-04", symbol: "◇", title: "The Domain Expert", body: "You know an industry better than most software people ever will. That knowledge is the product." },
  { id: "P-05", symbol: "△", title: "The Operator", body: "You've run things. You can sell things. The build phase was always the bottleneck — we removed it." },
  { id: "P-06", symbol: "○", title: "The Tech Pro", body: "You could build it yourself. The question is whether building it yourself is the best use of two years." },
  { id: "P-07", symbol: "◼", title: "The SaaS Founder", body: "You've done this before. You know the second product is the one that scales — and you want leverage." },
  { id: "P-08", symbol: "✦", title: "The Sales Leader", body: "You've closed at every level. Pair that with product and infra, and you have a real company on your hands." },
];

export const SEQUENCE = [
  { step: "01", title: "Strategy call", body: "Product and market decision — we figure out which AI product matches your domain in 90 minutes." },
  { step: "02", title: "Product selection", body: "Pick your vertical. You sign the agreement and the product is yours to operate." },
  { step: "03", title: "Brand + legal", body: "Entity, brand, accounts — all set up. Banking, legal templates, the boring stack that takes weeks." },
  { step: "04", title: "Technical handoff", body: "You get the keys. Hosting, admin, support flows, CRM — wired and tested before you touch it." },
  { step: "05", title: "First outbound", body: "Sales system goes live. Scripts, sequences, pipeline — already proven in your vertical." },
  { step: "06", title: "First conversations", body: "You're in market. By day 30, real customers are taking real calls with you." },
];

export const CASE_STUDIES = [
  { id: "CS-01", industry: "Compliance", name: "Compliance AI", revenue: "$48K MRR", timeline: "28 days", body: "Built for HR compliance teams. Live in 28 days.", quote: "I had 18 years of regulatory ops in my head. Now it's a product." },
  { id: "CS-02", industry: "Recruiting", name: "AI Recruiter", revenue: "$72K MRR", timeline: "First quarter", body: "Three enterprise accounts in the first quarter.", quote: "We had a book of clients. We needed software to scale them." },
  { id: "CS-03", industry: "Marketing", name: "Marketing OS", revenue: "$110K MRR", timeline: "Year one", body: "Found its market in SMB. Now the category leader.", quote: "Services was working. SaaS was the unlock." },
  { id: "CS-04", industry: "Construction", name: "Construction OS", revenue: "$36K MRR", timeline: "Regional rollout", body: "US regional rollout, expanding nationally.", quote: "Spreadsheets were holding back the whole industry." },
];

export const NETWORK_NODES = [
  { label: "Founders", color: "gold", x: 94, y: 50 },
  { label: "Operators", color: "emerald", x: 77.7, y: 84.2 },
  { label: "Customers", color: "blue", x: 40.9, y: 93.0 },
  { label: "Investors", color: "gold", x: 10.8, y: 70.0 },
  { label: "Partners", color: "emerald", x: 9.8, y: 32.1 },
  { label: "Dev Team", color: "blue", x: 38.6, y: 7.5 },
  { label: "Community", color: "gold", x: 75.9, y: 14.4 },
];

export const FAQ_ITEMS = [
  { q: "What does Spark own?", a: "Launch License: nothing. We take a monthly fee. Venture Partner: equity, in exchange for deeper involvement from our team." },
  { q: "How is this different from a franchise?", a: "A franchise gives you a territory. This gives you a company — software, customers, and equity you can eventually sell." },
  { q: "What happens after 30 days?", a: "You're in market. Monthly support continues. Strategy calls, network access, and a team that cares whether you're growing." },
  { q: "What can I realistically earn?", a: "Our portfolio average is $60K MRR at six months. Some go faster, some take longer. That's the honest number." },
];

// Featured Products Preview (3 cards on landing page)
export const FEATURED_PRODUCTS = ["SC-01", "MK-03", "RC-04"] as const;
