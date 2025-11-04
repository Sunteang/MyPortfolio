import { Code, Shield, Search, Smartphone } from "lucide-react";
import type { LucideProps } from "lucide-react";

// Define allowed icon names
export type IconName = "Code" | "Search" | "Shield" | "Smartphone";

// Map icon names to actual components
const iconsMap: Record<IconName, React.FC<LucideProps>> = {
  Code,
  Search,
  Shield,
  Smartphone,
};

export function ServiceIcon({ name }: { name: IconName }) {
  const IconComponent = iconsMap[name];
  return <IconComponent className="w-10 h-10" />;
}
