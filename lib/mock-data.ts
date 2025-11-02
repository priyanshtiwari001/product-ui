import { ProductItem } from "@/utils/types/type";

export const Products: ProductItem[] = [
  {
    id: "1",
    name: "Enterprise Cloud Storage",
    description:
      "Secure cloud storage with 99.99% uptime SLA. 100TB storage, API access, 24/7 support, Advanced encryption.",
    image: "/enterprise-cloud-server.jpg",
    timestamp: "2025-10-31T10:30:00Z",
    details: "Root access credentials stored with SHA-512 verification.", 
  },
  {
    id: "2",
    name: "Business Analytics Platform",
    description:
      "Real-time data visualization and reporting tools. Custom dashboards, ML-powered insights, Integration with 500+ apps.",
    image: "/business-analytics-dashboard.jpg",
    timestamp: "2025-10-30T14:15:00Z",
    details: "Internal model training data contains PII from users.",
  },
  {
    id: "3",
    name: "HR Management Suite",
    description:
      "Complete HR solution for workforce management. Payroll, Recruitment, Performance tracking, Compliance tools.",
    image: "/hr-management-interface.jpg",
    timestamp: "2025-10-29T09:45:00Z",
    details: "Employee SSNs encrypted using AES-256 at rest.",
  },
  {
    id: "4",
    name: "Cybersecurity Protection",
    description:
      "Advanced threat detection and prevention system. 24/7 monitoring, Incident response, Compliance reporting, Penetration testing.",
    image: "/cybersecurity-protection.jpg",
    timestamp: "2025-10-28T16:20:00Z",
    details: "Threat reports include IPs and vulnerability fingerprints.",
  },
  {
    id: "5",
    name: "CRM Platform",
    description:
      "Manage customer relationships and sales pipeline. Lead scoring, Automation, Email integration, Mobile app.",
    image: "/crm-sales-platform.jpg",
    timestamp: "2025-10-27T11:00:00Z",
    details: "Customer interaction logs contain sensitive emails",
  },
  {
    id: "6",
    name: "Financial Automation",
    description:
      "Automated accounting and financial reporting. Invoice automation, Expense tracking, Multi-currency support, Tax compliance.",
    image: "/financial-accounting-software.jpg",
    timestamp: "2025-10-26T13:30:00Z",
    details: "Contains encrypted bank account tokens.", 
  },
];

