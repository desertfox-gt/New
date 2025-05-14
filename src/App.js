
import React, { useState } from "react";
import "./App.css";

function App() {
  const [sent, setSent] = useState(false);
  const [language, setLanguage] = useState("en"); // "en" for English, "zh" for Traditional Chinese

  const translations = {
    en: {
      // Navigation
      nav: {
        features: "Features",
        testimonials: "Testimonials",
        contact: "Contact"
      },
      // Hero section
      hero: {
        headline: "Class & Comfort, Elevated",
        desc: "Experience a new standard of elegance with our premium service.",
        highlight: "Welcome to class reimagined",
        cta: "Get Started"
      },
      // Features section
      features: {
        title: "Our Offerings",
        standard: {
          title: "Standard",
          price: "HKD120/hr",
          desc: "Recurring weekly or biweekly cleaning for perfect comfort and consistency."
        },
        oneTime: {
          title: "One-time",
          price: "HKD130/hr",
          desc: "Single session, no commitment. Flexible, fast, instantly available for when you need it most."
        },
        deepClean: {
          title: "Deep Clean",
          price: "HKD170/hr",
          desc: "Intensive top-to-bottom treatment for a spotless and rejuvenated environment."
        }
      },
      // Testimonials section
      testimonials: {
        title: "Testimonials",
        testimonial1: {
          quote: "Super easy to book and our house feels amazing! Service is truly a cut above.",
          author: "Jamie L."
        },
        testimonial2: {
          quote: "The deep clean left my space sparkling—I've never seen it so radiant!",
          author: "Sean W."
        },
        testimonial3: {
          quote: "Professional, punctual, and beautiful results. Highly recommended.",
          author: "Grace K."
        }
      },
      // Contact section
      contact: {
        title: "Book or Contact Us",
        namePlaceholder: "Your Name",
        emailPlaceholder: "Your Email",
        messagePlaceholder: "Your Message",
        submit: "Send Message",
        thankYou: "Thank you! We'll be in touch soon.",
        orEmail: "Or email us at"
      },
      // Footer
      footer: {
        copyright: "Enchanté • Classy, Dark Purple SPA"
      },
      // Language selection
      languageSelector: {
        en: "English",
        zh: "繁體中文"
      }
    },
    zh: {
      // Navigation
      nav: {
        features: "服務",
        testimonials: "評價",
        contact: "聯絡我們"
      },
      // Hero section
      hero: {
        headline: "品質與舒適，臻於完美",
        desc: "體驗我們高端服務帶來的全新優雅標準。",
        highlight: "歡迎體驗重新定義的品質",
        cta: "立即開始"
      },
      // Features section
      features: {
        title: "我們的服務",
        standard: {
          title: "標準服務",
          price: "HKD120/小時",
          desc: "每週或每兩週定期清潔，為您提供完美的舒適感和一致性。"
        },
        oneTime: {
          title: "單次服務",
          price: "HKD130/小時",
          desc: "單次服務，無需承諾。靈活、快速，隨時可用，為您解決燃眉之急。"
        },
        deepClean: {
          title: "深度清潔",
          price: "HKD170/小時",
          desc: "從上到下的密集處理，打造無瑕且煥然一新的環境。"
        }
      },
      // Testimonials section
      testimonials: {
        title: "客戶評價",
        testimonial1: {
          quote: "預約超級簡單，我們的家感覺棒極了！服務真的非常出色。",
          author: "Jamie L."
        },
        testimonial2: {
          quote: "深度清潔讓我的空間煥然一新—我從未見過它如此明亮！",
          author: "Sean W."
        },
        testimonial3: {
          quote: "專業、準時，而且結果美不勝收。強烈推薦。",
          author: "Grace K."
        }
      },
      // Contact section
      contact: {
        title: "預約或聯絡我們",
        namePlaceholder: "您的姓名",
        emailPlaceholder: "您的電郵",
        messagePlaceholder: "您的訊息",
        submit: "發送訊息",
        thankYou: "謝謝！我們將盡快與您聯絡。",
        orEmail: "或透過電郵聯絡我們："
      },
      // Footer
      footer: {
        copyright: "Enchanté • 高雅，深紫色水療中心"
      },
      // Language selection
      languageSelector: {
        en: "English",
        zh: "繁體中文"
      }
    }
  };

  const text = translations[language];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  const toggleLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <div className="App">
      <header>
        <div className="logo">Enchanté</div>
        <nav>
          <div className="nav-links">
            <a href="#features">{text.nav.features}</a>
            <a href="#testimonials">{text.nav.testimonials}</a>
            <a href="#contact">{text.nav.contact}</a>
          </div>
          <div className="language-selector">
            <button 
              className={language === "en" ? "active" : ""} 
              onClick={() => toggleLanguage("en")}
            >
              {translations.en.languageSelector.en}
            </button>
            <button 
              className={language === "zh" ? "active" : ""} 
              onClick={() => toggleLanguage("zh")}
            >
              {translations.en.languageSelector.zh}
            </button>
          </div>
        </nav>
      </header>
      <main>
        <section className="hero-section">
          <div className="hero-content">
            <h1>{text.hero.headline}</h1>
            <p>{text.hero.desc}</p>
            <div className="hero-highlight">{text.hero.highlight}</div>
            <button className="cta-button">{text.hero.cta}</button>
          </div>
          <div className="hero-image">
            <img src="https://placehold.co/600x400" alt="Elegant spa interior" />
          </div>
        </section>
        <section id="features" className="features-section">
          <div className="features-title">{text.features.title}</div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">✓</div>
              <div className="feature-title">{text.features.standard.title}</div>
              <div className="feature-price">{text.features.standard.price}</div>
              <div className="feature-desc">{text.features.standard.desc}</div>
            </div>
            <div className="feature-card highlight">
              <div className="feature-icon">★</div>
              <div className="feature-title">{text.features.oneTime.title}</div>
              <div className="feature-price">{text.features.oneTime.price}</div>
              <div className="feature-desc">{text.features.oneTime.desc}</div>
            </div>
            <div className="feature-card">
              <div className="feature-icon">♦</div>
              <div className="feature-title">{text.features.deepClean.title}</div>
              <div className="feature-price">{text.features.deepClean.price}</div>
              <div className="feature-desc">{text.features.deepClean.desc}</div>
            </div>
          </div>
        </section>
        <section id="testimonials" className="testimonials-section">
          <div className="testimonials-title">{text.testimonials.title}</div>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="star-rating">★★★★★</div>
              <div className="testimonial-quote">{text.testimonials.testimonial1.quote}</div>
              <div className="testimonial-author">{text.testimonials.testimonial1.author}</div>
            </div>
            <div className="testimonial-card">
              <div className="star-rating">★★★★★</div>
              <div className="testimonial-quote">{text.testimonials.testimonial2.quote}</div>
              <div className="testimonial-author">{text.testimonials.testimonial2.author}</div>
            </div>
            <div className="testimonial-card">
              <div className="star-rating">★★★★★</div>
              <div className="testimonial-quote">{text.testimonials.testimonial3.quote}</div>
              <div className="testimonial-author">{text.testimonials.testimonial3.author}</div>
            </div>
          </div>
        </section>
        <section id="contact" className="contact-section">
          <div className="contact-title">{text.contact.title}</div>
          <div className="contact-form-container">
            {!sent ? (
              <form className="contact-form" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder={text.contact.namePlaceholder}
                  required
                  maxLength="64"
                />
                <input
                  type="email"
                  placeholder={text.contact.emailPlaceholder}
                  required
                  maxLength="64"
                />
                <textarea
                  placeholder={text.contact.messagePlaceholder}
                  rows="4"
                  required
                  maxLength="480"
                />
                <button type="submit">{text.contact.submit}</button>
              </form>
            ) : (
              <div className="contact-thankyou">{text.contact.thankYou}</div>
            )}
            <div className="contact-info">
              {text.contact.orEmail}{" "}
              <a href="mailto:studyib21@gmail.com">studyib21@gmail.com</a>
            </div>
          </div>
        </section>
      </main>
      <footer>
        &copy; {new Date().getFullYear()} {text.footer.copyright}
      </footer>

      {/* Add CSS for language selector buttons */}
      <style jsx>{`
        .language-selector {
          display: flex;
          gap: 10px;
          margin-left: 15px;
        }
        
        .language-selector button {
          background: none;
          border: 1px solid var(--accent);
          color: var(--accent);
          padding: 5px 10px;
          border-radius: 4px;
          cursor: pointer;
          font-size: 14px;
          transition: all 0.3s ease;
        }
        
        .language-selector button.active {
          background: var(--accent);
          color: white;
        }
        
        .language-selector button:hover {
          opacity: 0.8;
        }
        
        @media (max-width: 768px) {
          .language-selector {
            margin-top: 10px;
            margin-left: 0;
          }
        }
      `}</style>
    </div>
  );
}

export default App;

