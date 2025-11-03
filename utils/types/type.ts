import { LucideIcon } from "lucide-react";

export interface ProductItem {
  id: string;
  name: string;
  description: string;
  image: string;
  timestamp: string;
details: string;
}

export interface Shortcut {
  id: string;
  title: string;
  icon: LucideIcon;
  description: string;
}