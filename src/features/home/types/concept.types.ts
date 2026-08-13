import { LucideIcon } from "lucide-react";

export type ConceptDifficulty = 'basic' | 'intermediate' | 'advanced';

export interface ConceptSubItem {
  id: string;
  title: string;
  description: string;
  codeSnippet?: string;
}

export interface ConceptItem {
  id: string;
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
  level: ConceptDifficulty;
  subItems?: ConceptSubItem[];
}

export interface ConceptLevel {
  id: ConceptDifficulty;
  slug: string;
  title: string;
  icon: LucideIcon;
  description: string;
  items: ConceptItem[];
}