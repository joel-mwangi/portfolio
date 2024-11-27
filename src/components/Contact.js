import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import { FaSpinner } from "react-icons/fa"; // Spinner icon for loading state

// Styled Components
const Section = styled.section`
  background-color:lightgreen;
  padding: 50px 20px;
  text-align: center;
  font-family: Arial, sans-serif;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: white;
  margin-bottom: 20px;
`;

const Info = styled.p`
  font-size: 1.1rem;
  color: #555;
  margin: 10px 0;
`;

const Form = styled.form`
  background-color: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
  margin: 30px auto;
  transition: all 0.3s ease;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #28a745;
  }

  &.invalid {
    border-color: red;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 12px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  outline: none;
  resize: vertical;
  min-height: 150px;

  &:focus {
    border-color: #28a745;
  }

  &.invalid {
    border-color: red;
  }
`;

const Button = styled.button`
  background-color: #28a745;
  color: white;
  padding: 12px 25px;
  font-size: 1.1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #218838;
    transform: scale(1.05);
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const SuccessMessage = styled.p`
  color: green;
  font-size: 1.2rem;
  margin-top: 20px;
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 1.2rem;
  margin-top: 20px;
`;

const LoadingSpinner = styled(FaSpinner)`
  font-size: 2rem;
  color: #fff;
  animation: spin 1s infinite linear;
`;

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const [invalidFields, setInvalidFields] = useState({
    name: false,
    email: false,
    message: false,
  });

  const validateForm = () => {
    const nameValid = form.current["user_name"].value.trim() !== "";
    const emailValid = /\S+@\S+\.\S+/.test(form.current["user_email"].value);
    const messageValid = form.current["message"].value.trim() !== "";

    setInvalidFields({
      name: !nameValid,
      email: !emailValid,
      message: !messageValid,
    });

    return nameValid && emailValid && messageValid;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setError("Please fill in all fields correctly.");
      return;
    }

    setLoading(true);
    setSuccess(null);
    setError(null);

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_USER_ID"
      )
      .then(
        (result) => {
          setLoading(false);
          setSuccess("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          setLoading(false);
          setError("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <Section>
      <Title>Contact Me</Title>
      <p>If you have any questions or feedback, feel free to reach out to me. I'm always happy to hear from you!</p>
      <Info>Email: <a href="mailto:joelgachihi60@gmail.com">joelgachihi60@gmail.com</a></Info>
      <Info>Phone: <a href="tel:+254798738603">+254 798 738 603</a></Info>

      <Form ref={form} onSubmit={sendEmail}>
        <Input
          type="text"
          name="user_name"
          placeholder="Your Name"
          className={invalidFields.name ? "invalid" : ""}
        />
        <Input
          type="email"
          name="user_email"
          placeholder="Your Email"
          className={invalidFields.email ? "invalid" : ""}
        />
        <Textarea
          name="message"
          placeholder="Your Message"
          className={invalidFields.message ? "invalid" : ""}
        ></Textarea>

        <Button type="submit" disabled={loading}>
          {loading ? <LoadingSpinner /> : "Send Message"}
        </Button>
      </Form>

      {success && <SuccessMessage>{success}</SuccessMessage>}
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Section>
  );
};

export default Contact;
