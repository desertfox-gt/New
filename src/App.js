
import React, { useState } from "react";
import "./App.css";

function App() {
  const [language, setLanguage] = useState("en");
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Form handling function
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
        console.log("Form successfully submitted");
      })
      .catch((error) => alert(error));
  };

  // ... rest of your translations object ...

  return (
    <div>
      {/* ... rest of your header and other sections ... */}
      
      <section id="contact" className="contact-section">
        <div className="contact-title">{text.contact.title}</div>
        <div className="contact-form-container">
          {/* Hidden form for Netlify form detection */}
          <form name="contact" data-netlify="true" hidden>
            <input type="text" name="name" />
            <input type="email" name="email" />
            <textarea name="message"></textarea>
          </form>
          
          {!formSubmitted ? (
            <form 
              name="contact" 
              method="POST" 
              data-netlify="true"
              onSubmit={handleSubmit}
            >
              {/* Required hidden input for Netlify */}
              <input type="hidden" name="form-name" value="contact" />
              
              <input
                type="text"
                name="name"
                placeholder={text.contact.namePlaceholder}
                required
                maxLength="64"
              />
              <input
                type="email"
                name="email"
                placeholder={text.contact.emailPlaceholder}
                required
                maxLength="64"
              />
              <textarea
                name="message"
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
      
      {/* ... rest of your footer and styles ... */}
    </div>
  );
}

export default App;

