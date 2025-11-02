import Link from "next/link";

export function Navbar() {
  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/join", label: "Join" },
    { href: "/contact", label: "Contact" },
  ];
  return (
    <nav className="flex justify-between items-center py-4 px-6 shadow">
      <Link href="/" className="text-2xl font-bold">Codrix</Link>
      <div className="flex gap-6">
        {links.map((l) => (
          <Link key={l.href} href={l.href} className="hover:text-blue-600 transition">
            {l.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
