// nav-links.ts
export interface NavLink {
  href: string;
  label: string;
}

export const navLinks: NavLink[] = [
  { href: "/about", label: "About Us" },
  { href: "/menu", label: "Menu" },
  { href: "/cafe", label: "Coffee" },
  { href: "/catering", label: "Catering" },
  { href: "/#contact-info", label: "Contact Us" },
  { href: "/career", label: "Careers" },
];
