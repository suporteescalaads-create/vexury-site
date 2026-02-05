export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  year: string;
}

export interface NavItem {
  label: string;
  href: string;
}
