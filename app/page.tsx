"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "./LanguageProvider";

const serviceImages = [
  {
    src: "/editorial/learning-journal.jpg",
    fr: "Carnet ouvert et notes manuscrites, symbole d’une organisation réfléchie.",
    ar: "مفكرة مفتوحة وملاحظات مكتوبة بخط اليد ترمز إلى التنظيم والتخطيط.",
  },
  {
    src: "/editorial/finance-notes.jpg",
    fr: "Documents financiers et calculatrice sur une table de travail.",
    ar: "مستندات مالية وآلة حاسبة على طاولة عمل.",
  },
  {
    src: "/editorial/digital-strategy.jpg",
    fr: "Tableau de bord numérique affiché sur un ordinateur portable.",
    ar: "لوحة بيانات رقمية معروضة على حاسوب محمول.",
  },
  {
    src: "/editorial/architecture.jpg",
    fr: "Architecture contemporaine aux lignes courbes et lumineuses.",
    ar: "هندسة معمارية معاصرة بخطوط منحنية ومضيئة.",
  },
];

export default function Home() {
  const { ar } = useLanguage();
  const services = ar
    ? [
        {
          number: "01",
          title: "الإدارة والخدمات الإدارية",
          description:
            "مرافقة منظمة لتبسيط إجراءاتكم وإحكام تنظيم أنشطتكم.",
        },
        {
          number: "02",
          title: "الإدارة والمحاسبة",
          description:
            "مساعدة في إعداد الفواتير ومتابعة الإجراءات وتجهيز مستنداتكم المحاسبية.",
        },
        {
          number: "03",
          title: "التسويق الرقمي",
          description:
            "استراتيجية المحتوى والهوية التجارية والتواصل عبر شبكات التواصل الاجتماعي.",
        },
        {
          number: "04",
          title: "الاستشارات وريادة الأعمال",
          description:
            "حلول مصممة لمساعدتكم على تنظيم مشروعاتكم وتطويرها وتعزيز قيمتها.",
        },
      ]
    : [
        {
          number: "01",
          title: "Gestion administrative",
          description:
            "Un accompagnement structuré pour simplifier vos démarches et organiser votre activité.",
        },
        {
          number: "02",
          title: "Gestion & comptabilité",
          description:
            "Assistance à la facturation, au suivi administratif et à la préparation de vos documents comptables.",
        },
        {
          number: "03",
          title: "Marketing digital",
          description:
            "Stratégie de contenu, identité de marque et communication sur les réseaux sociaux.",
        },
        {
          number: "04",
          title: "Conseil & entrepreneuriat",
          description:
            "Des solutions adaptées pour structurer, développer et valoriser votre projet.",
        },
      ];

  return (
    <main className="home-page">
      <section id="accueil" className="home-hero mesh-gradient">
        <div className="home-hero__copy">
          <p className="editorial-eyebrow">
            {ar
              ? "استشارات · استراتيجية · تميّز"
              : "Conseil · Stratégie · Excellence"}
          </p>
          <h1 className="display-font home-hero__title">
            {ar ? (
              <>
                لنمنح نجاحكم
                <br />
                <em>بُعدًا جديدًا.</em>
              </>
            ) : (
              <>
                Donnons une nouvelle dimension
                <br />
                <em>à votre réussite.</em>
              </>
            )}
          </h1>
          <span className="editorial-rule" aria-hidden="true" />
          <p className="home-hero__intro">
            {ar
              ? "نقدم خدمات الدعم الإداري وإدارة الأعمال والتسويق الرقمي وتطوير المهارات، من خلال حلول مخصصة تساعدكم على تحقيق طموحاتكم."
              : "Accompagnement administratif, gestion d’entreprise, marketing digital et développement de vos compétences. Une approche personnalisée au service de vos ambitions."}
          </p>
          <div className="hero-actions">
            <a href="#services" className="button button--primary">
              {ar ? "اكتشفوا خدماتنا" : "Découvrir nos expertises"}
              <span aria-hidden="true">↗</span>
            </a>
            <a href="#contact" className="button button--quiet">
              {ar ? "تحدثوا عن مشروعكم" : "Parlons de votre projet"}
            </a>
          </div>
          <div className="home-hero__signature">
            <span className="signature-mark" aria-hidden="true">EF</span>
            <span>
              {ar ? "خبرة تصنع الفرق" : "L’exigence du conseil, autrement"}
            </span>
          </div>
        </div>

        <div className="home-hero__artwork">
          <div className="hero-photo photo-hover">
            <Image
              src="/editorial/learning-journal.jpg"
              alt={
                ar
                  ? "يد تدوّن أفكارًا في مفكرة مفتوحة على طاولة خشبية."
                  : "Une main prend des notes dans un carnet ouvert sur une table en bois."
              }
              fill
              fetchPriority="high"
              quality={82}
              sizes="(max-width: 760px) 90vw, 46vw"
              className="hero-photo__image"
            />
            <div className="hero-photo__wash" aria-hidden="true" />
            <span className="hero-photo__caption">
              {ar ? "رؤية أوضح. خطوات واثقة." : "Une vision claire. Des gestes justes."}
            </span>
          </div>
          <div className="hero-orbit hero-orbit--one" aria-hidden="true" />
          <div className="hero-orbit hero-orbit--two" aria-hidden="true" />
          <svg
            className="hero-geometry"
            viewBox="0 0 220 220"
            fill="none"
            aria-hidden="true"
          >
            <circle cx="110" cy="110" r="82" stroke="currentColor" />
            <circle cx="110" cy="110" r="58" stroke="currentColor" strokeDasharray="2 7" />
            <path d="M110 8v204M8 110h204M38 38l144 144M182 38 38 182" stroke="currentColor" />
            <path d="M110 53 167 110l-57 57-57-57 57-57Z" fill="currentColor" fillOpacity=".08" />
          </svg>
          <div className="hero-floating-note glass-panel">
            <span className="hero-floating-note__index">01 / 04</span>
            <span>{ar ? "استراتيجية مصممة لكم" : "Une stratégie à votre mesure"}</span>
          </div>
          <span className="hero-side-note">
            {ar ? "باريس · منذ الفكرة الأولى" : "PARIS · DE L’IDÉE AU DÉPLOIEMENT"}
          </span>
        </div>
      </section>

      <section id="services" className="services-editorial">
        <div className="section-heading">
          <div>
            <p className="editorial-eyebrow">
              {ar ? "خبراتنا" : "Notre savoir-faire"}
            </p>
            <h2 className="display-font section-heading__title">
              {ar ? (
                <>خبراتنا، <em>في خدمة طموحكم.</em></>
              ) : (
                <>Nos expertises, <em>au service de vos ambitions.</em></>
              )}
            </h2>
          </div>
          <span className="section-heading__aside">
            EL FAYED CONSEILS <span>—</span> 01—04
          </span>
        </div>

        <div className="service-bento">
          {services.map((service, index) => {
            const image = serviceImages[index];

            return (
              <article
                key={service.number}
                className={`service-tile service-tile--${index + 1} photo-hover`}
              >
                <div className="service-tile__image">
                  <Image
                    src={image.src}
                    alt={ar ? image.ar : image.fr}
                    fill
                    quality={78}
                    sizes="(max-width: 760px) 92vw, (max-width: 1100px) 46vw, 34vw"
                    className="service-tile__photo"
                  />
                </div>
                <div className="service-tile__body">
                  <span className="service-tile__number">{service.number}</span>
                  <h3 className="display-font">{service.title}</h3>
                  <p>{service.description}</p>
                  <span className="service-tile__arrow" aria-hidden="true">↗</span>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section id="academy" className="academy-preview">
        <div className="academy-preview__image photo-hover">
          <Image
            src="/editorial/writing-desk.jpg"
            alt={
              ar
                ? "قلم يلامس ورقة تدوّن عليها أفكار وخطط."
                : "Pointe d’un stylo sur une page de notes et de réflexion."
            }
            fill
            quality={80}
            sizes="(max-width: 760px) 90vw, 44vw"
            className="academy-preview__photo"
          />
          <span className="academy-preview__image-label">EL FAYED ACADEMY</span>
        </div>
        <div className="academy-preview__copy">
          <p className="editorial-eyebrow">
            <span className="eyebrow-dot" />
            EL FAYED ACADEMY
          </p>
          <h2 className="display-font">
            {ar ? (
              <>تعلّموا. تطوّروا. <em>وحققوا النجاح.</em></>
            ) : (
              <>Apprenez. Évoluez. <em>Réussissez.</em></>
            )}
          </h2>
          <p>
            {ar
              ? "ورشات ودورات عملية في الإدارة وريادة الأعمال والتسويق الرقمي لتنمية إمكاناتكم."
              : "Ateliers et formations pratiques en gestion, entrepreneuriat et marketing digital pour développer votre potentiel."}
          </p>
          <Link href="/academy" className="text-link">
            {ar ? "اكتشفوا البرنامج" : "Découvrir le programme"}
            <span aria-hidden="true">↗</span>
          </Link>
          <span className="academy-preview__index">02 <i>—</i> ACADEMY</span>
        </div>
      </section>
    </main>
  );
}
