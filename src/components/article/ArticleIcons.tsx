import React from "react";
import {
  Building2,
  Briefcase,
  Car,
  Coffee,
  Globe,
  Network,
} from "lucide-react";

export const IconMap: Record<string, React.ReactNode> = {
  "real-estate": <Building2 size={24} />,
  "logistics-mobility": <Car size={24} />,
  "hospitality-lifestyle": <Coffee size={24} />,
  "business-solutions": <Briefcase size={24} />,
  ecosystem: <Network size={24} />,
};

interface VerticalIconProps {
  id: string;
  size?: number;
}

export const VerticalIcon: React.FC<VerticalIconProps> = ({
  id,
  size = 24,
}) => (
  <div className="article-icon-box">{IconMap[id] || <Globe size={size} />}</div>
);
