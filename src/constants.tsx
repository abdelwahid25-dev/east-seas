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
    // Image: Port Cranes & Containers (Matches Import/Export Clearance)
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop",
    icon: ClipboardCheck
  },
  {
    id: "freight",
    titleKey: "services.freight.title",
    descKey: "services.freight.desc",
    featuresKey: "services.freight.features",
    // Image: Large Cargo Ship at Sea (Matches Global Freight)
    image: "https://images.unsplash.com/photo-1494412651409-ae5d0d486297?q=80&w=2070&auto=format&fit=crop",
    icon: Ship
  },
  {
    id: "transport",
    titleKey: "services.transport.title",
    descKey: "services.transport.desc",
    featuresKey: "services.transport.features",
    // Image: Modern Truck on Highway (Matches Land Transport Fleet)
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070&auto=format&fit=crop",
    icon: Truck
  },
  {
    id: "storage",
    titleKey: "services.storage.title",
    descKey: "services.storage.desc",
    featuresKey: "services.storage.features",
    // Image: Stacked Containers in Yard (Matches Open Storage)
    image: "https://images.unsplash.com/photo-1586528116493-a029325540fa?q=80&w=2070&auto=format&fit=crop",
    icon: Warehouse
  },
  {
    id: "consulting",
    titleKey: "services.consulting.title",
    descKey: "services.consulting.desc",
    featuresKey: "services.consulting.features",
    // Image: Data Analytics/Charts (Matches Supply Chain Optimization/Six Sigma)
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    icon: TrendingUp
  },
  {
    id: "onsite",
    titleKey: "services.onsite.title",
    descKey: "services.onsite.desc",
    featuresKey: "services.onsite.features",
    // Image: Worker with Clipboard (Matches On-Site Logistics Staff)
    image: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?q=80&w=1974&auto=format&fit=crop",
    icon: Users
  }
];