import { 
  Ship, 
  Truck, 
  Globe, 
  ClipboardCheck, 
  Warehouse, 
  TrendingUp,
  ShieldCheck,
  Award,
  Users
} from 'lucide-react';
import { CoreValue, NavItem, ServiceDetail } from './types';

export const NAV_ITEMS: NavItem[] = [
  { labelKey: 'nav.home', href: '#home' },
  { labelKey: 'nav.about', href: '#about' },
  { labelKey: 'nav.services', href: '#services' },
  { labelKey: 'nav.logistics', href: '#logistics' },
  { labelKey: 'nav.contact', href: '#contact' },
];

export const CORE_VALUES: CoreValue[] = [
  {
    titleKey: "about.values.values_title",
    descKey: "about.values.values_desc",
    icon: ShieldCheck
  },
  {
    titleKey: "about.values.vision_title",
    descKey: "about.values.vision_desc",
    icon: Globe
  },
  {
    titleKey: "about.values.mission_title",
    descKey: "about.values.mission_desc",
    icon: Award
  }
];

export const SERVICES_LIST: ServiceDetail[] = [
  {
    id: "customs",
    titleKey: "services.customs.title",
    descKey: "services.customs.desc",
    featuresKey: "services.customs.features",
    image: "images/customs.jpg",
    icon: ClipboardCheck
  },
  {
    id: "freight",
    titleKey: "services.freight.title",
    descKey: "services.freight.desc",
    featuresKey: "services.freight.features",
    image: "images/freight.jpg",
    icon: Ship
  },
  {
    id: "transport",
    titleKey: "services.transport.title",
    descKey: "services.transport.desc",
    featuresKey: "services.transport.features",
    image: "images/transport.jpg",
    icon: Truck
  },
  {
    id: "storage",
    titleKey: "services.storage.title",
    descKey: "services.storage.desc",
    featuresKey: "services.storage.features",
    image: "images/storage.jpg",
    icon: Warehouse
  },
  {
    id: "consulting",
    titleKey: "services.consulting.title",
    descKey: "services.consulting.desc",
    featuresKey: "services.consulting.features",
    image: "images/consulting.jpg",
    icon: TrendingUp
  },
  {
    id: "onsite",
    titleKey: "services.onsite.title",
    descKey: "services.onsite.desc",
    featuresKey: "services.onsite.features",
    image: "images/onsite.jpg",
    icon: Users
  }
];
