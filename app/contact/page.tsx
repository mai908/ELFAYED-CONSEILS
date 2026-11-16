
"use client";

import Image from "next/image";
import { useLanguage } from "../LanguageProvider";

export default function ContactPage() {
  const { lang, ar } = useLanguage();

  const t = {
    fr: {
      home: "Accueil",
      about: "À propos",
      services: "Services",
      academy: "Academy",
      title: "Parlons de votre projet.",
      subtitle: "Chaque réussite commence par une conversation.",
      heading: "Contactez notre équipe",
      description:
        "Expliquez-nous vos besoins. Nous serons ravis de vous accompagner.",
      name: "Nom complet",
      namePlaceholder: "Saisissez votre nom complet",
      email: "Adresse e-mail",
      emailPlaceholder: "vous@exemple.fr",
      service: "Service souhaité",
      choose: "Choisissez un service",
      message: "Votre message",
      messagePlaceholder: "Décrivez votre besoin ou votre projet",
      send: "Envoyer votre demande",
      note: "Votre messagerie s'ouvrira pour envoyer la demande.",
      required: "Veuillez renseigner ce champ.",
      invalidEmail: "Veuillez saisir une adresse e-mail valide.",
      subject: "Demande de contact",
      nameLabel: "Nom",
      emailLabel: "E-mail",
      serviceLabel: "Service",
      messageLabel: "Message",
      options: [
        "Gestion administrative",
        "Assistance comptable",
        "Création d'entreprise",
        "Marketing digital",
        "Communication & événements",
        "Formation & Academy",
      ],
    },
    ar: {
      home: "الرئيسية",
      about: "من نحن",
      services: "خدماتنا",
      academy: "الأكاديمية",
      title: "لنتحدث عن مشروعكم.",
      subtitle: "كل نجاح يبدأ بحوار مثمر.",
      heading: "تواصل مع فريقنا",
      description:
        "أخبرونا باحتياجاتكم، وسيسعد فريقنا بمساعدتكم.",
      name: "الاسم بالكامل",
      namePlaceholder: "أدخلوا الاسم الكامل",
      email: "البريد الإلكتروني",
      emailPlaceholder: "vous@exemple.fr",
      service: "الخدمة المطلوبة",
      choose: "يرجى اختيار خدمة",
      message: "رسالتكم",
      messagePlaceholder: "أخبرونا عن احتياجاتكم أو مشروعكم",
      send: "إرسال طلبكم",
      note: "سيُفتح تطبيق البريد لإرسال طلبكم.",
      required: "يرجى ملء هذا الحقل.",
      invalidEmail: "يرجى إدخال عنوان بريد إلكتروني صالح.",
      subject: "طلب تواصل",
      nameLabel: "الاسم",
      emailLabel: "البريد الإلكتروني",
      serviceLabel: "الخدمة",
      messageLabel: "الرسالة",
      options: [
        "الإدارة والخدمات الإدارية",
        "المساعدة المحاسبية",
        "تأسيس الشركات",
        "التسويق الرقمي",
        "الاتصال وتنظيم الفعاليات",
        "التدريب والأكاديمية",
      ],
    },
  }[lang];

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const subject = encodeURIComponent(
      `${t.subject} - ${data.get("service")}`
    );

    const body = encodeURIComponent(
      `${t.nameLabel}: ${data.get("name")}\n` +
      `${t.emailLabel}: ${data.get("email")}\n` +
      `${t.serviceLabel}: ${data.get("service")}\n\n` +
      `${t.messageLabel}:\n${data.get("message")}`
    );

    window.location.href =
      `mailto:contact@elfayedconseils.fr?subject=${subject}&body=${body}`;
  }

  function setValidationMessage(
    event: React.FormEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const field = event.currentTarget;
    field.setCustomValidity(
      field.validity.typeMismatch ? t.invalidEmail : t.required
    );
  }

  return (
    <main
      lang={lang}
      dir={ar ? "rtl" : "ltr"}
      className="contact-page"
    >
      <section className="contact-hero mesh-gradient">
        <div className="contact-hero__copy">
          <p className="editorial-eyebrow">EL FAYED CONSEILS · PARIS</p>
          <h1 className="display-font">
            {ar ? (
              <>لنتحدث عن <em>مشروعكم.</em></>
            ) : (
              <>Parlons de <em>votre projet.</em></>
            )}
          </h1>
          <p>{t.subtitle}</p>
          <a href="#formulaire" className="button button--primary">
            {ar ? "أخبرونا عن احتياجاتكم" : "Présentez-nous votre projet"}
            <span aria-hidden="true">↓</span>
          </a>
        </div>
        <div className="contact-hero__visual photo-hover">
          <Image
            src="/editorial/finance-notes.jpg"
            alt={
              ar
                ? "ملاحظات ومستندات مرتبة على طاولة عمل."
                : "Notes et documents organisés sur une table de travail."
            }
            fill
            fetchPriority="high"
            quality={80}
            sizes="(max-width: 760px) 90vw, 40vw"
            className="contact-hero__photo"
          />
          <div className="contact-hero__overlay" aria-hidden="true" />
          <span className="contact-hero__caption glass-panel">
            {ar ? "نحن هنا لنستمع إليكم." : "Une première conversation, simplement."}
          </span>
        </div>
      </section>

      <section id="formulaire" className="contact-content">
        <div className="contact-content__intro">
          <p className="editorial-eyebrow">
            {ar ? "تواصل مباشر" : "Entrons en contact"}
          </p>
          <h2 className="display-font">{t.heading}</h2>
          <p className="contact-content__description">{t.description}</p>
          <div className="contact-detail">
            <span className="contact-detail__index">01</span>
            <a href="mailto:contact@elfayedconseils.fr">
              contact@elfayedconseils.fr
            </a>
          </div>
          <p className="contact-content__note">
            {ar
              ? "أرسلوا لنا تفاصيل مشروعكم، وسنعود إليكم في أقرب وقت."
              : "Quelques lignes suffisent pour amorcer la conversation."}
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="contact-form"
        >
          <div>
            <label htmlFor="name"             className="contact-form__label">
              {t.name}
            </label>
            <input
              id="name"
              name="name"
              required
              placeholder={t.namePlaceholder}
              onInvalid={setValidationMessage}
              onInput={(event) => event.currentTarget.setCustomValidity("")}
              className="contact-form__field"
            />
          </div>

          <div>
            <label htmlFor="email"             className="contact-form__label">
              {t.email}
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder={t.emailPlaceholder}
              onInvalid={setValidationMessage}
              onInput={(event) => event.currentTarget.setCustomValidity("")}
              className="contact-form__field"
            />
          </div>

          <div>
            <label htmlFor="service"             className="contact-form__label">
              {t.service}
            </label>
            <select
              id="service"
              name="service"
              required
              defaultValue=""
              onInvalid={setValidationMessage}
              onInput={(event) => event.currentTarget.setCustomValidity("")}
              className="contact-form__field"
            >
              <option value="" disabled>
                {t.choose}
              </option>
              {t.options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="message"             className="contact-form__label">
              {t.message}
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              placeholder={t.messagePlaceholder}
              onInvalid={setValidationMessage}
              onInput={(event) => event.currentTarget.setCustomValidity("")}
              className="contact-form__field contact-form__textarea"
            />
          </div>

          <button
            type="submit"
            className="button button--primary contact-form__submit"
          >
            {t.send}
          </button>

          <p className="contact-form__footnote">
            {t.note}
          </p>
        </form>
      </section>
    </main>
  );
}
