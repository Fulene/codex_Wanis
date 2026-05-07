import Link from "next/link";

import { brand } from "@/config/landing";

export function FooterSection() {
  return (
    <footer className="border-t border-white/10 px-5 py-10 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 text-sm text-white/52 md:grid-cols-[1fr_auto_auto]">
        <div>
          <p className="font-black uppercase tracking-[0.22em] text-white">{brand.name}</p>
          <p className="mt-3 max-w-md leading-6">
            Formation de développement personnel pour clarifier ta vision,
            renforcer ta discipline et passer à l’action.
          </p>
        </div>
        <div>
          <p className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-white">
            Contact
          </p>
          <p>{brand.email}</p>
          <p className="mt-1">{brand.phone}</p>
          <p className="mt-1">{brand.city}</p>
        </div>
        <div>
          <p className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-white">
            Réseaux
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {brand.socials.map((social) => (
              <Link key={social.label} href={social.href} className="hover:text-white">
                {social.label}
              </Link>
            ))}
          </div>
          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
            {brand.legal.map((item) => (
              <Link key={item.label} href={item.href} className="hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
