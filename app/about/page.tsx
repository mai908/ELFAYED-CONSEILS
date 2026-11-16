"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../LanguageProvider";

export default function AboutPage() {
  const { lang, ar } = useLanguage();

  const t = {
    fr: {
      eyebrow: "EL FAYED CONSEILS · PARIS",
      title: "Votre ambition mérite une vision.",
      subtitle: "Bien plus qu'un accompagnement. Un partenaire pour votre réussite.",
      introTitle: "Qui sommes-nous ?",
      intro:
        "EL FAYED CONSEILS accompagne les entrepreneurs, les indépendants et les organisations dans leur développement. Nous réunissons conseil, organisation, communication et formation pour transformer les ambitions en actions concrètes.",
      mission: "Notre mission",
      missionText:
        "Vous aider à prendre des décisions éclairées, structurer vos projets et développer votre activité avec confiance.",
      vision: "Notre vision",
      visionText:
        "Rendre les compétences stratégiques et les outils professionnels accessibles aux personnes qui souhaitent évoluer.",
      values: "Notre approche",
      valuesText:
        "Écoute, clarté, créativité et solutions adaptées à chaque projet.",
      expertise: "Nos domaines d'expertise",
      items: [
        "Accompagnement administratif et gestion",
        "Conseil et développement d'activité",
        "Marketing digital et communication",
        "Formation et développement des compétences",
      ],
      cta: "Découvrez notre Academy",
      contact: "Parlons de votre projet",
      imageAlt: "Façades contemporaines aux lignes courbes, vues vers le ciel.",
      imageCaption: "Ouvrir de nouvelles perspectives",
      storyLabel: "Notre regard",
    },
    ar: {
      eyebrow: "EL FAYED CONSEILS · PARIS",
      title: "طموحكم يستحق رؤية مختلفة.",
      subtitle: "أكثر من مجرد استشارات، شريك حقيقي في طريق نجاحكم.",
      introTitle: "من نحن؟",
      intro:
        "ترافق EL FAYED CONSEILS رواد الأعمال وأصحاب المشروعات والمؤسسات في تطوير أعمالهم. ونجمع بين الاستشارات والتنظيم والتواصل والتدريب لتحويل الطموحات إلى خطوات عملية.",
      mission: "رسالتنا",
      missionText:
        "مساعدتكم على اتخاذ قرارات مدروسة، وتنظيم مشروعاتكم، وتطوير أنشطتكم بثقة.",
      vision: "رؤيتنا",
      visionText:
        "إتاحة المهارات الاستراتيجية والأدوات المهنية لكل من يسعى إلى التطور والنجاح.",
      values: "أسلوب عملنا",
      valuesText:
        "الاستماع الجيد والوضوح والإبداع وتقديم حلول تناسب احتياجات كل مشروع.",
      expertise: "مجالات خبرتنا",
      items: [
        "المساعدة الإدارية وإدارة الأعمال",
        "الاستشارات وتطوير المشروعات",
        "التسويق الرقمي والتواصل",
        "التدريب وتنمية المهارات",
      ],
      cta: "اكتشفوا الأكاديمية",
      contact: "تحدثوا معنا بشأن مشروعكم",
      imageAlt: "واجهات معمارية معاصرة بخطوط منحنية تظهر باتجاه السماء.",
      imageCaption: "آفاق جديدة لمشروعاتكم",
      storyLabel: "رؤيتنا",
    },
  }[lang];

  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-hero__copy">
          <p className="editorial-eyebrow">{t.eyebrow}</p>
          <h1 className="display-font">
            {ar ? (
              <>طموحكم يستحق <em>رؤية مختلفة.</em></>
            ) : (
              <>Votre ambition mérite <em>une vision.</em></>
            )}
          </h1>
          <p className="about-hero__subtitle">{t.subtitle}</p>
          <a href="#histoire" className="text-link">
            {ar ? "اكتشفوا رؤيتنا" : "Découvrir notre regard"}
            <span aria-hidden="true">↓</span>
          </a>
        </div>
        <div className="about-hero__visual photo-hover">
          <Image
            src="/editorial/architecture.jpg"
            alt={t.imageAlt}
            fill
            fetchPriority="high"
            quality={82}
            sizes="(max-width: 760px) 90vw, 48vw"
            className="about-hero__photo"
          />
          <div className="about-hero__image-wash" aria-hidden="true" />
          <div className="about-hero__image-caption glass-panel">
            <span className="signature-mark">EF</span>
            <span>{t.imageCaption}</span>
          </div>
          <span className="about-hero__vertical">VISION · STRATÉGIE · ACTION</span>
        </div>
        <span className="about-hero__number" aria-hidden="true">01</span>
      </section>

      <section id="histoire" className="about-story">
        <div className="about-story__lead">
          <p className="editorial-eyebrow">{t.storyLabel}</p>
          <h2 className="display-font">{t.introTitle}</h2>
        </div>
        <div className="about-story__body">
          <p className="about-story__dropcap">{t.intro}</p>
          <span className="editorial-rule" aria-hidden="true" />
          <p className="about-story__aside">
            {ar
              ? "من الرؤية إلى الفعل، نرافق كل خطوة بخبرة واهتمام."
              : "De la vision à l’action, chaque étape mérite attention et justesse."}
          </p>
        </div>
      </section>

      <section className="about-principles">
        <div className="about-principles__heading">
          <p className="editorial-eyebrow">
            {ar ? "ما يوجّه عملنا" : "Ce qui nous guide"}
          </p>
          <span aria-hidden="true">01 — 03</span>
        </div>
        <div className="principle-grid">
          {[
            [t.mission, t.missionText],
            [t.vision, t.visionText],
            [t.values, t.valuesText],
          ].map(([title, description], index) => (
            <article className="principle-card" key={title}>
              <span className="principle-card__number">0{index + 1}</span>
              <span className="principle-card__ornament" aria-hidden="true" />
              <h3 className="display-font">{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-expertise">
        <div className="about-expertise__intro">
          <p className="editorial-eyebrow">
            {ar ? "خبرات متكاملة" : "Des expertises complémentaires"}
          </p>
          <h2 className="display-font">{t.expertise}</h2>
        </div>
        <div className="expertise-list">
          {t.items.map((item, index) => (
            <div className="expertise-list__item" key={item}>
              <span>0{index + 1}</span>
              <p>{item}</p>
              <span className="expertise-list__arrow" aria-hidden="true">↗</span>
            </div>
          ))}
        </div>
      </section>

      <section className="about-cta">
        <p className="editorial-eyebrow">
          {ar ? "والخطوة التالية لكم" : "Et maintenant, la suite"}
        </p>
        <h2 className="display-font">
          {ar ? "لنبنِ معًا مشروعًا يليق بطموحكم." : "Faisons grandir votre projet."}
        </h2>
        <div className="hero-actions">
          <Link href="/academy" className="button button--primary">
            {t.cta}<span aria-hidden="true">↗</span>
          </Link>
          <a href="mailto:contact@elfayedconseils.fr" className="button button--outline">
            {t.contact}
          </a>
        </div>
      </section>
    </main>
  );
}
