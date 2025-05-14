
import React, { useState } from "react";
import "./App.css";

function App() {
  const [sent, setSent] = useState(false);
  const [language, setLanguage] = useState("en"); // "en" for English, "zh" for Chinese

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
        zh: "中文"
      }
    },
    zh: {
      // Navigation
      nav: {
        features: "服务",
        testimonials: "评价",
        contact: "联系我们"
      },
      // Hero section
      hero: {
        headline: "品质与舒适，臻于完美",
        desc: "体验我们高端服务带来的全新优雅标准。",
        highlight: "欢迎体验重新定义的品质",
        cta: "立即开始"
      },
      // Features section
      features: {
        title: "我们的服务",
        standard: {
          title: "标准服务",
          price: "HKD120/小时",
          desc: "每周或每两周定期清洁，为您提供完美的舒适感和一致性。"
        },
        oneTime: {
          title: "单次服务",
          price: "HKD130/小时",
          desc: "单次服务，无需长期承诺。灵活、快速，随时可用，满足您的即时需求。"
        },
        deepClean: {
          title: "深度清洁",
          price: "HKD170/小时",
          desc: "从上到下的全面深度处理，让您的环境焕然一新，一尘不染。"
        }
      },
      // Testimonials section
      testimonials: {
        title: "客户评价",
        testimonial1: {
          quote: "预约非常简单，我们的家感觉棒极了！服务真的高人一等。",
          author: "Jamie L."
        },
        testimonial2: {
          quote: "深度清洁让我的空间焕然一新—我从未见过它如此光彩照人！",
          author: "Sean W."
        },
        testimonial3: {
          quote: "专业、准时，效果美观。强烈推荐。",
          author: "Grace K."
        }
      },
      // Contact section
      contact: {
        title: "预约或联系我们",
        namePlaceholder: "您的姓名",
        emailPlaceholder: "您的电子邮箱",
        messagePlaceholder: "您的留言",
        submit: "发送信息",
        thankYou: "谢谢！我们会尽快与您联系。",
        orEmail: "或发送电子邮件至"
      },
      // Footer
      footer: {
        copyright: "Enchanté • 典雅高端服务"
      },
      // Language selection
      languageSelector: {
        en: "English",
        zh: "中文"
      }
    }
  };

  const text = translations[language];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  const toggleLanguage = (selectedLanguage) => {
    setLanguage(selectedLanguage);
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
                onClick={() => toggleLanguage("en")} 
                className={language === "en" ? "active" : ""}
              >
                {translations.en.languageSelector.en}
              </button>
              <button 
                onClick={() => toggleLanguage("zh")} 
                className={language === "zh" ? "active" : ""}
              >
                {translations.en.languageSelector.zh}
              </button>
            </div>
          </nav>
        </div>
      </header>
      <main className="main-container">
        <section className="hero-section">
          <div className="hero-headline">{text.hero.headline}</div>
          <div className="hero-desc">
            {text.hero.desc}{" "}
            <span
              style={{
                color: "var(--accent)",
                fontWeight: "500",
              }}
            >
              {text.hero.highlight}
            </span>.
          </div>
          <button
            className="cta-btn"
            onClick={() =>
              document.getElementById("contact").scrollIntoView()
            }
          >
            {text.hero.cta}
          </button>
        </section>
        <section id="features" className="features-section">
          <div className="features-title">{text.features.title}</div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-title">{text.features.standard.title}</div>
              <div className="feature-price">{text.features.standard.price}</div>
              <div className="feature-desc">{text.features.standard.desc}</div>
            </div>
            <div className="feature-card">
              <div className="feature-title">{text.features.oneTime.title}</div>
              <div className="feature-price">{text.features.oneTime.price}</div>
              <div className="feature-desc">{text.features.oneTime.desc}</div>
            </div>
            <div className="feature-card">
              <div className="feature-title">{text.features.deepClean.title}</div>
              <div className="feature-price">{text.features.deepClean.price}</div>
              <div className="feature-desc">{text.features.deepClean.desc}</div>
            </div>
          </div>
        </section>
        <section id="testimonials" className="testimonials-section">
          <div className="testimonials-title">{text.testimonials.title}</div>
          <div className="testimonial-list">
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

