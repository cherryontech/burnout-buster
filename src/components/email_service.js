import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const formatMessage = (message) => `
<div>${Object.values(message).map(formatMessageItem).join('')}</div>
`;

const formatMessageItem = ({ url, title, description }) => `
<div>
  <p><strong><a href="${url}">${title}</a></strong></p>
  <p><small>${description}</small></p>
</div>
`;

export const EmailService = ({ message, setResultsStatus }) => {
  const [name, setName] = useState("Your Name");
  const [email, setEmail] = useState("your_email@example.com");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.send(
      process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID,
      {
        user_name: name,
        user_email: email,
        message: formatMessage(message)
      },
      process.env.NEXT_PUBLIC_EMAILJS_KEY
    ).then((result) => {
      setResultsStatus('success')
    }, (error) => {
      setResultsStatus('failure')
    });
  };

  return (
    <form onSubmit={sendEmail}>
      <label>Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>Email</label>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );
};
