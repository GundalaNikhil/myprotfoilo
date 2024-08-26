import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import {
  ModalOverlay,
  ModalContainer,
  Title,
  Form,
  StyledTextField,
  SubmitButton,
  CloseButton,
} from "./ModalStyles/ContactMeModalStyles";

const ContactMeModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    window.location.href = `mailto:xyz@gmail.com?subject=Contact from ${formData.name}&body=${formData.message}`;
  };

  return (
    <AnimatePresence>
      <ModalOverlay
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <ModalContainer
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
        >
          <Title
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Get In Touch
          </Title>
          <Form
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <StyledTextField
              fullWidth
              variant="outlined"
              name="name"
              label="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <StyledTextField
              fullWidth
              variant="outlined"
              name="email"
              label="Your Email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <StyledTextField
              fullWidth
              variant="outlined"
              name="message"
              label="Your Message"
              multiline
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
            />
            <SubmitButton
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Reach Me
            </SubmitButton>
          </Form>
          <CloseButton
            onClick={onClose}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            &times;
          </CloseButton>
        </ModalContainer>
      </ModalOverlay>
    </AnimatePresence>
  );
};

export default ContactMeModal;
