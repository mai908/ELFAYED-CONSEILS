"use client";

import Image from "next/image";
import { useLanguage } from "../LanguageProvider";

const serviceVisuals = [
  {
    src: "/editorial/learning-journal.jpg",
    fr: "Carnet de planification ouvert sur un bureau.",
    ar: "مفكرة تخطيط مفتوحة على مكتب.",
  },
  {
    src: "/editorial/finance-notes.jpg",
    fr: "Documents financiers et calculatrice.",
    ar: "مستندات مالية وآلة حاسبة.",
  },
  {
    src: "/editorial/architecture.jpg",
    fr: "Architecture contemporaine aux lignes audacieuses.",
    ar: "هندسة معمارية معاصرة بخطوط جريئة.",
  },
  {
    src: "/editorial/digital-strategy.jpg",
    fr: "Indicateurs de performance sur un écran numérique.",
    ar: "مؤشرات أداء على شاشة رقمية.",
  },
  {
    src: "/editorial/writing-desk.jpg",
    fr: "Plume et écriture sur une page de notes.",
    ar: "قلم يدوّن أفكارًا على صفحة.",
  },
  {
    src: "/editorial/learning-journal.jpg",
    fr: "Carnet ouvert pour préparer un parcours de formation.",
    ar: "مفكرة مفتوحة للتخطيط لمسار تدريبي.",
  },
];

export default function ServicesPage() {
  const { lang, ar } = useLanguage();

  const content = {
    fr: {
      eyebrow: "EL FAYED CONSEILS · PARIS",
      title: "Votre ambition. Notre expertise.",
      subtitle: "Des solutions concrètes pour faire avancer vos projets.",
      heading: "Nos domaines d'expertise",
      intro: "Un accompagnement sur mesure, de la stratégie à l'action.",
      contact: "Parlons de votre projet",
      discover: "Explorer nos expertises",
      imageAlt: "Tableau de bord numérique sur un ordinateur portable.",
      services: [
        ["01", "Gestion administrative", "Organisation, démarches administratives et suivi de vos dossiers professionnels."],
        ["02", "Assistance comptable", "Préparation et suivi des documents comptables, facturation et organisation financière."],
        ["03", "Création d'entreprise", "Accompagnement dans les formalités de création et la structuration de votre activité."],
        ["04", "Marketing digital", "Stratégie de contenu, identité de marque et développement de votre visibilité."],
        ["05", "Communication & événements", "Création de campagnes, communication professionnelle et coordination d'événements."],
        ["06", "Formation & Academy", "Des programmes pratiques pour développer vos compétences et votre autonomie."]
      ]
    },
    ar: {
      eyebrow: "EL FAYED CONSEILS · PARIS",
      title: "طموحكم. خبرتنا.",
      subtitle: "حلول عملية تساعدكم على دفع مشروعاتكم إلى الأمام.",
      heading: "مجالات خبرتنا",
      intro: "مرافقة مصممة لاحتياجاتكم، من التخطيط إلى التنفيذ.",
      contact: "تحدثوا معنا بشأن مشروعكم",
      discover: "استكشفوا خبراتنا",
      imageAlt: "لوحة بيانات رقمية على حاسوب محمول.",
      services: [
        ["01", "الإدارة والخدمات الإدارية", "تنظيم الملفات ومتابعة الإجراءات والمعاملات الإدارية المهنية."],
        ["02", "المساعدة المحاسبية", "إعداد ومتابعة المستندات المحاسبية والفواتير وتنظيم البيانات المالية."],
        ["03", "تأسيس الشركات", "المساعدة في إجراءات تأسيس النشاط التجاري وتنظيم انطلاق المشروع."],
        ["04", "التسويق الرقمي", "استراتيجيات المحتوى وبناء الهوية التجارية وتعزيز الظهور الرقمي."],
        ["05", "التواصل والفعاليات", "إعداد الحملات والتواصل المهني وتنسيق الفعاليات."],
        ["06", "التدريب والأكاديمية", "برامج عملية لتطوير المهارات وتعزيز الاستقلالية المهنية."]
      ]
    }
  };

  const t = content[lang];

  return (
    <main className="services-page">
      <section className="services-hero mesh-gradient">
        <div className="services-hero__copy">
          <p className="editorial-eyebrow">{t.eyebrow}</p>
          <h1 className="display-font">
            {ar ? (
              <>طموحكم. <em>خبرتنا.</em></>
            ) : (
              <>Votre ambition. <em>Notre expertise.</em></>
            )}
          </h1>
          <p>{t.subtitle}</p>
          <a href="#expertises" className="button button--primary">
            {t.discover}<span aria-hidden="true">↓</span>
          </a>
        </div>
        <div className="services-hero__visual photo-hover">
          <Image
            src="/editorial/digital-strategy.jpg"
            alt={t.imageAlt}
            fill
            fetchPriority="high"
            quality={82}
            sizes="(max-width: 760px) 90vw, 46vw"
            className="services-hero__photo"
          />
          <div className="services-hero__overlay" aria-hidden="true" />
          <span className="services-hero__caption glass-panel">
            {ar ? "من الرؤية إلى الأثر" : "De la vision à l’impact"}
          </span>
          <span className="services-hero__index">EXPERTISE / 01—06</span>
        </div>
      </section>

      <section id="expertises" className="services-grid-section">
        <div className="section-heading">
          <div>
            <p className="editorial-eyebrow">EL FAYED CONSEILS</p>
            <h2 className="display-font section-heading__title">{t.heading}</h2>
          </div>
          <p className="section-heading__description">{t.intro}</p>
        </div>

        <div className="services-bento">
          {t.services.map(([number, title, description], index) => {
            const visual = serviceVisuals[index];

            return (
              <article className={`service-card service-card--${index + 1}`} key={number}>
                <div className="service-card__visual photo-hover">
                  <Image
                    src={visual.src}
                    alt={ar ? visual.ar : visual.fr}
                    fill
                    quality={78}
                    sizes="(max-width: 680px) 92vw, (max-width: 1080px) 46vw, 30vw"
                    className="service-card__image"
                  />
                  <span className="service-card__number">{number}</span>
                </div>
                <div className="service-card__content">
                  <h3 className="display-font">{title}</h3>
                  <p>{description}</p>
                  <span className="service-card__arrow" aria-hidden="true">↗</span>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="services-cta">
        <p className="editorial-eyebrow">
          {ar ? "EL FAYED CONSEILS · شريككم في الإنجاز" : "EL FAYED CONSEILS · À VOS CÔTÉS"}
        </p>
        <h2 className="display-font">
          {ar ? "الخطوة القادمة تبدأ بقرار." : "Votre prochaine étape commence ici."}
        </h2>
        <a
          href="mailto:contact@elfayedconseils.fr"
          className="button button--gold"
        >
          {t.contact}<span aria-hidden="true">↗</span>
        </a>
      </section>
    </main>
  );
}
