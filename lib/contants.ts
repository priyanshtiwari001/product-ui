import { BarChart3, Target, Zap } from "lucide-react";

export const ALGORITHM = "aes-256-gcm";
export const PASSWORD = process.env.ENCRYPTION_KEY!;
export const SHORTCUTS = [
  {
    id: "insights",
    title: "Insights",
    icon: BarChart3,
    description: "Deep analytics and performance metrics",
  },
  {
    id: "activations",
    title: "Activations",
    icon: Target,
    description: "Campaign and feature activation tracking",
  },
  {
    id: "conversion",
    title: "Paths to Conversion",
    icon: Zap,
    description: "User journey and conversion funnel analysis",
  },
]

