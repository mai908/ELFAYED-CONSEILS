"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../LanguageProvider";

export default function SiteHeader() {
  const { setLang, ar } = useLanguage();

  const links = [
    { href: "/", fr: "Accueil", ar: "الرئيسية" },
    { href: "/about", fr: "À propos", ar: "من نحن" },
    { href: "/services", fr: "Services", ar: "خدماتنا" },
    { href: "/academy", fr: "Academy", ar: "الأكاديمية" },
    { href: "/contact", fr: "Contact", ar: "تواصل معنا" },
  ];

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link href="/" className="site-brand" aria-label="EL FAYED CONSEILS — Accueil">
          <Image
            src="/logo-fayed.jpeg"
            alt="EL FAYED CONSEILS"
            width={58}
            height={58}
            className="site-brand__logo"
          />
          <span className="site-brand__wordmark">EL FAYED CONSEILS</span>
        </Link>

        <nav
          aria-label={ar ? "التنقل الرئيسي" : "Navigation principale"}
          dir={ar ? "rtl" : "ltr"}
          className="site-nav"
        >
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="site-nav__link">
              {ar ? link.ar : link.fr}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setLang(ar ? "fr" : "ar")}
          aria-label={ar ? "Passer au français" : "Switch to Arabic"}
          className="language-toggle"
        >
          <span className="language-toggle__icon" aria-hidden="true">↗</span>
          <span>{ar ? "FR" : "عربي"}</span>
        </button>
      </div>
    </header>
  );
}
