import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import emailjs from "@emailjs/browser"; // 1. Import EmailJS
import BlurText from "../../Blurtext/BlurText";
import "./Contact.css";

const Contact = () => {
  const cardRef = useRef(null);
  const inputsRef = useRef([]);
  const successRef = useRef(null);
  const formRef = useRef(); // 2. Ref for the form element

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  /* ---------- ENTRANCE ANIMATION ---------- */
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.fromTo(
      cardRef.current,
      { opacity: 0, y: 80, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 0.8 }
    ).fromTo(
      inputsRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.12 },
      "-=0.3"
    );
  }, []);

  /* ---------- SUBMIT TO GMAIL ---------- */
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // 3. Replace these strings with your EmailJS IDs
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then((result) => {
          console.log("Email Sent!", result.text);
          setSubmitted(true);
          setLoading(false);
          
          // GSAP Success Animation
          gsap.fromTo(
            successRef.current,
            { scale: 0.6, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)" }
          );
      }, (error) => {
          console.log("Failed to send...", error.text);
          alert("Something went wrong. Please try again.");
          setLoading(false);
      });
  };

  return (
    <div className="contact-wrapper d-flex align-items-center justify-content-center">
      <div ref={cardRef} className="contact-card container">
        <div className="row g-5 align-items-center">
          
          <div className="col-md-6">
            <h6 className="text-white mb-3">Fill the form</h6>

            {!submitted ? (
              // 4. Added ref and "name" attributes to inputs
              <form ref={formRef} onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col mb-3 floating-group" ref={el => (inputsRef.current[0] = el)}>
                    <input type="text" name="first_name" required />
                    <label>First Name</label>
                  </div>

                  <div className="col mb-3 floating-group" ref={el => (inputsRef.current[1] = el)}>
                    <input type="text" name="last_name" required />
                    <label>Last Name</label>
                  </div>
                </div>

                <div className="mb-3 floating-group" ref={el => (inputsRef.current[2] = el)}>
                  <input type="email" name="user_email" required />
                  <label>Email Address</label>
                </div>

                <div className="mb-4 floating-group" ref={el => (inputsRef.current[3] = el)}>
                  <textarea rows="4" name="message" required />
                  <label>Message</label>
                </div>

                <button className="btn submit-btn px-4" disabled={loading}>
                  {loading ? "Sending..." : "Submit"}
                </button>
              </form>
            ) : (
              <div ref={successRef} className="success-box">
                <div className="checkmark">✓</div>
                <p>Message Sent Successfully</p>
              </div>
            )}
          </div>

          <div className="col-md-6 text-white">
            <BlurText text="Let's build your next big idea." className="contact-title" animateBy="words" direction="bottom" delay={150} />
            <div className="contact-text mt-3">
               <BlurText 
                text="I am currently open to new opportunities and full-time roles. If you’re looking for a developer who blends technical skill with creative problem-solving, I’d love to hear from you" 
                animateBy="words" 
                direction="bottom" 
                delay={150} 
              /> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;