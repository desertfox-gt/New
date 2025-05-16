import React, { useState, useEffect } from "react";
import "./App.css";

const Button = ({ onClick, children, className, style }) => (
  <button
    className={`button \${className ? className : ""}`}
    onClick={onClick}
    style={style}
  >
    {children}
  </button>
);

function ContactPage({ language, text, onBack }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="contact-page">
      <header className="contact-page-header">
        <Button onClick={onBack} className="back-button">
          ← {language === "en" ? "Back" : "返回"}
        </Button>
        <h1>{text.contact.title}</h1>
      </header>
      <div className="contact-form-container">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSdOEDuvc2NnzsgTAWqwH3sAOw2dtOzxf_6G1GIqqQaXsY-bxQ/viewform?embedded=true"
          width="100%"
          height="1641"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="Contact Form"
          style={{ maxWidth: "100%", border: 'none' }}
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
}

function ServiceComparisonPage({ language, text, onBack }) {
  const rows = [
    {
      label: language === "en" ? "Price" : "價格",
      values: [
        text.features.standard.price,
        text.features.oneTime.price,
        text.features.deepClean.price,
      ],
    },
    {
      label: language === "en" ? "Description" : "描述",
      values: [
        text.features.standard.desc,
        text.features.oneTime.desc,
        text.features.deepClean.desc,
      ],
    },
  ];

  return (
    <div className="comparison-page">
      <header className="comparison-page-header">
        <Button onClick={onBack} className="back-button">
          ← {language === "en" ? "Back" : "返回"}
        </Button>
        <h1>{language === "en" ? "Service Comparison" : "服務比較"}</h1>
      </header>
      <table className="comparison-table">
        <thead>
          <tr>
            <th></th>
            <th>{text.features.standard.title}</th>
            <th>{text.features.oneTime.title}</th>
            <th>{text.features.deepClean.title}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              <td>
                <strong>{row.label}</strong>
              </td>
              {row.values.map((cell, j) => (
                <td key={j} dangerouslySetInnerHTML={{ __html: cell }}></td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function BirthdayPopup({ onClose, language, onBookNow, text }) {
  // Generate confetti only once and cache it
  const confettiPieces = Array.from({ length: 80 }, (_, i) => ({
    left: `\\${Math.random() * 97 + 1}%`,
    delay: `\\${Math.random() * 2}s`,
    duration: `\\${Math.random() * 2 + 2.6}s`,
    backgroundColor:
      i % 5 === 0
        ? "#f1faee"
        : i % 2 === 0
        ? "#a8dadc"
        : "#e63946",
    transform: `scale(\\${(Math.random() * 0.6 + 0.7).toFixed(
      2
    )}) rotate(\\${Math.floor(Math.random() * 360)}deg)`,
    opacity: `\\${Math.random() * 0.6 + 0.4}`,
  }));

  return (
    <div className="birthday-popup">
      <div className="confetti" aria-hidden="true">
        {confettiPieces.map((style, i) => (
          <div
            key={i}
            className="confetti-piece"
            style={{
              left: style.left,
              backgroundColor: style.backgroundColor,
              animationDelay: style.delay,
              animationDuration: style.duration,
              transform: style.transform,
              opacity: style.opacity,
            }}
          />
        ))}
      </div>
      <div className="popup-content">
        <button className="close-button" onClick={onClose} aria-label="Close">
          &times;
        </button>
        <h2>{text.birthdayPopup.title}</h2>
        <p>{text.birthdayPopup.message}</p>
        <Button
          className="book-now-btn"
          onClick={onBookNow}
        >
          {language === "en" ? "Book Now!" : "立刻預約!"}
        </Button>
      </div>
    </div>
  );
}

function App() {
  const [language, setLanguage] = useState(() =>
    (navigator.language || navigator.userLanguage).startsWith("zh") ? "zh" : "en"
  );
  const [showContactForm, setShowContactForm] = useState(false);
  const [showComparisonPage, setShowComparisonPage] = useState(false);
  const [showBirthdayPopup, setShowBirthdayPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowBirthdayPopup(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const translations = {
    en: {
      nav: {
        features: "Features",
        testimonials: "Testimonials",
        contact: "Contact",
      },
      hero: {
        headline: "Class & Comfort, Elevated",
        desc: "Experience a new standard of elegance with our premium service.",
        cta: "Get Started",
      },
      features: {
        title: "Our Offerings",
        standard: {
          title: "Standard",
          price: "HKD100/hr <strike>HKD120/hr</strike>",
          desc:
            "Recurring weekly or biweekly cleaning for perfect comfort and consistency.",
        },
        oneTime: {
          title: "One-time",
          price: "HKD110/hr <strike>HKD130/hr</strike>",
          desc:
            "Single session, no commitment. Flexible, fast, instantly available for when you need it most.",
        },
        deepClean: {
          title: "Deep Clean",
          price: "+HKD30/hr",
          desc:
            "Intensive top-to-bottom treatment for a spotless and rejuvenated environment.",
        },
      },
      whyChooseUs: {
        title: "Why Choose Us?",
        reason1: {
          title: "Upfront Pricing",
          desc: "What you see is what you pay. No hidden fees, ever.",
        },
        reason2: {
          title: "Quality Guarantee*",
          desc:
            "Your satisfaction is our priority. Only pay if you're completely satisfied.*",
          asteriskNote: "*Terms and conditions apply.",
        },
        reason3: {
          title: "Referral Discounts",
          desc: "Get up to 25% off for referring friends and family!",
        },
      },
      contact: {
        title: "Book or Contact Us",
        orEmail: "Or email us at",
        button: "Contact Us",
      },
      footer: {
        copyright: "Enchanté by The KOC Group",
      },
      languageSelector: {
        en: "English",
        zh: "繁體中文",
      },
      birthdayPopup: {
        title: "Discount just for you!",
        message:
          "First time customers may enjoy a HKD20 Discount Coupon on us! Quickly, limited to first 10 customers only!",
      },
    },
    zh: {
      nav: {
        features: "服務",
        testimonials: "評價",
        contact: "聯絡我們",
      },
      hero: {
        headline: "品質與舒適，臻於完美",
        desc: "體驗我們高端服務帶來的全新優雅標準。",
        cta: "立即開始",
      },
      features: {
        title: "我們的服務",
        standard: {
          title: "標準服務",
          price: "HKD100/小時 <strike>HKD120/小時</strike>",
          desc: "每週或每兩週定期清潔，為您提供完美的舒適感和一致性。",
        },
        oneTime: {
          title: "單次服務",
          price: "HKD110/小時 <strike>HKD130/小時</strike>",
          desc: "單次服務，無需承諾。靈活、快速，隨時可用，為您解決燃眉之急。",
        },
        deepClean: {
          title: "深度清潔",
          price: "+HKD30/小時",
          desc: "從上到下的密集處理，打造無瑕且煥然一新的環境。",
        },
      },
      whyChooseUs: {
        title: "為什麼選擇我們？",
        reason1: {
          title: "前期定價",
          desc: "你看到的就是你支付的。絕無隱藏費用。",
        },
        reason2: {
          title: "質量保證*",
          desc: "您的滿意是我們的首要任務。只有在您完全滿意的情況下才付款。*",
          asteriskNote: "*適用條款及細則。",
        },
        reason3: {
          title: "推薦折扣",
          desc: "推薦朋友和家人，即可享受高達 25% 的折扣！",
        },
      },
      contact: {
        title: "預約或聯絡我們",
        orEmail: "或透過電郵聯絡我們：",
        button: "聯絡我們",
      },
      footer: {
        copyright: "Enchanté by The KOC Group",
      },
      languageSelector: {
        en: "English",
        zh: "繁體中文",
      },
      birthdayPopup: {
        title: "為您而設的優惠！",
        message:
          "新客戶可專享HKD20 的優惠帣! 還等什麼？只限於頭十名顧客!",
      },
    },
  };

  const text = translations[language];

  if (showContactForm)
    return (
      <ContactPage
        language={language}
        text={text}
        onBack={() => setShowContactForm(false)}
      />
    );

  if (showComparisonPage)
    return (
      <ServiceComparisonPage
        language={language}
        text={text}
        onBack={() => setShowComparisonPage(false)}
      />
    );

  function handleBookNow() {
    setShowBirthdayPopup(false);
    setShowContactForm(true);
  }

  return (
    <div className="app">
      <header className="app-header">
        <div className="nav-content">
          <div className="logo">Enchanté</div>
          <nav>
            <a href="#features">{text.nav.features}</a>
            <a href="#why-choose-us">{text.whyChooseUs.title}</a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                setShowContactForm(true);
              }}
            >
              {text.nav.contact}
            </a>
            <div className="language-selector">
              <Button
                className={language === "en" ? "active" : ""}
                onClick={() => setLanguage("en")}
              >
                {translations.en.languageSelector.en}
              </Button>
              <Button
                className={language === "zh" ? "active" : ""}
                onClick={() => setLanguage("zh")}
              >
                {translations.en.languageSelector.zh}
              </Button>
            </div>
          </nav>
        </div>
      </header>
      <main className="app-main">
        <section className="hero-section">
          <div className="hero-content">
            <h1 className="hero-headline">{text.hero.headline}</h1>
            <p className="hero-desc">{text.hero.desc}</p>
            <Button
              className="cta-btn"
              onClick={() =>
                window.open(
                  "https://docs.google.com/forms/d/e/1FAIpQLSdOEDuvc2NnzsgTAWqwH3sAOw2dtOzxf_6G1GIqqQaXsY-bxQ/viewform",
                  "_blank"
                )
              }
            >
              {text.hero.cta}
            </Button>
          </div>
        </section>

        <section id="features" className="features-section">
          <h2>{text.features.title}</h2>
          <div className="features-grid">
            {["standard", "oneTime", "deepClean"].map((type) => (
              <div
                key={type}
                className="feature-card"
                onClick={() => setShowComparisonPage(true)}
                tabIndex={0}
                aria-label={`\${text.features[type].title} card. Click for comparison.`}
                onKeyPress={(e) => {
                  if (e.key === "Enter" || e.key === " ")
                    setShowComparisonPage(true);
                }}
                role="button"
              >
                <h3 className="feature-title">{text.features[type].title}</h3>
                <p
                  className="feature-price"
                  dangerouslySetInnerHTML={{ __html: text.features[type].price }}
                ></p>
                <p className="feature-desc">{text.features[type].desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="why-choose-us" className="why-choose-us-section">
          <h2 className="why-choose-us-title">{text.whyChooseUs.title}</h2>
          <div className="why-choose-us-grid">
            <div className="why-choose-us-card">
              <h3 className="why-choose-us-title">
                {text.whyChooseUs.reason1.title}
              </h3>
              <p className="why-choose-us-desc">
                {text.whyChooseUs.reason1.desc}
              </p>
            </div>
            <div className="why-choose-us-card">
              <h3 className="why-choose-us-title">
                {text.whyChooseUs.reason2.title}
              </h3>
              <p className="why-choose-us-desc">
                {text.whyChooseUs.reason2.desc}
              </p>
              <p className="asterisk-note">
                {text.whyChooseUs.reason2.asteriskNote}
              </p>
            </div>
            <div className="why-choose-us-card">
              <h3 className="why-choose-us-title">
                {text.whyChooseUs.reason3.title}
              </h3>
              <p className="why-choose-us-desc">
                {text.whyChooseUs.reason3.desc}
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <h2 className="contact-title">{text.contact.title}</h2>
          <div className="contact-content">
            <Button
              className="contact-button"
              onClick={() => setShowContactForm(true)}
            >
              {text.contact.button}
            </Button>
            <p className="email-info">
              {text.contact.orEmail}{" "}
              <a href="mailto:thekocgroup@gmail.com">thekocgroup@gmail.com</a>
            </p>
          </div>
        </section>
      </main>
      <footer className="app-footer">
        <p>
          &copy; {new Date().getFullYear()} {text.footer.copyright}
        </p>
      </footer>
      {showBirthdayPopup && (
        <BirthdayPopup
          onClose={() => setShowBirthdayPopup(false)}
          language={language}
          onBookNow={handleBookNow}
          text={text}
        />
      )}
    </div>
  );
}

export default App;
