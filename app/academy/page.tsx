
"use client";

import Image from "next/image";
import { useLanguage } from "../LanguageProvider";

const content = {
  fr: {
    nav: ["Accueil", "Programme", "Compétences", "Contact"],
    eyebrow: "EL FAYED ACADEMY · PARIS",
    title: "De la Compétence à la Réussite.",
    subtitle: " Vous avez les compétences. Savez-vous décrocher les contrats ?",
    intro:
      "Apprenez à penser stratégiquement, identifier des opportunités, valoriser votre expertise, négocier avec assurance et conclure des affaires.",
    button: "Découvrir le programme",
    contact: "Demander des informations",
    level: "NIVEAU 01 — LES FONDAMENTAUX",
    heading: "Les compétences qui font la différence.",
    skills: [
      ["01", "Mentalité professionnelle", "Adoptez une posture entrepreneuriale et une vision stratégique."],
      ["02", "Stratégie digitale", "Positionnez votre expertise et développez votre visibilité."],
      ["03", "Prospection & opportunités", "Identifiez les bons prospects et découvrez de nouvelles opportunités."],
      ["04", "Négociation & tarification", "Défendez votre valeur et négociez avec confiance."],
      ["05", "Conclusion des affaires", "Transformez vos échanges en relations commerciales durables."],
    ],
    transformation: "VOTRE TRANSFORMATION",
    result:
      "Passez du statut de simple prestataire à celui de professionnel capable de créer des opportunités, négocier et développer des relations commerciales rentables.",
    footer: "Conseil · Stratégie · Formation",
    question:
      "Si un client vous demande : Pourquoi vous choisir ? Saurez-vous le convaincre ?",
    answer:
      "La différence ne réside pas seulement dans vos compétences, mais dans votre capacité à démontrer leur valeur.",
    change: "Et si vous changiez votre façon de réussir ?",
    before: "AVANT",
    beforeTitle: "Vous attendez les opportunités.",
    beforeText:
      "Vous avez des compétences, mais vous ne savez pas toujours comment convaincre et décrocher des contrats.",
    after: "APRÈS",
    afterTitle: "Vous créez vos opportunités.",
    afterText:
      "Vous apprenez à valoriser votre expertise, défendre vos idées et transformer vos échanges en affaires.",
  },
  ar: {
    nav: ["الرئيسية", "البرنامج", "المهارات", "التواصل"],
    eyebrow: "EL FAYED ACADEMY · PARIS",
    title: "من المهارة إلى الاحتراف.",
    subtitle: "تمتلك المهارات، فهل تعرف كيف تحوّلها إلى عقود؟",
    intro:
      "تعلّم التفكير الاستراتيجي واكتشاف الفرص وإبراز قيمة خبرتك والتفاوض بثقة وإبرام الصفقات.",
    button: "اكتشف البرنامج",
    contact: "اطلب مزيدًا من المعلومات",
    level: "المستوى الأول — الأساسيات",
    heading: "المهارات التي تصنع الفرق.",
    skills: [
      ["01", "العقلية المهنية", "اعتمد نهجًا رياديًا ورؤية استراتيجية في عملك."],
      ["02", "الاستراتيجية الرقمية", "حدّد مكانة خبرتك وطوّر حضورك الرقمي."],
      ["03", "استكشاف العملاء والفرص", "حدّد العملاء المحتملين المناسبين واكتشف فرصًا جديدة."],
      ["04", "التفاوض وتحديد الأسعار", "أبرز قيمة خدماتك وتفاوض بثقة."],
      ["05", "إبرام الصفقات", "حوّل تواصلك إلى علاقات تجارية مستدامة."],
    ],
    transformation: "رحلتك نحو التطور المهني",
    result:
      "انتقل من مجرد تقديم خدمة إلى الاحتراف القائم على خلق الفرص والتفاوض وبناء علاقات تجارية مثمرة.",
    footer: "استشارات · استراتيجية · تدريب",
    question:
      "إذا سألك أحد العملاء: لماذا أختارك؟ فهل تستطيع إقناعه؟",
    answer:
      "لا يقتصر التميّز على امتلاك المهارات، بل يشمل القدرة على إبراز قيمتها.",
    change: "ماذا لو غيّرت طريقتك في تحقيق النجاح؟",
    before: "قبل",
    beforeTitle: "تنتظر الفرص.",
    beforeText:
      "لديك المهارات، لكنك لا تعرف دائمًا كيف تقنع العملاء وتفوز بالعقود.",
    after: "بعد",
    afterTitle: "تصنع فرصك بنفسك.",
    afterText:
      "تتعلّم إبراز خبرتك والدفاع عن أفكارك وتحويل تواصلك إلى فرص عمل.",
  },
};

export default function AcademyPage() {
  const { lang, ar: isArabic } = useLanguage();
  const t = content[lang];

  return (
    <main
      lang={lang}
      dir={isArabic ? "rtl" : "ltr"}
      className="academy-page min-h-screen"
    >
    

      <section className="academy-hero">
        <div className="academy-hero__copy">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#FFB86B]">
            {t.eyebrow}
          </p>

          <h1 className="display-font sigma-reveal academy-hero__title">
            {t.title}
          </h1>

          <h2 className="academy-hero__subtitle">
            {t.subtitle}
          </h2>

          <div className="mx-auto my-9 h-px w-28 bg-[#C7A572]" />

          <p className="academy-hero__intro">
            {t.intro}
          </p>

          <div className="academy-question glass-panel">
            <p className="text-xl font-bold text-white">{t.question}</p>
            <p className="mt-3 text-sm leading-7 text-[#FFF4E8]">{t.answer}</p>
          </div>

          <div className="hero-actions academy-hero__actions">
            <a
              href="#programme"
              className="button button--gold"
            >
              {t.button}<span aria-hidden="true">↓</span>
            </a>
            <a
              href="mailto:contact@elfayedconseils.fr"
              className="button button--light-outline"
            >
              {t.contact}
            </a>
          </div>
        </div>
        <div className="academy-hero__visual photo-hover">
          <Image
            src="/editorial/writing-desk.jpg"
            alt={
              isArabic
                ? "قلم يدون أفكارًا على ورقة، في بداية مسار جديد."
                : "Un stylo sur une page de notes, au début d’un nouveau parcours."
            }
            fill
            fetchPriority="high"
            quality={82}
            sizes="(max-width: 760px) 90vw, 42vw"
            className="academy-hero__photo"
          />
          <div className="academy-hero__image-wash" aria-hidden="true" />
          <span className="academy-hero__visual-label glass-panel">
            {isArabic ? "المستوى الأول · الأساسيات" : "NIVEAU 01 · LES FONDAMENTAUX"}
          </span>
          <span className="academy-hero__seal" aria-hidden="true">EA</span>
        </div>
      </section>

     {/* AVANT / APRÈS */}
<section className="academy-transformation bg-[#FFF4E8] px-6 py-20">
  <div className="mx-auto max-w-5xl">
    <p className="text-center text-sm font-bold uppercase tracking-widest text-[#751F3B]">
      EL FAYED ACADEMY
    </p>

    <h2 className="mt-4 text-center text-4xl font-bold text-[#243B53]">
      {t.change}
    </h2>

    <div className="mt-12 grid gap-6 md:grid-cols-2">
      <div className="sigma-before rounded-3xl border border-[#751F3B]/20 bg-white p-8 shadow-lg transition-all duration-500 hover:-translate-y-2">
        <span className="text-sm font-bold text-[#751F3B]">
          {t.before}
        </span>
        <h3 className="mt-4 text-2xl font-bold text-[#243B53]">
          {t.beforeTitle}
        </h3>
        <p className="mt-4 text-[#666B74]">
          {t.beforeText}
        </p>
      </div>

      <div className="sigma-after rounded-3xl bg-[#751F3B] p-8 text-white shadow-xl transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02]">
        <span className="text-sm font-bold text-[#FFB86B]">
          {t.after}
        </span>
        <h3 className="mt-4 text-2xl font-bold">
          {t.afterTitle}
        </h3>
        <p className="mt-4 text-[#FFF4E8]">
          {t.afterText}
        </p>
      </div>
    </div>
  </div>
</section>
      <section
        id="programme"
        className="academy-skills bg-white px-6 py-20 md:px-14"
      >
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold tracking-widest text-[#B18B55]">
            {t.level}
          </p>
          <h2
            id="competences"
            className="mt-5 font-serif text-4xl"
          >
            {t.heading}
          </h2>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {t.skills.map(([number, title, description]) => (
              <article
                key={number}
className="sigma-skill rounded-2xl border border-[#EEE4D8] bg-white p-7 shadow-sm"              >
                <span className="text-sm text-[#B18B55]">
                  {number}
                </span>
                <h3 className="mt-4 text-xl font-semibold">
                  {title}
                </h3>
                <p className="mt-4 leading-8 text-[#243B53]">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="academy-outro bg-[#F2E8D9] px-6 py-24 text-center">
        <p className="text-sm font-bold tracking-widest text-[#9B7846]">
          {t.transformation}
        </p>
        <p className="mx-auto mt-8 max-w-3xl font-serif text-2xl leading-relaxed md:text-4xl">
          {t.result}
        </p>
      </section>

    </main>
  );
}
