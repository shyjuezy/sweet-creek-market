// navLinks.ts
export interface NavLink {
    href: string;
    label: string;
}

export const navLinks: NavLink[] = [
    { href: "/about", label: "About Us" },
    { href: "/menus", label: "Menus" },
    { href: "/cafe", label: "Cafe" },
    { href: "#", label: "Catering" },
    { href: "/#contact-info", label: "Contact Us" },
    { href: "#", label: "Careers" },
];
