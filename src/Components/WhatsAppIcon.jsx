// src/Components/WhatsAppIcon.jsx
import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import './WhatsAppIcon.css'

const WhatsAppIcon = () => {
  return (
    <a
      href="https://wa.me/919345532741"
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp className="whatsapp-icon" />
    </a>
  )
}

export default WhatsAppIcon
