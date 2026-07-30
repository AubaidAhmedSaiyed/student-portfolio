import { useState } from 'react';
import './Contact.css';

function Contact() {
  // useState #2: controlled form input for the contact message
  const [message, setMessage] = useState('');

  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <p>Have a question or want to collaborate? Send me a message below.</p>

      <label htmlFor="message">Your message</label>
      <textarea
        id="message"
        rows={5}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message here..."
      />
      <p className="char-count">{message.length} characters</p>

      {message && (
        <div className="preview">
          <h4>Live preview</h4>
          <p>{message}</p>
        </div>
      )}
    </section>
  );
}

export default Contact;
