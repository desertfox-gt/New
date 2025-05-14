import React, { useState } from "react";

// Icons as React components for simplicity
const Sparkles = () => <span role="img" aria-label="sparkles">✨</span>;
const Mail = () => <span role="img" aria-label="mail">📧</span>;
const Home = () => <span role="img" aria-label="home">🏠</span>;

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  };

  return sent ? (
    <div style={{ color: "#0097a7", padding: 12 }}>
      Thank you for reaching out! We'll get back to you soon.
    </div>
  ) : (
    <form onSubmit={handleSubmit} autoComplete="off">
      <input
        name="name"
        placeholder="Your Name"
        onChange={handleChange}
        value={form.name}
        required
        style={{ display: "block", width: "100%", marginBottom: 8, padding: 8, borderRadius: 6, border: "1px solid #b2ebf2" }}
      />
      <input
        name="email"
        placeholder="Your Email"
        type="email"
        onChange={handleChange}
        value={form.email}
        required
        style={{ display: "block", width: "100%", marginBottom: 8, padding: 8, borderRadius: 6, border: "1px solid #b2ebf2" }}
      />
      <textarea
        name="message"
        placeholder="Message"
        onChange={handleChange}
        value={form.message}
        rows={4}
        required
        style={{ display: "block", width: "100%", marginBottom: 8, padding: 8, borderRadius: 6, border: "1px solid #b2ebf2" }}
      />
      <button
        type="submit"
        style={{ background: "#0097a7", color: "#fff", border: "none", borderRadius: 6, padding: "10px 18px", cursor: "pointer", fontWeight: "bold" }}
      >
        Send
      </button>
    </form>
  );
}

const pricing = [
  { name: "Standard", price: "\$24/hr", description: "Recurring Weekly or Biweekly", highlight: false },
  { name: "One-time", price: "\$30/hr", description: "Just one session, no commitment", highlight: true },
  { name: "Deep Clean", price: "\$40/hr", description: "Intensive top-to-bottom clean", highlight: false }
];

const testimonials = [
  { text: "Super easy to book and our house feels amazing!", name: "Jamie L." },
  { text: "Sparklean is affordable and our cleaner is always on time.", name: "Sam D." },
  { text: "We trust Sparklean with our apartment—and they never disappoint!", name: "Patricia M." }
];

function App() {
  return (
    <div style={{ fontFamily: "sans-serif", background: "#e0f7fa", minHeight: "100vh" }}>
      {/* Header */}
      <header style={{ background: "#0097a7", color: "#fff", padding: "2em 0", textAlign: "center" }}>
        <div style={{ fontSize: "2.5em", fontWeight: "bold" }}>
          <Sparkles /> Sparklean
        </div>
        <p style={{ fontSize: "1.2em", marginTop: 8 }}>
          Your local, friendly hourly cleaning service. Stress less, sparkle more!
        </p>
      </header>

      {/* Why Choose Us */}
      <section style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 24,
          marginTop: 40,
          marginBottom: 40
        }}>
        <div style={{ background: "#fff", borderRadius: 12, padding: 18, width: 270, marginBottom: 16, textAlign: "center", boxShadow: "0 0 10px #b2ebf2" }}>
          <Home /><br />
          <h3 style={{ margin: 0, fontWeight: "bold" }}>Trusted & Vetted</h3>
          <p>Our cleaners are background checked, trained, and reviewed after every job.</p>
        </div>
        <div style={{ background: "#fff", borderRadius: 12, padding: 18, width: 270, marginBottom: 16, textAlign: "center", boxShadow: "0 0 10px #b2ebf2" }}>
          <Sparkles /><br />
          <h3 style={{ margin: 0, fontWeight: "bold" }}>Quality Yet Affordable</h3>
          <p>Trusted hourly cleaners at prices you can afford—peace of mind, and a clean home.</p>
        </div>
        <div style={{ background: "#fff", borderRadius: 12, padding: 18, width: 270, marginBottom: 16, textAlign: "center", boxShadow: "0 0 10px #b2ebf2" }}>
          <Mail /><br />
          <h3 style={{ margin: 0, fontWeight: "bold" }}>Book Instantly</h3>
          <p>Quick booking, fast confirmation.<br />Minimum just 2 hours per session.</p>
        </div>
      </section>

      {/* Pricing */}
      <section style={{ maxWidth: 800, margin: "0 auto", padding: "0 1em" }}>
        <h2 style={{ fontSize: "2em", fontWeight: "bold", textAlign: "center", color: "#0097a7" }}>Our Packages</h2>
        <div style={{ display: "flex", gap: 24, flexWrap: "wrap", justifyContent: "center", marginTop: 16 }}>
          {pricing.map((plan) => (
            <div key={plan.name}
              style={{
                border: plan.highlight ? "3px solid #0097a7" : "2px solid #b2ebf2",
                borderRadius: 18,
                background: "#fff",
                padding: 28,
                width: 304,
                marginBottom: 18,
                boxShadow: plan.highlight ? "0 0 20px #b2ebf2" : "0 0 4px #b2ebf2"
              }}
            >
              <h3 style={{ fontWeight: "bold", color: plan.highlight ? "#0097a7" : "#111" }}>{plan.name}</h3>
              <div style={{ fontSize: "2em", fontWeight: "bold", color: "#00bcd4" }}>{plan.price}</div>
              <p>{plan.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ maxWidth: 700, margin: "40px auto", padding: 0 }}>
        <h2 style={{ textAlign: "center", fontSize: "1.6em", color: "#0097a7" }}>What People Say</h2>
        <div style={{ display: "flex", gap: 18, flexWrap: "wrap", justifyContent: "center", marginTop: 14 }}>
          {testimonials.map((t, i) => (
            <div key={i} style={{ background: "#fff", minHeight: 110, borderRadius: 16, padding: 20, boxShadow: "0 0 8px #b2ebf2", flex: '1 1 220px', maxWidth: 230, marginBottom: 16 }}>
              <div style={{ color: "#00bcd4", marginBottom: 12, fontSize: "2.2em" }}>&quot;</div>
              <blockquote style={{ fontStyle: "italic" }}>{t.text}</blockquote>
              <div style={{ fontWeight: "bold", color: "#0097a7", marginTop: 12 }}>{t.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={{ background: "#00bcd4", padding: "3em 0", color: "#fff" }}>
        <h2 style={{ textAlign: "center", fontSize: "2em", fontWeight: "bold" }}>Book a Cleaning or Ask a Question</h2>
        <div style={{ background: "#fff", borderRadius: 18, margin: "2em auto 0 auto", color: "#111", boxShadow: "0 0 16px #0097a7", maxWidth: 410, padding: 32 }}>
          <ContactForm />
          <div style={{ color: "#888", fontSize: 14, textAlign: "center", marginTop: 10 }}>
            Or email us at <a href="mailto:info@sparklean.com" style={{ color: "#00bcd4", textDecoration: "underline" }}>info@sparklean.com</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: "#e0f7fa", color: "#0097a7", textAlign: "center", padding: "1.5em 0", fontSize: 14 }}>
        &copy; {new Date().getFullYear()} Sparklean. Powered by your future cleaning crew!
      </footer>
    </div>
  );
}

export default App;
