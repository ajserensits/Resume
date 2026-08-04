import React from "react";
import "./Contact.css"; // Import the external CSS

const Contact: React.FC = () => {
    return (
        <div className="contact-container">
          {/* Header */}
          <header className="contact-header">
            <h1>Contact Me</h1>
            <p>
              Have any questions or want to get in touch? 
              Reach me at <strong>ajserensits@gmail.com</strong>.  I typically respond quickly!
            </p>
          </header>
        </div>
      );
};

export default Contact;
