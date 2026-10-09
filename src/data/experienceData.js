// Pengalaman kerja, urut dari yang terbaru
const experiences = [
  {
    id: 2,
    company: "Sangfor Technologies Indonesia",
    location: "Jakarta, Indonesia",
    period: "Sep 2025 – Jul 2026",
    // Promosi/rotasi peran di perusahaan yang sama, terbaru di atas
    roles: ["Presales Engineer", "Field Application Engineer"],
    summary:
      "Delivered enterprise network security solutions end to end, from on-site installation and troubleshooting to proof-of-concept testing and technical presentations for customers.",
    achievements: [
      "Installed and configured Sangfor NGFW (NSF), NDR, EDR, and IAG appliances for enterprise customers",
      "Built a 4-appliance NGFW High Availability deployment with BGP dynamic routing",
      "Resolved 30+ customer support tickets covering routing, NAT, VPN, and firewall policy",
      "Led a POC whose recommendation was adopted by the client",
      "Supported 20+ customer-facing activities: demos, technical presentations, and workshops",
    ],
    tech: ["NGFW", "BGP", "High Availability", "VPN", "NDR", "EDR", "IAG", "MoP & Test Plans"],
  },
  {
    id: 1,
    company: "PT Kimia Farma Tbk.",
    location: "Jakarta, Indonesia",
    period: "Jul 2025 – Sep 2025",
    roles: ["Big Data Analyst Intern"],
    summary:
      "Part of the Data Scientist & Master Data Management team (Digital & IT Division). Built a sales-forecasting pipeline to support inventory and supply-chain planning across product segments.",
    achievements: [
      "Extracted and cleaned 5M+ sales transactions (2023–2024) from the company's PostgreSQL databases",
      "Engineered calendar, holiday, lag, and rolling-window features for 17 entity–product segments",
      "Compared ARIMA, Prophet, and XGBoost; tuned XGBoost with GridSearchCV + TimeSeriesSplit",
      "Reached up to 80% forecast accuracy (MAPE 20%) on high-volume segments for Jan–Jun 2025",
      "Recommended a model-selection policy by data volume, plus manual forecasting for sparse segments",
    ],
    tech: ["Python", "PostgreSQL", "Pandas", "XGBoost", "ARIMA", "Prophet", "Scikit-learn"],
  },
];

export default experiences;
