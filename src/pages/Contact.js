import React from "react";

const Contact = () => {
  return (
    <main>
      <h1>Contact</h1>
      <form>
        <label>Name</label>
        <input type="text" name="name" required />
        <label>Email</label>
        <input type="email" name="email" required />
        <label>Message</label>
        <textarea name="message" required></textarea>
        <button type="submit">Send</button>
      </form>
    </main>
  );
};

export default Contact;
