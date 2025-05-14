
import React, { useState } from "react";
import "./App.css";

function App() {
  const [language, setLanguage] = useState("en");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const translations = {
    en: {
      nav: {
        features: "Features",
        testimonials: "Testimonials",
        contact: "Contact"
      },
      hero: {
        headline: "Class & Comfort, Elevated",
        desc: "Experience a new standard of elegance with our premium service.",
        highlight: "Welcome to class reimagined",
        cta: "Get Started"
      },
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
      contact: {
        title: "Book or Contact Us",
        namePlaceholder: "Your Name",
        emailPlaceholder: "Your Email",
        messagePlaceholder: "Your Message",
        submit: "Send Message",
        thankYou: "Thank you! We'll be in touch soon.",
        orEmail: "Or email us at"
      },
      footer: {
        copyright: "Enchanté • Classy, Dark Purple SPA"
      },
      languageSelector: {
        en: "English",
        zh: "繁體中文"
      }
    },
    zh: {
      nav: {
        features: "服務",
        testimonials: "評價",
        contact: "聯絡我們"
      },
      hero: {
        headline: "品質與舒適，臻於完美",
        desc: "體驗我們高端服務帶來的全新優雅標準。",
        highlight: "歡迎體驗重新定義的品質",
        cta: "立即開始"
      },
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
      contact: {
        title: "預約或聯絡我們",
        namePlaceholder: "您的姓名",
        emailPlaceholder: "您的電郵",
        messagePlaceholder: "您的訊息",
        submit: "發送訊息",
        thankYou: "謝謝！我們將盡快與您聯絡。",
        orEmail: "或透過電郵聯絡我們："
      },
      footer: {
        copyright: "Enchanté • 高雅，深紫色水療中心"
      },
      languageSelector: {
        en: "English",
        zh: "繁體中文"
      }
    }
  };

  const text = translations[language];

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString()
    })
      .then(() => {
        setFormSubmitted(true);
      })
      .catch((error) => alert(error));
  };

  return (
    <div>
      <header>
        <div className="nav-content">
          <div className="logo">Enchanté</div>
          <nav>
            <a href="#features">{text.nav.features}</a>
            <a href="#testimonials">{text.nav.testimonials}</a>
            <a href="#contact">{text.nav.contact}</a>
            <div className="language-selector">
              <button 
                className={language === "en" ? "active" : ""} 
                onClick={() => setLanguage("en")}
              >
                {translations.en.languageSelector.en}
              </button>
              <button 
                className={language === "zh" ? "active" : ""} 
                onClick={() => setLanguage("zh")}
              >
                {translations.en.languageSelector.zh}
              </button>
            </div>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero-section">
          <div className="hero-content">
            <h1>{text.hero.headline}</h1>
            <p>{text.hero.desc}</p>
            <div className="hero-highlight">{text.hero.highlight}</div>
            <button className="cta-button">{text.hero.cta}</button>
          </div>
        </section>

        <section id="features" className="features-section">
          <h2>{text.features.title}</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>{text.features.standard.title}</h3>
              <p className="price">{text.features.standard.price}</p>
              <p>{text.features.standard.desc}</p>
            </div>
            <div className="feature-card">
              <h3>{text.features.oneTime.title}</h3>
              <p className="price">{text.features.oneTime.price}</p>
              <p>{text.features.oneTime.desc}</p>
            </div>
            <div className="feature-card">
              <h3>{text.features.deepClean.title}</h3>
              <p className="price">{text.features.deepClean.price}</p>
              <p>{text.features.deepClean.desc}</p>
            </div>
          </div>
        </section>

        <section id="testimonials" className="testimonials-section">
          <h2>{text.testimonials.title}</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="star-rating">★★★★★</div>
              <p>{text.testimonials.testimonial1.quote}</p>
              <cite>{text.testimonials.testimonial1.author}</cite>
            </div>
            <div className="testimonial-card">
              <div className="star-rating">★★★★★</div>
              <p>{text.testimonials.testimonial2.quote}</p>
              <cite>{text.testimonials.testimonial2.author}</cite>
            </div>
            <div className="testimonial-card">
              <div className="star-rating">★★★★★</div>
              <p>{text.testimonials.testimonial3.quote}</p>
              <cite>{text.testimonials.testimonial3.author}</cite>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <h2>{text.contact.title}</h2>
          <div className="contact-form-container">
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="form-name" value="contact" />
              <input
                type="text"
                name="name"
                placeholder={text.contact.namePlaceholder}
                required
              />
              <input
                type="email"
                name="email"
                placeholder={text.contact.emailPlaceholder}
                required
              />
              <textarea
                name="message"
                placeholder={text.contact.messagePlaceholder}
                required
              ></textarea>
              <button type="submit">{text.contact.submit}</button>
            </form>
            {formSubmitted && (
              <div className="thank-you-message">
                {text.contact.thankYou}
              </div>
            )}
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} {text.footer.copyright}</p>
      </footer>
    </div>
  );
}

export default App;

