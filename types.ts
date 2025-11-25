import { LucideIcon } from 'lucide-react';

export type Language = 'en' | 'ar' | 'ur';
export type Direction = 'ltr' | 'rtl';

export interface NavItem {
  labelKey: string;
  href: string;
}

export interface CoreValue {
  titleKey: string;
  descKey: string;
  icon: LucideIcon;
}

export interface ServiceDetail {
  id: string;
  titleKey: string;
  descKey: string;
  featuresKey: string; // Key to an array of strings in translation
  image: string;
  icon: LucideIcon;
}

export interface StatItem {
  labelKey: string;
  value: string;
}
