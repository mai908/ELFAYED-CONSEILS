"use client";

import Link from "next/link";
import { useLanguage } from "../LanguageProvider";

export default function SiteFooter() {
  const { ar } = useLanguage();

  return (
    <footer id="contact" className="site-footer">
      <div className="site-footer__glow" aria-hidden="true" />
      <div className="site-footer__top">
        <div>
          <p className="editorial-eyebrow site-footer__eyebrow">
            {ar ? "استشارات · استراتيجية · تدريب" : "Conseil · Stratégie · Formation"}
          </p>
          <h2 className="display-font site-footer__title">
            {ar ? (
              <>لنبنِ معًا <em>نجاحكم القادم.</em></>
            ) : (
              <>Construisons <em>votre prochain succès.</em></>
            )}
          </h2>
        </div>
        <Link href="/contact" className="button button--gold footer-cta">
          {ar ? "تحدثوا معنا عن مشروعكم" : "Parlons de votre projet"}
          <span aria-hidden="true">↗</span>
        </Link>
      </div>

      <div className="site-footer__rule" />

      <div className="site-footer__bottom">
        <div>
          <p className="site-footer__wordmark">EL FAYED CONSEILS &amp; ACADEMY</p>
        </div>
        <a href="mailto:contact@elfayedconseils.fr" className="site-footer__contact">
          contact@elfayedconseils.fr
        </a>
        <a
          href="https://www.elfayedconseils.fr"
          className="site-footer__contact"
          target="_blank"
          rel="noreferrer"
        >
          www.elfayedconseils.fr
        </a>
        <span className="site-footer__signature">
          {ar ? "باريس · فرنسا" : "Paris · France"}
        </span>
      </div>
    </footer>
  );
}
