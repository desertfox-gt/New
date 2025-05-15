
import React, { useState } from "react";
import "./App.css";

// Reusable Button Component
const Button = ({ onClick, children, className }) => (
  <button className={`button \${className}`} onClick={onClick}>
    {children}
  </button>
);

// Subpage for Google Form Contact
function ContactPage({ language, text, onBack }) {
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
          width="640"
          height="1641"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="Contact Form"
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
}

// Subpage for Service Comparison
function ServiceComparisonPage({ language, text, onBack }) {
  // Service comparison data per language
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
            <th>{language === "en" ? " " : " "}</th>
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
                <td key={j}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function App() {
  const [language, setLanguage] = useState("en");
  const [showContactForm, setShowContactForm] = useState(false);
  const [showComparisonPage, setShowComparisonPage] = useState(false);

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
        highlight: "Welcome to class reimagined",
        cta: "Get Started",
      },
      features: {
        title: "Our Offerings",
        standard: {
          title: "Standard",
          price: "HKD120/hr",
          desc: "Recurring weekly or biweekly cleaning for perfect comfort and consistency.",
        },
        oneTime: {
          title: "One-time",
          price: "HKD130/hr",
          desc: "Single session, no commitment. Flexible, fast, instantly available for when you need it most.",
        },
        deepClean: {
          title: "Deep Clean",
          price: "HKD170/hr",
          desc: "Intensive top-to-bottom treatment for a spotless and rejuvenated environment.",
        },
      },
      testimonials: {
        title: "Testimonials",
        testimonial1: {
          quote: "Super easy to book and our house feels amazing! Service is truly a cut above.",
          author: "Jamie L.",
        },
        testimonial2: {
          quote:
            "The deep clean left my space sparkling—I've never seen it so radiant!",
          author: "Sean W.",
        },
        testimonial3: {
          quote: "Professional, punctual, and beautiful results. Highly recommended.",
          author: "Grace K.",
        },
      },
      contact: {
        title: "Book or Contact Us",
        orEmail: "Or email us at",
        button: "Contact Us",
      },
      footer: {
        copyright: "Enchanté • Classy, Dark Purple SPA",
      },
      languageSelector: {
        en: "English",
        zh: "繁體中文",
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
        highlight: "歡迎體驗重新定義的品質",
        cta: "立即開始",
      },
      features: {
        title: "我們的服務",
        standard: {
          title: "標準服務",
          price: "HKD120/小時",
          desc: "每週或每兩週定期清潔，為您提供完美的舒適感和一致性。",
        },
        oneTime: {
          title: "單次服務",
          price: "HKD130/小時",
          desc: "單次服務，無需承諾。靈活、快速，隨時可用，為您解決燃眉之急。",
        },
        deepClean: {
          title: "深度清潔",
          price: "HKD170/小時",
          desc: "從上到下的密集處理，打造無瑕且煥然一新的環境。",
        },
      },
      testimonials: {
        title: "客戶評價",
        testimonial1: {
          quote: "預約超級簡單，我們的家感覺棒極了！服務真的非常出色。",
          author: "Jamie L.",
        },
        testimonial2: {
          quote: "深度清潔讓我的空間煥然一新—我從未見過它如此明亮！",
          author: "Sean W.",
        },
        testimonial3: {
          quote: "專業、準時，而且結果美不勝收。強烈推薦。",
          author: "Grace K.",
        },
      },
      contact: {
        title: "預約或聯絡我們",
        orEmail: "或透過電郵聯絡我們：",
        button: "聯絡我們",
      },
      footer: {
        copyright: "Enchanté • 高雅，深紫色水療中心",
      },
      languageSelector: {
        en: "English",
        zh: "繁體中文",
      },
    },
  };

  const text = translations[language];

  // Subpage routing
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

  return (
    <div>
      <header>
        <div className="nav-content">
          <div className="logo">Enchanté</div>
          <nav>
            <a href="#features">{text.nav.features}</a>
            <a href="#testimonials">{text.nav.testimonials}</a>
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
      <main>
        <section className="hero-section">
          <div className="hero-content">
            <h1 className="hero-headline">{text.hero.headline}</h1>
            <p className="hero-desc">{text.hero.desc}</p>
            <div className="hero-highlight">{text.hero.highlight}</div>
            <Button className="cta-btn">{text.hero.cta}</Button>
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
                style={{ cursor: "pointer" }}
                tabIndex={0}
                aria-label={`\${text.features[type].title} card. Click for comparison.`}
                onKeyPress={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    setShowComparisonPage(true);
                  }
                }}
                role="button"
              >
                <h3 className="feature-title">{text.features[type].title}</h3>
                <p className="feature-price">{text.features[type].price}</p>
                <p className="feature-desc">{text.features[type].desc}</p>
              </div>
            ))}
          </div>
        </section>
        <section id="testimonials" className="testimonials-section">
          <h2 className="testimonials-title">{text.testimonials.title}</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="star-rating">★★★★★</div>
              <p className="testimonial-quote">
                {text.testimonials.testimonial1.quote}
              </p>
              <span className="testimonial-author">
                {text.testimonials.testimonial1.author}
              </span>
            </div>
            <div className="testimonial-card">
              <div className="star-rating">★★★★★</div>
              <p className="testimonial-quote">
                {text.testimonials.testimonial2.quote}
              </p>
              <span className="testimonial-author">
                {text.testimonials.testimonial2.author}
              </span>
            </div>
            <div className="testimonial-card">
              <div className="star-rating">★★★★★</div>
              <p className="testimonial-quote">
                {text.testimonials.testimonial3.quote}
              </p>
              <span className="testimonial-author">
                {text.testimonials.testimonial3.author}
              </span>
            </div>
          </div>
        </section>
        <section id="contact" className="contact-section">
          <h2 className="contact-title">{text.contact.title}</h2>
          <div className="contact-content">
            <Button className="contact-button" onClick={() => setShowContactForm(true)}>
              {text.contact.button}
            </Button>
            <p className="email-info">
              {text.contact.orEmail}{" "}
              <a href="mailto:studyib21@gmail.com">studyib21@gmail.com</a>
            </p>
          </div>
        </section>
      </main>
      <footer>
        <p>
          &copy; {new Date().getFullYear()} {text.footer.copyright}
        </p>
      </footer>
    </div>
  );
}

export default App;

