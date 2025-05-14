import React, { useState } from 'react';
import './App.css';

function App() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div>
      <header>
        <div className="nav-content">
          <div className="logo">Enchanté</div>
          <nav>
            <a href="#features">Features</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main className="main-container">
        <section className="hero-section">
          <div className="hero-headline">Class & Comfort, Elevated</div>
          <div className="hero-desc">
            Experience a new standard of elegance <br /> with our premium service. 
            <span style={{color: 'var(--accent)', fontWeight: '500'}}>
              Welcome to class reimagined
            </span>.
          </div>
          <button className="cta-btn" onClick={() => document.getElementById('contact').scrollIntoView()}>
            Get Started
          </button>
        </section>

        <section id="features" className="features-section">
          <div className="features-title">Our Offerings</div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-title">Standard</div>
              <div className="feature-price">HKD24/hr</div>
              <div className="feature-desc">
                Recurring weekly or biweekly cleaning for perfect comfort and consistency.
              </div>
            </div>
            <div className="feature-card">
              <div className="feature-title">One-time</div>
              <div className="feature-price">HKD30/hr</div>
              <div className="feature-desc">
                Single session, no commitment. Flexible, fast, instantly available for when you need it most.
              </div>
            </div>
            <div className="feature-card">
              <div className="feature-title">Deep Clean</div>
              <div className="feature-price">HKD40/hr</div>
              <div className="feature-desc">
                Intensive top-to-bottom treatment for a spotless and rejuvenated environment.
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="testimonials-section">
          <div className="testimonials-title">Testimonials</div>
          <div className="testimonial-list">
            <div className="testimonial-card">
              <div className="star-rating">★★★★★</div>
              <div className="testimonial-quote">
                Super easy to book and our house feels amazing! Service is truly a cut above.
              </div>
              <div className="testimonial-author">Jamie L.</div>
            </div>
            <div className="testimonial-card">
              <div className="star-rating">★★★★★</div>
              <div className="testimonial-quote">
                The deep clean left my space sparkling—I've never seen it so radiant!
              </div>
              <div className="testimonial-author">Sean W.</div>
            </div>
            <div className="testimonial-card">
              <div className="star-rating">★★★★★</div>
              <div className="testimonial-quote">
                Professional, punctual, and beautiful results. Highly recommended.
              </div>
              <div className="testimonial-author">Grace K.</div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="contact-title">Book or Contact Us</div>
          <div className="contact-form-container">
            {!sent ? (
              <form className="contact-form" onSubmit={handleSubmit}>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  required 
                  maxLength="64" 
                />
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  required 
                  maxLength="64" 
                />
                <textarea 
                  placeholder="Your Message" 
                  rows="4" 
                  required 
                  maxLength="480"
                />
                <button type="submit">Send Message</button>
              </form>
            ) : (
              <div className="contact-thankyou">
                Thank you! We'll be in touch soon.
              </div>
            )}
            <div className="contact-info">
              Or email us at <a href="mailto:info@enchante.com">info@enchante.com</a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        &copy; {new Date().getFullYear()} Enchanté • Classy, Dark Purple SPA
      </footer>
    </div>
  );
}

export default App;
